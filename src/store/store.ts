import { combineReducers, configureStore } from "@reduxjs/toolkit"
import editPizzaReducer from "./EditPizza.slice.ts"
import pizzasListReducer from "./PizzasList.slice.ts"
import CartReducer from "./Cart.slice.ts"
import ingredientsReducer from "./Ingredients.slice.ts"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: "root",
  storage,
}

const rootReducer = combineReducers({
  pizzaEditStore: editPizzaReducer,
  pizzasListStore: pizzasListReducer,
  CartStore: CartReducer,
  ingredientsStore: ingredientsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export default store

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
