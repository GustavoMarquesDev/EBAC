import { configureStore } from '@reduxjs/toolkit'
import filtroReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
