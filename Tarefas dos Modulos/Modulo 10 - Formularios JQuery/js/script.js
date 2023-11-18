$(document).ready(function () {
  //Para utilizar a mascara nos campos depois de linkado o plugin
  $("#telefone").mask("(00) 00000-0000", {
    placeholder: "(99) 99999-9999",
  });
  $("#cpf").mask("999.999.999-99", {
    placeholder: "999.999.999-99",
  });
  $("#cep").mask("99999-999", {
    placeholder: "99999-999",
  });

  //Para validação dos formularios
  $("form").validate({
    rules: {
      nomeCompleto: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      cpf: {
        required: true,
      },
      endereco: {
        required: true,
      },
      cep: {
        required: true,
      },
    },
    messages: {
      nomeCompleto: "Por favor, insira o seu nome completo",
      email: "Por favor, insira um e-mail válido",
      telefone: "Por favor, insira um número de telefone válido",
      cpf: "Por favor, insira um CPF válido",
      endereco: "Por favor, digite um endereço válido",
      cep: "Por favor, digite um cep válido",
    },

    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`);
      }
    },
  });
});
