import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TarefaDTO } from "../domain/task/TarefaDTO";

@Injectable({
    providedIn: "root"
})
export class TarefaRest {
    constructor (private http: HttpClient) {

    }

    listarTarefas() {
        return this.http.get("/api/tarefa")
    }

    getTarefaPorID(id: string) {
        return this.http.get<TarefaDTO>(`/api/tarefa/${id}`)
    }

    putEditarTarefa(id: string, tarefaDTO: TarefaDTO) {
        return this.http.put(`/api/tarefa/${id}`, tarefaDTO)
    }
}