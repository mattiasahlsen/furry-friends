import classNames from 'classnames'

interface InputProps {
  className?: string
  inputClassName?: string
  type: 'text' | 'textarea'
  label?: string

  value: string
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void

  [key: string]: unknown
}

export default function Input({
  className,
  type,
  label,
  value,
  onChange,
  inputClassName,
  ...rest
}: InputProps) {
  const Tag = type === 'textarea' ? 'textarea' : 'input'
  return (
    <div className={classNames(className)}>
      {label && <label className="block mb-1">{label}</label>}
      <Tag
        type={type}
        className={classNames(
          'bg-white shadow-md rounded-md p-2 outline-none w-full',
          inputClassName
        )}
        value={value}
        onChange={onChange}
        {...(type === 'textarea' && { rows: 3 })}
        {...rest}
      />
    </div>
  )
}
