// 3rd
import { configureStore,combineReducers } from "@reduxjs/toolkit"
import  Reducer  from "../reducer/Reducer";
// import ThemeReducer  from "../reducer/ThemeReducer";
import ThemeReducer from "../reducer/ThemeReducer";

const totalReducers=combineReducers({Reducer,ThemeReducer})
export const myStore=configureStore({reducer:totalReducers});








