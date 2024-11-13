import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarefaComponent } from "./componentes/tarefa/tarefa.component";
import { PaginaInicialComponent } from "./componentes/pagina-inicial/pagina-inicial.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TarefaComponent, PaginaInicialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-front';
}
