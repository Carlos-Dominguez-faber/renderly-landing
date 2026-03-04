import { TermsOfServicePage } from '@/features/legal/terms-of-service-page'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Renderly',
  description: 'Terms and conditions governing your use of the Renderly AI virtual staging platform.',
}

export default function TermsOfServiceRoute() {
  return <TermsOfServicePage />
}
