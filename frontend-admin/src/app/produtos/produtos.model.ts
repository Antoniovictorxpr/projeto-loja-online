export interface TipoProduto {
    nome: string;
    codigo?: number;

}

export enum Situacao {
    PUBLICADO = 'PUBLICADO',
    SUSPENSO = 'SUSPENSO',


}

export interface Produto {
    preco: string;
    codigo?: number;
    codRefProduto: string;
    nome: string;
    quantidade: number;
    tipo: TipoProduto;
    situacao: Situacao;
    marca?: string;
    precoFinal?: string;
    kiloGrama?: number;
    peca?: number;
    unidade?: number;
    grama?: number;
    descricao?: string;
    peso?: number;
    material?: number;
    tamanhoDisponivel?: string;
    cor?: string;
    pesoLiquido?: number;
    pesoBruto?: number;
    largura?: number;
    altura?: number;
    profundidade?: number;
    volumes?: number;

}