import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistroPacienteComponent } from './componentes/registro-paciente/registro-paciente.component';
import { LandingPageComponent } from "./componentes/landing-page/landing-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegistroPacienteComponent, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'clinica-audiologica';
}
