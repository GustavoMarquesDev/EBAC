function calculaArea(base: number, altura: number): number {
  return base * altura;
}

const calculaArea2 = (base: number, altura: number): number => base * altura;

function somar(...numeros: number[]): void {
  // void para retorn vazio
  console.log(numeros);
}

function teste(): string | number {
  if (10 > 5) {
    return "dez é maior que cinco";
  } else {
    return 5;
  }
}

const resultadoDoTeste = teste();
