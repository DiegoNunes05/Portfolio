"use client";

import Image from "next/image";
import {SlideUpAnimation} from "./SlideUpAnimation";

export function About() {
  return (
    <section id="about" className="w-full scroll-mt-24 py-28 md:py-40">
      <div className="container">
        <SlideUpAnimation>
          <div className="mb-16 flex items-center gap-4">
            <span className="font-display text-lg text-gold">01</span>
            <span className="rule" />
            <p className="eyebrow">Who I Am</p>
          </div>
        </SlideUpAnimation>

        <div className="grid items-start gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
          {/* Statement */}
          <SlideUpAnimation delay={100}>
            <div>
              <p className="font-display text-[clamp(28px,4vw,52px)] font-light leading-[1.2] tracking-[-0.01em]">
                Great frontend isn&apos;t just the UI — it&apos;s the{" "}
                <span className="italic text-gold">architecture</span>,
                performance, and handling of real-world complexity that keep the
                experience effortless.
              </p>

              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                <p className="font-sans text-[15px] leading-relaxed text-silver">
                  I&apos;m a Senior Frontend Engineer focused on complex,
                  real-time web applications. At Billor I own the frontend
                  architecture of two logistics products — an internal TMS and a
                  public-facing broker platform — built with React, TypeScript,
                  and modern tooling.
                </p>
                <p className="font-sans text-[15px] leading-relaxed text-silver">
                  I care about WebSocket-driven interfaces, smooth data-heavy UX,
                  and clean component architecture — turning hard real-time
                  problems into interfaces that simply work.
                </p>
              </div>

              <div className="mt-14 flex flex-wrap gap-x-16 gap-y-8">
                {[
                  {n: "5+", l: "Years building"},
                  {n: "2", l: "Products owned"},
                  {n: "∞", l: "Real-time UIs"},
                ].map((s) => (
                  <div key={s.l}>
                    <p className="font-display text-5xl font-light text-foreground">
                      {s.n}
                    </p>
                    <p className="mt-2 font-ui text-[11px] uppercase tracking-[0.14em] text-silver">
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </SlideUpAnimation>

          {/* Portrait */}
          <SlideUpAnimation delay={200}>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-3 border border-hairline" />
              <div className="relative aspect-[4/5] w-full overflow-hidden grayscale transition-all duration-700 hover:grayscale-0">
                <Image
                  src="/images/perfil.png"
                  alt="Diego Nunes"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 h-16 w-16 border-b border-r border-gold" />
            </div>
          </SlideUpAnimation>
        </div>
      </div>
    </section>
  );
}
