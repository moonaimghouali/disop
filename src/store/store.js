import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import systemReducer from './slices/systemSlice'
import bacsReducer from './slices/bacsSlice'
import commentairesSlice from './slices/commentairesSlice'
import menusSlice from './slices/menusSlice'
import mouvementsSlice from './slices/mouvementsSlice'
import bilansSlice from './slices/BilansSlice'

export const store = configureStore({
  reducer: {
    user : userReducer,
    bacs : bacsReducer,
    system : systemReducer,
    mouvements : mouvementsSlice,
    commentaires : commentairesSlice,
    menus : menusSlice,
    bilans : bilansSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})