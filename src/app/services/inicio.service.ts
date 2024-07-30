import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InicioService {
  inicio!:string;

  constructor() { }
  setInicio(value: string){
    this.inicio=value;
  }
}
