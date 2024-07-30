import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValorService {
  valor!:string;
  
  constructor() { }
  setValor(value: string){
    this.valor=value
  }  
}
