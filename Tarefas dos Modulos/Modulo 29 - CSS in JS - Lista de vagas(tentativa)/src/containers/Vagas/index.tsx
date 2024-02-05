import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import {
  Botao,
  TituloCard,
  UlContainer,
  VagasContainer,
  VagasContainerCard
} from './style'
import VagasClass from '../../models/Vagas'
import * as enums from '../../util/enums/Vagas'
import Titulo from '../../components/Titulo'
import { Paragrafo } from '../../components/Paragrafo'
import { Span, Subtitulo } from '../../components/SubTitulo/styles'
import { SemVagas } from './style'

type Props = {
  vagas: VagasClass[]
}

const vagas: VagasClass[] = [
  {
    titulo: 'Desenvolvedor Delphi',
    descricao:
      'Desenvolver sistemas desktop, fazer correções e integrar o time de desenvolvimento',
    remuneracao: 10000,
    vinculo: enums.Vinculo.CLT,
    tipo: enums.Tipo.HOMEOFFICE,
    cargo: enums.Cargo.SENIOR,
    email: 'gustavo-markes@hotmail.com',
    id: 1
  },
  {
    titulo: 'Desenvolvedor C#',
    descricao:
      'Desenvolver sistemas web, fazer correções e integrar o time de desenvolvimento',
    remuneracao: 4500,
    vinculo: enums.Vinculo.PJ,
    tipo: enums.Tipo.HOMEOFFICE,
    cargo: enums.Cargo.JUNIOR,
    email: 'gustavo-markes@hotmail.com',
    id: 2
  },
  {
    titulo: 'Desenvolvedor .NET',
    descricao:
      'Desenvolver sistemas web, fazer correções e integrar o time de desenvolvimento',
    remuneracao: 5000,
    vinculo: enums.Vinculo.CLT,
    tipo: enums.Tipo.HIBRIDO,
    cargo: enums.Cargo.PLENO,
    email: 'gustavo-markes@hotmail.com',
    id: 3
  },
  {
    titulo: 'Desenvolvedor Java',
    descricao:
      'Desenvolver sistemas web, fazer correções e integrar o time de desenvolviment',
    remuneracao: 6000,
    vinculo: enums.Vinculo.CLT,
    tipo: enums.Tipo.PRESENCIAL,
    cargo: enums.Cargo.PLENO,
    email: 'gustavo-markes@hotmail.com',
    id: 4
  },
  {
    titulo: 'Desenvolvedor Python',
    descricao:
      'Integrar junto a equipe em projetos de inteligência artificial e banco de dados ',
    remuneracao: 12000,
    vinculo: enums.Vinculo.PJ,
    tipo: enums.Tipo.HOMEOFFICE,
    cargo: enums.Cargo.SENIOR,
    email: 'gustavo-markes@hotmail.com',
    id: 5
  },
  {
    titulo: 'Desenvolvedor React',
    descricao:
      'Desenvolver aplicações React, fazer interfaces web e também se possivel noções de React Native',
    remuneracao: 5200,
    vinculo: enums.Vinculo.PJ,
    tipo: enums.Tipo.PRESENCIAL,
    cargo: enums.Cargo.PLENO,
    email: 'gustavo-markes@hotmail.com',
    id: 6
  }
]

const ListaVagas = () => {
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const filtraVagas = () => {
    return vagas.filter(
      (vaga) => vaga.titulo.toLowerCase().search(termo.toLocaleLowerCase()) >= 0
    )
  }
  return (
    <VagasContainer>
      {filtraVagas().length > 0 ? (
        <UlContainer>
          {filtraVagas().map((vaga: VagasClass) => (
            <VagasContainerCard key={vaga.id}>
              <li>
                <Titulo fontSize={22} color={'#1098ad'}>
                  {vaga.titulo}
                </Titulo>

                <Subtitulo fontSize={17} color="#1098ad">
                  <>
                    <Span fontSize={18} color="#1098ad">
                      Descrição
                    </Span>
                    <Paragrafo fontSize={14} color="black">
                      {vaga.descricao}
                    </Paragrafo>
                  </>
                </Subtitulo>
                <Subtitulo fontSize={15} color="black">
                  Remuneração: R${vaga.remuneracao}
                </Subtitulo>
                <Subtitulo fontSize={15} color="black">
                  Tipo de contrato: {vaga.vinculo}
                </Subtitulo>
                <Subtitulo fontSize={15} color="black">
                  Tipo de contrato: {vaga.tipo}
                </Subtitulo>
                <Paragrafo fontSize={15} color="black">
                  Mandar e-mail para: {vaga.email}
                </Paragrafo>

                <Botao>Me candidatar</Botao>
              </li>
            </VagasContainerCard>
          ))}
        </UlContainer>
      ) : (
        <SemVagas>Nenhuma vaga foi encontrada</SemVagas>
      )}
    </VagasContainer>
  )
}

export default ListaVagas
