import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
    },
    reducers: {
       authStart : (state) => {
            state.isFetching = true;
       },
       authSuccess :(state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
       },
       authFailure : (state, action) => {
            state.isFetching = false;
            state.error = action.payload;
       },
       authLogout : (state) => {
          state.isFetching = false;
          state.currentUser = null;
       }
    } 
});

export const { authStart, authSuccess, authFailure, authLogout } = userSlice.actions;
export default userSlice.reducer;