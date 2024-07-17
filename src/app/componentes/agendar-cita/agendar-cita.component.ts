import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatOptionModule } from '@angular/material/core';
import { PacientesService } from '../../servicios/pacientes.service';
import { EspecialistasService } from '../../servicios/especialistas.service';
import { Paciente } from '../../modelos/paciente';
import { Especialista } from '../../modelos/especialista';
import { Cita } from '../../modelos/citas';
import { CitasService } from '../../servicios/citas.service';
import * as _moment from 'moment';
import { default as _rollupMoment, Moment } from 'moment';
import { Router, RouterLink } from '@angular/router';
import { MatCardContent, MatCardModule, MatCardTitle } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-agendar-cita',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule, 
    MatCardTitle, 
    MatCardContent, 
    MatFormFieldModule, 
    MatSelectModule, 
    MatOptionModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    FormsModule,
    ReactiveFormsModule,
    MatToolbar,
    MatIcon,
    RouterLink
  ],
  templateUrl: './agendar-cita.component.html',
  styleUrl: './agendar-cita.component.scss',
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class AgendarCitaComponent implements OnInit {
  citaForm: FormGroup;
  pacientes: Paciente[] = [];
  especialistas: Especialista[] = [];
  cargandoPacientes = true;
  cargandoEspecialistas = true;

  constructor(
    private fb: FormBuilder,
    private pacientesService: PacientesService,
    private especialistasService: EspecialistasService,
    private citasService: CitasService,
    private router: Router
  ) {
    this.citaForm = this.fb.group({
      pacienteId: ['', Validators.required],
      especialistaId: ['', Validators.required],
      fechaHora: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.pacientesService.obtenerPacientes().subscribe({
      next: (pacientes) => {
        this.pacientes = pacientes;
        this.cargandoPacientes = false;
      },
      error: (error) => {
        console.error('Error al obtener pacientes:', error);
        this.cargandoPacientes = false;
      }
    });

    this.especialistasService.obtenerEspecialistas().subscribe({
      next: (especialistas) => {
        this.especialistas = especialistas;
        this.cargandoEspecialistas = false;
      },
      error: (error) => {
        console.error('Error al obtener especialistas:', error);
        this.cargandoEspecialistas = false;
      }
    });
  }

  agendarCita() {
    if (this.citaForm.valid) {
      const nuevaCita: Cita = {
        ...this.citaForm.value,
        fechaHora: moment(this.citaForm.value.fechaHora).format('YYYY-MM-DD HH:mm:ss') 
      };

      this.citasService.crearCita(nuevaCita).subscribe(
        response => {
          console.log('Cita agendada:', response);
          this.router.navigate(['/']);
        },
        error => {
          console.error('Error al agendar cita:', error);
        }
      );
    }
  }
}
