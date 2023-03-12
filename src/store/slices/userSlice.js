import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo : {}, 
  isSignedIn : false,
  // isAdmin : false,
  // isManager : false,
  // isUnite : false,
  // isRespUnite : false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    Logout: (state) => {
      localStorage.removeItem("jwt")
      state.userInfo = {}
      state.isSignedIn = false
      // state.isAdmin = false
      // state.isManager = false
      // state.isUnite = false
      // state.isRespUnite = false
    },

    Login (state, action) {
      state.userInfo = action.payload
      state.isSignedIn = true

    }

    // LoginAdmin: (state, action) => {
    //   state.userInfo = action.payload
      
    //   state.isSignedIn = true
    //   state.isAdmin = true
    //   state.isManager = false
    //   state.isUnite = false
    //   state.isRespUnite = false
    // },

    // LoginUnite: (state, action) => {
    //   state.userInfo = action.payload
    //   state.isSignedIn = true
    //   state.isAdmin = false
    //   state.isManager = false
    //   state.isUnite = true
    //   state.isRespUnite = false
    // },

    // LoginManager: (state, action) => {
    //   state.userInfo = action.payload
    //   state.isSignedIn = true
    //   state.isAdmin = false
    //   state.isManager = true
    //   state.isUnite = false
    //   state.isRespUnite = false
    // },
    
    // LoginResp: (state, action) => {
    //   state.userInfo = action.payload
    //   state.isSignedIn = true
    //   state.isAdmin = false
    //   state.isManager = false
    //   state.isUnite = false
    //   state.isRespUnite = true
    // },
    
  },
})

// Action creators are generated for each case reducer function
// export const { Logout, LoginAdmin, LoginManager, LoginUnite,  LoginResp } = userSlice.actions
export const { Logout, Login } = userSlice.actions

export default userSlice.reducer