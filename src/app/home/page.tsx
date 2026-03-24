"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ClickableImage } from "@/components/Lightbox";
import CountUp from "@/components/CountUp";
import ParticleCanvas from "@/components/ParticleCanvas";
import TiltCard from "@/components/TiltCard";

function IconBox() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  );
}
function IconTrending() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}
function IconUser() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}

const features = [
  {
    icon: <IconBox />,
    title: "No Guessing, Just Data",
    desc: "Every product decision is backed by real numbers. Wensey teaches a repeatable research method — not hunches or trends — so you buy inventory with confidence every time.",
  },
  {
    icon: <IconUser />,
    title: "Built by Someone Still Doing It",
    desc: "Wensey McComb is an active seller. What she teaches is what she's doing right now — not strategies from five years ago that stopped working.",
  },
  {
    icon: <IconTrending />,
    title: "A System, Not a Shortcut",
    desc: "This is a complete framework — sourcing, listings, pricing, ads — built to compound over time. Not a hack that spikes once and disappears.",
  },
];

const stats = [
  { value: "20+",  label: "Students Enrolled" },
  { value: "$1M+", label: "Student Revenue Generated" },
  { value: "2+",   label: "Years Selling on Amazon" },
  { value: "98%",  label: "Satisfaction Rate" },
];

