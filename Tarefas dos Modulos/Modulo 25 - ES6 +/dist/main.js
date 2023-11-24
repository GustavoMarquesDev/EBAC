"use strict";

var alunos = [{
  nome: "Gustavo",
  nota: 10
}, {
  nome: "WIllian",
  nota: 6
}, {
  nome: "Guilherme",
  nota: 2
}, {
  nome: "Pedro",
  nota: 8
}, {
  nome: "João",
  nota: 7
}];
var verificaNotas = function verificaNotas(nome) {
  var alunoEncontrado = alunos.find(function (aluno) {
    return aluno.nome == nome;
  });
  if (!alunoEncontrado) return;
  if (alunoEncontrado.nota >= 6) {
    return alunoEncontrado;
  }
};
var alunoAprovado = alunos.filter(function (aluno) {
  return verificaNotas(aluno.nome);
});
console.log(verificaNotas("Gustavo"));

// console.log(alunos[0].nota);

// const verificaNotas = alunos.filter((aluno) => {
//   return aluno.nota >= 6;
// });

// console.log(verificaNotas);