"use client";

import React, { useEffect, useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
}

export default function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) el.style.transitionDelay = `${delay}ms`;
          el.classList.add("in-view");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={`scroll-fade ${className}`}>
      {children}
    </Tag>
  );
}
