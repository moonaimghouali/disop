import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bilanMouvement: {
    hide : true ,
    bilan : {}
  },
  bilanUnite : {
    hide : true,
    bilanProductionUnite : {},
    bilanProductionBacs : [],
    bacsOperations : []
  }
}

export const bilansSlice = createSlice({
  name: 'bilans',
  initialState,
  reducers: {

    updateBilanMouvement: (state, action) => {
      state.bilanMouvement.hide = action.payload.hide
      state.bilanMouvement.bilan = action.payload.bilan
    },

    updateBilanUnite: (state, action) => {
      console.log(action.payload);
      state.bilanUnite.hide = action.payload.hide
      state.bilanUnite.bilanProductionUnite = action.payload.bilanProductionUnite
      state.bilanUnite.bilanProductionBacs = action.payload.bilanProductionBacs
      state.bilanUnite.bacsOperations = action.payload.bacsOperations
    },
  },
})

// Action creators are generated for each case reducer function
// export const { Logout, LoginAdmin, LoginManager, LoginUnite,  LoginResp } = userSlice.actions
export const { updateBilanMouvement, updateBilanUnite } = bilansSlice.actions

export default bilansSlice.reducer