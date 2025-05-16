import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

import positionsReducer from './slices/positionsSlice'
import filterReducer from './slices/filterSlice'

export const store = configureStore({
  reducer: {
    positions: positionsReducer,
    filter: filterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
