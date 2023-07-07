import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Pizza} from "../components/interfaces.ts";


interface PizzaState {
  pizza: Pizza
}

const initialState: PizzaState = {
  pizza: {} as Pizza
}

const editPizzaSlice = createSlice({
  name: 'pizzaEdit',
  initialState,
  reducers: {
    setEditPizza(state, action: PayloadAction<Pizza>) {
      state.pizza = action.payload
    },
    clearEditPizza(state) {
      state.pizza = {} as Pizza
    },
  }
})
export const {setEditPizza, clearEditPizza} = editPizzaSlice.actions
export default editPizzaSlice.reducer