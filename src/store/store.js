import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import systemReducer from './slices/systemSlice'
import bacsReducer from './slices/bacsSlice'
import commentairesSlice from './slices/commentairesSlice'
import menusSlice from './slices/menusSlice'

export const store = configureStore({
  reducer: {
    user : userReducer,
    bacs : bacsReducer,
    system : systemReducer,
    commentaires : commentairesSlice,
    menus : menusSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})