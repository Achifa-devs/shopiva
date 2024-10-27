import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    floater_src: 'profile',
  }
  
  export const floater_src_slice = createSlice({
    name: 'floater_src',
    initialState,
    reducers: {
      set_floater_src: (state, action) => {
        state.floater_src = action.payload
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { set_floater_src } = floater_src_slice.actions
  
  export default floater_src_slice.reducer

  
  