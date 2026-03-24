export const metadata = {
  title: "Privacy Policy — The Amazon Sister",
};

const BUSINESS_NAME = "The Amazon Sister LLC";
const BUSINESS_EMAIL = "info@wenseymccomb.com";
const BUSINESS_PHONE = "+1 (702) 250-3325";

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
        </div>

        <div className="prose prose-sm max-w-none space-y-8 text-[var(--color-muted-text)] leading-relaxed">

          <div>
            <p>
              This Privacy Policy describes how {BUSINESS_NAME} ("The Amazon Sister," "we," "us," or "our")
              collects, uses, and shares information when you visit our website or join our membership community.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--color-primary-text)] mb-3">1. Information We Collect</h2>
            <p className="mb-3">We collect the following types of information:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Name and email address</strong> — collected when you contact us or join our community.</li>
              <li><strong>Phone number</strong> — collected when you opt in to receive SMS communications from us.</li>
              <li><strong>Usage data</strong> — including pages visited, time spent on site, and browser type, collected automatically via cookies and analytics tools.</li>
              <li><strong>Form submissions</strong> — any information you voluntarily provide through our contact or registration forms.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--color-primary-text)] mb-3">2. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Send SMS messages related to community updates and business announcements (only if you have opted in)</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--color-primary-text)] mb-3">3. SMS Communications</h2>
            <p className="mb-3">
              By providing your phone number and checking the SMS opt-in box on our registration or contact forms,
              you consent to receive recurring automated text messages from {BUSINESS_NAME} at the phone number provided.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Message frequency varies based on community announcements and business updates.</li>
              <li>Message and data rates may apply.</li>
              <li>To opt out at any time, reply <strong>STOP</strong> to any message. You will receive a confirmation and no further messages will be sent.</li>
              <li>To request help, reply <strong>HELP</strong> or contact us at {BUSINESS_EMAIL}.</li>
              <li>Carriers are not liable for delayed or undelivered messages.</li>
            </ul>
            <p className="mt-3">
              We do not sell or share your phone number with third parties for their own marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--color-primary-text)] mb-3">4. Sharing of Information</h2>
            <p className="mb-3">We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Service providers</strong> — including GoHighLevel (CRM and marketing automation) and Twilio (SMS delivery), who process data on our behalf under confidentiality agreements.</li>
              <li><strong>Legal authorities</strong> — if required by law or to protect our legal rights.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--color-primary-text)] mb-3">5. Cookies and Analytics</h2>
            <p>
              We use cookies and similar tracking technologies to analyze website traffic and improve user experience.
              You can disable cookies through your browser settings, though some features of the site may not function properly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--color-primary-text)] mb-3">6. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to provide our services and comply
              with legal obligations. You may request deletion of your data at any time by contacting us.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--color-primary-text)] mb-3">7. Your Rights</h2>
            <p className="mb-3">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction or deletion of your information</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, contact us at {BUSINESS_EMAIL}.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--color-primary-text)] mb-3">8. Children&apos;s Privacy</h2>
            <p>
              Our website and services are not directed to individuals under the age of 18.
              We do not knowingly collect personal information from children.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--color-primary-text)] mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page
              with an updated effective date. Continued use of our services after changes constitutes
              acceptance of the revised policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--color-primary-text)] mb-3">10. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, contact us at:</p>
            <div className="mt-3 space-y-1">
              <p><strong>{BUSINESS_NAME}</strong></p>
              <p>Email: <a href={`mailto:${BUSINESS_EMAIL}`} className="text-[var(--color-accent)] hover:underline">{BUSINESS_EMAIL}</a></p>
              <p>Phone: <a href={`tel:${BUSINESS_PHONE.replace(/\D/g, "")}`} className="text-[var(--color-accent)] hover:underline">{BUSINESS_PHONE}</a></p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
