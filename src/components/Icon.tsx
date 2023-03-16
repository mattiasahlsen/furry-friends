import classNames from 'classnames'
import * as Icons from 'react-icons/ai'

interface IconProps {
  className?: string
  name: keyof typeof Icons
  onClick?: () => void
  size?: number
}

export default function Icon({ className, name, onClick, size }: IconProps) {
  const Icon = Icons[name]
  const mySize = size || 32
  return (
    <Icon
      className={classNames(
        'text-neutral-600',
        {
          'hover:text-neutral-800': !!onClick,
        },
        className
      )}
      strokeWidth={`${mySize}`}
      fontSize={`${mySize}px`}
      onClick={onClick}
    />
  )
}
