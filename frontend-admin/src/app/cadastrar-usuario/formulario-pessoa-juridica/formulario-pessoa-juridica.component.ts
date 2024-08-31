import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-pessoa-juridica',
  templateUrl: './formulario-pessoa-juridica.component.html',
  styleUrl: './formulario-pessoa-juridica.component.scss'
})
export class FormularioPessoaJuridicaComponent {
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
}
