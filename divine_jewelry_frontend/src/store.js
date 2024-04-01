import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/productSlice";
import userSlice from "./features/userSlice";
import appApi from "./services/appApi";

// Persist our store
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// No need to import thunk here, as it's already included with getDefaultMiddleware

// Reducers
const reducer = combineReducers({
  user: userSlice,
  products: productSlice,
  [appApi.reducerPath]: appApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["products", appApi.reducerPath], // It's "blacklist", not "blackList"
};

// Persist our store
const persistedReducer = persistReducer(persistConfig, reducer);

// Creating the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // If you need to customize options for thunk or other middleware, do it here
    }).concat(appApi.middleware),
  // No need to explicitly add thunk here; it's included in getDefaultMiddleware
});

export default store;
