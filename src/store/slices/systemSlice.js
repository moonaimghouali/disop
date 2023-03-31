import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  code : "", 
  nom : "",
  id : -1,
}

export const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {

    intitializeSystemInfo: (state, action) => {
      state.code = action.payload.code
      state.nom = action.payload.nom
      state.id = action.payload.id
    }
  },
})

// Action creators are generated for each case reducer function
// export const { Logout, LoginAdmin, LoginManager, LoginUnite,  LoginResp } = userSlice.actions
export const { intitializeSystemInfo } = systemSlice.actions

export default systemSlice.reducer