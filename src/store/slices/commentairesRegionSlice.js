import { createSlice } from '@reduxjs/toolkit'
import * as api from '../../api/xpApi'

const initialState = {
  loading : false,
  regionCommentaires : [],
  error : ""
}

export const commentairesRegionSlice = createSlice({
  name: 'commentairesRegion',
  initialState,
  reducers: {
  },
  extraReducers : (builder) =>{

    builder.addCase(api.fetchCommentairesRegion.pending, (state)=>{ state.loading = true })
    builder.addCase(api.fetchCommentairesRegion.fulfilled, (state, action)=>{
      state.loading=false
      state.regionCommentaires = action.payload
      state.error = ""
    })
    builder.addCase(api.fetchCommentairesRegion.rejected, (state ,action)=>{
      state.loading=false
      state.regionCommentaires = []
      state.error = action.error.message
    })
  }
})

// Action creators are generated for each case reducer function
export const { getCommentairesRegion } = commentairesRegionSlice.actions

export default commentairesRegionSlice.reducer