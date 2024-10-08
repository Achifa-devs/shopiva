import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  entrepreneur_cookie: null,
}

export const entrepreneur_cookie_slice = createSlice({
  name: 'entrepreneur_cookie',
  initialState,
  reducers: {
    set_entrepreneur_cookie: (state, action) => {
      state.entrepreneur_cookie = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { set_entrepreneur_cookie } = entrepreneur_cookie_slice.actions

export default entrepreneur_cookie_slice.reducer

  
  