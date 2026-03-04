import { PrivacyPolicyPage } from '@/features/legal/privacy-policy-page'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Renderly',
  description: 'How Renderly collects, uses, and protects your personal information.',
}

export default function PrivacyPolicyRoute() {
  return <PrivacyPolicyPage />
}
