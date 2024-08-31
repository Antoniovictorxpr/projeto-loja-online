import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.scss'
})
export class CadastrarComponent {
  email: string = '';
  nome: string = '';
  sobrenome: string = '';
  dataNascimento: string = '';
  cpf: string = '';
  telefone: string = '';
  senha: string = '';
  confirmarSenha: string = '';
  notificacao: string = '';  
  tipoPessoa: string = 'fisica';
  nomeEmpresa: string = '';
  cnpj: string = '';


  
  selecionarTipo(tipo: string) {
    this.tipoPessoa = tipo;
  }

  
}