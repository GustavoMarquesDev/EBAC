import { Paragrafo } from '../Paragrafo'
import Subtitle from '../SubTitulo'
import Titulo from '../Titulo'
import { Botao, VagasContainer } from './style'

const Button = () => <Botao>Me candidatar</Botao>

const VagasAbertas = () => (
  <VagasContainer>
    <Titulo fontSize={25} color="#0b7285">
      Desenvolvedor Delphi
    </Titulo>
    <Subtitle fontSize={18} color="#0b7285">
      Principais funções:
    </Subtitle>
    <Paragrafo fontSize={15} color="#0b7285">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem cum id
      eos saepe placeat accusamus error suscipit adipisci. Minima ex labore
      magnam sapiente quod voluptatibus. Fuga est placeat delectus. Error.
    </Paragrafo>
    <Subtitle fontSize={18} color="#0b7285">
      Remuneração: R$ 5.500
    </Subtitle>
    <Subtitle fontSize={18} color="#0b7285">
      Tipo de vínculo: CLT
    </Subtitle>

    <Subtitle fontSize={18} color="#0b7285">
      Tipo da Vaga: Pleno
    </Subtitle>
    <Subtitle fontSize={18} color="#0b7285">
      Mandar curriculo para : emprasaX@hotmail.com
    </Subtitle>
    <Button />
  </VagasContainer>
)

export default VagasAbertas
