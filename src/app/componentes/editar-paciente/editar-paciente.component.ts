import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacientesService } from '../../servicios/pacientes.service';
import { Paciente } from '../../modelos/paciente';
import { CommonModule } from '@angular/common';
import { MatFormField, MatFormFieldControl, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-editar-paciente',
  standalone: true,
  templateUrl: './editar-paciente.component.html',
  imports: [
    MatFormFieldModule,MatInputModule,MatButtonModule,MatDatepickerModule,MatNativeDateModule,FormsModule,CommonModule],
  styleUrls: ['./editar-paciente.component.scss']
})
export class EditarPacienteComponent implements OnInit {
  paciente: Paciente | undefined;
  pacienteId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pacientesService: PacientesService
  ) {
    this.pacienteId = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit() {
    this.pacientesService.obtenerPaciente(this.pacienteId).subscribe(
      (paciente) => {
        this.paciente = paciente;
      },
      (error) => {
        console.error('Error al obtener el paciente:', error);
      }
    );
  }

  actualizarPaciente() {
    if (this.paciente) {
      this.pacientesService.actualizarPaciente(this.paciente).subscribe(
        () => {
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Error al actualizar el paciente:', error);
        }
      );
    }
  }
}