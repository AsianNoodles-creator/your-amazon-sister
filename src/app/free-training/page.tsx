"use client";
import Script from "next/script";

export default function FreeTraining() {
  return (
    <>
      {/* Background blobs */}
      <div
        className="fixed -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #FCE4EC 0%, transparent 70%)", filter: "blur(60px)", opacity: 0.7, zIndex: 0 }}
        aria-hidden="true"
      />
      <div
        className="fixed bottom-0 -left-24 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #F8BBD0 0%, transparent 70%)", filter: "blur(50px)", opacity: 0.5, zIndex: 0 }}
        aria-hidden="true"
      />

      <main className="relative z-10 flex-1 flex items-center justify-center px-6 py-20 min-h-screen">
        <div className="w-full max-w-[580px] text-center">

          {/* Eyebrow */}
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-7 px-4 py-1.5 rounded-full border border-[var(--color-border)]"
            style={{ background: "var(--color-accent-light)", letterSpacing: "0.18em" }}
          >
            Free Training — Your Amazon Sister
          </span>

          {/* Headline */}
          <h1
            className="mb-5 leading-[1.1]"
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "clamp(2.4rem, 5.5vw, 3.8rem)",
              fontWeight: 500,
              color: "var(--color-primary-text)",
            }}
          >
            Learn the Exact System That Helped Me Build a{" "}
            <em style={{ color: "var(--color-accent)", fontStyle: "italic" }}>
              6-Figure Amazon Business
            </em>{" "}
            From Scratch
          </h1>

          {/* Subheadline */}
          <p
            className="mb-12 leading-relaxed mx-auto"
            style={{
              fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
              color: "var(--color-muted-text)",
              maxWidth: "460px",
            }}
          >
            Without prior experience, without a warehouse, and without quitting your job first.
          </p>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px" style={{ background: "var(--color-border)" }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-accent)" }} />
            <div className="flex-1 h-px" style={{ background: "var(--color-border)" }} />
          </div>

          {/* Form card */}
          <div
            className="rounded-3xl p-10 text-left"
            style={{
              background: "rgba(255,255,255,0.85)",
              border: "1.5px solid var(--color-border)",
              boxShadow: "0 20px 60px rgba(44,35,37,0.07)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/yrITo3kUmUqmdPU5cbcZ"
              style={{ width: "100%", height: "720px", border: "none", borderRadius: "3px" }}
              id="inline-yrITo3kUmUqmdPU5cbcZ"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Opt-in Form"
              data-height="720"
              data-layout-iframe-id="inline-yrITo3kUmUqmdPU5cbcZ"
              data-form-id="yrITo3kUmUqmdPU5cbcZ"
              title="Opt-in Form"
            />
            <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />

            {/* Trust line */}
            <p
              className="mt-5 text-center leading-relaxed"
              style={{ fontSize: "0.74rem", color: "var(--color-muted-text)" }}
            >
              <span className="flex items-center justify-center gap-2 mb-1">
                <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{ color: "var(--color-accent)" }}>
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
                Your information is never sold, shared, or distributed to third parties.
              </span>
              By submitting, you agree to our{" "}
              <a href="/privacy" className="underline">Privacy Policy</a>
              {" "}and{" "}
              <a href="/terms" className="underline">Terms of Service</a>.
            </p>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer
        className="relative z-10 text-center px-6 py-6"
        style={{ borderTop: "1px solid var(--color-border-light)" }}
      >
        <p
          className="mx-auto leading-relaxed"
          style={{ fontSize: "0.67rem", color: "var(--color-muted-text)", maxWidth: "560px" }}
        >
          Your Amazon Sister is operated by Wensey McComb
        </p>
        <p
          className="mx-auto mt-1"
          style={{ fontSize: "0.67rem", color: "var(--color-muted-text)", maxWidth: "560px" }}
        >
          &copy; {new Date().getFullYear()} Your Amazon Sister LLC. All rights reserved.
        </p>
        <p
          className="mx-auto mt-1"
          style={{ fontSize: "0.67rem", color: "var(--color-muted-text)" }}
        >
          3157 N. Rainbow Blvd #161, Las Vegas, NV 89108
        </p>
        <div className="flex items-center justify-center gap-4 mt-2">
          <a href="/privacy" className="hover:underline" style={{ fontSize: "0.67rem", color: "var(--color-muted-text)" }}>Privacy Policy</a>
          <a href="/terms" className="hover:underline" style={{ fontSize: "0.67rem", color: "var(--color-muted-text)" }}>Terms of Service</a>
        </div>
      </footer>
    </>
  );
}
