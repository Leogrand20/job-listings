import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FilterSlice } from '../../types/filter'

const initialState: FilterSlice = {
  filters: [],
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,

  reducers: {
    setAddfilter: (state, { payload }: PayloadAction<string>) => {
      if (!state.filters.includes(payload)) {
        state.filters.push(payload)
      } else {
        state.filters = [...state.filters]
      }
    },

    deleteFilter: (state, { payload }: PayloadAction<string>) => {
      state.filters = state.filters.filter((item) => item !== payload)
    },

    resetFilters: (state) => {
      state.filters = []
    },
  },
})

export const { setAddfilter, deleteFilter, resetFilters } = filterSlice.actions

export default filterSlice.reducer
