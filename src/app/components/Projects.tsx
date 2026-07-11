"use client";

import {useAppSelector} from "@/lib/redux/hooks";
import {ProjectCarousel} from "./CarouselProjects";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
import {SlideUpAnimation} from "./SlideUpAnimation";

export function Projects() {
  const {projects} = useAppSelector((state) => state.portfolio);

  return (
    <section id="work" className="w-full scroll-mt-24 py-24 md:py-32">
      <div className="container">
        <SlideUpAnimation>
          <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-4">{"// Selected work"}</p>
              <h2 className="display text-[clamp(32px,5vw,56px)]">
                Recent projects
              </h2>
            </div>
            <p className="max-w-xs text-[15px] leading-relaxed text-muted">
              Products and interfaces I&apos;ve designed and engineered — from
              real-time logistics tooling to public platforms.
            </p>
          </div>
        </SlideUpAnimation>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <SlideUpAnimation
              key={project.id}
              delay={70 * (index + 1)}
              className="h-full"
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-hairline bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
                <div className="relative overflow-hidden">
                  <ProjectCarousel project={project} />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {project.title}
                    </h3>
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-surface-2 text-foreground transition-colors duration-200 group-hover:bg-accent group-hover:text-white"
                    >
                      <ArrowUpRight size={17} />
                    </Link>
                  </div>

                  <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-surface-2 px-3 py-1 font-mono text-[11px] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </SlideUpAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
