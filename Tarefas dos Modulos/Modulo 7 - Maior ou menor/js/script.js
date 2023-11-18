let form = document.querySelector(".main-form");
let maiorValor = document.querySelector("#campoA");
let menorValor = document.querySelector("#campoB");
let deuCerto = false;
let containerMensagemSucesso = document.querySelector(".success-message");
let errorMensagem = document.querySelector(".error-message");
let equalMensagem = document.querySelector(".equal-message");

function resetar() {
  // funçao que resta elementos
  containerMensagemSucesso.style.display = "none";
  errorMensagem.style.display = "none";
  equalMensagem.style.display = "none";
}

function verificaValor(numeroMaior, numeroMenor) {
  if (numeroMaior > numeroMenor) {
    return "correto";
  } else if (numeroMaior < numeroMenor) {
    return "errado";
  } else if (numeroMaior == numeroMenor) {
    return "igual";
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  resetar();

  let mensagemSucesso = `Você preencheu os campos corretamente, o valor: ${maiorValor.value} é maior que ${menorValor.value}`;

  deuCerto = verificaValor(maiorValor.value, menorValor.value);
  if (deuCerto === "correto") {
    containerMensagemSucesso = document.querySelector(".success-message");
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = "block";

    maiorValor.value = "";
    menorValor.value = "";
  } else if (deuCerto === "errado") {
    document.querySelector(".error-message").style.display = "block";
  } else if (deuCerto === "igual") {
    document.querySelector(".equal-message").style.display = "block";
  }
});
