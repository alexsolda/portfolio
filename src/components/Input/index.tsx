'use client'
import { ReactElement } from 'react'
import { FieldValues, Path, UseFormRegister } from 'react-hook-form'

type IInputProps<T extends FieldValues> = {
  label: string
  name: Path<T>
  placeholder: string
  register: UseFormRegister<T>
  isTextArea?: boolean
  error: string
}

const DefaultInput = <T extends FieldValues>({
  label,
  name,
  placeholder,
  register,
  isTextArea,
  error
}: IInputProps<T>): ReactElement => {
  return (
    <div className="mb-2 relative flex flex-col gap-1 dark:text-whiteish text-black">
      <label>{label} *</label>
      {!isTextArea ? (
        <input
          className={`p-2 rounded-lg border-2 ${error ? 'border-red-400' : 'border-primary'} outline-none bg-transparent`}
          placeholder={placeholder}
          {...register(name)}
        />
      ) : (
        <textarea
          className={`resize-none p-2 rounded-lg border-2 ${error ? 'border-red-400' : 'border-primary'} outline-none bg-transparent`}
          placeholder={placeholder}
          {...register(name)}
        />
      )}
      <p
        className={`absolute bottom-[-20px] text-red-400 ${error ? 'opacity-1' : 'opacity-0'}`}
      >
        {error ? error : 'erro'}
      </p>
    </div>
  )
}

export default DefaultInput
