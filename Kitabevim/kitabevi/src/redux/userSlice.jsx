import { createSlice } from "@reduxjs/toolkit";

const userInitialState={
    items : [],
    loggedInUser: null, 
   
};

const userSlice = createSlice({
    name : 'user',
    initialState : userInitialState,
    reducers : {
        addToUsers : (state,action) => {
            state.items.push(action.payload);
        },
        removeFromUsers : (state,action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id); 
        },
        loginUser: (state, action) => {
          const { email, password } = action.payload;
          const user = state.items.find((u) => u.email === email && u.password === password);
          if (user) {
            state.loggedInUser = user;
          }
        },
        logoutUser: (state) => {
          state.loggedInUser = null;
        },
    
    },
});

export const {addToUsers, removeFromUsers, loginUser, logoutUser} = userSlice.actions;
export default  userSlice.reducer;
