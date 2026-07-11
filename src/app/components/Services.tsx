"use client";

import {SlideUpAnimation} from "./SlideUpAnimation";

const services = [
  {
    title: "Frontend Architecture",
    description:
      "Scalable, maintainable frontend architecture for complex apps — clean component design, state management, and modular structure.",
  },
  {
    title: "Web Application Development",
    description:
      "Building production web applications with modern tooling — React, Next.js, TypeScript, and Tailwind CSS.",
  },
  {
    title: "Real-Time Interfaces",
    description:
      "WebSocket-driven, data-heavy UIs that stay smooth and responsive under high-frequency updates.",
  },
  {
    title: "Performance Optimization",
    description:
      "Optimizing applications for top performance, fast load times, and solid Core Web Vitals.",
  },
];

export function Services() {
  return (
    <section id="services" className="w-full scroll-mt-24 py-28 md:py-40">
      <div className="container">
        <SlideUpAnimation>
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="font-display text-lg text-gold">05</span>
                <span className="rule" />
                <p className="eyebrow">Services</p>
              </div>
              <h2 className="font-display text-[clamp(36px,5vw,64px)] font-light leading-none tracking-[-0.02em]">
                What I do
              </h2>
            </div>
          </div>
        </SlideUpAnimation>

        <div className="border-t border-hairline">
          {services.map((service, index) => (
            <SlideUpAnimation key={service.title} delay={80 * (index + 1)}>
              <div className="group grid grid-cols-1 items-baseline gap-4 border-b border-hairline py-10 transition-colors duration-500 hover:bg-graphite/40 md:grid-cols-[auto_1fr_1.2fr] md:gap-12 md:px-4">
                <span className="font-display text-2xl font-light text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl font-normal tracking-[-0.01em] transition-transform duration-500 md:text-3xl md:group-hover:translate-x-2">
                  {service.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-silver">
                  {service.description}
                </p>
              </div>
            </SlideUpAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
