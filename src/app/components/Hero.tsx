"use client";

import {useAppSelector} from "@/lib/redux/hooks";
import Link from "next/link";
import {useEffect, useState} from "react";
import {Github, Linkedin, ArrowRight} from "lucide-react";

export function Hero() {
  const {name, description, contact} = useAppSelector((s) => s.portfolio);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    const failsafe = window.setTimeout(() => setReady(true), 600);
    return () => {
      cancelAnimationFrame(id);
      window.clearTimeout(failsafe);
    };
  }, []);

  const ease = "cubic-bezier(0.22,1,0.36,1)";
  const rise = (d: number): React.CSSProperties => ({
    opacity: ready ? 1 : 0,
    transform: ready ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.9s ${ease}, transform 0.9s ${ease}`,
    transitionDelay: `${d}ms`,
  });

  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden pt-28">
      {/* Soft Apple-style glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full opacity-60 blur-[120px]"
        style={{background: "var(--accent-soft)"}}
      />

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-6" style={rise(0)}>
            {name} — available for work
          </p>

          <h1
            className="display text-[clamp(48px,9vw,116px)]"
            style={rise(80)}
          >
            Senior Frontend
            <br />
            <span className="text-accent">Engineer</span>
          </h1>

          <p
            className="mx-auto mt-8 max-w-2xl text-[clamp(16px,2vw,20px)] leading-relaxed text-muted"
            style={rise(180)}
          >
            {description}
          </p>

          <div
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={rise(280)}
          >
            <Link
              href="/#work"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[15px] font-semibold text-white transition-transform duration-200 hover:scale-[1.03] active:scale-95"
            >
              View projects
              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-full border border-hairline px-7 py-3.5 text-[15px] font-semibold text-foreground transition-colors duration-200 hover:bg-surface-2"
            >
              Get in touch
            </Link>
          </div>

          {/* Social chips */}
          <div
            className="mt-12 flex items-center justify-center gap-3"
            style={rise(380)}
          >
            {[
              {href: contact.social.github, label: "GitHub", Icon: Github},
              {href: contact.social.linkedin, label: "LinkedIn", Icon: Linkedin},
            ].map(({href, label, Icon}) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-5 py-2.5 text-[13px] font-medium text-muted transition-colors duration-200 hover:border-transparent hover:bg-surface-2 hover:text-foreground"
              >
                <Icon size={15} />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
