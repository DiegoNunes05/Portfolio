"use client";

import {useAppSelector} from "@/lib/redux/hooks";
import {ProjectCarousel} from "./CarouselProjects";
import Link from "next/link";
import {SlideUpAnimation} from "./SlideUpAnimation";

export function Projects() {
  const {projects} = useAppSelector((state) => state.portfolio);

  return (
    <section
      id="work"
      className="w-full scroll-mt-24 border-t border-hairline bg-graphite/30 py-28 md:py-40"
    >
      <div className="container">
        <SlideUpAnimation>
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="font-display text-lg text-gold">02</span>
                <span className="rule" />
                <p className="eyebrow">Selected Work</p>
              </div>
              <h2 className="font-display text-[clamp(36px,5vw,64px)] font-light leading-none tracking-[-0.02em]">
                Recent projects
              </h2>
            </div>
            <p className="max-w-xs font-sans text-sm leading-relaxed text-silver">
              A selection of products and interfaces I&apos;ve designed and
              engineered — from real-time logistics tooling to public platforms.
            </p>
          </div>
        </SlideUpAnimation>

        <div className="grid gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <SlideUpAnimation
              key={project.id}
              delay={80 * (index + 1)}
              className="h-full"
            >
              <article className="group flex h-full flex-col bg-background transition-colors duration-500 hover:bg-graphite">
                <div className="relative overflow-hidden border-b border-hairline">
                  <span className="absolute left-4 top-4 z-10 font-display text-sm text-foreground/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <ProjectCarousel project={project} />
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-2xl font-normal leading-tight tracking-[-0.01em]">
                    {project.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-ui text-[10px] uppercase tracking-[0.12em] text-gold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 flex-1 font-sans text-sm leading-relaxed text-silver">
                    {project.description}
                  </p>

                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-3 font-ui text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground"
                  >
                    <span className="transition-colors duration-300 group-hover:text-gold">
                      View project
                    </span>
                    <span
                      aria-hidden
                      className="text-gold transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </article>
            </SlideUpAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
