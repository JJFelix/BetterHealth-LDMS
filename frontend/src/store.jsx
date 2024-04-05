import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { thunk } from "redux-thunk";

const persistConfig = {
    key: 'root',
    version: 1,
    storage
  }
  
  const reducer = combineReducers({
    auth: authReducer,
  });
  
  const persistedReducer = persistReducer(persistConfig, reducer);
  
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
      return [thunk]
    },
  });
  
  export default store