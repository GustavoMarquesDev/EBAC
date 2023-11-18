const form = document.querySelector("form");
let nome = [];
let numero = [];
let linhas = "";
const telefoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionaLinha();
  preencheTabela();
});

function adicionaLinha() {
  let nomeUsuario = document.querySelector("#nome-usuario");
  let numeroUsuario = document.querySelector("#numero-usuario");

  if (numero.includes(numeroUsuario.value)) {
    alert(
      `O número: ${numeroUsuario.value} já foi inserido na tabela por outro usuário `
    );
  } else {
    if (!telefoneRegex.test(numeroUsuario.value)) {
      alert("numero inválido");
      return;
    }

    nome.push(nomeUsuario.value);
    numero.push(numeroUsuario.value);
    let linha = "<tr>";
    linha += `<td>${nomeUsuario.value}</td>`;
    linha += `<td>${numeroUsuario.value}</td>`;
    linha += "</tr>";

    linhas += linha;

    nomeUsuario.value = "";
    numeroUsuario.value = "";
  }
}

function preencheTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}
