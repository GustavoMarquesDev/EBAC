<script setup>
import { reactive } from "vue";

const estado = reactive({
  primeiroNumero: "0",
  segundoNumero: "0",

  operacao: "Selecione",

  resultado: 0,
});

const soma = () => {
  estado.resultado =
    parseInt(estado.primeiroNumero) + parseInt(estado.segundoNumero);
  return estado.resultado || estado.primeiroNumero || estado.segundoNumero || 0;
};

const subtracao = () => {
  estado.resultado =
    parseInt(estado.primeiroNumero) - parseInt(estado.segundoNumero);
  return estado.resultado || estado.primeiroNumero || estado.segundoNumero || 0;
};

const divisao = () => {
  estado.resultado =
    parseInt(estado.primeiroNumero) / parseInt(estado.segundoNumero);
  return estado.resultado || estado.primeiroNumero || estado.segundoNumero || 0;
};

const multiplicacao = () => {
  estado.resultado =
    parseInt(estado.primeiroNumero) * parseInt(estado.segundoNumero);
  return estado.resultado || estado.primeiroNumero || estado.segundoNumero || 0;
};

const getOperacoes = () => {
  const { operacao } = estado;
  switch (operacao) {
    case "Somar":
      return soma();
    case "Subtrair":
      return subtracao();

    case "Dividir":
      return divisao();

    case "Multiplicar":
      return multiplicacao();
    default:
      return "0";
  }
};
</script>

<template>
  <div class="container">
    <header class="mt-5 bg-light p-3 mb-4 rounded-3">
      <h1>Calculadora Aritimética</h1>
    </header>
    <div class="form-control">
      <div class="row p-2">
        <input
          @keyup="(evento) => (estado.primeiroNumero = evento.target.value)"
          type="number"
          class="col-md-2 me-2 rounded-1 p-1"
          placeholder="Digite um número"
        />

        <input
          @keyup="(evento) => (estado.segundoNumero = evento.target.value)"
          type="number"
          class="col-md-2 rounded-1"
          placeholder="Digite um número"
        />

        <select
          @change="(evento) => (estado.operacao = evento.target.value)"
          class="col-md-1 rounded-1 p-1 ms-5"
        >
          <option class="rounded-1 p-1" value="Escolha a operação">
            Selecione
          </option>
          <option class="rounded-1 p-1" value="Somar">Somar</option>
          <option class="rounded-1 p-1" value="Subtrair">Subtrair</option>
          <option class="rounded-1 p-1" value="Dividir">Dividir</option>
          <option class="rounded-1 p-1" value="Multiplicar">Multiplicar</option>
        </select>
      </div>
      <div class="row mt-5">
        <div class="col">
          <h3>{{ getOperacoes() }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
