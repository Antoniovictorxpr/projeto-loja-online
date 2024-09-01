import { Component } from '@angular/core';
import { Produto, Situacao } from '../../produtos.model';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrl: './tabela-produtos.component.scss'
})
export class TabelaProdutosComponent {

  produtos: Produto[] = [
    {
      codigo: 5225,
      codRefProduto: 'Fm800',
      nome: 'Pneu 185/60r15 Dunlop Sp Sport Fm800 88h',
      tipo: { nome: 'Peça de Carro', codigo: 1 },
      quantidade: 8,
      preco: 'R$ 415,90',
      situacao: Situacao.PUBLICADO,


    }
  ];

  getSeverity(situacao: Situacao): "success" | "secondary" | "info" | "warning" | "danger" | "contrast" | undefined {
    if(situacao === Situacao.SUSPENSO) {
      return 'danger';
    }
      return 'success';
  }

  getNameSituacao(situacao: Situacao):string{
    if(situacao === Situacao.SUSPENSO) {
      return 'Suspenso';
    }
      return 'Publicado';
  }
}
