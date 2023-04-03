import { createSlice } from '@reduxjs/toolkit'
import * as api from '../../api/uniteApi'

const initialState = {
  uniteProduction : {
    loading : false,
    production : [],
    error : ""
  },
  
}

export const productionSlice = createSlice({
  name: 'production',
  initialState,
  reducers: {
  },
  extraReducers : (builder) =>{
    // UniteProduction
    builder.addCase(api.fetchUniteProduction.pending, (state)=>{state.uniteProduction.loading=true})
    builder.addCase(api.fetchUniteProduction.fulfilled, (state, action)=>{
      state.uniteProduction.loading=false
      state.uniteProduction.production = action.payload
      state.uniteProduction.error = ""
    })
    builder.addCase(api.fetchUniteProduction.rejected, (state ,action)=>{
      state.uniteProduction.loading=false
      state.uniteProduction.production = []
      state.uniteProduction.error = action.error.message
    })

    // RegionProduction

    // PerimetreProduction
  }
})

// Action creators are generated for each case reducer function
export const { getMouvements } = productionSlice.actions

export default productionSlice.reducer