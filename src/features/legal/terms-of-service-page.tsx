export function TermsOfServicePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      {/* Header */}
      <div className="mb-12">
        <p className="font-body text-sm text-[var(--text-muted)]">
          Effective Date: March 4, 2026
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-white">
          Terms of Service
        </h1>
        <p className="mt-5 font-body text-base leading-relaxed text-[var(--text-secondary)]">
          These Terms of Service govern your access to and use of Renderly, an AI virtual staging
          platform operated by SystemizMyBiz Agency. Please read these terms carefully before
          creating an account or using the platform. By accessing Renderly at{' '}
          <a
            href="https://renderly.systemizemybiz.com"
            className="text-white underline underline-offset-2 hover:text-[var(--primary-light)] transition-colors"
          >
            renderly.systemizemybiz.com
          </a>
          , you confirm that you have read, understood, and agree to be bound by these Terms of
          Service. If you do not agree, do not use the platform.
        </p>
      </div>

      {/* Divider */}
      <div className="mb-12 h-px w-full bg-white/[0.06]" />

      {/* Section 1 */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-white">
          1. Welcome to Renderly
        </h2>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          Renderly is an AI-powered virtual staging platform designed for real estate agents,
          homeowners, landlords, and property managers. Our service digitally furnishes photos of
          empty rooms using artificial intelligence, producing photorealistic staged images suitable
          for real estate listings, rental postings, and marketing materials.
        </p>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          By creating an account or using Renderly in any way — including browsing the website,
          uploading photos, or downloading staged images — you enter into a binding legal agreement
          with Renderly (SystemizMyBiz Agency) governed by these Terms of Service.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-white">
          2. Services Provided
        </h2>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          Renderly provides an AI virtual staging platform that digitally furnishes photographs of
          empty or sparsely furnished rooms. Core capabilities include:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            'AI-generated virtual furniture placement in uploaded room photos.',
            'Multiple interior design styles including Modern, Scandinavian, Mid-Century, Coastal, Industrial, and others.',
            'Photorealistic rendering with accurate lighting, shadows, and perspective.',
            'Delivery of MLS-compatible staged images optimized for real estate listings.',
            'Account dashboard for managing projects, downloading images, and reviewing order history.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 font-body text-[var(--text-secondary)]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          Renderly reserves the right to modify, add, or discontinue features at any time. We will
          provide reasonable notice when changes materially affect paid plan functionality.
        </p>
      </section>

      {/* Section 3 */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-white">
          3. Account Creation
        </h2>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          To access most features of Renderly, you must create an account. By creating an account,
          you represent and warrant that:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            'You are at least 18 years of age. The platform is not intended for users under 18.',
            'All registration information you provide is accurate, current, and complete.',
            'You will maintain the accuracy of your account information and update it as needed.',
            'You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.',
            'You will not create more than one personal account. Multiple accounts for the same individual are not permitted.',
            'You will notify us immediately at hello@renderly.com if you become aware of any unauthorized use of your account.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 font-body text-[var(--text-secondary)]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          Renderly is not liable for any loss or damage arising from your failure to protect your
          account credentials.
        </p>
      </section>

      {/* Section 4 */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-white">
          4. Subscription and Payment Terms
        </h2>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          Renderly offers the following plans:
        </p>
        <div className="mt-4 overflow-hidden rounded-xl border border-white/[0.07]">
          {[
            { plan: 'Free', price: '$0', desc: 'One staged image. No payment required. Explore the platform risk-free.' },
            { plan: 'Starter', price: '$19.99 one-time', desc: 'Staged images for a single property. One-time payment, no subscription.' },
            { plan: 'Professional', price: '$29.99 one-time', desc: 'Up to 9 staged images per property. One-time payment, no subscription.' },
            { plan: 'Enterprise', price: '$75/month', desc: 'Unlimited properties. Monthly subscription. Cancel anytime.' },
          ].map((row, i) => (
            <div
              key={row.plan}
              className={`flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:gap-4 ${
                i < 3 ? 'border-b border-white/[0.06]' : ''
              }`}
            >
              <div className="w-32 shrink-0">
                <span className="font-display text-sm font-semibold text-white">{row.plan}</span>
              </div>
              <div className="w-44 shrink-0">
                <span className="font-body text-sm text-[var(--primary-light)]">{row.price}</span>
              </div>
              <p className="font-body text-sm text-[var(--text-secondary)]">{row.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 font-body text-[var(--text-secondary)] leading-relaxed">
          All payments are processed securely by Stripe. By completing a purchase, you authorize
          Renderly to charge the applicable fee to your provided payment method.
        </p>
        <ul className="mt-4 space-y-2">
          {[
            'One-time payments (Starter and Professional plans) are non-refundable once the AI staging has been processed and images have been delivered to your account.',
            'Enterprise monthly subscriptions renew automatically on your billing date. You may cancel at any time from your account settings, and cancellation takes effect at the end of the current billing period.',
            'Renderly reserves the right to update pricing with 30 days advance notice via email or site notification. Existing Enterprise subscriptions will continue at their current rate until the next renewal after the notice period.',
            'In cases where a technical error on our part prevents delivery of your staged images, we will re-process your order or issue a credit at our discretion.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 font-body text-[var(--text-secondary)]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Section 5 */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-white">
          5. User Responsibilities
        </h2>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          You are responsible for how you use Renderly and for all content you upload or share
          through the platform. You agree not to:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            'Upload photos containing illegal content, including but not limited to content depicting exploitation, violence, or material that infringes on the rights of others.',
            'Upload photos for which you do not hold the necessary rights or permissions.',
            'Attempt to reverse-engineer, decompile, disassemble, or otherwise derive source code from the Renderly platform or its AI models.',
            'Resell or sublicense access to Renderly or provide unauthorized access to third parties.',
            'Use automated scripts, bots, scrapers, or crawlers to access or extract data from the platform.',
            'Circumvent or attempt to circumvent any usage limits, access controls, or security measures.',
            'Use Renderly for any unlawful purpose or in violation of any applicable local, provincial, national, or international law.',
            'Comply with MLS disclosure requirements in your jurisdiction when publishing virtually staged photos in property listings. Most MLS boards require staged images to be labeled as "virtually staged." You are solely responsible for compliance with these rules.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 font-body text-[var(--text-secondary)]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Section 6 */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-white">
          6. License to Use the Platform
        </h2>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          Subject to your compliance with these Terms of Service, Renderly grants you a limited,
          non-exclusive, non-transferable, revocable license to access and use the platform for
          your personal or professional real estate activities.
        </p>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          Regarding the images you create through the platform:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            'Staged output images you generate belong to you. You may use them freely for real estate listings, marketing materials, social media, and other commercial purposes.',
            'You retain full ownership of your original uploaded photos at all times.',
            'Renderly retains the right to use anonymized, non-identifiable data derived from platform interactions to train, improve, and optimize our AI models. This does not include your personal information or identifiable photos.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 font-body text-[var(--text-secondary)]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          This license does not grant you any rights to reproduce, distribute, or create derivative
          works from Renderly's software, brand assets, or AI models.
        </p>
      </section>

      {/* Section 7 */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-white">
          7. Intellectual Property
        </h2>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          All rights, title, and interest in and to the Renderly platform — including its software,
          source code, AI models, design, trademarks, brand assets, logos, and marketing materials
          — are and remain the exclusive property of Renderly (SystemizMyBiz Agency). Nothing in
          these Terms grants you ownership of or rights to Renderly's intellectual property beyond
          the limited license described in Section 6.
        </p>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          You retain all intellectual property rights to:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            'Your original uploaded photographs.',
            'The staged output images generated from your photos using our platform.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 font-body text-[var(--text-secondary)]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          If you believe any content on Renderly infringes your intellectual property rights,
          please contact us at{' '}
          <a href="mailto:hello@renderly.com" className="text-white underline underline-offset-2 hover:text-[var(--primary-light)] transition-colors">
            hello@renderly.com
          </a>{' '}
          with a description of the alleged infringement.
        </p>
      </section>

      {/* Section 8 */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-white">
          8. Data Use and Privacy
        </h2>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          Your privacy matters to us. Our collection, use, and protection of personal information is
          governed by our{' '}
          <a
            href="/legal/privacy-policy"
            className="text-white underline underline-offset-2 hover:text-[var(--primary-light)] transition-colors"
          >
            Privacy Policy
          </a>
          , which is incorporated into these Terms of Service by reference.
        </p>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          With respect to the photos you upload:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            'Uploaded photos are processed automatically by our AI models. No Renderly staff member views your photos as part of the standard staging workflow.',
            'Photos are stored in temporary processing storage during and immediately after AI generation. They are not shared with third parties for commercial purposes.',
            'Source photos are deleted from temporary storage within 30 days of delivery unless retained in your account dashboard for your own reference.',
            'All photos are encrypted in transit (TLS/SSL) and at rest.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 font-body text-[var(--text-secondary)]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Section 9 */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-white">
          9. Support
        </h2>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          Renderly provides customer support via email at{' '}
          <a href="mailto:hello@renderly.com" className="text-white underline underline-offset-2 hover:text-[var(--primary-light)] transition-colors">
            hello@renderly.com
          </a>
          . Support is available for all active account holders.
        </p>
        <ul className="mt-4 space-y-2">
          {[
            'Standard support: We aim to respond to all support requests within 48 business hours.',
            'Priority support: Professional and Enterprise plan users receive priority handling. We aim to respond to priority requests within 24 business hours.',
            'Support is provided in English. We will do our best to accommodate French-language requests from Canadian users.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 font-body text-[var(--text-secondary)]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          Support is available Monday through Friday during regular business hours (Central Time,
          Canada). We do not guarantee same-day responses on weekends or statutory holidays.
        </p>
      </section>

      {/* Section 10 */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-white">
          10. Termination
        </h2>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          Either party may terminate the relationship governed by these Terms of Service:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            'By you: You may delete your account at any time from your account settings. Cancellation of an Enterprise subscription takes effect at the end of the current billing period. One-time purchases are non-refundable.',
            'By Renderly: We may suspend or permanently terminate your account immediately, without prior notice, if we determine that you have violated these Terms of Service, engaged in fraudulent or abusive behavior, or if required by law.',
            'We will attempt to provide reasonable notice before terminating accounts for less severe violations and will give you an opportunity to remedy the issue.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 font-body text-[var(--text-secondary)]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          Upon termination of your account for any reason, your access to the platform and all
          associated features will cease immediately. Your personal data and uploaded content will
          be deleted from our systems within 30 days of account termination, in accordance with our
          Privacy Policy.
        </p>
      </section>

      {/* Section 11 */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-white">
          11. Limitation of Liability
        </h2>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          The Renderly platform is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
          basis, without warranties of any kind, whether express, implied, or statutory, including
          but not limited to implied warranties of merchantability, fitness for a particular purpose,
          or non-infringement.
        </p>
        <ul className="mt-4 space-y-2">
          {[
            'Renderly does not guarantee that the platform will be uninterrupted, error-free, or that AI staging results will meet your specific expectations for every image.',
            'To the maximum extent permitted by applicable law, Renderly shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, goodwill, or business opportunities, arising out of or related to your use of the platform.',
            'In no event shall Renderly\'s total liability to you for all claims arising out of or related to these Terms or your use of the platform exceed the total amount you have paid to Renderly in the twelve (12) months immediately preceding the claim.',
            'Renderly is not responsible for ensuring that your use of virtually staged photos complies with MLS regulations, real estate disclosure laws, or any other rules applicable in your jurisdiction. Compliance is your sole responsibility.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 font-body text-[var(--text-secondary)]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          Some jurisdictions do not allow the exclusion of certain warranties or limitation of
          liability. In such cases, Renderly's liability will be limited to the fullest extent
          permitted by applicable law.
        </p>
      </section>

      {/* Section 12 */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-white">
          12. Indemnification
        </h2>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          You agree to defend, indemnify, and hold harmless Renderly, SystemizMyBiz Agency, their
          officers, directors, employees, agents, and partners from and against any claims,
          liabilities, damages, judgments, losses, costs, and expenses (including reasonable legal
          fees) arising out of or related to:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            'Your use of or access to the Renderly platform.',
            'Your violation of these Terms of Service.',
            'Your violation of any third-party rights, including intellectual property rights or privacy rights.',
            'Any content you upload, submit, or transmit through the platform.',
            'Your failure to comply with applicable MLS rules, real estate laws, or disclosure requirements.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 font-body text-[var(--text-secondary)]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          Renderly reserves the right to assume exclusive control of the defense of any matter
          subject to indemnification by you, at your expense. You agree to cooperate with our
          defense of such claims and not to settle any matter without our prior written consent.
        </p>
      </section>

      {/* Section 13 */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-white">
          13. Dispute Resolution
        </h2>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          We hope to resolve any issues with you directly and amicably. If a dispute arises between
          you and Renderly, we ask that you follow this process:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            'Informal resolution: Contact us at hello@renderly.com describing the nature of your dispute. We will make a good-faith effort to resolve the issue within 30 days.',
            'Binding arbitration: If informal resolution is unsuccessful, disputes shall be resolved through binding arbitration administered in Winnipeg, Manitoba, Canada, in accordance with applicable arbitration rules. The arbitrator\'s decision shall be final and binding.',
            'Class action waiver: You agree that any dispute resolution proceeding will be conducted on an individual basis only. You waive any right to bring claims as a class, collective, or representative action.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 font-body text-[var(--text-secondary)]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          Notwithstanding the foregoing, either party may seek injunctive or other equitable relief
          in a court of competent jurisdiction to prevent irreparable harm pending arbitration.
        </p>
      </section>

      {/* Section 14 */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-white">
          14. Governing Law
        </h2>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          These Terms of Service shall be governed by and construed in accordance with the laws of
          the Province of Manitoba and the federal laws of Canada applicable therein, without regard
          to conflict of law principles. Any legal proceedings not subject to the arbitration
          provisions above shall be brought exclusively in the courts of Winnipeg, Manitoba, Canada.
        </p>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          If any provision of these Terms of Service is found to be unenforceable or invalid under
          applicable law, that provision will be limited or eliminated to the minimum extent
          necessary, and the remaining provisions will remain in full force and effect.
        </p>
        <p className="mt-4 font-body text-[var(--text-secondary)] leading-relaxed">
          These Terms of Service, together with our Privacy Policy, constitute the entire agreement
          between you and Renderly with respect to your use of the platform and supersede all prior
          agreements and understandings.
        </p>
        <div className="mt-8 rounded-xl border border-white/[0.07] bg-[var(--bg-surface)] p-6">
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
