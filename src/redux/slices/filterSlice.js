import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filters: [],
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,

  reducers: {
    setAddfilter: (state, { payload }) => {
      state.filters = [...payload]
    },

    setDeleteFilter: (state, { payload }) => {
      state.filters = state.filters((item) => item !== payload)
    },

    resetFilters: (state) => {
      state.filters = []
    },
  },
})

export const { setAddfilter, setDeleteFilter, resetFilters } =
  filterSlice.actions

export const selectFilters = (state) => state.filter.filters

export default filterSlice.reducer
