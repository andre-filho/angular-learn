import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuSegundoComponent } from './meu-segundo/meu-segundo.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  // aqui ficam as declarações dos componentes que serão utilizados
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuSegundoComponent,
  ],
  // aqui se colocam os modules que serão importados para o uso
  // os modules daqui tem tudo visibilidade máxima
  imports: [
    BrowserModule,
    CursosModule
  ],
  // seção para linkar com os services
  providers: [],
  // so tem na AppComponent, define a base da aplicação
  bootstrap: [AppComponent]
})
export class AppModule { }
