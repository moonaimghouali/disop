import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  menuMouvementsValue : {operation : "All", bac:-1},
  menuDate : { date : new Date(new Date() - 86400000)}
}

export const menusSlice = createSlice({
  name: 'menus',
  initialState,
  reducers: {

    updateMenuMouvements: (state, action) => {
    if(action.payload.operation)
    state.menuMouvementsValue.operation = action.payload.operation

    if(action.payload.bac)
    state.menuMouvementsValue.bac = action.payload.bac
    },

    initializerMenuMouvement: (state, action) => {
      state.menuMouvementsValue.operation = action.payload.operation
      state.menuMouvementsValue.bac = action.payload.bac
    },
    updateMenuDate: (state, action) => {
      state.menuDate.date = action.payload.date
    }

  },
})

// Action creators are generated for each case reducer function
// export const { Logout, LoginAdmin, LoginManager, LoginUnite,  LoginResp } = userSlice.actions
export const { updateMenuMouvements, initializerMenuMouvement, updateMenuDate } = menusSlice.actions

export default menusSlice.reducer