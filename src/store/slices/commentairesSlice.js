import { createSlice } from '@reduxjs/toolkit'
import * as api from '../../api/uniteApi'

const initialState = {
  loading : false,
  uniteCommentaires : [],
  error : ""
}

export const commentairesSlice = createSlice({
  name: 'commentaires',
  initialState,
  reducers: {
  },
  extraReducers : (builder) =>{

    builder.addCase(api.fetchCommentaires.pending, (state)=>{state.loading=true})
    builder.addCase(api.fetchCommentaires.fulfilled, (state, action)=>{
      state.loading=false
      state.uniteCommentaires = action.payload
      state.error = ""
    })
    builder.addCase(api.fetchCommentaires.rejected, (state ,action)=>{
      state.loading=false
      state.uniteCommentaires = []
      state.error = action.error.message
    })
  }
})

// Action creators are generated for each case reducer function
export const { getCommentaires } = commentairesSlice.actions

export default commentairesSlice.reducer