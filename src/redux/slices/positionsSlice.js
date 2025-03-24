import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  positions: [],
}

const positionsSlice = createSlice({
  name: 'positions',
  initialState,

  reducers: {
    setPositions: (state, { payload }) => {
      state.positions = [...payload]
    },
  },
})

export const { setPositions } = positionsSlice.actions

export const selectPositions = (state) => state.positions.positions

export default positionsSlice.reducer
