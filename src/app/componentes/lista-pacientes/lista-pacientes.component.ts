import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../../servicios/pacientes.service';
import { Paciente } from '../../modelos/paciente';
import { MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-pacientes',
  standalone: true,
  imports: [MatTableModule, MatIcon ],
  templateUrl: './lista-pacientes.component.html',
  styleUrl: './lista-pacientes.component.scss'
})
export class ListaPacientesComponent implements OnInit {
  pacientes: Paciente[] = [];
  displayedColumns: string[] = ['dni', 'nombre', 'fechaNacimiento', 'correoElectronico', 'numeroTelefono', 'acciones'];

  constructor(private pacientesService: PacientesService, private router: Router) {}

  ngOnInit() {
    this.pacientesService.obtenerPacientes().subscribe(
      pacientes => this.pacientes = pacientes,
      error => console.error('Error al obtener pacientes:', error)
    );
  }

  editarPaciente(id: number) {
    this.router.navigate(['/editar-paciente', id]);
  }
}