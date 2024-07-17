export interface Paciente {
  id: number;
  dni: string; 
  nombre: string;
  fechaNacimiento: Date;
  correoElectronico: string;
  numeroTelefono: string;
}