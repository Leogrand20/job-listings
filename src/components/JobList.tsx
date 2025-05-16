import { useSelector, useDispatch } from 'react-redux'

import { JobPosition } from './JobPosition'
import { selectPositions } from '../redux/selectors/positions-selector'
import { setAddfilter, selectFilters } from '../redux/slices/filterSlice'

export const JobList = () => {
  const positions = useSelector(selectPositions)
  const filters = useSelector(selectFilters)
  const dispatch = useDispatch()

  const handleAddFilter = (filter) => {
    dispatch(setAddfilter(filter))
  }

  const filteredPositions = (positions, filters) => {
    if (!filters.length) return positions

    return positions.filter(({ role, level, languages, tools }) => {
      const positionsFilter = [].concat(role, level, ...languages, ...tools)

      return filters.every((filter) => positionsFilter.includes(filter))
    })
  }

  return (
    <div className="job-list">
      {filteredPositions(positions, filters).map((item) => (
        <JobPosition
          key={item.id}
          {...item}
          handleAddFilter={handleAddFilter}
        />
      ))}
    </div>
  )
}
