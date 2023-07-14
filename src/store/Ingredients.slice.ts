import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Ingredient} from "../components/interfaces.ts";


export interface IngredientsGuidebook {
    ingredients: Ingredient[]
}
const initialState: IngredientsGuidebook = {
    ingredients: [] as Ingredient[]
}

const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState,
    reducers: {
        setIngredients(state, action: PayloadAction<Ingredient[]>) {
            state.ingredients = action.payload
        },
        addIngredientToIngredients(state, action: PayloadAction<Ingredient>) {
            state.ingredients.push(action.payload)
        },

    }
})
export const {
    setIngredients,
    addIngredientToIngredients,

} = ingredientsSlice.actions
export default ingredientsSlice.reducer