export const metadata = {
  title: "Terms of Service — Your Amazon Sister",
};

const BUSINESS_NAME = "Your Amazon Sister LLC";
const BUSINESS_EMAIL = "info@wenseymccomb.com";
const BUSINESS_PHONE = "+1 (702) 250-3325";
const BUSINESS_ADDRESS = "3157 N. Rainbow Blvd #161, Las Vegas, NV 89108";

export default function Terms() {
  return (
    <section className="py-20 pb-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-5 px-3 py-1 rounded-full border border-[var(--color-border)]"
            style={{ background: "var(--color-accent-light)" }}
          >
            Legal
          </span>
          <h1 className="text-4xl font-extrabold text-[var(--color-primary-text)] mb-3">
            Terms of Service
          </h1>
          <p className="text-sm text-[var(--color-muted-text)]">Effective Date: March 24, 2026</p>
        </div>

        <div className="prose prose-sm max-w-none space-y-8 text-[var(--color-muted-text)] leading-relaxed">

          <div>
            <p className="mb-3">
              {BUSINESS_NAME} is owned and operated by Wensey McComb.
            </p>
            <p>
              These Terms of Service ("Terms") govern your access to and use of the website and services
              operated by {BUSINESS_NAME} ("Your Amazon Sister," "we," "us," or "our"). By using this website or
              any of our services, you agree to these Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--color-primary-text)] mb-3">1. Services</h2>
            <p>
              Your Amazon Sister provides educational content and a paid membership community focused
              on Amazon reselling strategies. Our services are intended for informational and educational
              purposes only. Results are not guaranteed and vary based on individual effort, market conditions,
              and other factors outside our control.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--color-primary-text)] mb-3">2. Membership Community</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Access to the paid membership community is subject to a recurring subscription fee.</li>
              <li>You may cancel your membership at any time. Cancellations take effect at the end of the current billing period.</li>
              <li>Refunds are not issued for partial billing periods unless required by applicable law.</li>
              <li>We reserve the right to revoke membership access for violations of community guidelines or these Terms.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--color-primary-text)] mb-3">3. SMS Communications</h2>
            <p className="mb-3">
              By opting in to SMS communications, you agree to receive automated text messages from
              {" "}{BUSINESS_NAME} as described in our{" "}
              <a href="/privacy" className="text-[var(--color-accent)] hover:underline">Privacy Policy</a>.
            </p>
            <p className="mb-3">
              These messages may include responses to inquiries, appointment reminders, onboarding updates,
              and service-related notifications. Message frequency may vary. Message and data rates may apply.
            </p>
            <p className="mb-3">
              You may opt out at any time by replying <strong>STOP</strong> or request assistance by
              replying <strong>HELP</strong>.
            </p>
            <p className="mb-3">
              SMS consent is not a condition of purchase. Your opt-in consent and phone number are not sold,
              shared, or disclosed to third parties or affiliates for marketing purposes.
            </p>
            <p className="mb-3">
              Carriers are not liable for delayed or undelivered messages.
            </p>
            <p>
              You must be 18 years of age or older to use this SMS service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--color-primary-text)] mb-3">4. Intellectual Property</h2>
            <p>
              All content on this website — including text, graphics, videos, and course materials — is the property of {BUSINESS_NAME} and protected by applicable
              copyright laws. You may not reproduce, distribute, or create derivative works from our
              content without written permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--color-primary-text)] mb-3">5. Disclaimer of Warranties</h2>
            <p>
              Our website and services are provided "as is" without warranties of any kind, express or implied.
              We do not guarantee that our services will be uninterrupted, error-free, or that any specific
              financial results will be achieved through the application of our educational content.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--color-primary-text)] mb-3">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, {BUSINESS_NAME} shall not be liable for any indirect,
              incidental, special, or consequential damages arising from your use of our services, including
              any business losses or lost profits.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--color-primary-text)] mb-3">7. User Conduct</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Use our services for any unlawful purpose</li>
              <li>Share or resell access to paid membership content</li>
              <li>Harass, threaten, or demean other community members</li>
              <li>Misrepresent your identity or affiliation</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--color-primary-text)] mb-3">8. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of Nevada, without regard to its
              conflict of law provisions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--color-primary-text)] mb-3">9. Changes to These Terms</h2>
            <p>
              We reserve the right to update these Terms at any time. Changes will be posted on this
              page with an updated effective date. Continued use of our services after changes are
              posted constitutes your acceptance of the revised Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--color-primary-text)] mb-3">10. Contact Us</h2>
            <p>For questions about these Terms, contact us at:</p>
            <div className="mt-3 space-y-1">
              <p><strong>{BUSINESS_NAME}</strong></p>
              <p>{BUSINESS_ADDRESS}</p>
              <p>Website: <a href="https://www.wenseymccomb.com" className="text-[var(--color-accent)] hover:underline">www.wenseymccomb.com</a></p>
              <p>Email: <a href={`mailto:${BUSINESS_EMAIL}`} className="text-[var(--color-accent)] hover:underline">{BUSINESS_EMAIL}</a></p>
              <p>Phone: <a href="tel:17022503325" className="text-[var(--color-accent)] hover:underline">{BUSINESS_PHONE}</a></p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
