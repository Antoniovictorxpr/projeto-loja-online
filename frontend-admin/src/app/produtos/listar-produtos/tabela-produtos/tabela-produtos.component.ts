import { Component } from '@angular/core';
import { Produto, Situacao } from '../../produtos.model';
import { MessageService } from 'primeng/api';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrl: './tabela-produtos.component.scss',
  providers: [MessageService],

})
export class TabelaProdutosComponent {
  selectedProduct!: Produto;

  constructor(private messageService: MessageService) { }

  produtos: Produto[] = [
    {
      codigo: 1,
      codRefProduto: 'Fm800',
      nome: 'Pneu 185/60r15 Dunlop Sp Sport Fm800 88h',
      tipo: { nome: 'Peça de Carro', codigo: 1 },
      quantidade: 8,
      preco: 'R$ 415,90',
      situacao: Situacao.PUBLICADO,
      precoFinal: '',
    },

    {
      codigo: 2,
      codRefProduto: 'SP11073-4',
      nome: 'Kit Filtro Toyota Corolla 16V 2010 a 2019 MANN FILTER SP11073-4',
      tipo: { nome: 'Peça de Carro', codigo: 1 },
      quantidade: 30,
      preco: 'R$ 79,90',
      precoFinal: '',
      situacao: Situacao.SUSPENSO,
    },

    {
      codigo: 3,
      codRefProduto: 'JRP1427 TRW',
      nome: 'Caixa Direção Hidráulica Ford Ecosport Fiesta 2002 a 2014 Sem Terminal ',
      tipo: { nome: 'Peça de Carro', codigo: 1 },
      quantidade: 2,
      preco: 'R$ 899,90',
      precoFinal: '',
      situacao: Situacao.PUBLICADO,
    },

    {
      codigo: 4,
      codRefProduto: 'MB6035_MOB',
      nome: 'Kit Coxim Batente Amortecedor Honda Civic 2002 a 2008 Traseiro Mobensani ',
      tipo: { nome: 'Peça de Carro', codigo: 1 },
      quantidade: 9,
      preco: 'R$ 225,90',
      precoFinal: '',
      situacao: Situacao.PUBLICADO,
    },

    {
      codigo: 5,
      codRefProduto: 'KITRCPT053702',
      nome: 'Kit Pastilha Disco Freio Gol G5 Saveiro G5 Voyage G5 2008 a 2014 Dianteiro Ventilado Teves TRW ',
      tipo: { nome: 'Peça de Carro', codigo: 1 },
      quantidade: 12,
      preco: 'R$ 220,30',
      precoFinal: '',
      situacao: Situacao.PUBLICADO,
    },

    {
      codigo: 6,
      codRefProduto: 'VAR61930150004',
      nome: 'Kit Embreagem Fiat Siena 1.0 1.3 1.4 2000 a 2016 Luk 61930150004 ',
      tipo: { nome: 'Peça de Carro', codigo: 1 },
      quantidade: 12,
      preco: 'R$ 243,10',
      precoFinal: '',
      situacao: Situacao.PUBLICADO,
    },

    {
      codigo: 7,
      codRefProduto: 'BC261470Z1220RC',
      nome: 'Radiador Volkswagen Gol G5 G6 G7 G8 1.0 1.6 2008 a 2022 Com Ar Denso ',
      tipo: { nome: 'Peça de Carro', codigo: 1 },
      quantidade: 12,
      preco: 'R$ 251,60',
      precoFinal: '',
      situacao: Situacao.PUBLICADO,
    },

    {
      codigo: 8,
      codRefProduto: 'KITRCPT053702',
      nome: 'Kit Pastilha Disco Freio Gol G5 Saveiro G5 Voyage G5 2008 a 2014 Dianteiro Ventilado Teves TRW ',
      tipo: { nome: 'Peça de Carro', codigo: 1 },
      quantidade: 13,
      preco: 'R$ 220,30',
      precoFinal: '',
      situacao: Situacao.PUBLICADO,
    },

    {
      codigo: 9,
      codRefProduto: '0441436_AXI',
      nome: 'Kit Batente Coifa Amortecedor Fiat Palio Siena 96 a 2017 Traseiro Axios 0441436 ',
      tipo: { nome: 'Peça de Carro', codigo: 1 },
      quantidade: 20,
      preco: 'R$ 33,30',
      precoFinal: '',
      situacao: Situacao.PUBLICADO,
    },

    {
      codigo: 10,
      codRefProduto: 'VARN92352',
      nome: 'Pivô Suspensão Renault Sandero 2008 a 2013 Inferior Motorista Passageiro Nakata ',
      tipo: { nome: 'Peça de Carro', codigo: 1 },
      quantidade: 12,
      preco: 'R$ 44,40',
      precoFinal: '',
      situacao: Situacao.PUBLICADO,
    },

    {
      codigo: 11,
      codRefProduto: 'KITRCPT053702',
      nome: 'Kit Pastilha Disco Freio Gol G5 Saveiro G5 Voyage G5 2008 a 2014 Dianteiro Ventilado Teves TRW ',
      tipo: { nome: 'Peça de Carro', codigo: 1 },
      quantidade: 12,
      preco: 'R$ 190,35',
      precoFinal: '',
      situacao: Situacao.PUBLICADO,
    },

    {
      codigo: 12,
      codRefProduto: 'N99098',
      nome: 'Barra Axial Direção Logan Sandero 2007 a 2014 Motorista Passageiro Hidráulica Nakata N99098 ',
      tipo: { nome: 'Peça de Carro', codigo: 1 },
      quantidade: 12,
      preco: 'R$ 39,56',
      precoFinal: '',
      situacao: Situacao.PUBLICADO,
    },

  ];

  getSeverity(situacao: Situacao): "success" | "secondary" | "info" | "warning" | "danger" | "contrast" | undefined {
    if (situacao === Situacao.SUSPENSO) {
      return 'danger';
    }
    return 'success';
  }

  getNameSituacao(situacao: Situacao): string {
    if (situacao === Situacao.SUSPENSO) {
      return 'Suspenso';
    }
    return 'Publicado';
  }

  onRowSelect(event: any) {
    this.messageService.add({ severity: 'info', summary: 'produto selecionado', detail: event.data.nome });
  }

  onRowUnselect(event: any) {
    this.messageService.add({ severity: 'info', summary: 'Product Unselected', detail: event.data.name });
  }


}

