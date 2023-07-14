import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Drink, Pizza, Roll, Snacks} from "../components/interfaces.ts";


interface ItemCartState {
  pizzasInCart: Map<string, Pizza[]>
  rollsInCart: Map<string, Roll[]>
  drinksInCart: Map<string, Snacks[]>
  snacksInCart: Map<string, Drink[]>
  totalPrice: number
  totalItemCounter: number
}

const initialState: ItemCartState = {
  pizzasInCart: new Map<string, Pizza[]>(),
  rollsInCart: new Map<string, Roll[]>(),
  drinksInCart: new Map<string, Snacks[]>(),
  snacksInCart: new Map<string, Drink[]>(),
  totalPrice: 0,
  totalItemCounter: 0
}
// const calculatePrice = (items: Item[]): number => {
//     return items.map(item => +item.price).reduce((total, current) => total + current)
// }
const createKeyForPizza = (item: Pizza): string => {
  return `${item.name}` + `${item.dough}` + `${item.size}` + `${item.adds?.map(ingredient => ingredient.name)}`
}
// const createKeyForRolls = (item: Roll) :string => {
//     return `${item.name}`+`${item.type}`
// }
// const createKeyForDrinks= (item: Drink) :string => {
//     return `${item.name}`+`${item.size}`
// }
// const createKeyForSnacks = (item: Snacks) :string => {
//     return `${item.name}`+`${item.type}`
// }


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    addPizzaToCart(state, action: PayloadAction<Pizza>) {
      state.pizzasInCart.set(createKeyForPizza(action.payload), [action.payload])
    },
    deletePizzaFromCart(state, action: PayloadAction<Pizza>) {
      const a = state.pizzasInCart.get(createKeyForPizza(action.payload))?.slice()
      console.log(a)
    },

  }
})
export const {
  addPizzaToCart,
  deletePizzaFromCart,
} = cartSlice.actions
export default cartSlice.reducer