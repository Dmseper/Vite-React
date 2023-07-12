import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Pizza, PizzasList} from "../components/interfaces.ts";


const initialState: PizzasList = {
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
    }
})
export const {
    setPizzasList,
    addPizzaToPizzasList,
    updatePizzaFromPizzaList,
    deletePizzaFromPizzaList
} = pizzaListSlice.actions
export default pizzaListSlice.reducer