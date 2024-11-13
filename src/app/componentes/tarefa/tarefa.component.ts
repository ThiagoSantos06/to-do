import { Component, Input, } from '@angular/core';
import { TarefaDTO } from '../../dto/TarefaDTO';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [AccordionModule],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css'
})
export class TarefaComponent {
  @Input() tarefa!: TarefaDTO
}
