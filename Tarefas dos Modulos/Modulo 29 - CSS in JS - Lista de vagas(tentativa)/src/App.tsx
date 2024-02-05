import { Provider } from 'react-redux'
import Header from './containers/Header'
import Hero from './containers/Hero'
import ListaVagas from './containers/Vagas'

import { DivPrincipal, EstiloGlobal } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Header />
      <Hero />
      <DivPrincipal>
        <ListaVagas />
      </DivPrincipal>
    </Provider>
  )
}

export default App
