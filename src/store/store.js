import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import systemReducer from './slices/systemSlice'
import bacsReducer from './slices/bacsSlice'

export const store = configureStore({
  reducer: {
    user : userReducer,
    bacs : bacsReducer,
    system : systemReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})