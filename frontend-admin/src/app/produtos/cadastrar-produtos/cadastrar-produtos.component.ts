import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrl: './cadastrar-produtos.component.scss'



})
export class CadastrarProdutosComponent implements OnInit {

  formGroup!: FormGroup;

  categories: any[] = [
    { name: 'Dados Básicos', key: 'dados-basicos' },
    { name: 'Caracteristicas', key: 'caracteristicas' },
    { name: 'Imagens', key: 'imagens' },
    { name: 'Estoque', key: 'estoque' }
  ];

  tipoFormulario: string = '';

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      categoryControl: [], // Controle para o RadioButton
    });

  }

  selecionarTipo(tipo: string) {
    console.log(tipo)
    this.tipoFormulario = tipo;
  }

}
