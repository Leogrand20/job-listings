import { configureStore } from '@reduxjs/toolkit'

import positionsReducer from './slices/positionsSlice'
import filterReducer from './slices/filterSlice'

export const store = configureStore({
  reducer: {
    positions: positionsReducer,
    filter: filterReducer,
  },
})
