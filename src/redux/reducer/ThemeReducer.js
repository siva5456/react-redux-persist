// second
import { createSlice } from "@reduxjs/toolkit";


const ThemeReducer = createSlice({
  name: "ThemeReducer",
  initialState:false ,
  reducers: {
    changeTheme(state, action) {
       return action.payload
    },
  }
});

export const {changeTheme} =ThemeReducer.actions

export default ThemeReducer.reducer;

// export const ThemeReducer = (state =false, action) => {

//     switch (action.type) {

//         case "changeTheme":
//         return action.payload
      
//         default:
//             return state;
//     }

// }












