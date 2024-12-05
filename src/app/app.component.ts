import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FiltroAleatorioComponent } from "./components/filtro-aleatorio/filtro-aleatorio.component";
import { FiltroporNombreComponent } from "./components/filtropor-nombre/filtropor-nombre.component";
import { FiltroPorLetraComponent } from "./components/filtro-por-letra/filtro-por-letra.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FiltroAleatorioComponent, FiltroporNombreComponent, FiltroPorLetraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  btnfiltroAleatorio = false
  btnfiltroLetra = false
  btnfiltroNombre = false
  title = 'menuDigital';
}
