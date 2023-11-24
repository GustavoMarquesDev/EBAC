//FOR
const redesSociais = ["Facebook", "Instagram", "Twitter"];

for (let i = 0; i < redesSociais.length; i++) {
  console.log(`Eu tenho um perfil na rede social: ${redesSociais[i]}`);
}

//FOREACH
redesSociais.forEach((nomeDaRedeSocial, posicao) => {
  console.log(
    `#${posicao} Eu tenho um perfil na rede social: ${nomeDaRedeSocial}`
  );
});

//MAP
const alunos = ["Gustavo", "Julia", "Paula", "Wagner"];

const alunos2 = alunos.map(function (itemAtual) {
  itemAtual = {
    nome: itemAtual,
    curso: "Front-End",
  };
  return itemAtual;
});

console.log(alunos2);

//FIND
const paula = alunos2.find(function (item) {
  return item.nome == "Paula";
});

console.log(paula);

//FINDINDEX
const indiceDaPaula = alunos2.findIndex(function (item) {
  return item.nome == "Paulo";
});

console.log(indiceDaPaula);

//EVERY

alunos2.push({
  nome: "Lucio",
  curso: "Back-End",
});
const todosOsAlunosSaoDeFrontend = alunos2.every(function (item) {
  return item.curso === "Front-End";
});

console.log(todosOsAlunosSaoDeFrontend);

//SOME
const existeAlgumAlunoDeBackend = alunos2.some(function (item) {
  return item.curso === "Back-End" && item.curso === "Front-End";
});

console.log(existeAlgumAlunoDeBackend);

//FILTER
const filtraAlunosDeBackend = (aluno) => aluno.curso === "Back-End";

const alunosDeBackend = alunos2.filter(filtraAlunosDeBackend);

console.log(alunosDeBackend);

//REDUCE
const nums = [10, 20, 30, 10];

const soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);

console.log(soma);

const nomesDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += `${itemAtual.nome} `;
  return acumulador;
}, "");

console.log(nomesDosAlunos);
//USANDO O FOR
let somaComFor = 0;
for (let i = 0; i < nums.length; i++) {
  somaComFor += nums[i];
}

console.log(somaComFor);
