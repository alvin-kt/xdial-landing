import {
  Cloud,
  ClipboardCheck,
  Eye,
  FileLock2,
  FileText,
  Lock,
  RefreshCw,
  Server,
  Shield,
  ShieldCheck,
  User,
  UserCog,
} from 'lucide-react'

import type { FeatureItem, IconComponent } from './types'

export const SECURITY_HERO = {
  headline: { lead: 'Security at ', brand: 'xDial.', trail: 'Your data is ', accent: 'protected.' },
  subheading: 'Built for healthcare. Designed to protect patient data.',
  paragraph:
    'xDial maintains administrative, technical, and organizational safeguards designed to protect sensitive information throughout the insurance verification process.',
  points: [
    {
      icon: ShieldCheck,
      title: 'HIPAA Compliant',
      description:
        'Our program aligns with HIPAA Privacy, Security, and Breach Notification Rules.',
    },
    {
      icon: Lock,
      title: 'BAAs Available',
      description: 'Business Associate Agreements are available for healthcare organizations.',
    },
  ] as const satisfies readonly FeatureItem[],
} as const

interface OrbitIcon {
  readonly icon: IconComponent
  /** Position around the shield, as a compass point. */
  readonly position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

/** The four satellite icons orbiting the shield illustration. */
export const SECURITY_ORBIT: readonly OrbitIcon[] = [
  { icon: Cloud, position: 'top-left' },
  { icon: Server, position: 'top-right' },
  { icon: User, position: 'bottom-left' },
  { icon: ClipboardCheck, position: 'bottom-right' },
]

export const SECURITY_CARDS = [
  {
    icon: Shield,
    title: 'HIPAA',
    description:
      'xDial maintains a HIPAA compliance program for workflows involving protected health information.',
  },
  {
    icon: FileText,
    title: 'Business Associate Agreements',
    description:
      'BAAs are available for healthcare organizations using xDial to process protected health information.',
  },
  {
    icon: Lock,
    title: 'Data Protection',
    description:
      'Sensitive information is protected using industry-standard safeguards and security controls appropriate to healthcare workflows.',
  },
  {
    icon: User,
    title: 'Access Controls',
    description:
      'Access to sensitive information and systems is restricted to authorized personnel based on business need.',
  },
] as const satisfies readonly FeatureItem[]

export const SECURITY_PRACTICES_HEADING = 'Our Security Practices'

export const SECURITY_PRACTICES = [
  {
    icon: ShieldCheck,
    title: 'Encryption',
    description:
      'Data is encrypted in transit (TLS 1.2+) and at rest using industry-standard encryption.',
  },
  {
    icon: Server,
    title: 'Secure Infrastructure',
    description:
      'Hosted on trusted, HIPAA-eligible cloud infrastructure with redundancy and high availability.',
  },
  {
    icon: UserCog,
    title: 'Least Privilege Access',
    description: 'Role-based access controls ensure users only have access to what they need.',
  },
  {
    icon: ClipboardCheck,
    title: 'Audit Logs',
    description: 'System activity is logged and monitored to support security and compliance.',
  },
  {
    icon: Eye,
    title: 'Monitoring',
    description:
      'Continuous monitoring helps detect and respond to potential threats in real time.',
  },
  {
    icon: RefreshCw,
    title: 'Regular Reviews',
    description:
      'We continuously review our security program, policies, and controls to stay up to date.',
  },
] as const satisfies readonly FeatureItem[]

export const SECURITY_CONTACT = {
  heading: 'Security questions?',
  paragraph:
    'Have a vendor security review, compliance questionnaire, or question about how xDial protects your data?',
  cta: { label: 'Contact our team', href: '/support' },
  email: 'Support@xdialai.ai',
} as const

export const SECURITY_FOOTER_BADGES = [
  { icon: ShieldCheck, label: 'HIPAA\nCompliant' },
  { icon: FileLock2, label: 'BAAs\nAvailable' },
] as const

export const SECURITY_FOOTER_COLUMNS = [
  {
    heading: 'Product',
    links: [
      { label: 'Insurance Verification', href: '/#product' },
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Integrations', href: '/#integrations' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '/#about' },
      { label: 'Careers', href: '/#careers' },
      { label: 'Contact', href: '/#contact' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Blog', href: '/#blog' },
      { label: 'Help Center', href: '/#help-center' },
      { label: 'Support', href: '/support' },
    ],
  },
] as const
