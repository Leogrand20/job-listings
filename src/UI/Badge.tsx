import { ReactComponent as Remove } from '@icons/icon-remove.svg'
import { FC } from 'react'

import { BadgeProps } from '../types/positions'

export const Badge: FC<BadgeProps> = ({
  variant = 'basic',
  colorScheme = 'light',
  children,
  onClear,
  onClick,
}) => (
  <div className={`badge badge--${variant} badge--${colorScheme}`} onClick={onClick}>
    <span>{children}</span>
    {variant === 'clearable' && (
      <div className="badge-remover" onClick={onClear}>
        <Remove />
      </div>
    )}
  </div>
)
