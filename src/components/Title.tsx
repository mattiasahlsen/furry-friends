import classNames from 'classnames'

interface ContainerProps {
  children?: React.ReactNode[] | React.ReactNode
  className?: string
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export default function Title({ children, className, type }: ContainerProps) {
  const Tag = type
  const classes = {
    'text-3xl md:text-4xl lg:text-5xl font-semibold': type === 'h1',
    'text-2xl md:text-3xl font-semibold': type === 'h2',
    'text-xl md:text-2xl font-semibold': type === 'h3',
    'text-lg md:text-xl font-bold': type === 'h4',
    'text-lg md:text-xl font-semibold': type === 'h5',
    'text-base md:text-lg font-bold': type === 'h6',
  }
  return (
    <Tag className={classNames(classes, 'text-header', className)}>
      {children}
    </Tag>
  )
}
