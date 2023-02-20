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
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    
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