import { AttributeKey } from "./attribute.enum";

export class KnightResponseDto {
    _id:string;
    nome: string;
    idade: number;
    armas: number
    atributo: AttributeKey
    ataque: number;
    exp: number;
    isHeroes: boolean;

}

