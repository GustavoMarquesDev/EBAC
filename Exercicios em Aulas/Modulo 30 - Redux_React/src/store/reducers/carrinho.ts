import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../App'

// Tipo de estado
type CarrinhoState = {
  itens: Game[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  //Estado inicial do reducer, que é aquele objeto criado antes

  reducers: {
    // Onde fica a parte de atualização do estado

    // O tipo PayloadAction vem do Redux Toolkit, e o que está dentro do <> é o tipo de dado do Payload
    adicionar: (state, action: PayloadAction<Game>) => {
      const jogo = action.payload
      // Armazenamos o Payload da action na const jogo

      // Lógica de alteração do stage
      if (state.itens.find((game) => game.id === jogo.id)) {
        // Procurando o jogo dentro do estado
        alert('Item já adicionado')
      } else {
        state.itens.push(jogo)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer

//******************************  O codigo abaixo convertido em redux fica como o acima***********************************
// function adicionarAoCarrinho(jogo: Game) {
//   if (carrinho.find((game) => game.id === jogo.id)) {
//     alert('Item já adicionado')
//   } else {
//     setCarrinho([...carrinho, jogo])
//   }
// }
