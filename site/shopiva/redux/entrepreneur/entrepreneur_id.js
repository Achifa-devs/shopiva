import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    entrepreneur_id: null,
  }
  
  export const entrepreneur_id_slice = createSlice({
    name: 'entrepreneur_id',
    initialState,
    reducers: {
      set_entrepreneur_id_to: (state, action) => {
        // alert(action.payload)
        state.entrepreneur_id = action.payload
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { set_entrepreneur_id_to } = entrepreneur_id_slice.actions
  
  export default entrepreneur_id_slice.reducer

  
  