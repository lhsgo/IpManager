import { Injectable } from '@angular/core';

import { Monitor } from './monitor';

@Injectable()
export class MonitorService {
  monitores: Monitor[] = [];

  criar(monitor: Monitor): Monitor {
    monitor = monitor.clone();
    var result = null;
    if(this.logincinNaoCadastrado(monitor.loginCin)){
      this.monitores.push(monitor);
      result = monitor;
    }
    return result;
  }

  logincinNaoCadastrado(login: string): boolean {
    return !this.monitores.find(a => a.loginCin == login);
  }

  getMonitores(): Monitor[] {
    var result: Monitor[] = [];
    for(let a of this.monitores){
      result.push(a.clone());
    }
    return result;
  }
}
