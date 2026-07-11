"use client";

import Link from "next/link";
import Image from "next/image";
import {useEffect, useState} from "react";
import {experienceData} from "./mocks-experience";
import {useInView} from "react-intersection-observer";
import {useActiveSectionContext} from "@/app/context/active-section-context";
import {formatDates} from "@/app/format";
import {SlideUpAnimation} from "../SlideUpAnimation";

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
      className="w-full scroll-mt-24 py-28 md:py-40"
    >
      <div className="container">
        <div className="mb-20 flex items-center gap-4">
          <span className="font-display text-lg text-gold">03</span>
          <span className="rule" />
          <p className="eyebrow">Career</p>
        </div>

        <div className="relative">
          {/* vertical rail */}
          <span className="absolute left-0 top-2 hidden h-full w-px bg-hairline md:block" />

          <div className="flex flex-col gap-16 md:gap-24">
            {experienceData.map((experience, index) => (
              <SlideUpAnimation
                key={experience.id}
                delay={index * 60}
                className="group relative md:pl-16"
              >
                {/* node */}
                <span className="absolute -left-[5px] top-2 hidden h-[11px] w-[11px] rounded-full border border-gold bg-background transition-colors duration-300 group-hover:bg-gold md:block" />

                <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr]">
                  {/* Left: identity */}
                  <div>
                    <p className="font-ui text-[11px] uppercase tracking-[0.16em] text-gold">
                      {formattedDates[experience.id]}
                    </p>
                    <div className="mt-5 flex items-center gap-4">
                      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden border border-hairline">
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
                          className="font-display text-xl leading-tight transition-colors duration-300 hover:text-gold"
                        >
                          {experience.company}
                        </Link>
                        <p className="font-ui text-[11px] uppercase tracking-[0.12em] text-silver">
                          {experience.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right: role + detail */}
                  <div>
                    <h3 className="font-display text-2xl font-normal tracking-[-0.01em] md:text-3xl">
                      {experience.title}
                    </h3>
                    {experience.description.map((desc, i) => (
                      <p
                        key={i}
                        className="mt-4 font-sans text-[15px] leading-relaxed text-silver"
                      >
                        {desc}
                      </p>
                    ))}

                    {experience.achievements && (
                      <ul className="mt-6 space-y-3">
                        {experience.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex gap-3 font-sans text-sm leading-relaxed text-silver"
                          >
                            <span
                              aria-hidden
                              className="mt-2 h-px w-3 flex-shrink-0 bg-gold"
                            />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-ui text-[10px] uppercase tracking-[0.12em] text-foreground/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {experience.projects && (
                      <div className="mt-7 border-t border-hairline pt-6">
                        <p className="mb-3 font-ui text-[10px] uppercase tracking-[0.16em] text-silver">
                          Projects
                        </p>
                        <div className="flex flex-col gap-2">
                          {experience.projects.map((project, i) => (
                            <Link
                              key={i}
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/p inline-flex items-center gap-2 font-sans text-sm text-foreground/80 transition-colors hover:text-gold"
                            >
                              {project.title}
                              <span
                                aria-hidden
                                className="text-gold opacity-0 transition-opacity group-hover/p:opacity-100"
                              >
                                →
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </SlideUpAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
