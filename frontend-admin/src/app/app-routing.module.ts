import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { ListarProdutosComponent } from './produtos/listar-produtos/listar-produtos.component';
import { CadastrarProdutoComponent } from './produtos/cadastrar-produto/cadastrar-produto.component';




export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastrar-usuario', component: CadastrarUsuarioComponent }, // Defina a rota para o cadastro
  { path: 'listar-produtos', component: ListarProdutosComponent },
  { path: 'cadastrar-produto', component: CadastrarProdutoComponent },

  // Add other routes as needed
];
