import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CitasService } from '../../servicios/citas.service';
import { Cita } from '../../modelos/citas';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-citas',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './lista-citas.component.html',
  styleUrls: ['./lista-citas.component.scss']
})
export class ListaCitasComponent implements OnInit {
  citas: Cita[] = [];
  displayedColumns: string[] = ['id', 'paciente', 'especialista', 'fechaHora', 'acciones'];
  cargandoCitas = true;

  constructor(
    private citasService: CitasService,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.citasService.obtenerCitas().subscribe(
      (citas) => {
        this.citas = citas;
        this.cargandoCitas = false;
        this.changeDetectorRef.detectChanges(); // Actualizar la vista
      },
      (error) => {
        console.error('Error al obtener citas:', error);
        this.cargandoCitas = false;
      }
    );
  }

  editarCita(citaId: number) {
    this.router.navigate(['/editar-cita', citaId]);
  }
}
