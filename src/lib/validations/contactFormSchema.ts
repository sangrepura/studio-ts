import { z } from 'zod'

export const contactFormSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: 'Name must be at least 3 characters' })
      .max(50, { message: 'Name must be at most 50 characters' }),
    email: z.string().email({ message: 'Invalid email format' }),
    company: z.string().optional(),
    phone: z.string().optional(),
    message: z.string().optional(),
    budget: z.enum(['500', '1500', '3000', '8000']).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.company === '') {
      ctx.addIssue({
        path: ['company'],
        message: 'Feel free to omit the company name if not applicable',
        code: 'custom',
      })
    }
    if (data.phone === '' || !/^\+?[1-9]\d{1,14}$/.test(data?.phone ?? '')) {
      ctx.addIssue({
        path: ['phone'],
        message:
          'Feel free to omit the phone number if not applicable, or it must be a valid format',
        code: 'custom',
      })
    }
    if (data?.message === '' || (data?.message?.length ?? 0) < 10) {
      ctx.addIssue({
        path: ['message'],
        message:
          'Feel free to omit the message if not applicable, or it must be at least 10 characters',
        code: 'custom',
      })
    } else if ((data?.message?.length ?? 0) > 500) {
      ctx.addIssue({
        path: ['message'],
        message: 'Message must be at most 500 characters',
        code: 'custom',
      })
    }
    if (data.budget === undefined) {
      ctx.addIssue({
        path: ['budget'],
        message: 'Feel free to omit the budget if not applicable',
        code: 'custom',
      })
    }
  })
