import { createSlice } from '@reduxjs/toolkit';
// import { User } from "../types/Types";

 const userSlice = createSlice({
    name: 'school',
    initialState: [],
    reducers: {
      // Define user-related actions and reducers here
    },
  });
  
  export const { actions: userActions, reducer: userReducer } = userSlice;