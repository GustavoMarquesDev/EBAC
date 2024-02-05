import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListadeTarefas'

const Home = () => {
  return (
    <>
      <BarraLateral mostrarFiltros />
      <ListaDeTarefas />
      <BotaoAdicionar />
    </>
  )
}

export default Home
