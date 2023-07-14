import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item, ItemList } from "../components/interfaces.ts";


const initialState: ItemList = {
    itemList: [] as Item[]
};
const itemListSlice = createSlice({
    name: 'itemsList',
    initialState,
    reducers: {
        setItemList(state, action: PayloadAction<Item[]>) {
            state.itemList = action.payload;
        },
        addItemToItemsList(state, action: PayloadAction<Item>) {
            state.itemList.push(action.payload);
        },
        updateItemFromItemList(state, action: PayloadAction<Item>) {
            state.itemList = state.itemList.map(oldVersionItem => oldVersionItem.name === action.payload.name ? action.payload : oldVersionItem);
        },
        deleteItemFromItemList(state, action: PayloadAction<string>) {
            state.itemList = state.itemList.filter(item => item.name !== action.payload);
        },
    }
});
export const {
    setItemList,
    addItemToItemsList,
    updateItemFromItemList,
    deleteItemFromItemList
} = itemListSlice.actions;
export default itemListSlice.reducer;