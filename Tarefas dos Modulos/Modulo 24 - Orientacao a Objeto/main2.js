function Veiculo(cor, marca, valor) {
  this.cor = cor;
  this.marca = marca;
  this.valor = valor;

  this.ipva = function () {
    let valorDoIpva = this.valor * 0.04; //4% Taxa padrão para veiculos
    return valorDoIpva;
  };
}

function Moto(cc, placa, valor) {
  this.cc = cc;
  let _placa = placa;

  this.getPlaca = function () {
    return _placa;
  };

  this.setPlaca = function (placa) {
    _placa = placa;
  };
  this.valor = valor;

  Veiculo.call(this, "Preta", "Honda", 18000);

  this.ipva = () => {
    let valorDoIpva = this.valor * 0.02;
    return valorDoIpva;
  };
}

function Carro(zeroAcem, valor) {
  this.zeroAcem = zeroAcem;

  this.ipva = () => {
    let valorDoIpva = valor * 0.04;
    return valorDoIpva;
  };

  Veiculo.call(this, "Azul", "Toyota", "120000");
}

const veiculoPedro = new Veiculo("Preta", "Kawasaki", "55000", 800);
const motoDoPaulo = new Moto(250, "ABC-1234");
const carroDoLucas = new Carro(8, 45000);
