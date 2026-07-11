"use client";

import {useEffect, useRef, useState} from "react";

interface SlideUpAnimationProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger in ms — applied as CSS transition-delay. */
  delay?: number;
}

/**
 * Reveal-on-scroll via IntersectionObserver + CSS transition.
 * Delay is a CSS transition-delay (not rAF-gated), and there is a failsafe:
 * if IO never fires (JS disabled, reduced motion, or a backgrounded tab that
 * pauses observers) the content still ends up visible — it is never stranded
 * at opacity 0.
 */
export function SlideUpAnimation({
  children,
  className = "",
  delay = 0,
}: SlideUpAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion: reveal immediately, no transform.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      {threshold: 0.15, rootMargin: "0px 0px -8% 0px"}
    );
    io.observe(el);

    // Failsafe: never leave content hidden.
    const failsafe = window.setTimeout(() => setShown(true), 1500);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
