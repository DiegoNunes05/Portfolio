"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { experienceData } from "./mocks-experience";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/app/context/active-section-context";
import { formatDates } from "@/app/format";

export function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const { setActiveSection } = useActiveSectionContext();
  const [formattedDates, setFormattedDates] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (inView) {
      setActiveSection("experience");
    }
  }, [inView, setActiveSection]);

  useEffect(() => {
    const dates = formatDates(experienceData);
    setFormattedDates(dates);
  }, []);

  return (
    <section
      ref={ref}
      id="experience"
      className="w-full py-12"
      >
      <div className="container px-4 md:px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="grid gap-8">
          {experienceData.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{opacity: 0, y: 50}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: index * 0.2}}
              className="bg-white p-8 rounded-lg card-type"
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Image
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        width={56}
                        height={56}
                        className="rounded-xl"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">
                        {experience.title}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Link
                          href={experience.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          {experience.company}
                        </Link>
                        <span>•</span>
                        <span>Full-time</span>
                        <span>•</span>
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-gray-100 text-sm">
                    {formattedDates[experience.id]}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Description:</h4>
                    {experience.description.map((desc, i) => (
                      <p key={i} className="text-gray-700">
                        {desc}
                      </p>
                    ))}
                  </div>

                  {experience.achievements && (
                    <div>
                      <h4 className="font-semibold mb-2">
                        Key Responsibilities:
                      </h4>
                      <ul className="list-disc list-inside space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-700">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    <div className="flex flex-col">
                      <h4 className="font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {experience.projects && (
                    <div>
                      <h4 className="font-semibold mb-2">Projects:</h4>
                      <div className="space-y-2">
                        {experience.projects.map((project, i) => (
                          <div key={i}>
                            <Link
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                              {project.title}
                            </Link>
                            <p className="text-sm text-gray-600">
                              {project.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
