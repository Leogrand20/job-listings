import { FC } from 'react'

import { StackProps } from '../types/positions'

export const Stack: FC<StackProps> = ({ children, pos }) => (
  <div
    className="stack"
    style={{
      justifyContent: pos === 'center' ? 'center' : `flex-${pos}`,
    }}
  >
    {children}
  </div>
)
