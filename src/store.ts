import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import catsReducer from './features/cat/catsSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
}

const store = configureStore({
  reducer: persistReducer(
    persistConfig,
    combineReducers({ cats: catsReducer })
  ),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/PURGE',
          'persist/FLUSH',
          'persist/PAUSE',
          'persist/REGISTER',
        ],
      },
    }),
})

export const persistor = persistStore(store)

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
