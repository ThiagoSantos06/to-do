import { Component, Input, } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AccordionModule } from 'primeng/accordion';
import { Tarefa } from '../../domain/task/Tarefa';

@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [AccordionModule, FormsModule],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css'
})
export class TarefaComponent {
  @Input() tarefa!: Tarefa
}
