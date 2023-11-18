let form = document.getElementById("form-deposito");
let nomeBeneficiario = document.getElementById("nome-beneficiario");
let numeroContaBeneficiario = document.getElementById("numero-conta");
let valorDeposito = document.getElementById("valor-deposito");
let mensagemSucesso;
let formEValido = false;

function validaNome(nomeCompleto) {
  let nomeComoArrey = nomeCompleto.split(" ");
  return nomeComoArrey.length >= 2;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>`;

  formEValido = validaNome(nomeBeneficiario.value);
  if (formEValido) {
    const containerMensagemSucesso = document.querySelector(".seccess-message");
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = "block";

    nomeBeneficiario.value = "";
    numeroContaBeneficiario.value = "";
    valorDeposito.value = "";
  } else {
    nomeBeneficiario.style.border = "1px solid red";
    document.querySelector(".error-message").style.display = "block";
  }
});

nomeBeneficiario.addEventListener("keyup", function (e) {
  formEValido = validaNome(e.target.value);

  if (!formEValido) {
    nomeBeneficiario.classList.add("error");
    document.querySelector(".error-message").style.display = "block";
  } else {
    nomeBeneficiario.classList.remove("error");
    document.querySelector(".error-message").style.display = "none";
  }
});
