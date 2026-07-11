"use client";

import {useAppSelector} from "@/lib/redux/hooks";
import Link from "next/link";
import {useEffect, useState} from "react";

export function Hero() {
  const {name, title, description} = useAppSelector((s) => s.portfolio);
  const [ready, setReady] = useState(false);

  // Play the entrance on mount (above the fold) — not scroll-gated.
  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    const failsafe = window.setTimeout(() => setReady(true), 600);
    return () => {
      cancelAnimationFrame(id);
      window.clearTimeout(failsafe);
    };
  }, []);

  const [first, last] = name.split(" ");
  const ease = "cubic-bezier(0.16,1,0.3,1)";

  const lineStyle = (d: number): React.CSSProperties => ({
    transform: ready ? "translateY(0)" : "translateY(105%)",
    transition: `transform 1s ${ease}`,
    transitionDelay: `${d}ms`,
  });
  const fadeStyle = (d: number): React.CSSProperties => ({
    opacity: ready ? 1 : 0,
    transform: ready ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.8s ${ease}, transform 0.8s ${ease}`,
    transitionDelay: `${d}ms`,
  });

  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden">
      {/* Oversized ghost monogram */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-6 top-1/2 z-0 -translate-y-1/2 select-none font-display text-[38vw] font-light leading-none text-foreground/[0.035] md:text-[28vw]"
        style={{
          opacity: ready ? 1 : 0,
          transition: `opacity 1.6s ${ease}`,
        }}
      >
        {name
          .split(" ")
          .map((w) => w[0])
          .join("")}
      </span>

      <div className="container relative z-10">
        <div className="max-w-4xl">
          <div
            className="mb-8 flex items-center gap-4"
            style={fadeStyle(700)}
          >
            <span className="rule" />
            <p className="eyebrow">{title}</p>
          </div>

          <h1 className="font-display text-[clamp(56px,11vw,150px)] font-light leading-[0.92] tracking-[-0.02em]">
            <span className="block overflow-hidden pb-[0.05em]">
              <span className="block" style={lineStyle(0)}>
                {first}
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.05em]">
              <span
                className="block italic text-gold"
                style={lineStyle(120)}
              >
                {last}
              </span>
            </span>
          </h1>

          <p
            className="mt-10 max-w-xl font-sans text-base leading-relaxed text-silver md:text-lg"
            style={fadeStyle(850)}
          >
            {description}
          </p>

          <div
            className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
            style={fadeStyle(1000)}
          >
            <Link
              href="/#work"
              className="group inline-flex items-center justify-center border border-foreground px-9 py-4 font-ui text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background"
            >
              View selected work
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-2 py-4 font-ui text-[11px] font-semibold uppercase tracking-[0.16em] text-silver transition-colors duration-300 hover:text-foreground"
            >
              Get in touch
              <span aria-hidden className="text-gold">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        style={fadeStyle(1200)}
      >
        <span className="font-ui text-[10px] uppercase tracking-[0.2em] text-silver">
          Scroll
        </span>
        <span className="h-12 w-px bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
