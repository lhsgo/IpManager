export class Monitor {
  id: number;
  loginCin: string;
  senha: string;
}

constructor() {
  this.clean();
}

clean() {
  this.id = 0;
  this.loginCin = "";
  this.senha = "";
}

clone():Monitor{
    var monitor: Monitor = new Monitor();
    monitor.copyFrom(this);
    return monitor;
}

copyFrom(from: Monitor): void {
    this.id = from.id;
    this.loginCin = from.loginCin;
    this.senha = from.senha;
}
