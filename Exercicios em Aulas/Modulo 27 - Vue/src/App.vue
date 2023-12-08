<script setup>
import { reactive } from "vue";

const nome = "Gustavo";
const meuObj = {
  nome: "Gustavo",
  filme: "Eu sou a lenda",
};

const enderecoDaImagem =
  "https://img.ibxk.com.br/2023/12/02/max-02151244904007.jpg?ims=328x";

const enderecoDaImagem2 =
  "https://s2-techtudo.glbimg.com/GwUdSlw8BKHvU5mAslozJF9W7Xc=/0x0:1200x628/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/6/0/R712LkTCmKF3A3iM33Dw/yuji-itadori.jpg";
const botaoEstaDesabilitado = true;

const gostaDeHouse = true;
const gostaDeJujustu = false;
const estaAutorizado = false;

const estado = reactive({
  contador: 0,
  email: "",
  saldo: 5000,
  transferindo: 0,
  nomes: ["Gustavo", "Willian", "Guilherme"],
  nomeAinserir: "",
});

const incrementar = () => estado.contador++;
const decrementar = () => estado.contador--;

function dizOi() {
  return `${nome} diz oi`;
}

function alteraEmail(evento) {
  estado.email = evento.target.value;
}

function mostraSaldoFuturo() {
  const { saldo, transferindo } = estado;
  return saldo - transferindo;
}

function alteraTransferindo(evento) {
  estado.transferindo = evento.target.value;
}

function validaValorTransferencia() {
  const { saldo, transferindo } = estado;
  return saldo >= transferindo;
}

function inserirNome(evento) {
  estado.nomeAinserir = evento.target.value;
}

function cadastrarNome() {
  if (estado.nomeAinserir.length >= 3) {
    estado.nomes.push(estado.nomeAinserir);
  } else {
    alert("Digite um nome válido");
  }
}
</script>

<template>
  <h1>{{ dizOi() }}</h1>
  <img v-if="gostaDeHouse" :src="enderecoDaImagem" alt="" />
  <img v-else-if="gostaDeJujustu" :src="enderecoDaImagem2" alt="" />
  <h2 v-else>Não curte series e filmes</h2>

  <h1 v-if="estaAutorizado">Bem-vindo</h1>
  <h1 v-else>Não possui acesso</h1>

  <button :disabled="botaoEstaDesabilitado">Enviar mensagem</button>
  <br />
  <hr />

  {{ estado.contador }}
  <button @click="incrementar" type="button">+</button>
  <button @click="decrementar" type="button">-</button>
  <br />
  <hr />

  {{ estado.email }}
  <input type="email" @keyup="alteraEmail" placeholder="E-mail" />
  <!-- <input type="email" @keyup="evento => estado.email = evento.target.value" /> -->
  <br />
  <hr />

  Saldo: {{ estado.saldo }} <br />
  Transferido: {{ estado.transferindo }} <br />
  Saldo depois da transferência: {{ mostraSaldoFuturo() }}
  <br />

  <input
    :class="{ invalido: !validaValorTransferencia() }"
    type="number"
    @keyup="alteraTransferindo"
    placeholder="Quantia para transferir"
  />
  <!-- :class="{invalido:estado.transferindo > estado.saldo}" SE NÃO FOSSE FEITA UMA FUNÇÃO -->

  <button v-if="validaValorTransferencia()">Transferir</button>
  <span v-else>Valor maior que o saldo</span>
  <br />
  <hr />

  <ul>
    <li v-for="nome in estado.nomes">
      {{ nome }}
    </li>
  </ul>
  <input @keyup="inserirNome" type="text" placeholder="Digite um novo nome" />
  <button @click="cadastrarNome" type="button">Cadastrar nome</button>

  <h3 v-for="nome in estado.nomes">{{ nome }}</h3>
</template>

<style scoped>
img {
  max-width: 500px;
}

.invalido {
  outline-color: red;
}

.aceito {
  border-color: green;
  border-radius: 5%;
}

.recusado {
  border: 5px solid red;
}
</style>
