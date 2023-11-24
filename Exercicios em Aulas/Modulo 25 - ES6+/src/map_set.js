// MAP

let meuMap = new Map();
meuMap.set("nome", "Gustavo");
meuMap.set("stack", "html, css, js");
meuMap.set("idade", 28);

console.log(meuMap);

const nome = meuMap.get("nome");

console.log(nome);

console.log(meuMap.size);

console.log(meuMap.has("sobrenome"));

//meuMap.clear();

console.log(meuMap.size);

for (let chave of meuMap.keys()) {
  console.log(chave);
}

for (let valor of meuMap.values()) {
  console.log(valor);
}

for (let [chave, valor] of meuMap.entries()) {
  console.log(`A chave é: ${chave} e o valor é: ${valor}`);
}

meuMap.delete("stack");
console.log(meuMap);

// SET

const cpfs = new Set();

cpfs.add("37598639817");
cpfs.add("07598639818");
cpfs.add("37598639819");

console.log(cpfs);

console.log(cpfs.keys()); // mesma coisa chave e valor
console.log(cpfs.values());

cpfs.forEach((valor) => {
  console.log(valor);
});

const array = ["Gustavo", "Guilherme", "Willian", "Pedro", "Gustavo", "Pedro"];

const arrayComoSet = new Set([...array]);

const arraySemItensDuplicados = [...arrayComoSet];

console.log(arrayComoSet);
console.log(arraySemItensDuplicados);
