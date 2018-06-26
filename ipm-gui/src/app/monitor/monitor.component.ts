import {Component, OnInit} from '@angular/core';
import {NgModule} from '@angular/core';

import {Monitor} from './monitor';
import {MonitorService} from './monitor.service';

@Component ({
  selector:'app-root',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit
{
  constructor(private monitorService: MonitorService) {}

  monitor: Monitor = new Monitor();
  monitores: Monitor[];
  userRegistered: boolean = false;
  id: number = 1;

  criar(a: Monitor): void {
    a.id = this.id;
    if(this.monitorService.criar(a)){
      this.monitores.push(a);
      this.monitor = new Monitor();
      this.userRegistered = false;
      this.id = this.id + 1;
    } else {
      this.userRegistered = true;
      this.monitor = new Monitor();
    }
  }

  ngOnInit(): void {
    this.monitores = this.monitorService.getMonitores();
  }
}
