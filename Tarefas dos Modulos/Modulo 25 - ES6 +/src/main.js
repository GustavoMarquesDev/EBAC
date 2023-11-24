const alunos = [
  {
    nome: "Gustavo",
    nota: 10,
  },
  {
    nome: "WIllian",
    nota: 6,
  },
  {
    nome: "Guilherme",
    nota: 2,
  },
  {
    nome: "Pedro",
    nota: 8,
  },
  {
    nome: "João",
    nota: 7,
  },
];

const verificaNotas = (nome) => {
  let alunoEncontrado = alunos.find((aluno) => aluno.nome == nome);
  if (!alunoEncontrado) return;
  if (alunoEncontrado.nota >= 6) {
    return alunoEncontrado;
  }
};
const alunoAprovado = alunos.filter((aluno) => {
  return verificaNotas(aluno.nome);
});

console.log(verificaNotas("Gustavo"));

// console.log(alunos[0].nota);

// const verificaNotas = alunos.filter((aluno) => {
//   return aluno.nota >= 6;
// });

// console.log(verificaNotas);
