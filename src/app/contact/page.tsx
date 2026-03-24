import AnimateOnScroll from "@/components/AnimateOnScroll";
import Link from "next/link";

function IconMail() {
  return (
    <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}
function IconClock() {
  return (
    <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

const faqs = [
  {
    q: "Which program is right for me?",
    a: "If you're starting from zero, the 4 Week Group Training is the best entry point. If you want a faster, more personalized path, 1-on-1 Mentorship gives you direct access to Wensey.",
  },
  {
    q: "Do I need any Amazon experience?",
    a: "No. Every program is built to take you from zero — no prior experience, no existing account required.",
  },
  {
    q: "What does Done For You include?",
    a: "Wensey's team handles product research, supplier sourcing, listing creation, and launch strategy. You own the business — we do the work.",
  },
  {
    q: "How quickly can I expect results?",
    a: "Some students make their first sales within days of completing training. Results vary based on effort, capital, and consistency — but the framework is designed to get you moving fast.",
  },
];

export default function Contact() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div
          className="absolute -top-20 -right-20 w-[350px] h-[350px] rounded-full pointer-events-none blob-drift"
          style={{ background: "radial-gradient(circle, #FCE4EC 0%, transparent 70%)", filter: "blur(50px)" }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <span
            className="hero-fade-up hero-fade-up-1 inline-block text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-5 px-3 py-1 rounded-full border border-[var(--color-border)]"
            style={{ background: "var(--color-accent-light)" }}
          >
            Contact
          </span>
          <h1 className="hero-fade-up hero-fade-up-2 text-4xl sm:text-5xl font-extrabold text-[var(--color-primary-text)] mb-5 leading-tight">
            Get in Touch
          </h1>
          <p className="hero-fade-up hero-fade-up-3 text-[var(--color-muted-text)] text-lg max-w-xl leading-relaxed">
            Have a question about coaching, programs, or getting started on Amazon?
            Reach out directly — we respond to every message.
          </p>
        </div>
      </section>

      {/* Contact details + FAQ */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

          {/* Left — contact cards */}
          <AnimateOnScroll className="space-y-5">
            {[
              {
                icon: <IconMail />,
                title: "Email",
                line1: "info@wenseymccomb.com",
                href: "mailto:info@wenseymccomb.com",
              },
              {
                icon: <IconPhone />,
                title: "Phone",
                line1: "+1 (702) 250-3325",
                href: "tel:17022503325",
              },
              {
                icon: <IconClock />,
                title: "Response Time",
                line1: "Within 24 hours on business days.",
                href: null,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-5 rounded-2xl p-6 border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:-translate-y-0.5 hover:shadow-md hover:shadow-rose-100 transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.85)" }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--color-accent-light)" }}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--color-primary-text)] mb-1">{item.title}</h3>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-[var(--color-muted-text)] hover:text-[var(--color-accent)] transition-colors">
                      {item.line1}
                    </a>
                  ) : (
                    <p className="text-sm text-[var(--color-muted-text)]">{item.line1}</p>
                  )}
                </div>
              </div>
            ))}

            <div
              className="rounded-2xl p-6 border border-[var(--color-border)]"
              style={{ background: "var(--color-accent-light)" }}
            >
              <p className="text-sm text-[var(--color-primary-text)] leading-relaxed mb-4">
                Ready to get started? Browse all programs and find the right fit for where you are.
              </p>
              <Link
                href="/about"
                className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 text-sm shadow-sm shadow-rose-200 active:scale-95"
              >
                View Programs
              </Link>
            </div>
          </AnimateOnScroll>

          {/* Right — FAQ */}
          <AnimateOnScroll delay={150}>
            <h2 className="text-xl font-bold text-[var(--color-primary-text)] mb-6">Common Questions</h2>
            <div className="space-y-5">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 border border-[var(--color-border)]"
                  style={{ background: "rgba(255,255,255,0.85)" }}
                >
                  <h3 className="text-sm font-semibold text-[var(--color-primary-text)] mb-2">{faq.q}</h3>
                  <p className="text-sm text-[var(--color-muted-text)] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

        </div>
      </section>
    </>
  );
}
