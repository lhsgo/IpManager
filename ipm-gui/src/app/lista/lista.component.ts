import {Component, OnInit} from '@angular/core';
import {NgModule} from '@angular/core';

import {Lista} from './lista';
import {ListaService} from './lista.service';

@Component ({
  selector:'app-root',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit
{
  constructor(private listaService: ListaService) {}

  lista: Lista = new Lista();
  listas: Lista[];
  userRegistered: boolean = false;
  id: number = 1;

  criar(a: Lista): void {
    a.id = this.id;
    if(this.listaService.criar(a)){
      this.listas.push(a);
      this.lista = new Lista();
      this.userRegistered = false;
      this.id = this.id + 1;
    } else {
      this.userRegistered = true;
      this.lista = new Lista();
    }
  }

  ngOnInit(): void {
    this.listas = this.listaService.getListas();
  }
}
