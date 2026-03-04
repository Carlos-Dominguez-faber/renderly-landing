export function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      {/* Header */}
      <div className="mb-12">
        <p className="font-body text-sm text-[var(--text-muted)]">
          Effective Date: March 4, 2026
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-white">
          Privacy Policy
        </h1>
        <p className="mt-5 font-body text-base leading-relaxed text-[var(--text-secondary)]">
          At Renderly, operated by SystemizMyBiz Agency, we take your privacy seriously. This Privacy
          Policy describes how we collect, use, store, and protect your personal information when you
          visit our website at{' '}
          <a
            href="https://renderly.systemizemybiz.com"
            className="text-white underline underline-offset-2 hover:text-[var(--primary-light)] transition-colors"
          >
            renderly.systemizemybiz.com
          </a>{' '}
          or use our AI virtual staging platform. By using Renderly, you agree to the practices
          described in this policy.
        </p>
      </div>

      {/* Divider */}
      <div className="mb-12 h-px w-full bg-white/[0.06]" />

      {/* Section 1 */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-white">
          1. Information We Collect
        </h2>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          We collect information that you provide directly to us, as well as data gathered
          automatically through your use of the platform. This includes:
        </p>
        <p className="mt-4 font-body text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]">
          Personal Information
        </p>
        <ul className="mt-3 space-y-2">
          {[
            'Full name and email address provided at account creation or contact form submission.',
            'Billing information, including payment card details, processed securely by our payment provider. We do not store raw card numbers.',
            'Business name or role (e.g., real estate agent, homeowner) if voluntarily provided.',
            'Communications you send us via email or support requests.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 font-body text-[var(--text-secondary)]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-body text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]">
          Usage Data
        </p>
        <ul className="mt-3 space-y-2">
          {[
            'Browser type, operating system, and device type.',
            'IP address and approximate geographic location (city/region level).',
            'Pages visited, features used, time spent on the platform, and clickstream data.',
            'Referring URLs and search terms that led you to Renderly.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 font-body text-[var(--text-secondary)]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-body text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]">
          Uploaded Photos
        </p>
        <p className="mt-3 font-body text-[var(--text-secondary)] leading-relaxed">
          Photos you upload for AI virtual staging are processed by our AI models to generate staged
          output images. These photos are not reviewed by Renderly staff, not shared with third
          parties for commercial purposes, and are encrypted in transit and at rest. After your
          staged images have been delivered, uploaded source photos are deleted from temporary
          processing storage within 30 days unless you have an active account where they are
          retained for your reference.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-white">
          2. How We Use Your Information
        </h2>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          We use the information we collect to operate, maintain, and improve Renderly. Specifically:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            'To create and manage your account and authenticate your identity.',
            'To process your payments and deliver the virtual staging services you have purchased.',
            'To respond to your support requests, questions, and feedback.',
            'To send transactional emails, such as order confirmations and account notifications.',
            'To send product updates, new features, and promotional communications. You can opt out of marketing emails at any time via the unsubscribe link included in every message.',
            'To analyze aggregate usage patterns and improve the performance, accuracy, and design of the platform.',
            'To detect and prevent fraud, abuse, or violations of our Terms of Service.',
            'To comply with applicable laws, regulations, and legal obligations.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 font-body text-[var(--text-secondary)]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Section 3 */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-white">
          3. Data Sharing
        </h2>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          We do not sell, rent, or trade your personal information to third parties. Period. We share
          your data only in the following limited circumstances:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            'Payment processors (Stripe): To securely process transactions. Stripe handles all payment card data under their own PCI-DSS compliant privacy policy.',
            'Cloud infrastructure and hosting providers: To operate the platform. These providers process data on our behalf and are bound by data processing agreements.',
            'Analytics providers (Google Analytics): To understand aggregate usage patterns. This data is anonymized and used only for improving the product.',
            'Law enforcement or government authorities: If required by applicable law, court order, or to protect the rights, safety, or property of Renderly or our users.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 font-body text-[var(--text-secondary)]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          In the event of a merger, acquisition, or sale of all or part of our business, personal
          information may be transferred as part of that transaction. We will notify you via email
          and a prominent notice on our website before your data becomes subject to a different
          privacy policy.
        </p>
      </section>

      {/* Section 4 */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-white">
          4. Data Security
        </h2>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          We take data security seriously and implement industry-standard safeguards to protect your
          information from unauthorized access, disclosure, alteration, or destruction:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            'All data transmitted between your browser and our servers is encrypted using TLS/SSL.',
            'Uploaded photos and staged output images are encrypted at rest in our secure cloud infrastructure.',
            'Access to personal data is restricted to authorized personnel who require it to perform their job functions.',
            'We conduct regular security reviews and vulnerability assessments of our platform.',
            'Payment processing is handled entirely by Stripe; we never handle or store raw payment card data.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 font-body text-[var(--text-secondary)]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          While we strive to protect your data, no method of transmission or storage over the
          internet is 100% secure. If you believe your account has been compromised, please contact
          us immediately at{' '}
          <a href="mailto:hello@renderly.com" className="text-white underline underline-offset-2 hover:text-[var(--primary-light)] transition-colors">
            hello@renderly.com
          </a>
          .
        </p>
      </section>

      {/* Section 5 */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-white">
          5. Your Rights
        </h2>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          Depending on your jurisdiction, you may have certain rights regarding your personal
          information. We respect these rights for all users, regardless of location:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            'Access: You can request a copy of the personal data we hold about you.',
            'Correction: You can request that we correct inaccurate or incomplete information.',
            'Deletion: You can request that we delete your personal data. We will comply unless we are required to retain it by law or for legitimate business purposes (e.g., outstanding invoices).',
            'Withdrawal of consent: Where we process your data based on consent (e.g., marketing emails), you can withdraw that consent at any time.',
            'Data portability: You can request that we provide your data in a structured, machine-readable format.',
            'Objection: You can object to certain types of processing, including direct marketing.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 font-body text-[var(--text-secondary)]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          To exercise any of these rights, please contact us at{' '}
          <a href="mailto:hello@renderly.com" className="text-white underline underline-offset-2 hover:text-[var(--primary-light)] transition-colors">
            hello@renderly.com
          </a>
          . We will respond to your request within 30 days.
        </p>
      </section>

      {/* Section 6 */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-white">
          6. Cookies
        </h2>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          Renderly uses cookies and similar tracking technologies to operate the platform and
          understand how users interact with it. We use the following types of cookies:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            'Essential cookies: Required for the platform to function. These include session management cookies and authentication tokens. These cannot be disabled without impairing core functionality.',
            'Analytics cookies (Google Analytics): We use Google Analytics to collect anonymized data about how users navigate the platform — which features are used most, where users drop off, and how performance can be improved. You can opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on.',
            'Preference cookies: Store your settings and preferences, such as language or display options, so you do not have to re-enter them each visit.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 font-body text-[var(--text-secondary)]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          You can manage or disable cookies through your browser settings. Please note that
          disabling essential cookies will prevent you from logging in and using the platform.
          For more information about managing cookies, visit{' '}
          <a
            href="https://www.allaboutcookies.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline underline-offset-2 hover:text-[var(--primary-light)] transition-colors"
          >
            allaboutcookies.org
          </a>
          .
        </p>
      </section>

      {/* Section 7 */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-white">
          7. Changes to This Privacy Policy
        </h2>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          We may update this Privacy Policy from time to time to reflect changes in our practices,
          technology, legal requirements, or for other operational reasons. When we make material
          changes, we will notify you by:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            'Sending an email to the address associated with your account.',
            'Displaying a prominent notice on our website for a reasonable period before the changes take effect.',
            'Updating the "Effective Date" at the top of this page.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 font-body text-[var(--text-secondary)]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          Your continued use of Renderly after the effective date of any changes constitutes your
          acceptance of the updated Privacy Policy. If you do not agree with the changes, you should
          stop using the platform and may request deletion of your account.
        </p>
      </section>

      {/* Section 8 */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-white">
          8. Contact Information
        </h2>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          If you have questions, concerns, or requests regarding this Privacy Policy or how we
          handle your personal data, please reach out to us. We are committed to addressing your
          inquiries promptly and transparently.
        </p>
        <div className="mt-6 rounded-xl border border-white/[0.07] bg-[var(--bg-surface)] p-6">
          <p className="font-display text-base font-semibold text-white">Renderly</p>
          <p className="mt-1 font-body text-sm text-[var(--text-secondary)]">
            Operated by SystemizMyBiz Agency
          </p>
          <p className="mt-1 font-body text-sm text-[var(--text-secondary)]">
            Winnipeg, Manitoba, Canada
          </p>
          <a
            href="mailto:hello@renderly.com"
            className="mt-3 inline-block font-body text-sm text-white underline underline-offset-2 hover:text-[var(--primary-light)] transition-colors"
          >
            hello@renderly.com
          </a>
        </div>
      </section>

      {/* Bottom spacer */}
      <div className="mt-16 h-px w-full bg-white/[0.06]" />
      <p className="mt-8 font-body text-sm text-[var(--text-muted)]">
        Last updated: March 4, 2026
      </p>
    </div>
  )
}
