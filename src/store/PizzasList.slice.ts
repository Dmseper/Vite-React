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
    clearPizzasList(state) {
      state.pizzasList = [] as Pizza[]
    },
  }
})
export const {setPizzasList, clearPizzasList} = pizzaListSlice.actions
export default pizzaListSlice.reducer