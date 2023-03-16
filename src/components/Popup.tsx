import classNames from 'classnames'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Icon from './Icon'

interface PopupProps {
  children?: React.ReactNode[] | React.ReactNode
  className?: string
  onDismiss?: () => void
}
export function Popup({ children, className, onDismiss }: PopupProps) {
  const classes = classNames(
    'bg-black/25 p-4 md:p-8 lg:p-16 fixed',
    'left-0 top-0 right-0 bottom-0',
    'flex box-border'
  )
  return (
    <div className={classes}>
      <div
        className={classNames(
          'bg-neutral-default rounded-md shadow-lg flex-1 p-4 overflow-y-auto relative',
          className
        )}
      >
        <Icon
          name="AiOutlineCloseCircle"
          className="absolute top-3 right-3 cursor-pointer text-neutral-600 hover:text-neutral-800 z-10"
          onClick={onDismiss}
        />
        {children}
      </div>
    </div>
  )
}
