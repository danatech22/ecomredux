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
            let addedItem = action.payload;
            let existedItem = state.products.find(item => item.id === action.payload.id);
            if (existedItem){
                existedItem.quantity += 1;
                state.total = state.total + addedItem.price;
            }else {
                state.quantity += 1;
                addedItem.quantity = 1;
                state.products.push(addedItem);
                state.total = state.total + addedItem.price;
            }
            //state.products.push(action.payload);
            //state.total += action.payload.price * action.payload.quantity;
        },
        addQuantity: (state, action) => {
            let addedItem = state.products.find(item=> item.id === action.payload);
            addedItem.quantity += 1;
            state.total = state.total + addedItem.price; ;
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