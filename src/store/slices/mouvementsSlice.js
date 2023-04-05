import { createSlice } from '@reduxjs/toolkit'
import * as api from '../../api/uniteApi'

const initialState = {
  loading : false,
  mouvements : [],
  error : ""
}

export const mouvementsSlice = createSlice({
  name: 'mouvements',
  initialState,
  reducers: {
  },
  extraReducers : (builder) =>{

    builder.addCase(api.fetchMouvements.pending, (state)=>{state.loading=true})
    builder.addCase(api.fetchMouvements.fulfilled, (state, action)=>{
      state.loading=false
      state.mouvements = action.payload
      state.error = ""
    })
    builder.addCase(api.fetchMouvements.rejected, (state ,action)=>{
      state.loading=false
      state.mouvements = []
      state.error = action.error.message
    })
  }
})

// Action creators are generated for each case reducer function
export const { getMouvements } = mouvementsSlice.actions

export default mouvementsSlice.reducer