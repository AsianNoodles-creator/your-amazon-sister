import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import TiltCard from "@/components/TiltCard";

const values = [
  {
    title: "Honesty First",
    desc: "No inflated income claims, no bro-marketing tactics. Just real results, real numbers, and real strategy.",
  },
  {
    title: "Women in Business",
    desc: "Built by a woman, for women. A space where female entrepreneurs are empowered to take up space and build wealth.",
  },
  {
    title: "Community Over Competition",
    desc: "Amazon is a big marketplace. Our students lift each other up — sharing wins, tips, and accountability.",
  },
];

const offerings = [
  {
    title: "Group Training",
    desc: "Four weekly live sessions covering the full Amazon reselling framework — from product research to launch. Built for women starting from zero.",
  },
  {
    title: "1-on-1 Mentorship",
    desc: "Direct access to Wensey for 4 or 12 weeks. Personalized strategy built around your business, your numbers, and your goals.",
  },
  {
    title: "Wholesale Workshop",
    desc: "A focused 1-day group intensive on wholesale sourcing — finding suppliers, negotiating pricing, and building long-term product relationships.",
  },
  {
    title: "Done For You",
    desc: "Wensey's team handles everything — product research, listings, sourcing, and launch. You own the business. We do the work.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none blob-drift"
          style={{ background: "radial-gradient(circle, #FCE4EC 0%, transparent 70%)", filter: "blur(60px)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 -left-24 w-[350px] h-[350px] rounded-full pointer-events-none blob-drift-slow"
          style={{ background: "radial-gradient(circle, #F8BBD0 0%, transparent 70%)", filter: "blur(50px)" }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Photo */}
            <div className="hero-fade-in flex justify-center lg:justify-start">
              <TiltCard className="w-full max-w-sm lg:max-w-md">
                <Image
                  src="/wensey-about.png"
                  alt="Wensey McComb"
                  width={480}
                  height={640}
                  className="rounded-3xl w-full h-auto animate-float"
                  style={{ filter: "drop-shadow(0 30px 60px rgba(194,24,91,0.28))" }}
                  priority
                />
              </TiltCard>
            </div>

            {/* Headline + intro */}
            <div>
              <span className="hero-fade-up hero-fade-up-1 inline-block text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-5 px-3 py-1 rounded-full border border-[var(--color-border)]" style={{ background: "var(--color-accent-light)" }}>
                About Your Amazon Sister
              </span>
              <h1 className="hero-fade-up hero-fade-up-2 text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--color-primary-text)] mb-6 leading-tight">
                From Side Hustle to{" "}
                <span className="text-[var(--color-accent)]">Full-Time Freedom</span>
              </h1>
              <p className="hero-fade-up hero-fade-up-3 text-lg text-[var(--color-muted-text)] leading-relaxed mb-6">
                I&apos;m Wensey McComb — an active Amazon seller, coach, and founder of Your Amazon Sister LLC.
                I started with nothing more than a debit card, a few hundred dollars, and a lot of determination.
                What began as a side hustle became a six-figure business — and then became this.
              </p>
              <div className="hero-fade-up hero-fade-up-4 flex gap-8">
                <div>
                  <div className="text-2xl font-extrabold text-[var(--color-accent)]" style={{ fontFamily: "Poppins, system-ui, sans-serif" }}>20+</div>
                  <div className="text-xs text-[var(--color-muted-text)] uppercase tracking-wider">Students</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-[var(--color-accent)]" style={{ fontFamily: "Poppins, system-ui, sans-serif" }}>$1M+</div>
                  <div className="text-xs text-[var(--color-muted-text)] uppercase tracking-wider">Student Revenue</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-[var(--color-accent)]" style={{ fontFamily: "Poppins, system-ui, sans-serif" }}>2+ Yrs</div>
                  <div className="text-xs text-[var(--color-muted-text)] uppercase tracking-wider">Selling on Amazon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full story */}
      <section className="py-20 bg-[var(--color-surface)] border-y border-[var(--color-border-light)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll>
            <h2 className="text-2xl font-bold text-[var(--color-primary-text)] mb-8">
              Meet Your Mentor
            </h2>
            <div className="space-y-5 text-[var(--color-muted-text)] leading-relaxed text-sm">
              <p>
                I&apos;m a single mom who was willing to go all in — again and again — until I finally found something that worked. I&apos;m not technical. I didn&apos;t have a business degree. But I am super smart, resourceful, and determined — and I knew I couldn&apos;t afford to stay stuck.
              </p>
              <p>
                When I started, I didn&apos;t have a perfect plan. I was figuring things out in real time — making moves, learning quickly, and doing everything I could to create something that actually worked.
              </p>
              <p>
                The hardest part wasn&apos;t the business itself — it was doing it alone. That&apos;s what almost made me quit in my first year. Not because of wrong products or hidden fees — but because I was doing everything the hard way, without help. No one to talk to, no one to share a win with, no one who understood what I was building or why.
              </p>
              <p>
                I hit a month where I brought in over $200K across my businesses — and I had nobody to celebrate with. What I thought would be the proudest moment of my life felt exhausting and lonely. So I withdrew. I got small. I stayed small until I could find people like me.
              </p>
              <p>
                But I didn&apos;t quit. I kept going, figured out what actually works, and built a business that went on to generate millions on Amazon. And more importantly — I created a safe space where I finally had a community, a place where even I had a friend. That&apos;s when everything changed.
              </p>
              <p>
                I did it alone, and I refuse to let anyone else have to do it that way. Helping people is why I believe I was put on this planet. That&apos;s why I created Your Amazon Sister LLC — to be the person I wish I had when I was starting out.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>Live weekly training, not pre-recorded fluff</li>
                <li>Mentorship &amp; done-for-you options available</li>
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[var(--color-primary-text)] mb-4">
              How We Work Together
            </h2>
            <p className="text-[var(--color-muted-text)] max-w-md mx-auto leading-relaxed">
              Every program is built around one goal — getting you to a real, profitable Amazon business as fast as possible.
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {offerings.map((o, i) => (
              <AnimateOnScroll key={o.title} delay={i * 80}>
                <div
                  className="rounded-2xl p-8 border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-100 transition-all duration-300 h-full"
                  style={{ background: "rgba(255,255,255,0.75)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}
                >
                  <div className="w-2 h-8 rounded-full mb-5" style={{ background: "var(--color-accent)" }} />
                  <h3 className="text-lg font-semibold text-[var(--color-primary-text)] mb-3">{o.title}</h3>
                  <p className="text-[var(--color-muted-text)] text-sm leading-relaxed">{o.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[var(--color-surface)] border-y border-[var(--color-border-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[var(--color-primary-text)] mb-4">
              What This Is Built On
            </h2>
            <p className="text-[var(--color-muted-text)] max-w-md mx-auto leading-relaxed">
              Every post, every coaching call, every community interaction comes back to these three things.
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {values.map((v, i) => (
              <AnimateOnScroll key={v.title} delay={i * 100}>
                <div
                  className="rounded-2xl p-8 border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-100 transition-all duration-300 h-full"
                  style={{ background: "rgba(255,255,255,0.75)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}
                >
                  <div className="w-2 h-8 rounded-full mb-5" style={{ background: "var(--color-accent)" }} />
                  <h3 className="text-lg font-semibold text-[var(--color-primary-text)] mb-3">{v.title}</h3>
                  <p className="text-[var(--color-muted-text)] text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 pb-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll>
            <Image
              src="/4th.png"
              alt="Wensey McComb"
              width={120}
              height={120}
              className="rounded-full w-24 h-24 mx-auto mb-6 object-cover"
              style={{ filter: "drop-shadow(0 8px 20px rgba(194,24,91,0.2))" }}
            />
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary-text)] mb-4">
              Ready to work together?
            </h2>
            <p className="text-[var(--color-muted-text)] leading-relaxed mb-8 max-w-lg mx-auto">
              Whether you&apos;re starting from zero or ready to scale, there&apos;s a program built for exactly where you are.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] active:scale-95 text-white font-semibold px-10 py-4 rounded-full transition-all duration-200 text-base cursor-pointer shadow-md shadow-rose-200"
            >
              Work With Wensey
            </Link>

            <div className="mt-8 pt-6 border-t border-[var(--color-border-light)]">
              <p className="text-xs text-[var(--color-muted-text)] uppercase tracking-widest font-medium mb-4">Follow Along</p>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  {
                    label: "@wenseymccomb",
                    href: "https://www.instagram.com/wenseymccomb",
                    icon: (
                      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <circle cx="12" cy="12" r="4"/>
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                      </svg>
                    ),
                  },
                  {
                    label: "@wenseymccomb",
                    href: "https://www.tiktok.com/@wenseymccomb",
                    icon: (
                      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
                      </svg>
                    ),
                  },
                  {
                    label: "@wenseymccomb",
                    href: "https://www.youtube.com/@wenseymccomb",
                    icon: (
                      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    ),
                  },
                ].map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] text-[var(--color-muted-text)] text-xs font-medium transition-all duration-200"
                    style={{ background: "rgba(255,255,255,0.7)" }}
                  >
                    {s.icon}
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
