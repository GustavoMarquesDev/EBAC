"use strict";

var _this = void 0;
var minhaFuncao = function minhaFuncao() {
  return "Diz oi";
};
var retornaUmCarro = function retornaUmCarro() {
  return {
    modelo: "Ka",
    fabricante: "Ford"
  };
};
console.log(minhaFuncao());
console.log(retornaUmCarro());
var carro = {
  velocidadeAtual: 40,
  acelerar: function acelerar() {
    console.log(this);
    this.velocidadeAtual += 10;
  },
  //NÃO FUNCIONARA
  frear: function frear() {
    _this.velocidadeAtual -= 10;
    console.log(_this);
  }
};
carro.acelerar();
carro.frear();
console.log(carro.velocidadeAtual);