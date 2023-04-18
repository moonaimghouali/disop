import { createSlice } from '@reduxjs/toolkit'
import * as uniteApi from '../../api/uniteApi'
import * as xpApi from '../../api/xpApi'

const initialState = {
  uniteProduction : {
    loading : false,
    production : [],
    error : ""
  },
  regionUnitesProduction :{
    loading : false,
    production : [],
    error : ""
  },
  regionProduction :{
    loading : false,
    production : [],
    error : ""
  }
  
}

export const productionSlice = createSlice({
  name: 'production',
  initialState,
  reducers: {
  },
  extraReducers : (builder) =>{
    // UniteProduction
    builder.addCase(uniteApi.fetchUniteProduction.pending, (state)=>{state.uniteProduction.loading=true})
    builder.addCase(uniteApi.fetchUniteProduction.fulfilled, (state, action)=>{
      state.uniteProduction.loading=false
      state.uniteProduction.production = action.payload
      state.uniteProduction.error = ""
    })
    builder.addCase(uniteApi.fetchUniteProduction.rejected, (state ,action)=>{
      state.uniteProduction.loading=false
      state.uniteProduction.production = []
      state.uniteProduction.error = action.error.message
    })

    // RegionProduction
    builder.addCase(xpApi.fetchRegionProduction.pending, (state)=>{state.regionProduction.loading=true})
    builder.addCase(xpApi.fetchRegionProduction.fulfilled, (state, action)=>{
      state.regionProduction.loading=false
      state.regionProduction.production = action.payload
      state.regionProduction.error = ""
    })
    builder.addCase(xpApi.fetchRegionProduction.rejected, (state ,action)=>{
      state.regionProduction.loading=false
      state.regionProduction.production = []
      state.regionProduction.error = action.error.message
    })

    // RegionUnitesProduction
    builder.addCase(xpApi.fetchRegionUnitesProduction.pending, (state)=>{state.regionUnitesProduction.loading=true})
    builder.addCase(xpApi.fetchRegionUnitesProduction.fulfilled, (state, action)=>{
      state.regionUnitesProduction.loading=false
      state.regionUnitesProduction.production = action.payload
      state.regionUnitesProduction.error = ""
    })
    builder.addCase(xpApi.fetchRegionUnitesProduction.rejected, (state ,action)=>{
      state.regionUnitesProduction.loading=false
      state.regionUnitesProduction.production = []
      state.regionUnitesProduction.error = action.error.message
    })

    // PerimetreProduction
  }
})

// Action creators are generated for each case reducer function
export const { getMouvements } = productionSlice.actions

export default productionSlice.reducer