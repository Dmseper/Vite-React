import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../components/interfaces.ts";


interface ItemState {
  item: Item;
}

const initialState: ItemState = {
  item: {} as Item
};

const editItemSlice = createSlice({
  name: 'pizzaEdit',
  initialState,
  reducers: {
    setEditItem(state, action: PayloadAction<Item>) {
      state.item = action.payload;
    },
    clearEditItem(state) {
      state.item = {} as Item;
    },
  }
});
export const { setEditItem, clearEditItem } = editItemSlice.actions;
export default editItemSlice.reducer;