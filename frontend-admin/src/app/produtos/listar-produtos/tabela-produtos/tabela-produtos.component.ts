import { Component, OnInit } from '@angular/core';
import { Produto, Situacao } from '../../produtos.model';
import { MessageService } from 'primeng/api';
import { Injectable } from '@angular/core';
import { ProdutosService } from '../../produtos.service';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrl: './tabela-produtos.component.scss',
  providers: [MessageService],

})
export class TabelaProdutosComponent implements OnInit{
  selectedProduct!: Produto;

  constructor(private messageService: MessageService, private produtoService: ProdutosService) { }
  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe({
      next: (resposta) => {
        this.produtos = resposta;
      }
    });
  }

  produtos: Produto[] = [
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

