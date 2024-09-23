import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { ListarProdutosComponent } from './produtos/listar-produtos/listar-produtos.component';
import { CadastrarProdutosComponent } from './produtos/cadastrar-produtos/cadastrar-produtos.component';




export const routes: Routes = [
  { path: 'login', component: LoginComponent,  },
  { path: 'cadastrar-usuario', component: CadastrarUsuarioComponent, title:'Cadastrar Produtos' }, // Defina a rota para o cadastro
  { path: 'listar-produtos', component: ListarProdutosComponent },
  { path: 'cadastrar-produto', component: CadastrarProdutosComponent },

  // Add other routes as needed
];
