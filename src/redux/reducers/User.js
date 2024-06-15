// Importing the createSlice function from the Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Defining the initial state for the user slice of the store
const initialState = {
  isLoggedIn: false
};

// Creating a new slice of the store named "user" with its own set of reducers
export const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logIn: (state, action) => {
        return {
            ...state,
            ...{isLoggedIn: true},
            ...action.payload
        };
    },
    resetToInitialState: () => {
        return initialState;
    },
    updateToken: (state, action) => {
      state.token = action.payload
    }
  },
});

// Exporting the reducers here from the "User" slice
// makes them available to other parts of the app that want to use it
export const { logIn, resetToInitialState, updateToken } = User.actions;
export default User.reducer;