import classNames from 'classnames'

interface MainProps {
  children?: React.ReactNode[] | React.ReactNode
  className?: string
}

export default function Main({ children, className }: MainProps) {
  return (
    <div className={classNames('my-4 md:my-8 lg:my-12', className)}>
      {children}
    </div>
  )
}
