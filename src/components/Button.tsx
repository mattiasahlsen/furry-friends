import classNames from 'classnames'
import s from './Button.module.css'

interface ButtonProps {
  children?: React.ReactNode[] | React.ReactNode
  className?: string
  onClick: () => void
  type: 'primary' | 'secondary' | 'neutral'

  [key: string]: unknown
}

export default function Clickable({
  children,
  className,
  onClick,
  type,
  ...buttonAttributes
}: ButtonProps) {
  const classes = classNames({
    'bg-primary-500 hover:bg-primary-550 disabled:bg-primary-100 text-white':
      type === 'primary',
    'bg-secondary-400 hover:bg-secondary-500 disabled:bg-secondary-300 text-white':
      type === 'secondary',
    'bg-neutral-400 hover:bg-neutral-500 disabled:bg-neutral-300 text-header':
      type === 'neutral',
  })
  return (
    <button
      className={classNames(
        classes,
        'p-2 disabled:cursor-not-allowed rounded-md font-bold text-xl',
        s.button,
        className
      )}
      onClick={onClick}
      {...buttonAttributes}
    >
      {children}
    </button>
  )
}
