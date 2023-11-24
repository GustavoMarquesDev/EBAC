const minhaFuncao = () => "Diz oi";

const retornaUmCarro = () => ({
  modelo: "Ka",
  fabricante: "Ford",
});

console.log(minhaFuncao());
console.log(retornaUmCarro());

const carro = {
  velocidadeAtual: 40,
  acelerar: function () {
    console.log(this);
    this.velocidadeAtual += 10;
  },

  //NÃO FUNCIONARA
  frear: () => {
    this.velocidadeAtual -= 10;
    console.log(this);
  },
};

carro.acelerar();
carro.frear();

console.log(carro.velocidadeAtual);
