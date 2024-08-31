import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';



export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastrar-usuario', component: CadastrarUsuarioComponent }, // Defina a rota para o cadastro
  // Add other routes as needed
];
