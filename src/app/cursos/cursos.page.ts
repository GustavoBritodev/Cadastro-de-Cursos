import { Component, OnInit } from '@angular/core';
import { CursoService } from '../providers/curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {
  local:string=""
  item1:string=""
  item2:string=""
  item3:string=""
  item4:string=""
  lista:string=""

  constructor(private curso:CursoService) { }

  trocarLocal(value:string){
    this.local=value;
  }

  armazenarDuracao(Local:string, item:string){
    this.curso.selecDuracao(Local, item)
    this.lista=this.curso.lista
  }

  armazenarInicio(Local:string, item:string){
    this.curso.selecInicio(Local, item)
    this.lista=this.curso.lista
  }

  armazenarNome(Local:string, item:string){
    this.curso.selecNome(Local, item)
    this.lista=this.curso.lista
  }

  armazenarValor(Local:string, item:string){
    this.curso.selecValor(Local, item)
    this.lista=this.curso.lista
  }

  ngOnInit() {
  }

}
