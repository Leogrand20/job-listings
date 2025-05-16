import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filters: [],
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,

  reducers: {
    setAddfilter: (state, { payload }) => {
      if (!state.filters.includes(payload)) {
        state.filters.push(payload)
      } else {
        state.filters = [...state.filters]
      }
    },

    deleteFilter: (state, { payload }) => {
      state.filters = state.filters.filter((item) => item !== payload)
    },

    resetFilters: (state) => {
      state.filters = []
    },
  },
})

export const { setAddfilter, deleteFilter, resetFilters } = filterSlice.actions

export const selectFilters = (state) => state.filter.filters

export default filterSlice.reducer
