"use client";
import { useEffect, useRef } from "react";
import type { MotionValue } from "framer-motion";

type RGB = [number, number, number];
const COLORS: RGB[] = [
  [244, 143, 177],
  [248, 187, 208],
  [233, 30,  99 ],
  [194, 24,  91 ],
  [255, 200, 221],
];

interface Dot {
  x: number; y: number;
  r: number;
  speed: number;
  dx: number;
  opacity: number;
  color: RGB;
}

interface Props {
  count?: number;
  scrollProgress?: MotionValue<number>;
}

export default function ParticleCanvas({ count = 60, scrollProgress }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);
  const pullRef = useRef(0);

  useEffect(() => {
    if (!scrollProgress) return;
    return scrollProgress.on("change", (v) => { pullRef.current = v; });
  }, [scrollProgress]);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const rand = (min: number, max: number) => Math.random() * (max - min) + min;

    const dots: Dot[] = Array.from({ length: count }, () => ({
      x:       rand(0, canvas.width),
      y:       rand(0, canvas.height),
      r:       rand(2, 6),
      speed:   rand(0.18, 0.55),
      dx:      rand(-0.2, 0.2),
      opacity: rand(0.2, 0.7),
      color:   COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const pull = pullRef.current;
      // vacuum hole sits at bottom-center
      const hx = canvas.width / 2;
      const hy = canvas.height;

      // ── Draw vacuum hole ──────────────────────────────────
      if (pull > 0.02) {
        const holeR = pull * 38;
        const grd = ctx.createRadialGradient(hx, hy, 0, hx, hy, holeR * 2.5);
        grd.addColorStop(0,   `rgba(20, 5, 12, ${pull * 0.85})`);
        grd.addColorStop(0.45,`rgba(194, 24, 91, ${pull * 0.35})`);
        grd.addColorStop(1,   `rgba(194, 24, 91, 0)`);
        ctx.beginPath();
        ctx.arc(hx, hy, holeR * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // pulsing ring
        const ring = ctx.createRadialGradient(hx, hy, holeR * 0.6, hx, hy, holeR * 1.1);
        ring.addColorStop(0, `rgba(233, 30, 99, 0)`);
        ring.addColorStop(0.5, `rgba(233, 30, 99, ${pull * 0.55})`);
        ring.addColorStop(1, `rgba(233, 30, 99, 0)`);
        ctx.beginPath();
        ctx.arc(hx, hy, holeR * 1.1, 0, Math.PI * 2);
        ctx.fillStyle = ring;
        ctx.fill();
      }

      // ── Draw & move dots ──────────────────────────────────
      for (const d of dots) {
        const [r, g, b] = d.color;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${d.opacity})`;
        ctx.fill();

        if (pull < 0.01) {
          // normal float upward
          d.y -= d.speed;
          d.x += d.dx;
          if (d.y + d.r < 0) { d.y = canvas.height + d.r; d.x = rand(0, canvas.width); }
          if (d.x < -d.r) d.x = canvas.width + d.r;
          if (d.x > canvas.width + d.r) d.x = -d.r;
        } else {
          // blend: float vs. spiral into vacuum
          const ddx = hx - d.x;
          const ddy = hy - d.y;
          const dist = Math.sqrt(ddx * ddx + ddy * ddy) || 1;
          const nx = ddx / dist;
          const ny = ddy / dist;
          // clockwise tangential
          const tx =  ny;
          const ty = -nx;

          const pullSpeed = pull * 2.8;
          d.x += d.dx * (1 - pull) + (nx * 0.75 + tx * 0.55) * pullSpeed;
          d.y += (-d.speed) * (1 - pull) + (ny * 0.75 + ty * 0.25) * pullSpeed;

          // absorbed — reset above
          if (dist < 6) {
            d.x = rand(0, canvas.width);
            d.y = rand(canvas.height * 0.05, canvas.height * 0.6);
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [count]);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
