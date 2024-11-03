import { Component } from '@angular/core';
import { TipoProduto } from '../../produtos.model';

@Component({
  selector: 'app-filtro-produtos',
  templateUrl: './filtro-produtos.component.html',
  styleUrl: './filtro-produtos.component.scss'
})
export class FiltroProdutosComponent {
  codigo: string = '';
  codrefProduto: string = '';
  nome: string = '';
  tiposProdutos: TipoProduto [] = [
    {
      nome:'Peça de Carro',
      codigo:1
    }
  ];
  tiposProdutosSelected: TipoProduto [] = [];
}
