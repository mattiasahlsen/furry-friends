import { CATS } from '@/data/cats'
import type { AppState } from '@/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { ICat } from './types'

const initialStateCats: Record<string, ICat> = CATS.map((cat) => ({
  ...cat,
  id: JSON.stringify(cat),
})).reduce(
  (acc, cat) => ({
    ...acc,
    [cat.id]: cat,
  }),
  {}
)

export const catsSlice = createSlice({
  name: 'cats',
  initialState: {
    cats: initialStateCats,
    loading: false,
    error: null,

    loadingCat: {} as Record<string, boolean>,
    errorCat: {} as Record<string, string>,
  },
  reducers: {
    updateCat: (
      state,
      { payload }: PayloadAction<{ id: string; updates: Partial<ICat> }>
    ) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.cats[payload.id] = { ...state.cats[payload.id], ...payload.updates }
    },
    addCat: (state, { payload }: PayloadAction<{ id: string; cat: ICat }>) => {
      state.cats[payload.id] = payload.cat
    },
    removeCat: (state, { payload }: PayloadAction<{ id: string }>) => {
      delete state.cats[payload.id]
    },
  },
})

// Action creators are generated for each case reducer function
export const { addCat, removeCat, updateCat } = catsSlice.actions

export const selectCats = (state: AppState) => state.cats.cats

export default catsSlice.reducer
