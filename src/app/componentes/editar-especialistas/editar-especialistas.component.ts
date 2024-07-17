import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EspecialistasService } from '../../servicios/especialistas.service';
import { Especialista } from '../../modelos/especialista';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-especialista',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './editar-especialistas.component.html',
  styleUrls: ['./editar-especialistas.component.scss']
})
export class EditarEspecialistaComponent implements OnInit {
  especialista: Especialista | undefined;
  especialistaId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private especialistasService: EspecialistasService
  ) {
    this.especialistaId = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit() {
    this.especialistasService.obtenerEspecialista(this.especialistaId).subscribe(
      (especialista) => {
        this.especialista = especialista;
      },
      (error) => {
        console.error('Error al obtener el especialista:', error);
      }
    );
  }

  actualizarEspecialista() {
    if (this.especialista) {
      this.especialistasService.actualizarEspecialista(this.especialista).subscribe(
        () => {
          this.router.navigate(['/']); // Redirige a la lista de especialistas después de actualizar
        },
        (error) => {
          console.error('Error al actualizar el especialista:', error);
        }
      );
    }
  }
}
