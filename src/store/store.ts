import {configureStore} from '@reduxjs/toolkit'
import editPizzaReducer from './EditPizza.slice.ts'
import pizzasListReducer from './PizzasList.slice.ts'

const store = configureStore({
  reducer: {
    pizzaEditStore: editPizzaReducer,
    pizzasListStore: pizzasListReducer
  }
})
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch