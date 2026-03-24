"use client";
import { useRef, ReactNode, MouseEvent } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export default function TiltCard({ children, className = "", intensity = 12 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width  - 0.5;
    const y = (e.clientY - top)  / height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) translateZ(10px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: "transform 0.18s ease", transformStyle: "preserve-3d", willChange: "transform" }}
    >
      {children}
    </div>
  );
}
