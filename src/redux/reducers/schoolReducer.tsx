import { createSlice,PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import {GetAllSchools} from "../../helper/ApiHelper";
import { School } from "../../helper/Types";

interface SchoolState {
  schools: School[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}
const initialState: SchoolState = {
  schools: [],
  loading: 'idle',
  error:  null,
};


export const getAllSchools = createAsyncThunk('school/GetAllSchools', async () => {
  const response = await GetAllSchools('https://jsonplaceholder.typicode.com/users');
  return response.data as School[]; // Return the fetched data
});

 const schoolSlice = createSlice({
    name: 'school',
    initialState,
    reducers: {      
      addSchool: (state, action: PayloadAction<School>) => {
        state.schools.push(action.payload);
      },
      editSchool: (state, action: PayloadAction<{ id: number; inputData: Partial<School> }>) => {
        const { id, inputData } = action.payload;
        const schoolIndex = state.schools.findIndex(school => school.id === id);
        if (schoolIndex !== -1) {
          state.schools[schoolIndex] = { ...state.schools[schoolIndex], ...inputData };
        }
      },      
    },
  }); 

  export const { editSchool, addSchool } = schoolSlice.actions;
  export default schoolSlice.reducer;



  
