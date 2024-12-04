import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FiltroAleatorioComponent } from "./components/filtro-aleatorio/filtro-aleatorio.component";
import { FiltroporNombreComponent } from "./components/filtropor-nombre/filtropor-nombre.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FiltroAleatorioComponent, FiltroporNombreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  btnfiltroAleatorio = false
  btnfiltroLetra = false
  btnfiltroNombre = false
  title = 'menuDigital';
}
