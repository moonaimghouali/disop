import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: 0,
  isSignedIn : true,
  isAdmin : false,
  isManager : true,
  isUnite : false,
  isRespUnite : false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
    
    },
    decrement: (state) => {
      
    },
    incrementByAmount: (state, action) => {
     
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = userSlice.actions

export default userSlice.reducer