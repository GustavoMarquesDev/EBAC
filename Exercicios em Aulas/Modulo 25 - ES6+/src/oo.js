// function Pokemon(nomeDoPokemon, TipoDoPokemon) {
//   this.nome = nomeDoPokemon;
//   this.tipo = TipoDoPokemon;
//   this.choquedoTrovao = function () {
//     console.log("bummmmm");
//   };
// }

class Pokemon {
  //   nome = ""; se quisesse criar uma classe sem o contrutor tradicional
  //   tipo = "";
  #hp = 100; //propriedade privada

  constructor(nomeDoPokemon, tipoDoPokemon) {
    this.nome = nomeDoPokemon;
    this.tipo = tipoDoPokemon;
  }

  atacar(nomeDoAtaque) {
    console.log(`${this.nome} atacou com ${nomeDoAtaque}`);
  }

  recebeuAtaque() {
    this.#hp -= 10;
  }

  exibeHp() {
    console.log(this.#hp);
  }
}

class Pikachu extends Pokemon {
  constructor() {
    super("Blastoise", "Aquatico");
  }
  atacar() {
    console.log(`${this.nome} atacou com choque do trovão`);
  }
}

const pikachuDoAsh = new Pikachu();

pikachuDoAsh.recebeuAtaque();

console.log(pikachuDoAsh.hp);

pikachuDoAsh.atacar();

pikachuDoAsh.exibeHp();

const pikachu = new Pokemon("pikachu", "elétrico");

// pikachu.nome = "pikachu";
// pikachu.tipo = "elétrico";

//pikachu.atacar("Choque do trovão");

console.log(pikachu);
console.log(pikachuDoAsh);

console.log(pikachuDoAsh instanceof Pikachu);
console.log(pikachuDoAsh instanceof Pokemon);
