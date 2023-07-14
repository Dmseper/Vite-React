import { combineReducers, configureStore } from "@reduxjs/toolkit";
import editItemReducer from "./EditItem.slice.ts";
import itemsListReducer from "./ItemList.slice.ts";
import itemsCartReducer from "./ItemsCart.slice.ts";
import itemTypeReducer from "./ChosenItemType.ts";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  itemEditStore: editItemReducer,
  itemsListStore: itemsListReducer,
  itemsCartStore: itemsCartReducer,
  itemTypeStore: itemTypeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export default store;

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
