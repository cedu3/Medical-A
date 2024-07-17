import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CitasService } from '../../servicios/citas.service';
import { PacientesService } from '../../servicios/pacientes.service';
import { EspecialistasService } from '../../servicios/especialistas.service';
import { Cita } from '../../modelos/citas';
import { Paciente } from '../../modelos/paciente';
import { Especialista } from '../../modelos/especialista';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-editar-cita',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule, 
    MatButtonModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    FormsModule, 
    CommonModule
  ],
  templateUrl: './editar-cita.component.html',
  styleUrls: ['./editar-cita.component.scss']
})
export class EditarCitaComponent implements OnInit {
  cita: Cita | undefined;
  citaId: number;
  pacientes: Paciente[] = [];
  especialistas: Especialista[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private citasService: CitasService,
    private pacientesService: PacientesService,
    private especialistasService: EspecialistasService
  ) {
    this.citaId = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit() {
    this.citasService.obtenerCita(this.citaId).subscribe(
      (cita) => {
        this.cita = cita;
      },
      (error) => {
        console.error('Error al obtener la cita:', error);
      }
    );

    this.pacientesService.obtenerPacientes().subscribe(
      (pacientes) => {
        this.pacientes = pacientes;
      },
      (error) => {
        console.error('Error al obtener los pacientes:', error);
      }
    );

    this.especialistasService.obtenerEspecialistas().subscribe(
      (especialistas) => {
        this.especialistas = especialistas;
      },
      (error) => {
        console.error('Error al obtener los especialistas:', error);
      }
    );
  }

  actualizarCita() {
    if (this.cita) {
      this.citasService.actualizarCita(this.cita).subscribe(
        () => {
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Error al actualizar la cita:', error);
        }
      );
    }
  }
}
