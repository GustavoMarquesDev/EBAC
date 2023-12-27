import { Paragrafo } from '../../components/Paragrafo'
import Titulo from '../../components/Titulo/index'
import { TittleContainer } from './styles'

const Header = () => (
  <TittleContainer>
    <Titulo fontSize={40} color="#fff">
      EBAC JOBS
    </Titulo>
    <Paragrafo fontSize={18}>O melhor site de empregos</Paragrafo>
  </TittleContainer>
)

export default Header
