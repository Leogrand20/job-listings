import { useEffect } from 'react'

import { FilterPanel } from './components/FilterPanel'
import { JobList } from './components/JobList'
import data from './mock/data.json'
import { setPositions } from './redux/slices/positionsSlice'
import { useAppDispatch } from './redux/store'

import './App.css'

export const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPositions(data))
  }, [dispatch])

  return (
    <>
      <header className="header" />

      <div className="container">
        <FilterPanel />
        <JobList />
      </div>
    </>
  )
}
