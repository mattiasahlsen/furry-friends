import classNames from 'classnames'

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
    'bg-primary-400 hover:bg-primary-500 disabled:bg-primary-300 text-white':
      type === 'primary',
    'bg-secondary-400 hover:bg-secondary-500 disabled:bg-secondary-300 text-white':
      type === 'secondary',
    'bg-neutral-400 hover:bg-neutral-500 disabled:bg-neutral-300 text-black':
      type === 'neutral',
  })
  return (
    <button
      className={classNames(
        classes,
        'p-2 disabled:cursor-not-allowed rounded-md',
        className
      )}
      onClick={onClick}
      {...buttonAttributes}
    >
      {children}
    </button>
  )
}
