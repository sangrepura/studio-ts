'use client'

// Import necessary modules and components
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { type z } from 'zod'

import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'
import { RadioInput } from '@/components/RadioInput'
import { TextInput } from '@/components/TextInput'
import { contactFormSchema } from '@/lib/validations/contactFormSchema'

import { SingleActionModal } from './SingleActionModal'

export type TContactFormData = z.infer<typeof contactFormSchema>

export function ContactForm() {
  const [isOpen, setIsOpen] = useState(false)

  // Initialize form using useForm hook
  const methods = useForm<Partial<TContactFormData>>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
      budget: '500',
    },
  })

  // Function to handle form submission
  const onSubmit = async (data: Partial<TContactFormData>) => {
    const toastId = toast.loading('Sending email...')
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast.success('Email sent successfully!', { id: toastId }) // Update toast on success
        setIsOpen(true) // Open modal
      } else {
        toast.error('Failed to send email.', { id: toastId }) // Update toast on failure
      }
    } catch (error) {
      toast.error('Error sending email.', { id: toastId }) // Update toast on error
    }
  }

  // Render the form component
  return (
    <>
      {isOpen && <SingleActionModal isOpen={isOpen} setIsOpen={setIsOpen} />}
      <FadeIn className="lg:order-last">
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            aria-labelledby="contact-form-title"
            className="rounded-2xl bg-sky-700/20 p-2"
          >
            <h2
              id="contact-form-title"
              className="font-display text-base font-semibold text-sky-950"
            >
              Work inquiries
            </h2>
            <div className="isolate mt-6 -space-y-px rounded-2xl px-2">
              <TextInput
                id="name"
                name="name"
                label="Name"
                autoComplete="name"
                type="text"
              />
              <TextInput
                id="email"
                name="email"
                label="Email"
                type="email"
                autoComplete="email"
              />
              <TextInput
                id="company"
                name="company"
                label="Company"
                autoComplete="organization"
                type="text"
              />
              <TextInput
                id="phone"
                name="phone"
                label="Phone"
                type="tel"
                autoComplete="tel"
              />
              <TextInput
                id="message"
                name="message"
                label="Message"
                type="textarea"
              />
            </div>
            <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
              <fieldset>
                <legend className="text-base/6 text-neutral-500">Budget</legend>
                <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <RadioInput label="$25K – $50K" id="budget-25" value="25" />
                  <RadioInput label="$50K – $100K" id="budget-50" value="50" />
                  <RadioInput
                    label="$100K – $150K"
                    id="budget-100"
                    value="100"
                  />
                  <RadioInput
                    label="More than $150K"
                    id="budget-150"
                    value="150"
                  />
                </div>
              </fieldset>
            </div>
            <Button type="submit" className="mt-10">
              Let’s work together
            </Button>
          </form>
        </FormProvider>
      </FadeIn>
    </>
  )
}
