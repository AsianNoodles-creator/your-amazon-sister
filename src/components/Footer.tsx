import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-light)] bg-[var(--color-surface)] mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3
              className="text-xl font-bold mb-3 text-[var(--color-primary-text)]"
              style={{ fontFamily: "Poppins, system-ui, sans-serif" }}
            >
              <span className="text-[var(--color-accent)]">The Amazon</span> Sister
            </h3>
            <p className="text-[var(--color-muted-text)] text-sm leading-relaxed mb-2">
              Helping women build profitable Amazon businesses through education,
              community, and live coaching.
            </p>
            <p className="text-xs text-[var(--color-muted-text)]">Your Amazon Sister LLC</p>
          </div>

          {/* Links */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted-text)] mb-4"
              style={{ fontFamily: "Poppins, system-ui, sans-serif" }}
            >
              Pages
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[var(--color-muted-text)] hover:text-[var(--color-accent)] transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted-text)] mb-4"
              style={{ fontFamily: "Poppins, system-ui, sans-serif" }}
            >
              Get in Touch
            </h4>
            <a
              href="mailto:info@wenseymccomb.com"
              className="text-sm text-[var(--color-muted-text)] hover:text-[var(--color-accent)] transition-colors duration-200 block mb-1"
            >
              info@wenseymccomb.com
            </a>
            <a
              href="tel:17022503325"
              className="text-sm text-[var(--color-muted-text)] hover:text-[var(--color-accent)] transition-colors duration-200 block"
            >
              +1 (702) 250-3325
            </a>
            <p className="text-xs text-[var(--color-muted-text)] mt-3 leading-relaxed">
              Responses within 24 hours on business days.
            </p>
          </div>
        </div>

        <div className="border-t border-[var(--color-border-light)] mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[var(--color-muted-text)]">
            &copy; {new Date().getFullYear()} Your Amazon Sister LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-xs text-[var(--color-muted-text)] hover:text-[var(--color-accent)] transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-[var(--color-muted-text)] hover:text-[var(--color-accent)] transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
