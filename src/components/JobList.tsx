import { selectFilters } from '../redux/selectors/filter-selector'
import { selectPositions } from '../redux/selectors/positions-selector'
import { setAddfilter } from '../redux/slices/filterSlice'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { Positions } from '../types/positions'
import { JobPosition } from './JobPosition'

export const JobList = () => {
  const positions = useAppSelector(selectPositions)
  const filters = useAppSelector(selectFilters)
  const dispatch = useAppDispatch()

  const handleAddFilter = (filter: string) => {
    dispatch(setAddfilter(filter))
  }

  const filteredPositions = (positions: Positions, filters: string[]) => {
    if (!filters.length) return positions

    return positions.filter(({ role, level, languages, tools }) => {
      const languagesFiltered = [...languages]
      const toolsFiltered = [...tools]
      const positionsFilter = [
        role,
        level,
        ...languagesFiltered,
        ...toolsFiltered,
      ]

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
