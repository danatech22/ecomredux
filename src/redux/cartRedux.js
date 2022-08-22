import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        addQuantity: (state, action) => {
            let addedItem = state.products.find(item=> item.id === action.payload);
            addedItem.quantity += 1;
            let newTotal = state.total + addedItem.price; 
            state.total = newTotal;
        },
        subQuantity: (state, action) => {
            let addedItem = state.products.find(item => item.id === action.payload);
            if (addedItem.quantity === 1){
                state.products = state.products.filter(item => item.id !== action.payload);
                state.total = (state.total - addedItem.price).toFixed(2);
                state.quantity -= 1;
            }else {
                addedItem.quantity -= 1;
                state.total = (state.total - addedItem.price).toFixed(2);
            }
        }
    }
});

export const { addProduct, addQuantity, subQuantity } = cartSlice.actions;
export default cartSlice.reducer;