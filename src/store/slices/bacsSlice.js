import { createSlice } from '@reduxjs/toolkit'
import * as api from '../../api/uniteApi'

const initialState = {
  loading : false,
  uniteBacs : [],
  error : ""
}

export const bacsSlice = createSlice({
  name: 'bacs',
  initialState,
  reducers: {
  },
  extraReducers : (builder) =>{

    builder.addCase(api.fetchBacs.pending, (state)=>{state.loading=true})
    builder.addCase(api.fetchBacs.fulfilled, (state, action)=>{
      state.loading=false
      state.uniteBacs = action.payload
      state.error = ""
    })
    builder.addCase(api.fetchBacs.rejected, (state ,action)=>{
      state.loading=false
      state.uniteBacs = []
      state.error = action.error.message
    })
  }
})

// Action creators are generated for each case reducer function
export const { getBacs } = bacsSlice.actions

export default bacsSlice.reducer