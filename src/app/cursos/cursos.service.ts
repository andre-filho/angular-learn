import { Injectable } from '@angular/core';

@Injectable() // faz injeção de uma classe em outra
export class CursosService {

  constructor() { }

  getCursos() {
    return ['Java', 'Ext JS', 'Angular'];
  }
}
