import { useDispatch, useSelector } from 'react-redux'
import { FormContainer, HeroBanner, InputForm, ButtonForm } from './style'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

const Hero = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <HeroBanner>
      <FormContainer>
        <InputForm
          placeholder="Front-end, fullstack, node, design"
          type="search"
          value={termo}
          onChange={(e) => dispatch(alterarTermo(e.target.value))}
        />
        <ButtonForm type="submit">Buscar vaga</ButtonForm>
      </FormContainer>
    </HeroBanner>
  )
}

export default Hero
