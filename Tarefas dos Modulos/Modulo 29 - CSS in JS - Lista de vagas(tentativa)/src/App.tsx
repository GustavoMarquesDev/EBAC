import Header from './containers/Header'
import Hero from './containers/Hero'
import Vagas from './containers/Vagas'

import { DivPrincipal, EstiloGlobal } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Hero />
      <DivPrincipal>
        <Vagas />
      </DivPrincipal>
    </>
  )
}

export default App
