import { Routes } from '@angular/router';
import { LandingPageComponent } from './componentes/landing-page/landing-page.component';
import { RegistroPacienteComponent } from './componentes/registro-paciente/registro-paciente.component'; 
import { AgendarCitaComponent } from './componentes/agendar-cita/agendar-cita.component'; 
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { EditarCitaComponent } from './componentes/editar-cita/editar-cita.component';
import { EditarPacienteComponent } from './componentes/editar-paciente/editar-paciente.component';
import { EditarEspecialistaComponent } from './componentes/editar-especialistas/editar-especialistas.component';



export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'registro', component: RegistroPacienteComponent },
    { path: 'agendar-cita', component: AgendarCitaComponent },
    { path: 'editar-cita/:id', component: EditarCitaComponent },
    { path: 'editar-paciente/:id', component: EditarPacienteComponent },
    { path: 'editar-especialistas/:id', component: EditarEspecialistaComponent },

  ];

 