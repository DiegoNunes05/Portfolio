"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface SlideUpAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function SlideUpAnimation({
  children,
  className = "",
  delay = 0,
}: SlideUpAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!elementRef.current) return;

      gsap.fromTo(
        elementRef.current,
        { opacity: 0, y: 48 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: delay / 1000,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 88%",
            once: true,
          },
        }
      );
    },
    { scope: elementRef, dependencies: [delay] }
  );

  // Start hidden to avoid a flash before GSAP runs; GSAP reveals on scroll-in.
  return (
    <div ref={elementRef} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
