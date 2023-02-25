import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: 0,
  isSignedIn : true,
  isAdmin : false,
  isManager : false,
  isUnite : false,
  isRespUnite : true
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    Logout: (state) => {
      state.id = -1
      state.isSignedIn = false
      state.isAdmin = false
      state.isManager = false
      state.isUnite = false
      state.isRespUnite = false
    },
    LoginAdmin: (state) => {
      state.id = 0
      state.isSignedIn = true
      state.isAdmin = true
      state.isManager = false
      state.isUnite = false
      state.isRespUnite = false
    },
    LoginUnite: (state) => {
      state.id = 0
      state.isSignedIn = true
      state.isAdmin = false
      state.isManager = false
      state.isUnite = true
      state.isRespUnite = false
    },
    LoginManager: (state) => {
      state.id = 0
      state.isSignedIn = true
      state.isAdmin = false
      state.isManager = true
      state.isUnite = false
      state.isRespUnite = false
    },
    LoginResp: (state) => {
      state.id = 0
      state.isSignedIn = true
      state.isAdmin = false
      state.isManager = false
      state.isUnite = false
      state.isRespUnite = true
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { Logout, LoginAdmin, LoginManager, LoginUnite,  LoginResp } = userSlice.actions

export default userSlice.reducer