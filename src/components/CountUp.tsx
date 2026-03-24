"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  value: string;   // e.g. "2,000+", "$1M+", "98%", "50+"
  duration?: number;
  className?: string;
}

function parse(value: string) {
  // Handle M suffix (millions): "$1M+"
  const mMatch = value.match(/^([^0-9]*)(\d+)M(\+?)$/);
  if (mMatch) {
    const target = parseInt(mMatch[2]) * 1_000_000;
    return {
      target,
      display: (n: number) =>
        `${mMatch[1]}${Math.round(n / 1_000_000)}M${mMatch[3]}`,
    };
  }
  // Handle regular numbers with optional prefix/suffix: "2,000+", "98%", "50+"
  const reg = value.match(/^([^0-9]*)([0-9,]+)(.*)$/);
  if (reg) {
    const target = parseInt(reg[2].replace(/,/g, ""), 10);
    return {
      target,
      display: (n: number) => `${reg[1]}${n.toLocaleString()}${reg[3]}`,
    };
  }
  return null;
}

export default function CountUp({ value, duration = 1400, className = "" }: Props) {
  const [display, setDisplay] = useState<string>(() => {
    const p = parse(value);
    return p ? p.display(0) : value;
  });
  const ref = useRef<HTMLSpanElement>(null);
  const ran = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parsed = parse(value);
    if (!parsed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || ran.current) return;
        ran.current = true;
        observer.unobserve(el);

        const { target, display: fmt } = parsed;
        const start = performance.now();
        const effectiveDuration = target <= 5 ? 800 : duration;

        const tick = (now: number) => {
          const t = Math.min((now - start) / effectiveDuration, 1);
          const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
          setDisplay(fmt(Math.round(eased * target)));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
