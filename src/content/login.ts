import { BarChart3, Phone, ShieldCheck } from 'lucide-react'

export const LOGIN_HERO = {
  headline: { line1: 'Log in. Power on.', line2: "Let's get to ", accent: 'work.' },
  paragraph:
    'xDial AI automates over-the-phone insurance verification so your team can focus on what matters most.',
  checklist: [
    { icon: Phone, title: 'Automated phone calls' },
    { icon: ShieldCheck, title: 'Accurate verification' },
    { icon: BarChart3, title: 'Real-time results' },
  ] as const,
} as const

export const LOGIN_FORM = {
  greeting: 'Welcome back!',
  subheading: 'Log in to your xDial AI account',
  fields: {
    email: { label: 'Email', placeholder: 'you@company.com' },
    password: { label: 'Password', placeholder: '••••••••••' },
  },
  forgotPassword: 'Forgot password?',
  submit: { label: 'Log In' },
  divider: 'or continue with',
  sso: [
    { label: 'Continue with Google', provider: 'google' },
    { label: 'Continue with Microsoft', provider: 'microsoft' },
    { label: 'Single Sign-On (SSO)', provider: 'sso' },
  ] as const,
  trust: 'Secure, HIPAA-aligned, and built for healthcare.',
} as const

export const LOGIN_HELP = {
  prompt: 'Need help logging in?',
  linkLabel: 'Contact Support@xdialai.ai',
  href: 'mailto:Support@xdialai.ai',
} as const

export const LOGIN_SIGNUP_PROMPT = {
  question: 'New to xDial AI?',
  cta: 'Book a Demo',
} as const
