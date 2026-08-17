import { HeartPulse, Lock, ShieldCheck } from 'lucide-react'

import type { FeatureItem } from './types'

export const BOOK_DEMO_HERO = {
  headline: { lead: 'See xDial ', accent: 'in Action.' },
  paragraph:
    'See how xDial can handle over-the-phone insurance verification for your organization.',
  checklist: [
    {
      title: 'See a live insurance verification',
      description: 'Watch IVRRex handle the entire call.',
    },
    { title: 'See the completed VOB report', description: 'See exactly what your team receives.' },
    {
      title: 'Discuss your workflow and volume',
      description: "We'll learn about your current process.",
    },
    { title: 'Get your questions answered', description: 'Our experts are here to help.' },
  ],
} as const

export const BOOK_DEMO_CALL = {
  title: 'IVRRex is on the call...',
  steps: [
    { label: 'Calling insurance provider', done: true },
    { label: 'Connected', done: true },
    { label: 'Navigating payer system', done: true },
    { label: 'Verifying benefits', done: true },
    { label: 'Collecting information', done: true },
    { label: 'Verification complete', done: false },
  ],
} as const

export const BOOK_DEMO_TRUST = [
  { icon: ShieldCheck, title: 'HIPAA', description: 'Ready' },
  { icon: Lock, title: 'Secure', description: 'by Design' },
  { icon: HeartPulse, title: 'Built for', description: 'Healthcare' },
] as const satisfies readonly FeatureItem[]

export const BOOK_DEMO_FORM = {
  eyebrow: null,
  title: 'Book Your Demo',
  paragraph:
    "Tell us a little about yourself and we'll be in touch to schedule your personalized demo.",
  fields: {
    firstName: { label: 'First Name', required: true, placeholder: 'Enter first name' },
    lastName: { label: 'Last Name', required: true, placeholder: 'Enter last name' },
    workEmail: { label: 'Work Email', required: true, placeholder: 'you@company.com' },
    company: { label: 'Company / Organization', required: true, placeholder: 'Company name' },
    jobTitle: { label: 'Job Title', required: false, placeholder: 'Your role' },
    volume: {
      label:
        'Approximately how many insurance verifications does your organization complete per month?',
      required: true,
      placeholder: 'Select volume',
      options: ['Under 50', '50–200', '200–500', '500–1,000', '1,000+'],
    },
    notes: {
      label: "Anything you'd like us to know?",
      required: false,
      placeholder:
        'Tell us about your current verification process, challenges, or what you’d like to see.',
    },
  },
  submit: { label: 'Book My Demo' },
  disclaimer:
    'By submitting this form, you agree that xDial may contact you regarding your request.',
} as const
