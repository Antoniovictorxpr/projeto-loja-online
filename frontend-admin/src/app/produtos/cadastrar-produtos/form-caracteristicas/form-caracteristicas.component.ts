import { Component } from '@angular/core';
import { Produto, Situacao } from '../../produtos.model';

@Component({
  selector: 'app-form-caracteristicas',
  templateUrl: './form-caracteristicas.component.html',
  styleUrl: './form-caracteristicas.component.scss'
})
export class FormCaracteristicasComponent {

  produto: Produto = {


    codRefProduto: '',
    nome: '',
    tipo: { nome: '' },
    quantidade: 0,
    preco: '',
    situacao: Situacao.SUSPENSO,
  };

}
