import { Component, inject } from '@angular/core';
import { TarefaComponent } from "../tarefa/tarefa.component";
import { NgFor } from '@angular/common';
import { ModalCriarTarefaComponent } from "../modal-criar-tarefa/modal-criar-tarefa.component";
import { Tarefa } from '../../domain/task/Tarefa';
import { TarefaDTO } from '../../domain/task/TarefaDTO';
import { HttpClient } from '@angular/common/http';
import { TarefaRest } from '../../rest/TarefaRest';

@Component({
  selector: 'app-pagina-inicial',
  standalone: true,
  imports: [TarefaComponent, NgFor, ModalCriarTarefaComponent],
  templateUrl: './pagina-inicial.component.html',
  styleUrl: './pagina-inicial.component.css'
})
export class PaginaInicialComponent {
  tarefas: Tarefa[] = []

  constructor (private http: HttpClient, private tarefaRest: TarefaRest) {

  }
  
  buscarTarefas() { 
    this.tarefaRest.listarTarefas().subscribe({
        next: (body: any) => {
          body.content.forEach((tarefaDTO: TarefaDTO) => {
            this.tarefas.push(new Tarefa (tarefaDTO))
          });
        }, 
        error: (error) => {
          console.error("Erro ao buscar a tarefa:", error)
        }
    })
  }

  ngOnInit() {
    this.buscarTarefas()
  }
}