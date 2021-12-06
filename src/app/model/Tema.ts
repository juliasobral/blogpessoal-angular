import { StringMap } from "@angular/compiler/src/compiler_facade_interface"
import { Postagem } from "./Postagem"

export class Tema{
    public id: number
    public descricao: String
    public postagem: Postagem[]
}