import React from 'react'
import { type UseFormRegister } from 'react-hook-form'
import { type z } from 'zod'

import { type contactFormSchema } from '@/lib/validations/contactFormSchema'

type RadioInputProps = {
  label: string
  value: string
  name: keyof ContactFormData
  register: UseFormRegister<ContactFormData>
  error?: string
} & React.InputHTMLAttributes<HTMLInputElement>

type ContactFormData = z.infer<typeof contactFormSchema>

function RadioInput({
  label,
  name,
  value,
  register,
  error,
  ...rest
}: RadioInputProps) {
  const id = `radio-${value}`

  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        id={id}
        {...register(name)}
        value={value}
        className={`size-6 flex-none appearance-none rounded-full border ${
          error ? 'border-red-500' : 'border-sky-950/20'
        } outline-none checked:border-[0.5rem] checked:border-sky-950 focus-visible:ring-1 focus-visible:ring-sky-950 focus-visible:ring-offset-2`}
        {...rest}
      />
      <span className="text-base/6 text-sky-950">{label}</span>
      {error && <span className="text-sm text-red-500">{error}</span>}
    </label>
  )
}

export default RadioInput
