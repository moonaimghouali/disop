import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bilanMouvement: {
    hide : true ,
    bilan : {}
  },
}

export const bilansSlice = createSlice({
  name: 'bilans',
  initialState,
  reducers: {

    updateBilanMouvement: (state, action) => {
      state.bilanMouvement.hide = action.payload.hide
      state.bilanMouvement.bilan = action.payload.bilan
    },
  },
})

// Action creators are generated for each case reducer function
// export const { Logout, LoginAdmin, LoginManager, LoginUnite,  LoginResp } = userSlice.actions
export const { updateBilanMouvement } = bilansSlice.actions

export default bilansSlice.reducer