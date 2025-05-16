import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Positions, PositionsSlice } from '../../types/positions'

const initialState: PositionsSlice = {
  positions: [],
}

const positionsSlice = createSlice({
  name: 'positions',
  initialState,

  reducers: {
    setPositions: (state, { payload }: PayloadAction<Positions>) => {
      state.positions = [...payload]
    },
  },
})

export const { setPositions } = positionsSlice.actions

export default positionsSlice.reducer
