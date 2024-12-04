import { Routes } from '@angular/router';
import { PaginaInicialComponent } from './componentes/pagina-inicial/pagina-inicial.component';
import { DetalhesDaTarefaComponent } from './componentes/detalhes-da-tarefa/detalhes-da-tarefa.component';

export const routes: Routes = [
    {
        path: "home", component: PaginaInicialComponent
    },
    {
        path: "tarefa/:id", component: DetalhesDaTarefaComponent
    }
];
