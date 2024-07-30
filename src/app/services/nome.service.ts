import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NomeService {
  nome!:string;
  
  constructor() { }
  setNome(value: string){
    this.nome=value;
  }
}
