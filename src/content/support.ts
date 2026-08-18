import { BookOpen, Mail, MessageCircle, Shield, User, Wrench } from 'lucide-react'

import { ROUTES } from './navigation'
import type { IconComponent, NavLink } from './types'

export const SUPPORT_HERO = {
  eyebrow: 'Support',
  headline: { lead: 'How can we ', accent: 'help?' },
  paragraph: 'Get help with xDial, report an issue, or contact our support team.',
  email: { lead: 'Email us anytime at', address: 'Support@xdialai.ai' },
  bubble: ['IVRRex is here to help!', 'Our team is ready when you are.'],
} as const

export type SupportCategoryId = 'issue' | 'general' | 'security'

interface SupportCategory {
  readonly id: SupportCategoryId
  readonly icon: IconComponent
  readonly title: string
  readonly description: string
}

export const SUPPORT_CATEGORIES = [
  {
    id: 'issue',
    icon: Wrench,
    title: 'Submit an Issue',
    description: "Something isn't working? Tell us what happened and our team will investigate.",
  },
  {
    id: 'general',
    icon: MessageCircle,
    title: 'General Support',
    description: 'Have a question about xDial or need help using the platform?',
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Security & Privacy',
    description: 'Have a security, privacy, HIPAA, or compliance question?',
  },
] as const satisfies readonly SupportCategory[]

export const SUPPORT_FORM = {
  title: 'Submit an Issue',
  paragraph:
    'Please provide as much detail as possible so we can resolve your issue quickly and effectively.',
  notice:
    'Please do not include PHI unless necessary to resolve your support request. Never share passwords or sensitive patient information.',
  fields: {
    fullName: { label: 'Full Name', required: true, placeholder: 'Enter your full name' },
    workEmail: { label: 'Work Email', required: true, placeholder: 'Enter your work email' },
    organization: { label: 'Organization', required: true, placeholder: 'Enter your organization' },
    issueType: {
      label: 'Issue Type',
      required: true,
      placeholder: 'Select issue type',
      options: ['Bug report', 'Account access', 'Billing', 'Data accuracy', 'Other'],
    },
    priority: {
      label: 'Priority',
      required: true,
      placeholder: 'Select priority',
      options: ['Low', 'Medium', 'High', 'Urgent'],
    },
    referenceId: {
      label: 'Related Verification ID (Optional)',
      required: false,
      placeholder: 'e.g., VOB-123456',
    },
    description: {
      label: 'Description',
      required: true,
      placeholder: 'Please describe the issue in as much detail as possible...',
    },
  },
  attachments: {
    label: 'Attachments (Optional)',
    action: 'Click to upload',
    trail: 'or drag and drop',
    hint: 'Screenshots, logs, or files (max 10MB each)',
  },
  submit: { label: 'Submit Issue' },
  disclaimer:
    'By submitting this form, you agree that xDial may contact you regarding your request.',
} as const

interface SidebarItem {
  readonly icon: IconComponent
  readonly title: string
  readonly description: string
  /** A direct link shown under the title, in place of a trailing CTA. */
  readonly link?: NavLink
  /** A trailing "label →" affordance, in place of a direct link. */
  readonly cta?: NavLink
}

const SUPPORT_SIDEBAR_ITEMS: readonly SidebarItem[] = [
  {
    icon: Mail,
    title: 'Email Support',
    link: { label: 'Support@xdialai.ai', href: 'mailto:Support@xdialai.ai' },
    description: 'We typically respond within one business day.',
  },
  {
    icon: BookOpen,
    title: 'Help Center',
    description: 'Browse our knowledge base for answers to common questions and guides.',
    cta: { label: 'Visit Help Center', href: '/#help-center' },
  },
  {
    icon: User,
    title: 'Inside Your Account',
    description: 'Log in to xDial and access support from the Help menu anytime.',
    cta: { label: 'Go to xDial', href: ROUTES.home },
  },
]

export const SUPPORT_SIDEBAR = {
  heading: 'Other Ways to Get Help',
  items: SUPPORT_SIDEBAR_ITEMS,
  securityConcern: {
    icon: Shield,
    title: 'Security Concern?',
    description: 'For suspected security or privacy incidents, contact our security team directly.',
    email: 'security@xdialai.ai',
    note: 'Available 24/7 for urgent matters.',
  },
} as const
