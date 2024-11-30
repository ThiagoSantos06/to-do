import { TarefaDTO } from "./TarefaDTO"

export class Tarefa {
    private _oculta: boolean
    private _titulo: string
    private _descricao: string
    private _concluida: boolean
    private _editavel: boolean
    private _tituloEditado: string
    private _descricaoEditada: string

    constructor (tarefaDTO: TarefaDTO) {
        this._oculta = true
        this._editavel = false
        this._titulo = tarefaDTO.titulo
        this._descricao = tarefaDTO.descricao
        this._concluida = tarefaDTO.concluida
        this._tituloEditado = tarefaDTO.titulo
        this._descricaoEditada = tarefaDTO.descricao
    }

    concluir() {
        this._concluida = true
    }

    desconcluir() {
        this._concluida = false
    }

    ocultar() {
        this._oculta = true
    }

    desocultar() {
        this._oculta = false
    }

    habilitarEdicao() : void {
        this._editavel = true
    }

    cancelarEdicao() : void {
        this._editavel = false
        this._tituloEditado = this.titulo
        this._descricaoEditada = this.descricao
    }

    confirmarEdicao() : void {
        this._editavel = false
        this._titulo = this._tituloEditado
        this._descricao = this._descricaoEditada
    }
    
    public get estaOculta() : boolean {
        return this._oculta
    }
    
    public get titulo() : string {
        return this._titulo
    }
    
    public get descricao() : string {
        return this._descricao
    }
    
    public get estaConcluida() : boolean {
        return this._concluida
    }

    public get estaEditavel() : boolean {
        return this._editavel
    }

    public get tituloEditado() : string {
        return this._tituloEditado
    }

    public get descricaoEditada() : string {
        return this._descricaoEditada
    }

    public set titulo(tituloEditado : string) {
        this._titulo = tituloEditado;
    }

    public set descricao(descricaoEditada : string) {
        this._descricao = descricaoEditada;
    }

    public set tituloEditado(tituloNovo : string) {
        this._tituloEditado = tituloNovo;
    }

    public set descricaoEditada(descricaoNova : string) {
        this._descricaoEditada = descricaoNova;
    }
    
}