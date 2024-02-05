import * as enums from '../util/enums/Vagas'

class VagasClass {
  titulo: string
  descricao: string
  remuneracao: number
  vinculo: enums.Vinculo
  tipo: enums.Tipo
  cargo: enums.Cargo
  email: string
  id: number

  constructor(
    titulo: string,
    descricao: string,
    remuneracao: number,
    vinculo: enums.Vinculo,
    tipo: enums.Tipo,
    cargo: enums.Cargo,
    email: string,
    id: number
  ) {
    this.titulo = titulo
    this.descricao = descricao
    this.remuneracao = remuneracao
    this.vinculo = vinculo
    this.tipo = tipo
    this.cargo = cargo
    this.email = email
    this.id = id
  }
}

export default VagasClass
