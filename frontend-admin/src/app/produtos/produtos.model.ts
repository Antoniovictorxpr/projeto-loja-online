export interface TipoProduto {
    nome: string;
    codigo: number;

}

export enum Situacao {
    PUBLICADO = 'PUBLICADO',
    SUSPENSO = 'SUSPENSO',


}

export interface Produto {
    preco: string;
    codigo: number;
    codRefProduto: string;
    nome: string;
    quantidade: number;
    tipo: TipoProduto;
    situacao: Situacao;
}