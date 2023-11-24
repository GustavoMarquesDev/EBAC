"use strict";

//FOR
var redesSociais = ["Facebook", "Instagram", "Twitter"];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho um perfil na rede social: ".concat(redesSociais[i]));
}

//FOREACH
redesSociais.forEach(function (nomeDaRedeSocial, posicao) {
  console.log("#".concat(posicao, " Eu tenho um perfil na rede social: ").concat(nomeDaRedeSocial));
});

//MAP
var alunos = ["Gustavo", "Julia", "Paula", "Wagner"];
var alunos2 = alunos.map(function (itemAtual) {
  itemAtual = {
    nome: itemAtual,
    curso: "Front-End"
  };
  return itemAtual;
});
console.log(alunos2);

//FIND
var paula = alunos2.find(function (item) {
  return item.nome == "Paula";
});
console.log(paula);

//FINDINDEX
var indiceDaPaula = alunos2.findIndex(function (item) {
  return item.nome == "Paulo";
});
console.log(indiceDaPaula);

//EVERY

alunos2.push({
  nome: "Lucio",
  curso: "Back-End"
});
var todosOsAlunosSaoDeFrontend = alunos2.every(function (item) {
  return item.curso === "Front-End";
});
console.log(todosOsAlunosSaoDeFrontend);

//SOME
var existeAlgumAlunoDeBackend = alunos2.some(function (item) {
  return item.curso === "Back-End" && item.curso === "Front-End";
});
console.log(existeAlgumAlunoDeBackend);

//FILTER
var filtraAlunosDeBackend = function filtraAlunosDeBackend(aluno) {
  return aluno.curso === "Back-End";
};
var alunosDeBackend = alunos2.filter(filtraAlunosDeBackend);
console.log(alunosDeBackend);

//REDUCE
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);
var nomesDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, " ");
  return acumulador;
}, "");
console.log(nomesDosAlunos);
//USANDO O FOR
var somaComFor = 0;
for (var _i = 0; _i < nums.length; _i++) {
  somaComFor += nums[_i];
}
console.log(somaComFor);