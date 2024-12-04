import { Component, Input, } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AccordionModule } from 'primeng/accordion';
import { Tarefa } from '../../domain/task/Tarefa';
import { TarefaRest } from '../../rest/TarefaRest';

@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [AccordionModule, FormsModule],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css'
})
export class TarefaComponent {
  @Input() tarefa!: Tarefa

  constructor (private tarefaRest: TarefaRest) {

  }

  editarTarefa() {
    if (this.tarefa.houveMudança()) {
      this.tarefaRest.putEditarTarefa(this.tarefa.identificador, this.tarefa.gerarDTO()).subscribe({
        next: () => {
            this.tarefa.confirmarEdicao()
        },
        error: () => {
          this.tarefa.cancelarEdicao()
          alert("Houve um error ao tentar editar a tarefa.")
        }
      })
    }
  }
}
