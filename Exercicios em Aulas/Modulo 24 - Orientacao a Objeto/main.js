const carroDoJoao = {
  modelo: "Fiesta",
  fabricante: "Ford",
  anoModelo: "2020",
  anoFabricacao: "2019",
  acelerar: () => {
    console.log("vrum");
  },
};

const carroDaMaria = {
  modelo: "Ka",
  fabricante: "Ford",
  anoModelo: "2022",
  anoFabricacao: "2021",
  acelerar: function () {
    console.log("vrunn");
  },
};

function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
  this.modelo = modelo;
  this.fabricante = fabricante;
  this.anoModelo = anoModelo;
  this.anoFabricacao = anoFabricacao;
  this.acelerar = function () {
    console.log("acelerar");
  };
}

const carroDoJoao2 = new Carro("Fiesta", "Ford", 2020, 2019);
const carroDaMaria2 = new Carro("Ka", "Ford", 2021, 2020);

const nome = "Gustavo";
const idade = "25";
const ehMaiorDeIdade = true;
const conhecimentos = ["html", "css", "javascript"];

const pessoa = {
  nome: nome,
  idade: idade,
  ehMaiorDeIdade: ehMaiorDeIdade,
  conhecimentos: conhecimentos,
};
