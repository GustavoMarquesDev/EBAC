$(document).ready(function () {
  //Para utilizar a mascara nos campos depois de linkado o plugin
  $("#telefone").mask("(00) 00000-0000", {
    placeholder: "(99) 99999-9999",
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
    },
    messages: {
      nomeCompleto: "Por favor, insira o seu nome completo",
      email: "Por favor, insira um e-mail válido",
      telefone: "Por favor, insira um número de telefone válido",
    },

    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`);
      }
    },
  });
});
