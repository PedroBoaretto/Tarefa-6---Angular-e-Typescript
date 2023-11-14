import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CalculadoraMediaComponent } from './calculadora-media/calculadora-media.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { CadastroDeAlunoComponent } from './cadastro-de-aluno/cadastro-de-aluno.component';
import { ApoliceDeSeguroComponent } from './apolice-de-seguro/apolice-de-seguro.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { FormTemplateDriveComponent } from './form-template-drive/form-template-drive.component';
import { FormsModule } from '@angular/forms';
import { ListaDeTarefasComponent } from './lista-de-tarefas/lista-de-tarefas.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    CalculadoraMediaComponent,
    MenuSuperiorComponent,
    CadastroDeAlunoComponent,
    ApoliceDeSeguroComponent,
    PaginaNaoEncontradaComponent,
    FormTemplateDriveComponent,
    ListaDeTarefasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
