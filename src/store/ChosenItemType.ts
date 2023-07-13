import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ItemType } from "../components/types.ts"

interface ItemState {
  itemType: ItemType
}

const initialState: ItemState = {
  itemType: "Pizza",
}

const itemTypeSlice = createSlice({
  name: "itemType",
  initialState,
  reducers: {
    setItemType(state, action: PayloadAction<ItemType>) {
      state.itemType = action.payload
    },
  },
})
export const { setItemType } = itemTypeSlice.actions
export default itemTypeSlice.reducer
