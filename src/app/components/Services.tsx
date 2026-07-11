"use client";

import {SlideUpAnimation} from "./SlideUpAnimation";
import {Layers, Code2, Radio, Gauge} from "lucide-react";

const services = [
  {
    title: "Frontend Architecture",
    description:
      "Scalable, maintainable architecture for complex apps — clean component design, state management, and modular structure.",
    Icon: Layers,
  },
  {
    title: "Web App Development",
    description:
      "Production web applications with modern tooling — React, Next.js, TypeScript, and Tailwind CSS.",
    Icon: Code2,
  },
  {
    title: "Real-Time Interfaces",
    description:
      "WebSocket-driven, data-heavy UIs that stay smooth and responsive under high-frequency updates.",
    Icon: Radio,
  },
  {
    title: "Performance Optimization",
    description:
      "Optimizing applications for fast load times, top performance, and solid Core Web Vitals.",
    Icon: Gauge,
  },
];

export function Services() {
  return (
    <section id="services" className="w-full scroll-mt-24 py-24 md:py-32">
      <div className="container">
        <SlideUpAnimation>
          <div className="mb-14">
            <p className="eyebrow mb-4">{"// Services"}</p>
            <h2 className="display text-[clamp(32px,5vw,56px)]">What I do</h2>
          </div>
        </SlideUpAnimation>

        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service, index) => (
            <SlideUpAnimation
              key={service.title}
              delay={70 * (index + 1)}
              className="h-full"
            >
              <div className="card group h-full p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  <service.Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
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
