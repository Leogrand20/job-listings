import { FilterPanel } from './components/FilterPanel'
import { JobList } from './components/JobList'

import './App.css'

export const App = () => {
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
