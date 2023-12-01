"use strict";
const alunos = [
    {
        nome: "Gustavo",
        cursos: ["Front-end", "UX/UI"],
        idade: 27,
    },
    {
        nome: "Ana",
        cursos: ["Front-end", "Pyton"],
        idade: 23,
    },
];
alunos.push({
    nome: "Pedro",
    cursos: ["Front-end", "Pyton"],
    idade: 23,
});
const novoAluno = {
    nome: "Lucas",
    idade: 32,
}; //CTRL + space para mostrar as propriedades já pré-definidas
alunos.push(novoAluno);
function exibeAluno(aluno) {
    console.log(novoAluno);
}
exibeAluno(novoAluno);
