import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    entrepreneur_data: null,
  }
  
  export const entrepreneur_data_slice = createSlice({
    name: 'entrepreneur_data',
    initialState,
    reducers: {
      set_entrepreneur_data_to: (state, action) => {
        // alert(action.payload)
        state.entrepreneur_data = action.payload
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { set_entrepreneur_data_to } = entrepreneur_data_slice.actions
  
  export default entrepreneur_data_slice.reducer

  
  