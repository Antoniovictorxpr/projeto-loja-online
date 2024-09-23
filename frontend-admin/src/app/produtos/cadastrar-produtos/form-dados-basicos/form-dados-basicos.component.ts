import { Component } from '@angular/core';
import { Produto, Situacao, TipoProduto } from '../../produtos.model';

@Component({
  selector: 'app-form-dados-basicos',
  templateUrl: './form-dados-basicos.component.html',
  styleUrl: './form-dados-basicos.component.scss'
})
export class FormDadosBasicosComponent {
  produto: Produto = {


    codRefProduto: '',
    nome: '',
    tipo: { nome: '' },
    quantidade: 0,
    preco: '',
    precoFinal: '',

    situacao: Situacao.SUSPENSO,
  };
tiposProdutosSelected: any;
tiposProdutos: any[]|undefined;
descricao: any;
}
