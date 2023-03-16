import classNames from 'classnames'

interface ClickableProps {
  children?: React.ReactNode[] | React.ReactNode
  className?: string
  onClick: () => void
}

export default function Clickable({
  children,
  className,
  onClick,
}: ClickableProps) {
  return (
    <div className={classNames('flex', className)}>
      <div
        className="flex-1 flex justify-center cursor-pointer hover:backdrop-brightness-95"
        onClick={onClick}
      >
        {children}
      </div>
    </div>
  )
}
