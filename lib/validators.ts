import { z } from 'zod';

export const leadFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  adults: z.number().min(1, 'At least 1 adult required').max(20).optional(),
  children: z.number().min(0).max(20).optional(),
  packageId: z.string().optional(),
  notes: z.string().max(500, 'Notes must be less than 500 characters').optional(),
  source: z.enum(['website', 'agents', 'referral']).default('website'),
  consent: z.boolean().refine(val => val === true, 'You must agree to be contacted'),
});

export const bookingDatesSchema = z.object({
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().min(1, 'End date is required'),
}).refine(data => {
  const start = new Date(data.startDate);
  const end = new Date(data.endDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return start >= today && end > start;
}, {
  message: 'End date must be after start date and dates must be in the future',
  path: ['endDate'],
});

export const bookingGuestsSchema = z.object({
  adults: z.number().min(1, 'At least 1 adult required').max(20, 'Maximum 20 adults'),
  children: z.number().min(0, 'Children cannot be negative').max(20, 'Maximum 20 children'),
});

export const bookingPackageSchema = z.object({
  packageId: z.string().min(1, 'Please select a package'),
  addons: z.array(z.string()).default([]),
});

export const bookingContactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  notes: z.string().max(500, 'Notes must be less than 500 characters').optional(),
  consent: z.boolean().refine(val => val === true, 'You must agree to be contacted'),
});

export const bookingContactDataSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string().optional(),
  notes: z.string().optional(),
  consent: z.boolean().optional(),
});

export const bookingDraftSchema = z.object({
  step: z.number().min(1).max(5),
  payload: z.object({
    dates: bookingDatesSchema.optional(),
    guests: bookingGuestsSchema.optional(),
    package: bookingPackageSchema.optional(),
    contact: bookingContactDataSchema.optional(),
  }),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;
export type BookingDatesData = z.infer<typeof bookingDatesSchema>;
export type BookingGuestsData = z.infer<typeof bookingGuestsSchema>;
export type BookingPackageData = z.infer<typeof bookingPackageSchema>;
export type BookingContactData = z.infer<typeof bookingContactSchema>;
export type BookingDraftData = z.infer<typeof bookingDraftSchema>;
