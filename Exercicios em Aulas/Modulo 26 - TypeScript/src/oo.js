"use strict";
class Pessoa {
    constructor(nome, renda) {
        // O atributo opcional não pode vir primeiro que um obrigatório
        this.nome = nome;
        this.renda = renda;
    }
    dizOi() {
        return `${this.nome} disse oi`;
    }
}
class ContaBancaria {
    constructor(numeroConta) {
        this.saldo = 0; //private
        this.numeroConta = numeroConta;
    }
    static retornaNumeroDoBanco() {
        return 125;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor * 2;
    }
}
const contaDoPedro = new ContaBancariaPessoaFisica(123456);
ContaBancaria.retornaNumeroDoBanco();
