// Import your zod schema
import { contactFormSchema } from '@components/contactFormSchema'
import { type Metadata } from 'next'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'

const TextInput = ({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) => {
  const id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props} // Keep the spread operator here
        placeholder=" "
        className="peer block w-full border border-slate-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-slate-950 ring-4 ring-transparent transition focus:border-slate-900 focus:outline-none focus:ring-slate-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-slate-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-slate-900 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-slate-900"
      >
        {label}
      </label>
    </div>
  )
}

const RadioInput = ({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) => {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="size-6 flex-none appearance-none rounded-full border border-slate-900/20 outline-none checked:border-[0.5rem] checked:border-slate-900 focus-visible:ring-1 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-slate-900">{label}</span>
    </label>
  )
}

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: z.superRefine,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      // Send email using the submitEmail function (defined in route.ts)
      await submitEmail(data)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="font-display text-base font-semibold text-slate-900">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-slate-50/50">
          <TextInput
            label="Name"
            name="fullName"
            {...register('fullName', contactFormSchema)}
          />
          <TextInput
            label="Email"
            type="email"
            name="userEmail"
            {...register('userEmail', contactFormSchema)}
          />
          <TextInput
            label="Company"
            name="userCompany"
            {...register('userCompany', contactFormSchema)}
          />
          <TextInput
            label="Phone"
            name="userPhone"
            {...register('userPhone', contactFormSchema)}
          />
          <TextInput
            label="Message"
            name="userMessage"
            {...register('userMessage', contactFormSchema)}
          />
          <div className="border border-slate-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-slate-500">Budget</legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput
                  label="$25K – $50K"
                  name="userBudget"
                  value="25"
                  {...register('userBudget', contactFormSchema)}
                />
                <RadioInput
                  label="$50K – $100K"
                  name="userBudget"
                  value="50"
                  {...register('userBudget', contactFormSchema)}
                />
                <RadioInput
                  label="$100K – $150K"
                  name="userBudget"
                  value="100"
                  {...register('userBudget', contactFormSchema)}
                />
                <RadioInput
                  label="More than $150K"
                  name="userBudget"
                  value="150"
                  {...register('userBudget', contactFormSchema)}
                />
              </div>
            </fieldset>
          </div>
          <Button type="submit" disabled={isSubmitting} className="mt-10">
            {isSubmitting ? 'Sending...' : "Let's work together"}
          </Button>
          {errors.fullName && (
            <p className="text-red-500">{errors.fullName.message}</p>
          )}
          {errors.userEmail && (
            <p className="text-red-500">{errors.userEmail.message}</p>
          )}
          {/* Add similar error messages for other fields */}
        </div>
      </form>
    </FadeIn>
  )
}

export default ContactForm

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Let’s work together. We can’t wait to hear from you.',
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Let’s work together">
        <p>We can’t wait to hear from you.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
