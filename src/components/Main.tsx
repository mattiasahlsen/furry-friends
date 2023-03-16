import classNames from 'classnames'

interface ContainerProps {
  children?: React.ReactNode[] | React.ReactNode
  className?: string
}

export default function Main({ children, className }: ContainerProps) {
  return (
    <div className={classNames('my-4 md:my-8 lg:my-12', className)}>
      {children}
    </div>
  )
}
