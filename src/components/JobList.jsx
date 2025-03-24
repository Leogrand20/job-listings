import { useSelector } from 'react-redux'

import { JobPosition } from './JobPosition'
import { selectPositions } from '../redux/slices/positionsSlice'

export const JobList = () => {
  const positions = useSelector(selectPositions)

  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  )
}
