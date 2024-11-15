import { Component } from '@angular/core';
import { TarefaComponent } from "../tarefa/tarefa.component";
import { TarefaDTO } from '../../dto/TarefaDTO';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pagina-inicial',
  standalone: true,
  imports: [TarefaComponent, NgFor],
  templateUrl: './pagina-inicial.component.html',
  styleUrl: './pagina-inicial.component.css'
})
export class PaginaInicialComponent {
  tarefas: TarefaDTO[] = [
    {
      titulo: "Estudar",
      descricao: "Estudar programação, HTML, Javascript, CSS, Angular, React, VUE,Ruby, Lua, Python, React JS, Express e tudo mais..",
      concluida: false
    }
  ]
}
