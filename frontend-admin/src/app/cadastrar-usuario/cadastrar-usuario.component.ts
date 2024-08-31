import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrl: './cadastrar-usuario.component.scss'
})
export class CadastrarUsuarioComponent {
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