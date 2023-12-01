class Pessoa {
  nome: string;
  renda?: number;

  constructor(nome: string, renda?: number) {
    // O atributo opcional não pode vir primeiro que um obrigatório
    this.nome = nome;
    this.renda = renda;
  }

  dizOi(): string {
    return `${this.nome} disse oi`;
  }
}

class ContaBancaria {
  protected saldo: number = 0; //private
  public numeroConta: number;

  constructor(numeroConta: number) {
    this.numeroConta = numeroConta;
  }

  static retornaNumeroDoBanco() {
    return 125;
  }

  getSaldo() {
    return this.saldo;
  }

  depositar(valor: number) {
    this.saldo += valor;
  }
}

class ContaBancariaPessoaFisica extends ContaBancaria {
  depositar(valor: number): void {
    this.saldo = valor * 2;
  }
}

const contaDoPedro = new ContaBancariaPessoaFisica(123456);

ContaBancaria.retornaNumeroDoBanco();
