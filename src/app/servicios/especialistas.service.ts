import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Especialista } from '../modelos/especialista';

@Injectable({
  providedIn: 'root'
})
export class EspecialistasService {
  private apiUrl = 'http://localhost:3000/especialistas';

  constructor(private http: HttpClient) {}

  obtenerEspecialistas(): Observable<Especialista[]> {
    return this.http.get<Especialista[]>(this.apiUrl);
  }

  obtenerEspecialista(id: number): Observable<Especialista> {
    return this.http.get<Especialista>(`${this.apiUrl}/${id}`);
  }

  crearEspecialista(especialista: Especialista): Observable<Especialista> {
    return this.http.post<Especialista>(this.apiUrl, especialista);
  }

  actualizarEspecialista(especialista: Especialista): Observable<Especialista> {
    return this.http.put<Especialista>(`${this.apiUrl}/${especialista.id}`, especialista);
  }

  eliminarEspecialista(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  
}
