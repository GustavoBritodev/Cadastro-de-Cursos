import { Injectable } from '@angular/core';
import { DuracaoService } from '../services/duracao.service';
import { InicioService } from '../services/inicio.service';
import { NomeService } from '../services/nome.service';
import { ValorService } from '../services/valor.service';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  local!:string;
  lista:string="<b>Lista de opções do curso selecionadas:</b><br>";
  
  constructor(
    private duracao:DuracaoService,
    private inicio:InicioService,
    private nome:NomeService,
    private valor:ValorService
  ) { }

   selecDuracao(Local: string, item: string){
    this.local=Local;
    this.duracao.setDuracao(item)
    //Atualizar lista
    this.lista+='Local: '+this.local+', Duração: '+this.duracao.duracao+'<br>'
   } 

   selecInicio(Local: string, item: string){
    this.local=Local;
    this.inicio.setInicio(item)
    //Atualizar Lista
    this.lista+='Local: '+this.local+', Inicio: '+this.inicio.inicio+'<br>'
   }

   selecNome(Local: string, item: string){
    this.local=Local;
    this.nome.setNome(item);
    //Atualizar lista
    this.lista+="Local: "+this.local+', Nome: '+this.nome.nome+'<br>'
   }

   selecValor(Local: string, item: string){
    this.local=Local;
    this.valor.setValor(item)
    //atualiza a lista
    this.lista+='Local: '+this.local+', Valor mensal: '+this.valor.valor+'<br>'
   }

}
