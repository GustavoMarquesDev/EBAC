import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'

//importação da API para criar um reducer para ela
import api from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    // O redux toolkit query faz a criação pra nós
    [api.reducerPath]: api.reducer
  },
  //o middleware trabalha no meio campo para fazer o restante funcionar corretamente
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
