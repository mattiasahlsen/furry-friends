import classNames from 'classnames'
import * as Icons from 'react-icons/ai'

interface IconProps {
  className?: string
  name: keyof typeof Icons
  onClick?: () => void
}

export default function Icon({ className, name, onClick }: IconProps) {
  const Icon = Icons[name]
  return (
    <Icon
      className={classNames(className)}
      strokeWidth={'30'}
      fontSize={'32px'}
      onClick={onClick}
    />
  )
}
