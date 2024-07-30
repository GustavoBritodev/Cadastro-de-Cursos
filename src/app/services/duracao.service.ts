import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DuracaoService {
  duracao!:string;

  constructor() { }
  setDuracao(value:string){
    this.duracao=value;
  }
}
