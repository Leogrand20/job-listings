import { MouseEventHandler, ReactNode } from 'react'

export interface IPosition {
  id: number
  company: string
  logo: string
  new: boolean
  featured: boolean
  position: string
  role: string
  level: string
  postedAt: string
  contract: string
  location: string
  languages: string[]
  tools: string[]
}

export type Positions = IPosition[]

export type PositionsSlice = {
  positions: Positions
}

export interface JobPositionProps extends IPosition {
  handleAddFilter: (filter: string) => void
}

export type CardProps = {
  isFeatured?: IPosition['featured']
  children: ReactNode
  className?: string
}

export type StackProps = {
  children: ReactNode
  pos?: string
}

export type BadgeProps = {
  children: string
  variant?: string
  colorScheme?: string
  onClear?: MouseEventHandler<HTMLDivElement>
  onClick?: MouseEventHandler<HTMLDivElement>
}
