import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';



export const routes: Routes = [
  { path: 'home', component: HomeComponent }
  // Add other routes as needed
];
