import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cita } from '../modelos/citas';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private apiUrl = 'http://localhost:3000/citas';

  constructor(private http: HttpClient) {}

  obtenerCitas(): Observable<Cita[]> {
    return this.http.get<Cita[]>(this.apiUrl);
  }

  obtenerCita(id: number): Observable<Cita> {
    return this.http.get<Cita>(`${this.apiUrl}/${id}`);
  }

  crearCita(cita: Cita): Observable<Cita> {
    return this.http.post<Cita>(this.apiUrl, cita);
  }

  actualizarCita(cita: Cita): Observable<Cita> {
    return this.http.put<Cita>(`${this.apiUrl}/${cita.id}`, cita);
  }

  eliminarCita(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
}
