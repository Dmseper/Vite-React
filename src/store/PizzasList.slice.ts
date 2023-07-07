import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Pizza} from "../components/interfaces.ts";

interface PizzasListState {
  pizzasList: Pizza[]
}

const initialState: PizzasListState = {
  pizzasList: [] as Pizza[]
}

const pizzaListSlice = createSlice({
  name: 'pizzasList',
  initialState,
  reducers: {
    setPizzasList(state, action: PayloadAction<Pizza[]>) {
      state.pizzasList = action.payload
    },
    addPizzaToPizzasList(state, action: PayloadAction<Pizza>) {
      state.pizzasList.push(action.payload)
    },
    updatePizzaFromPizzaList(state, action: PayloadAction<Pizza>) {
      state.pizzasList = state.pizzasList.map(oldVersionPizza => oldVersionPizza.name === action.payload.name ? action.payload : oldVersionPizza)
    },
    deletePizzaFromPizzaList(state, action: PayloadAction<string>) {
      state.pizzasList = state.pizzasList.filter(pizza => pizza.name !== action.payload)
    },
    clearPizzasList(state) {
      state.pizzasList = [] as Pizza[]
    },
  }
})
export const {
  setPizzasList,
  addPizzaToPizzasList,
  updatePizzaFromPizzaList,
  deletePizzaFromPizzaList,
  clearPizzasList
} = pizzaListSlice.actions
export default pizzaListSlice.reducer