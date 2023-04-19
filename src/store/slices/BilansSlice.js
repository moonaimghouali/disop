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
  },
  bilanUniteRegion : {
    hide : true,
    bilanProductionUnite : {},
    mouvements : []
  },
  bilanRegion : {
    hide : true,
    bilanProductionRegion : {},
    bilansUnites : []
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
      state.bilanUnite.hide = action.payload.hide
      state.bilanUnite.bilanProductionUnite = action.payload.bilanProductionUnite
      state.bilanUnite.bilanProductionBacs = action.payload.bilanProductionBacs
      state.bilanUnite.bacsOperations = action.payload.bacsOperations
    },
    updateBilanUniteRegion: (state, action) => {
      
      state.bilanUniteRegion.hide = action.payload.hide
      state.bilanUniteRegion.bilanProductionUnite = action.payload.bilanProductionUnite
      state.bilanUniteRegion.mouvements = action.payload.mouvements
    },
    updateBilanRegion: (state, action) => {
      
      state.bilanRegion.hide = action.payload.hide
      state.bilanRegion.bilanProductionRegion = action.payload.bilanProductionRegion
      state.bilanRegion.bilansUnites = action.payload.bilansUnites
    },
  },
})

// Action creators are generated for each case reducer function
// export const { Logout, LoginAdmin, LoginManager, LoginUnite,  LoginResp } = userSlice.actions
export const { updateBilanMouvement, updateBilanUnite, updateBilanUniteRegion,updateBilanRegion } = bilansSlice.actions

export default bilansSlice.reducer