import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TarefaRest } from '../../rest/TarefaRest';
import { Tarefa } from '../../domain/task/Tarefa';
import { TarefaComponent } from "../tarefa/tarefa.component";

@Component({
  selector: 'app-detalhes-da-tarefa',
  standalone: true,
  imports: [TarefaComponent],
  templateUrl: './detalhes-da-tarefa.component.html',
  styleUrl: './detalhes-da-tarefa.component.css'
})
export class DetalhesDaTarefaComponent {
  idTarefa: string
  tarefa!: Tarefa

  constructor (private activatedRoute: ActivatedRoute, private tarefaRest: TarefaRest) {
    this.idTarefa = this.activatedRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit() {
    this.tarefaRest.getTarefaPorID(this.idTarefa).subscribe({
      next: (tarefaDTO) => {
        this.tarefa = new Tarefa(tarefaDTO)
      },
      error: () => {
        alert("Error, tarefa não encontrada!")
        console.error("Error, tarefa não encontrada!")
      }
    })
  }
}
