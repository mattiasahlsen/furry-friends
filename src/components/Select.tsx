import classNames from 'classnames'
import ReactSelect, { InputActionMeta } from 'react-select'

interface Option {
  value: string
  label: string
}
interface InputProps {
  className?: string
  selectClassName?: string
  label?: string

  options: { value: string; label: string }[] | string[]
  value: string
  onChange: (newValue: string) => void
}

export default function Select({
  className,
  label,
  value,
  onChange,
  selectClassName,
  options,
}: InputProps) {
  const myOptions: Option[] =
    typeof options[0] === 'string'
      ? options.map((o) => ({ value: o, label: o } as Option))
      : (options as Option[])

  const handleChange = (selectedOption: Option | null) => {
    if (selectedOption) {
      onChange(selectedOption.value)
    }
  }

  return (
    <div className={classNames(className)}>
      {label && <label className="block mb-1 ml-1">{label}</label>}
      <ReactSelect
        className={classNames(
          'shadow-md rounded-md !border-none !outline-none w-full',
          selectClassName
        )}
        onChange={handleChange}
        options={myOptions}
        value={myOptions.find((o) => o.value === value) ?? myOptions[0]}
        placeholder="Select gender"
      />
    </div>
  )
}
