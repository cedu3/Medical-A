import { Component, OnInit } from '@angular/core';
import { EspecialistasService } from '../../servicios/especialistas.service';
import { Especialista } from '../../modelos/especialista';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-especialistas',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './lista-especialistas.component.html',
  styleUrl: './lista-especialistas.component.scss'
})
export class ListaEspecialistasComponent implements OnInit {
  especialistas: Especialista[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'especialidad', 'acciones'];

  constructor(private especialistasService: EspecialistasService, private router: Router) {}

  ngOnInit() {
    this.especialistasService.obtenerEspecialistas().subscribe(
      especialistas => this.especialistas = especialistas,
      error => console.error('Error al obtener especialistas:', error)
    );
  }

  editarEspecialista(id: number) {
    this.router.navigate(['/editar-especialistas', id]);
  }


  eliminarEspecialista(id: number) {
    this.especialistasService.eliminarEspecialista(id).subscribe(
      () => {
        this.especialistas = this.especialistas.filter(especialista => especialista.id !== id);
      },
      (error) => {
        console.error('Error al eliminar el especialista:', error);
      }
    );
  }
}
