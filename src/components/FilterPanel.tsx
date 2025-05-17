import { useSelector, useDispatch } from 'react-redux'

import { Badge } from '../UI/Badge'
import { Card } from '../UI/Card'
import { Stack } from '../UI/Stack'

import { deleteFilter, resetFilters } from '../redux/slices/filterSlice'
import { selectFilters } from '../redux/selectors/filter-selector'

export const FilterPanel = () => {
  const filters = useSelector(selectFilters)
  const dispatch = useDispatch()

  if (!filters.length) {
    return null
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {filters.map((filter) => (
            <Badge
              key={filter}
              variant="clearable"
              onClear={() => dispatch(deleteFilter(filter))}
            >
              {filter}
            </Badge>
          ))}
        </Stack>

        <button className="link" onClick={() => dispatch(resetFilters())}>
          Clear
        </button>
      </div>
    </Card>
  )
}
