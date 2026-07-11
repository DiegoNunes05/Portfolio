"use client";

import Image from "next/image";
import {SlideUpAnimation} from "./SlideUpAnimation";

export function About() {
  return (
    <section id="about" className="w-full scroll-mt-24 py-24 md:py-32">
      <div className="container">
        <SlideUpAnimation>
          <p className="eyebrow mb-4">{"// About"}</p>
        </SlideUpAnimation>

        <div className="grid items-center gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <SlideUpAnimation delay={80}>
            <div>
              <h2 className="display text-[clamp(28px,4vw,46px)] leading-[1.1]">
                Great frontend isn&apos;t just the UI. It&apos;s the{" "}
                <span className="text-accent">architecture</span>, performance,
                and real-world complexity that keep it effortless.
              </h2>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <p className="text-[15px] leading-relaxed text-muted">
                  I&apos;m a Senior Frontend Engineer focused on complex,
                  real-time web applications. At Billor I own the frontend
                  architecture of two logistics products — an internal TMS and a
                  public-facing broker platform.
                </p>
                <p className="text-[15px] leading-relaxed text-muted">
                  React, TypeScript and modern tooling. I care about
                  WebSocket-driven interfaces, smooth data-heavy UX, and clean
                  component architecture — turning hard real-time problems into
                  interfaces that simply work.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3">
                {[
                  {n: "5+", l: "Years building"},
                  {n: "2", l: "Products owned"},
                  {n: "10+", l: "Shipped apps"},
                ].map((s) => (
                  <div key={s.l} className="card p-5">
                    <p className="display text-3xl md:text-4xl">{s.n}</p>
                    <p className="mt-1.5 text-[13px] text-muted">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </SlideUpAnimation>

          <SlideUpAnimation delay={160}>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-hairline">
                <Image
                  src="/images/perfil.png"
                  alt="Diego Nunes"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
            </div>
          </SlideUpAnimation>
        </div>
      </div>
    </section>
  );
}
