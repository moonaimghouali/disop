import { createSlice } from '@reduxjs/toolkit'
import * as api from '../../api/epApi'

const initialState = {
  loading : false,
  perimetrePuits : [],
  error : ""
}

export const puitsSlice = createSlice({
  name: 'puits',
  initialState,
  reducers: {
  },
  extraReducers : (builder) =>{

    builder.addCase(api.fetchPuits.pending, (state)=>{state.loading=true})
    builder.addCase(api.fetchPuits.fulfilled, (state, action)=>{
      state.loading=false
      state.perimetrePuits = action.payload
      state.error = ""
    })
    builder.addCase(api.fetchPuits.rejected, (state ,action)=>{
      state.loading=false
      state.perimetrePuits = []
      state.error = action.error.message
    })
  }
})

// Action creators are generated for each case reducer function
export const {  } = puitsSlice.actions

export default puitsSlice.reducer