"use client";

import {useEffect} from "react";
import Lenis from "lenis";

/**
 * Momentum smooth-scroll (Lenis). Also routes in-page anchor links
 * (`/#section`) through lenis.scrollTo so navigation stays buttery.
 * Disabled when the user prefers reduced motion.
 */
export function SmoothScroll({children}: {children: React.ReactNode}) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });
    (window as unknown as {lenis?: Lenis}).lenis = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest<HTMLAnchorElement>(
        'a[href^="/#"], a[href^="#"]'
      );
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";
      const id = href.split("#")[1];
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, {offset: -90, duration: 1.2});
      window.history.pushState(null, "", `/#${id}`);
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      (window as unknown as {lenis?: Lenis}).lenis = undefined;
    };
  }, []);

  return <>{children}</>;
}
