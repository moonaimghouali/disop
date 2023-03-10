import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import bacsReducer from './slices/bacsSlice'

export const store = configureStore({
  reducer: {
    user : userReducer,
    bacs : bacsReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})