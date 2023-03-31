import { createSlice } from '@reduxjs/toolkit'
import * as api from '../../api/uniteApi'

const initialState = {
  loading : false,
  Commentaires : [],
  error : ""
}

export const commentairesSlice = createSlice({
  name: 'Commentaires',
  initialState,
  reducers: {
  },
  extraReducers : (builder) =>{

    builder.addCase(api.fetchCommentaires.pending, (state)=>{state.loading=true})
    builder.addCase(api.fetchCommentaires.fulfilled, (state, action)=>{
      state.loading=false
      state.uniteBacs = action.payload
      state.error = ""
    })
    builder.addCase(api.fetchCommentaires.rejected, (state ,action)=>{
      state.loading=false
      state.uniteBacs = []
      state.error = action.error.message
    })
  }
})

// Action creators are generated for each case reducer function
export const { getCommentaires } = commentairesSlice.actions

export default commentairesSlice.reducer