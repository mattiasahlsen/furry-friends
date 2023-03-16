import classNames from 'classnames'

interface ContainerProps {
  children?: React.ReactNode[] | React.ReactNode
  className?: string
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={classNames('container mx-auto flex-1 p-2', className)}>
      {children}
    </div>
  )
}
