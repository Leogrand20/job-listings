import { selectFilters } from '../redux/selectors/filter-selector'
import { deleteFilter, resetFilters } from '../redux/slices/filterSlice'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { Badge } from '../UI/Badge'
import { Card } from '../UI/Card'
import { Stack } from '../UI/Stack'

export const FilterPanel = () => {
  const filters = useAppSelector(selectFilters)
  const dispatch = useAppDispatch()

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
