import { contactFormSchema } from '@/lib/validations/contactFormSchema';
import React from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import { z } from 'zod';

type TextInputProps = {
  label: string;
  name: keyof ContactFormData;
  register: UseFormRegister<ContactFormData>;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

type ContactFormData = z.infer<typeof contactFormSchema>;

function TextInput({ label, name, register, error, ...rest }: TextInputProps) {
  const id = `input-${name}`;

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...register(name, { required: `${label} is required` })}
        placeholder=" "
        className={`peer block w-full border ${error ? 'border-red-500' : 'border-sky-300'} bg-transparent px-6 pb-4 pt-12 text-base/6 text-sky-950 ring-4 ring-transparent transition focus:border-sky-950 focus:outline-none focus:ring-sky-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl`}
        {...rest}
      />
      <label
        htmlFor={id}
        className={`peer-focus:-transky-y-4 peer-[${
          rest.value ? ':not(:placeholder-shown)' : ''
        }]:-transky-y-4 pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-sky-500 transition-all duration-200 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-sky-950 peer-[${
          rest.value ? ':not(:placeholder-shown)' : ''
        }]:scale-75 peer-[${
          rest.value ? ':not(:placeholder-shown)' : ''
        }]:font-semibold peer-[${
          rest.value ? ':not(:placeholder-shown)' : ''
        }]:text-sky-950`}
      >
        {label}
      </label>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}

export default TextInput;
