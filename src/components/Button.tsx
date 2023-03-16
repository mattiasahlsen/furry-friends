import classNames from 'classnames'
import s from './Button.module.css'

interface ButtonProps {
  children?: React.ReactNode[] | React.ReactNode
  className?: string
  onClick: () => void
  type: 'primary' | 'secondary' | 'neutral'
  disabled?: boolean
  disabledReason?: string

  [key: string]: unknown
}

export default function Button({
  children,
  className,
  onClick,
  type,
  disabled,
  disabledReason,
  ...buttonAttributes
}: ButtonProps) {
  const classes = classNames({
    'bg-primary-500 enabled:hover:bg-primary-550 text-white':
      type === 'primary',
    'bg-secondary-400 enabled:hover:bg-secondary-500 disabled:bg-secondary-300 text-white':
      type === 'secondary',
    'bg-neutral-400 enabled:hover:bg-neutral-500 disabled:bg-neutral-300 text-header':
      type === 'neutral',
  })

  return (
    <div
      className={classNames(
        'inline-block relative',
        s.buttonContainer,
        className
      )}
    >
      {disabled && disabledReason && (
        <span
          className={classNames(
            s.buttonTooltip,
            'absolute right-0 top-2 -translate-y-full text-slate-400 text-sm'
          )}
        >
          {disabledReason}
        </span>
      )}
      <button
        className={classNames(
          classes,
          'p-2 mt-2 disabled:cursor-not-allowed rounded-md font-bold text-xl disabled:opacity-50 w-full',
          s.button
        )}
        onClick={onClick}
        disabled={disabled}
        {...buttonAttributes}
      >
        {children}
      </button>
    </div>
  )
}
