import { Component,  OnInit } from '@angular/core';
import { Produto, Situacao, TipoProduto } from '../../produtos.model';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-form-estoque',
  templateUrl: './form-estoque.component.html',
  styleUrl: './form-estoque.component.scss'
})
export class FormEstoqueComponent implements OnInit {
  produto: Produto = {
    entrada: new Date(),
    quantidademovi: 0,
    posiestoque: '',
    tipo: { nome: '' },
    quantidade: 0,
    staprodutos: '',
    precoFinal: '',
    armazemlocalarmazenamento: '',
    operadorrespon: '',
    numnotafiscal: 0,
    numpedido: 0,
    

    situacao: Situacao.SUSPENSO,
    codRefProduto: '',
    nome: ''
  };
tiposProdutosSelected: any;
tiposProdutos: any[]|undefined;
descricao: any;


constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.setTranslation({
      dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
      dayNamesShort: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
      dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
      monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
      monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
      today: 'Hoje',
      clear: 'Limpar'
    });
  }

}
