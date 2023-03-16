import {
  AnyAction,
  combineReducers,
  configureStore,
  MiddlewareArray,
  ThunkMiddleware,
} from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import catsReducer from './features/cat/catsSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import type { PersistPartial } from 'redux-persist/lib/persistReducer'
import type { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'

const persistConfig = {
  key: 'root',
  storage,
}
const globalReducer = combineReducers({ cats: catsReducer })
type RootState = ReturnType<typeof globalReducer> & PersistPartial

const store = configureStore<RootState, AnyAction>({
  reducer: persistReducer(persistConfig, globalReducer),
  middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware<RootState>) =>
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
    }) as unknown as [ThunkMiddleware<RootState, AnyAction, undefined>],
})

export const persistor = persistStore(store)

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
