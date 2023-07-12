import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Pizza} from "../components/interfaces.ts";

interface PizzasCartState {
    pizzasInCart: Pizza[]
    totalPrice: number
    totalPizzasCounter: number
}

const initialState: PizzasCartState = {
    pizzasInCart: [] as Pizza[],
    totalPrice: 0,
    totalPizzasCounter: 0
}
const calculatePrice = (pizzas: Pizza[]): number => {
    return pizzas.map(item => +item.price).reduce((total, current) => total + current)
}


const pizzaCartSlice = createSlice({
    name: 'pizzasCart',
    initialState,
    reducers: {
        setPizzasCart(state, action: PayloadAction<Pizza[]>) {
            state.pizzasInCart = action.payload
            state.totalPizzasCounter = action.payload.length
            state.totalPrice = calculatePrice(action.payload)
        },
        addPizzaToPizzasCart(state, action: PayloadAction<Pizza>) {
            state.pizzasInCart.push(action.payload)
            state.totalPizzasCounter = state.pizzasInCart.length
            state.totalPrice = calculatePrice(state.pizzasInCart)
        },
        deletePizzaFromPizzasCart(state, action: PayloadAction<string>) {
            state.pizzasInCart = state.pizzasInCart.filter(pizza => pizza.name !== action.payload)
            state.totalPizzasCounter = state.pizzasInCart.length
            state.totalPrice = calculatePrice(state.pizzasInCart)
        },

    }
})
export const {
    setPizzasCart,
    addPizzaToPizzasCart,
    deletePizzaFromPizzasCart,
} = pizzaCartSlice.actions
export default pizzaCartSlice.reducer