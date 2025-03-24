import PropTypes from 'prop-types'

import iconRemove from '../assets/icons/icon-remove.svg'

export const Badge = ({
  variant = 'basic',
  colorScheme = 'light',
  children,
  onClear,
  onClick,
}) => (
  <div
    className={`badge badge--${variant} badge--${colorScheme}`}
    onClick={onClick}
  >
    <span>{children}</span>
    {variant === 'clearable' && (
      <div className="badge-remover" onClick={onClear}>
        <img src={iconRemove} alt="icon-remove" />
      </div>
    )}
  </div>
)

Badge.propTypes = {
  variant: PropTypes.oneOf(['basic', 'clearable', 'rounded']),
  colorScheme: PropTypes.oneOf(['light', 'primary', 'dark']),
  children: PropTypes.node.isRequired,
  onClear: PropTypes.func,
  onClick: PropTypes.func,
}
