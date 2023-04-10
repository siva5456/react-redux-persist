// 3rd
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import Reducer from "../reducer/Reducer";
import ThemeReducer from "../reducer/ThemeReducer";
import { persistReducer } from "redux-persist";
import ExpoFileSystemStorage from "redux-persist-expo-filesystem";

let persistConfig = {
  key: "root",
  storage: ExpoFileSystemStorage,
};

let rootReducer = combineReducers({
  Reducer: Reducer,
  ThemeReducer: ThemeReducer,
});

let persistedReducer = persistReducer(persistConfig, rootReducer);

export const myStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
