"use client";

import { useEffect, useRef } from "react";

interface SlideUpAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function SlideUpAnimation({ children, className = "", delay = 0 }: SlideUpAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("slide-up-show");
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  return (
    <>
      <style jsx global>{`
        .slide-up-element {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.3s ease-in-out;
        }

        .slide-up-show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      <div ref={elementRef} className={`slide-up-element ${className}`}>
        {children}
      </div>
    </>
  );
} 