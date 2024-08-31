import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-pessoa-fisica',
  templateUrl: './formulario-pessoa-fisica.component.html',
  styleUrl: './formulario-pessoa-fisica.component.scss'
})
export class FormularioPessoaFisicaComponent {
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
