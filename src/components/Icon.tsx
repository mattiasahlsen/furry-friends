import classNames from 'classnames'
import * as Icons from 'react-icons/ai'
import * as Icons2 from 'react-icons/io'

interface IconProps {
  className?: string
  name: keyof typeof Icons | keyof typeof Icons2
  onClick?: () => void
  size?: number
}

export default function Icon({ className, name, onClick, size }: IconProps) {
  const Icon =
    name in Icons
      ? Icons[name as keyof typeof Icons]
      : Icons2[name as keyof typeof Icons2]
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
