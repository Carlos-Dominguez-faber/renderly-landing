import { ContactPage } from '@/features/contact/contact-page'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Renderly',
  description:
    'Get in touch with the Renderly team. We are here to help with virtual staging questions.',
}

export default function ContactRoute() {
  return <ContactPage />
}