const services = [
  {
    name: "4 Week Group Training",
    price: "$297",
    tag: "Most Popular",
    desc: "Four live, 1-hour weekly group sessions covering the full Amazon reselling framework — product research, listings, pricing, and launch strategy.",
    details: ["4 live 1-hour sessions", "Group format", "Beginner friendly", "Full framework covered"],
  },
  {
    name: "Wholesale Workshop",
    price: "$397",
    tag: "1-Day Intensive",
    desc: "A focused 3-hour group workshop dedicated entirely to wholesale sourcing — how to find suppliers, negotiate pricing, and build repeatable wholesale relationships.",
    details: ["3-hour group session", "1-day intensive", "Wholesale sourcing deep dive", "Supplier outreach strategy"],
  },
  {
    name: "4 Week Mentorship",
    price: "$999",
    tag: "1-on-1",
    desc: "Four weeks of direct, personalized guidance from Wensey. Built around your specific situation — your products, your numbers, your roadblocks.",
    details: ["1-on-1 with Wensey", "4 weeks of access", "Personalized strategy", "Direct feedback on your business"],
  },
  {
    name: "12 Week Mentorship",
    price: "$3,500",
    tag: "Deep Dive",
    desc: "Three months of hands-on 1-on-1 mentorship. From first product to a fully operational, scaling Amazon business — with Wensey guiding every step.",
    details: ["1-on-1 with Wensey", "12 weeks of access", "Full business build-out", "Sourcing to scaling"],
  },
  {
    name: "Done For You",
    price: "$10,000",
    tag: "Full Service",
    desc: "Wensey and her team handle it — product research, supplier sourcing, listing creation, and launch strategy. You own the business, we do the work.",
    details: ["Full product research", "Listing creation", "Supplier sourcing", "Launch strategy included"],
  },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const textY  = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const heroOp = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden py-20 md:py-32">
        <ParticleCanvas scrollProgress={scrollYProgress} />
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
            <motion.div style={{ y: textY, opacity: heroOp }}>
              <span className="hero-fade-up hero-fade-up-1 shimmer-badge inline-block text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-5 px-3 py-1 rounded-full border border-[var(--color-border)]">
                Amazon Reselling Coach
              </span>
              <h1 className="hero-fade-up hero-fade-up-2 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-[var(--color-primary-text)]">
                Build Your Amazon Business{" "}
                <span className="text-[var(--color-accent)]">From the Ground Up</span>
              </h1>
              <p className="hero-fade-up hero-fade-up-3 text-lg text-[var(--color-muted-text)] mb-10 leading-relaxed">
                Wensey McComb teaches women the exact sourcing, listing, and scaling
                strategies needed to build a profitable Amazon reselling business — step by step.
              </p>
              <div className="hero-fade-up hero-fade-up-4 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] active:scale-95 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 text-sm sm:text-base cursor-pointer shadow-md shadow-rose-200"
                >
                  Work With Wensey
                </Link>
                <Link
                  href="/about"
                  className="inline-block border border-[var(--color-border)] text-[var(--color-primary-text)] hover:border-[var(--color-accent)] active:scale-95 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 text-sm sm:text-base cursor-pointer"
                >
                  My Story
                </Link>
              </div>
            </motion.div>

            <motion.div style={{ y: photoY }} className="hero-fade-in flex justify-center lg:justify-end">
              <TiltCard className="w-full max-w-md lg:max-w-lg">
                <Image
                  src="/wensey-hero.png"
                  alt="Wensey McComb"
                  width={560}
                  height={750}
                  className="rounded-3xl w-full h-auto animate-float"
                  style={{ filter: "drop-shadow(0 30px 60px rgba(194,24,91,0.28))" }}
                  priority
                />
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-[var(--color-border-light)] bg-[var(--color-surface)] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {stats.map((s, i) => (
              <AnimateOnScroll key={s.label} delay={i * 80}>
                <div>
                  <div className="text-3xl md:text-4xl font-extrabold text-[var(--color-accent)] mb-1" style={{ fontFamily: "Poppins, system-ui, sans-serif" }}>
                    <CountUp value={s.value} />
                  </div>
                  <div className="text-xs text-[var(--color-muted-text)] uppercase tracking-wider font-medium">{s.label}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why The Amazon Sister */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-text)] mb-4">
              Why Women Choose The Amazon Sister
            </h2>
            <p className="text-[var(--color-muted-text)] max-w-xl mx-auto leading-relaxed">
              There&apos;s no shortage of Amazon content online. Here&apos;s what makes this different.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((f, i) => (
              <AnimateOnScroll key={f.title} delay={i * 100}>
                <TiltCard intensity={8} className="h-full">
                  <div
                    className="rounded-2xl p-8 border border-[var(--color-border)] transition-all duration-300 hover:shadow-lg hover:shadow-rose-100 hover:border-[var(--color-accent)] h-full"
                    style={{ background: "rgba(255,255,255,0.75)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-[var(--color-accent)]" style={{ background: "var(--color-accent-light)" }}>
                      {f.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--color-primary-text)] mb-3">{f.title}</h3>
                    <p className="text-[var(--color-muted-text)] text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </TiltCard>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-[var(--color-surface)] border-y border-[var(--color-border-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-14">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-4 px-3 py-1 rounded-full border border-[var(--color-border)]"
              style={{ background: "var(--color-accent-light)" }}
            >
              Work With Wensey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-text)] mb-4">
              Programs & Services
            </h2>
            <p className="text-[var(--color-muted-text)] max-w-xl mx-auto leading-relaxed">
              From group training to fully done-for-you — there&apos;s an entry point for every stage of your Amazon journey.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <AnimateOnScroll key={s.name} delay={i * 80}>
                <div
                  className="rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-100 transition-all duration-300 flex flex-col h-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}
                >
                  {/* Top bar */}
                  <div
                    className="px-6 py-3 flex items-center justify-between border-b border-[var(--color-border-light)]"
                    style={{ background: "var(--color-accent-light)" }}
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">{s.tag}</span>
                    <span className="text-lg font-extrabold text-[var(--color-accent)]" style={{ fontFamily: "Poppins, system-ui, sans-serif" }}>{s.price}</span>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-base font-bold text-[var(--color-primary-text)] mb-3" style={{ fontFamily: "Poppins, system-ui, sans-serif" }}>{s.name}</h3>
                    <p className="text-sm text-[var(--color-muted-text)] leading-relaxed mb-5">{s.desc}</p>
                    <ul className="space-y-2 mt-auto">
                      {s.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-xs text-[var(--color-muted-text)]">
                          <svg className="w-3.5 h-3.5 shrink-0 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="px-6 pb-6">
                    <Link
                      href="/contact"
                      className="block text-center bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] active:scale-95 text-white font-semibold py-3 rounded-full transition-all duration-200 text-sm cursor-pointer shadow-sm shadow-rose-200"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Community in Action */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-14">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-4 px-3 py-1 rounded-full border border-[var(--color-border)]"
              style={{ background: "var(--color-accent-light)" }}
            >
              Live Training
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-text)] mb-4">
              The Community in Action
            </h2>
            <p className="text-[var(--color-muted-text)] max-w-xl mx-auto leading-relaxed">
              Weekly live sessions, real-time Q&amp;A, and a group of women building alongside you.
            </p>
          </AnimateOnScroll>

          {(() => {
            const actionPhotos = [
              { src: "/win-action1.png", alt: "Saturday Sourcing Call live session", label: "Saturday Sourcing Call", desc: "Weekly live group session — product research, Q&A, and real-time coaching." },
              { src: "/win-action2.png", alt: "Saturday Sourcing Call live session", label: "Saturday Sourcing Call", desc: "Weekly live group session — product research, Q&A, and real-time coaching." },
              { src: "/win-action3.png", alt: "Saturday Sourcing Call live session", label: "Saturday Sourcing Call", desc: "Weekly live group session — product research, Q&A, and real-time coaching." },
              { src: "/win-action4.png", alt: "Group training Zoom session with students", label: "Group Training Session", desc: "Wensey and students working through sourcing strategy live on Zoom." },
            ];
            return (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {actionPhotos.map((w, i) => (
                  <AnimateOnScroll key={w.src} delay={i * 80}>
                    <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-100 transition-all duration-300 flex flex-col h-full" style={{ background: "rgba(255,255,255,0.85)" }}>
                      <div className="w-full overflow-hidden bg-black/5">
                        <ClickableImage
                          src={w.src}
                          alt={w.alt}
                          width={600}
                          height={450}
                          className="w-full h-auto max-h-52 object-contain mx-auto block"
                          images={actionPhotos}
                          imageIndex={i}
                        />
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <div className="w-2 h-6 rounded-full mb-3" style={{ background: "var(--color-accent)" }} />
                        <h3 className="text-sm font-semibold text-[var(--color-primary-text)] mb-1">{w.label}</h3>
                        <p className="text-xs text-[var(--color-muted-text)] leading-relaxed">{w.desc}</p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            );
          })()}
        </div>
      </section>

      {/* Student Wins */}
      <section className="py-24 bg-[var(--color-surface)] border-y border-[var(--color-border-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-14">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-4 px-3 py-1 rounded-full border border-[var(--color-border)]"
              style={{ background: "var(--color-accent-light)" }}
            >
              Real Results
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-text)] mb-4">
              Student Wins
            </h2>
            <p className="text-[var(--color-muted-text)] max-w-xl mx-auto leading-relaxed">
              From brand-new sellers making their first sales to students scaling past six figures — this is what the training produces.
              Some are weeks in. Some have been at it for years. All of them started exactly where you are.
            </p>
            <p className="text-xs text-[var(--color-muted-text)] mt-3 max-w-sm mx-auto italic">
              Some students value their anonymity. Usernames are displayed as they appear in our community.
            </p>
          </AnimateOnScroll>

          {(() => {
            const winPhotos = [
              { src: "/win-5.png",        alt: "Student win screenshot", amount: "$105,506", period: "/mo", username: "Russell",         quote: "I finally earned my 100k badge for an actual calendar month. BEST MONTH EVER." },
              { src: "/win-2023wins.png", alt: "Student win screenshot", amount: "~$100K",   period: "/mo", username: "HHCH2022",         quote: "Almost 100k in gross sales this month — thank you @Wensey for all that you have done." },
              { src: "/win-30day.png",    alt: "Student win screenshot", amount: "$45,380",  period: "/mo", username: "Community Member", quote: "Took the zoom class in May and since May 10th it's been going like wildfire!" },
              { src: "/win-3.png",        alt: "Student win screenshot", amount: "$9,689",   period: "/mo", username: "AngieD",           quote: "Well I was sooooo close to 10k for the month." },
              { src: "/win-1.png",        alt: "Student win screenshot", amount: "$2,036",   period: "/day", username: "Pamfba",          quote: "Comeback is so real." },
              { src: "/win-2.png",        alt: "Student win screenshot", amount: "$2,321",   period: "/mo", username: "DocRaye",          quote: "April was decent...trying to get the hang of this!" },
              { src: "/win-4.png",        alt: "Student win screenshot", amount: "$1,021",   period: "/mo", username: "AngelaMarie",      quote: "Hit 1k today, I started selling like 2 weeks ago!!!" },
              { src: "/win-6.png",        alt: "Student win screenshot", amount: "$715",      period: "/12 days", username: "Jose O", quote: "12 days selling on Amazon, new seller." },
            ];
            return (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {winPhotos.map((w, i) => (
                  <AnimateOnScroll key={w.src} delay={i * 60}>
                    <div
                      className="rounded-2xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-100 transition-all duration-300 flex flex-col h-full"
                      style={{ background: "rgba(255,255,255,0.85)" }}
                    >
                      <div className="w-full overflow-hidden bg-black/5">
                        <ClickableImage
                          src={w.src}
                          alt={w.alt}
                          width={600}
                          height={400}
                          className="w-full h-auto max-h-64 object-contain mx-auto block"
                          images={winPhotos}
                          imageIndex={i}
                        />
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-baseline gap-1 mb-2">
                          <span className="text-2xl font-extrabold text-[var(--color-accent)]" style={{ fontFamily: "Poppins, system-ui, sans-serif" }}>{w.amount}</span>
                          {w.period && <span className="text-xs font-semibold text-[var(--color-muted-text)] uppercase tracking-wider">{w.period}</span>}
                        </div>
                        <p className="text-xs text-[var(--color-muted-text)] leading-relaxed italic mb-3">&ldquo;{w.quote}&rdquo;</p>
                        <div className="mt-auto pt-3 border-t border-[var(--color-border-light)]">
                          <span className="text-xs font-semibold text-[var(--color-primary-text)]">@{w.username}</span>
                        </div>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            );
          })()}
        </div>
      </section>

      {/* How it works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-text)] mb-4">
              How It Works
            </h2>
            <p className="text-[var(--color-muted-text)] max-w-lg mx-auto leading-relaxed">
              Three steps from where you are now to a running Amazon business.
            </p>
          </AnimateOnScroll>

          <div className="relative">
            <div
              className="hidden md:block absolute h-px top-10 left-[16.67%] right-[16.67%]"
              style={{ background: "linear-gradient(90deg, transparent, var(--color-border), var(--color-accent), var(--color-border), transparent)" }}
              aria-hidden="true"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
              {[
                {
                  step: "01",
                  title: "Choose Your Program",
                  desc: "Pick the level of support that fits where you are — group training, mentorship, or done-for-you. Every path leads to a real, running business.",
                },
                {
                  step: "02",
                  title: "Learn the System",
                  desc: "Get the exact framework Wensey uses — sourcing, listing, pricing, and ads. Built for clarity, not information overload.",
                },
                {
                  step: "03",
                  title: "Build and Scale",
                  desc: "Make your first sale, reinvest, and grow — with Wensey and the community supporting every decision along the way.",
                },
              ].map((s, i) => (
                <AnimateOnScroll key={s.step} delay={i * 120}>
                  <div className="flex flex-col items-center text-center">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center mb-6 text-2xl font-extrabold text-[var(--color-accent)] shrink-0 relative z-10"
                      style={{ background: "var(--color-accent-light)", border: "2px solid var(--color-border)", fontFamily: "Poppins, sans-serif" }}
                    >
                      {s.step}
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--color-primary-text)] mb-3">{s.title}</h3>
                    <p className="text-[var(--color-muted-text)] text-sm leading-relaxed max-w-xs">{s.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 pb-32 bg-[var(--color-surface)] border-t border-[var(--color-border-light)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-text)] mb-5 leading-tight">
              Ready to build your<br />
              <span className="text-[var(--color-accent)]">Amazon business?</span>
            </h2>
            <p className="text-[var(--color-muted-text)] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Join thousands of women who are doing it — with Wensey&apos;s guidance, real strategy, and the support to see it through.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] active:scale-95 text-white font-semibold px-12 py-4 rounded-full transition-all duration-200 text-base cursor-pointer shadow-md shadow-rose-200"
            >
              Work With Wensey
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
