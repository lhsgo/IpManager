import { Injectable } from '@angular/core';
import { Lista } from './lista';

@Injectable ()
export class ListaService {
  aulas: Lista[] = [];

criar(lista: Lista): Lista {
  lista: lista.clone();
  var result: null;
  if(this.listaExistente(lista)){
    this.lista.push(lista);
    result = lista;
  }
  return result;
}

listaExistente(lista: Lista): boolean{
  return !this.lista.find(a => a.endereco == lista.endereco);
}

getListas(): Lista[]{
  var result: Lista[] = [];
  for(let a of this.lista){
    result.push(a.clone());
  }
  return result;
}

}
