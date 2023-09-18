import { createSlice } from '@reduxjs/toolkit';
import { School } from "../../helper/Types";

 const schoolSlice = createSlice({
    name: 'school',
    initialState: [] as School[],
    reducers: {
      // Define user-related actions and reducers here
    },
  });
  
  export const { actions: schoolActions, reducer: schoolReducer } = schoolSlice;



  
