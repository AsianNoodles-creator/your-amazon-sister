"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className="sticky top-0 z-50 border-b border-[var(--color-border-light)]"
      style={{
        background: "rgba(255, 248, 251, 0.88)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-[var(--color-primary-text)] transition-opacity duration-200 hover:opacity-80"
          style={{ fontFamily: "Poppins, system-ui, sans-serif" }}
        >
          <span className="text-[var(--color-accent)]">The Amazon</span> Sister
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="nav-underline text-sm font-medium text-[var(--color-muted-text)] hover:text-[var(--color-primary-text)] transition-colors duration-200 pb-0.5"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[var(--color-muted-text)] hover:text-[var(--color-primary-text)] transition-colors cursor-pointer p-1 active:scale-90"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--color-border-light)] bg-[var(--color-surface)] px-4 sm:px-6 pb-5">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block text-sm font-medium text-[var(--color-muted-text)] hover:text-[var(--color-primary-text)] transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
