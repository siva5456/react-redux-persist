//
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const Reducer = createSlice({
    name: "cart",
    initialState,
    reducers: {
        AddItemToCart(state, action) {
            // console.log(action.payload);
            if (state.length == 0) {
                state.push({ Data: action.payload, quantity: 1 });
                // console.log("0");
            } else {

                const boolean = state?.some((product) => {
                    return product.Data.id === action.payload.id;
                });
                // console.log(boolean);
                if (boolean) {
                    state?.map((product) => {
                        if (product.Data.id === action.payload.id) {
                            product.quantity += 1;
                            // console.log("count");

                        }
                    });

                } else {
                    state.push({ Data: action.payload, quantity: 1 });
                    // console.log("no-count");
                }
            }
        },
        RemoveItemFromCart(state, action) {
            return state.filter((item, index) => {
                return index !== action.payload;
            });
        },
        increaseQuantity(state, action) {
            state?.map((product) => {
                if (product.Data.id === action.payload.id) {
                    product.quantity += 1;
                    // console.log("count");

                }
            });

        },
        decreaseQuantity(state, action) {
            state?.map((product) => {
                if (product.Data.id === action.payload.id) {
                    product.quantity -= 1;
                    // console.log("count");

                }
            });

        },

    },
});

export const { AddItemToCart, RemoveItemFromCart,increaseQuantity,decreaseQuantity } = Reducer.actions;

export default Reducer.reducer;

// redux reducer
// export const Reducer = (state =[], action) => {

//     switch (action.type) {

//         case "addItem":
//                return [...state, action.payload];

//         case "removeItem":
//         return state.filter((item,index)=>{ return index!==action.payload})

//         default:
//             return state;
//     }

// }
