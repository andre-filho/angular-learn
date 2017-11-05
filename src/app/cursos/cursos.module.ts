import { CursosService } from './cursos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';


@NgModule({
  imports: [
    CommonModule
  ],
  // declarando os modules que serão usados aqui na module,
  // se declarados so aqui ficam kinda 'private'
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  // expondo a classe dos componentes para outros modules
  exports: [
    CursosComponent
  ],
  // fornece dependencia
  providers: [
    CursosService
  ]
})
export class CursosModule { }
