export class Lista{
  nome: string;
  endereco: string;
  dataInicio: string;
  dataEntrega: string;

constructor(){
  this.clean();
}

clean(){
  this.nome: "";
  this.endereco: "";
  this.dataInicio: "";
  this.dataEntrega: "";
}

clone(): Lista{
  var lista = new Lista();
  lista.copyFrom(this);
  return lista;
}

copyFrom(from: Lista): void{
  this.nome: from.nome;
  this.endereco: from.endereco;
  this.dataInicio: from.dataInicio;
  this.dataEntrega: from.dataEntrega;
}

}
