import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../components/interfaces.ts";

interface ItemsCartState {
    itemsInCart: Item[];
    totalPrice: number;
    totalItemsCounter: number;
}

const initialState: ItemsCartState = {
    itemsInCart: [] as Item[],
    totalPrice: 0,
    totalItemsCounter: 0
};
const calculatePrice = (items: Item[]): number => {
    return items.map(item => +item.price).reduce((total, current) => total + current);
};


const itemCartSlice = createSlice({
    name: 'itemsCart',
    initialState,
    reducers: {
        setItemsCart(state, action: PayloadAction<Item[]>) {
            state.itemsInCart = action.payload;
            state.totalItemsCounter = action.payload.length;
            state.totalPrice = calculatePrice(action.payload);
        },
        addItemToItemsCart(state, action: PayloadAction<Item>) {
            state.itemsInCart.push(action.payload);
            state.totalItemsCounter = state.itemsInCart.length;
            state.totalPrice = calculatePrice(state.itemsInCart);
        },
        deleteItemFromItemsCart(state, action: PayloadAction<string>) {
            state.itemsInCart = state.itemsInCart.filter(item => item.name !== action.payload);
            state.totalItemsCounter = state.itemsInCart.length;
            state.totalPrice = calculatePrice(state.itemsInCart);
        },

    }
});
export const {
    setItemsCart,
    addItemToItemsCart,
    deleteItemFromItemsCart,
} = itemCartSlice.actions;
export default itemCartSlice.reducer;