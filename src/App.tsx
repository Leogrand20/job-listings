import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { FilterPanel } from './components/FilterPanel'
import { JobList } from './components/JobList'

import data from './mock/data.json'
import { setPositions } from './redux/slices/positionsSlice'

import './App.css'

export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPositions(data))
  }, [])

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
