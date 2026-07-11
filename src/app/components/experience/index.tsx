"use client";

import Link from "next/link";
import Image from "next/image";
import {useEffect, useState} from "react";
import {experienceData} from "./mocks-experience";
import {useInView} from "react-intersection-observer";
import {useActiveSectionContext} from "@/app/context/active-section-context";
import {formatDates} from "@/app/format";
import {SlideUpAnimation} from "../SlideUpAnimation";
import {ArrowUpRight} from "lucide-react";

export function Experience() {
  const {ref, inView} = useInView({threshold: 0.2});
  const {setActiveSection} = useActiveSectionContext();
  const [formattedDates, setFormattedDates] = useState<{[key: string]: string}>(
    {}
  );

  useEffect(() => {
    if (inView) setActiveSection("experience");
  }, [inView, setActiveSection]);

  useEffect(() => {
    setFormattedDates(formatDates(experienceData));
  }, []);

  return (
    <section
      ref={ref}
      id="experience"
      className="w-full scroll-mt-24 py-24 md:py-32"
    >
      <div className="container">
        <SlideUpAnimation>
          <div className="mb-14">
            <p className="eyebrow mb-4">{"// Career"}</p>
            <h2 className="display text-[clamp(32px,5vw,56px)]">Experience</h2>
          </div>
        </SlideUpAnimation>

        <div className="flex flex-col gap-5">
          {experienceData.map((experience, index) => (
            <SlideUpAnimation key={experience.id} delay={index * 60}>
              <div className="card p-7 md:p-9">
                <div className="grid gap-6 lg:grid-cols-[1fr_1.7fr] lg:gap-12">
                  {/* Identity */}
                  <div>
                    <span className="inline-block rounded-full bg-surface-2 px-3 py-1 font-mono text-[11px] text-muted">
                      {formattedDates[experience.id]}
                    </span>
                    <div className="mt-5 flex items-center gap-4">
                      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-2xl border border-hairline">
                        <Image
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <Link
                          href={experience.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-lg font-semibold tracking-tight transition-colors duration-200 hover:text-accent"
                        >
                          {experience.company}
                          <ArrowUpRight size={15} className="text-muted" />
                        </Link>
                        <p className="text-[13px] text-muted">
                          {experience.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Detail */}
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                      {experience.title}
                    </h3>
                    {experience.description.map((desc, i) => (
                      <p
                        key={i}
                        className="mt-3 text-[15px] leading-relaxed text-muted"
                      >
                        {desc}
                      </p>
                    ))}

                    {experience.achievements && (
                      <ul className="mt-5 space-y-2.5">
                        {experience.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-[14px] leading-relaxed text-muted"
                          >
                            <span
                              aria-hidden
                              className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"
                            />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-6 flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-surface-2 px-3 py-1 font-mono text-[11px] text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {experience.projects && (
                      <div className="mt-6 border-t border-hairline pt-5">
                        <p className="mb-3 font-mono text-[11px] text-muted">
                          Projects
                        </p>
                        <div className="flex flex-col gap-2">
                          {experience.projects.map((project, i) => (
                            <Link
                              key={i}
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-foreground transition-colors hover:text-accent"
                            >
                              {project.title}
                              <ArrowUpRight
                                size={14}
                                className="text-muted transition-transform group-hover:translate-x-0.5"
                              />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </SlideUpAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
