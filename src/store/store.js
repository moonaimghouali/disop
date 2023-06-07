import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './slices/userSlice'
import systemReducer from './slices/systemSlice'
import bacsReducer from './slices/bacsSlice'
import puitsReducer from './slices/puitsSlice'
import commentairesSlice from './slices/commentairesSlice'
import commentairesRegionSlice from './slices/commentairesRegionSlice'
import menusSlice from './slices/menusSlice'
import mouvementsSlice from './slices/mouvementsSlice'
import productionSlice from './slices/productionSlice'
import bilansSlice from './slices/BilansSlice'

// // Locoal Storage Config
// const persistConfig = {
//   key: 'root',
//   storage,
// };

// export const store = configureStore({
//     reducer: {
//       user : persistReducer(persistConfig, userReducer),
//       bacs : persistReducer(persistConfig, bacsReducer),
//       system : persistReducer(persistConfig, systemReducer),
//       mouvements : persistReducer(persistConfig, mouvementsSlice),
//       commentaires : persistReducer(persistConfig, commentairesSlice),
//       menus : persistReducer(persistConfig, menusSlice),
//       bilans : persistReducer(persistConfig, bilansSlice)
//     },
//     middleware: getDefaultMiddleware =>
//       getDefaultMiddleware({
//         serializableCheck: false,
//       }),
//   })

// export const persistor = persistStore(store);




export const store = configureStore({
  reducer: {
    user : userReducer,
    bacs : bacsReducer,
    puits : puitsReducer,
    system : systemReducer,
    mouvements : mouvementsSlice,
    production : productionSlice,
    commentaires : commentairesSlice,
    commentairesRegion : commentairesRegionSlice,
    menus : menusSlice,
    bilans : bilansSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})