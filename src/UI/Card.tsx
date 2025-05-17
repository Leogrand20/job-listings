import { FC } from 'react'

import { CardProps } from '../types/positions'

export const Card: FC<CardProps> = ({ children, isFeatured, className }) => {
  return (
    <div
      className={`card${isFeatured ? ' card--featured' : ''}${className ? ' ' + className : ''}`}
    >
      {children}
    </div>
  )
}
