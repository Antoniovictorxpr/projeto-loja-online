import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PasswordModule } from 'primeng/password';
import { InputMaskModule } from 'primeng/inputmask';
import { CheckboxModule } from 'primeng/checkbox';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { FormularioPessoaFisicaComponent } from './cadastrar-usuario/formulario-pessoa-fisica/formulario-pessoa-fisica.component';
import { FormularioPessoaJuridicaComponent } from './cadastrar-usuario/formulario-pessoa-juridica/formulario-pessoa-juridica.component';
import { CadastrarProdutoComponent } from './produtos/cadastrar-produto/cadastrar-produto.component';
import { ListarProdutosComponent } from './produtos/listar-produtos/listar-produtos.component';
import { FiltroProdutosComponent } from './produtos/listar-produtos/filtro-produtos/filtro-produtos.component';
import { TabelaProdutosComponent } from './produtos/listar-produtos/tabela-produtos/tabela-produtos.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { StyleClassModule } from 'primeng/styleclass';
import { ImageModule } from 'primeng/image';
import { ToastModule } from 'primeng/toast';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastrarUsuarioComponent,
    FormularioPessoaFisicaComponent,
    FormularioPessoaJuridicaComponent,
    CadastrarProdutoComponent,
    ListarProdutosComponent,
    FiltroProdutosComponent,
    TabelaProdutosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true }),

    //primeng component
    ButtonModule,
    CardModule,
    InputTextModule,
    FloatLabelModule,
    CalendarModule,
    RadioButtonModule,
    BrowserAnimationsModule,
    PasswordModule,
    InputMaskModule,
    CheckboxModule,
    AutoCompleteModule,
    IconFieldModule,
    InputIconModule,
    MultiSelectModule,
    DividerModule,
    TableModule,
    TagModule,
    StyleClassModule,
    ImageModule,
    ToastModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }