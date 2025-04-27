"use client";

import {useAppSelector} from "@/lib/redux/hooks";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import { ProjectCarousel } from "./CarouselProjects";
import Link from "next/link";
import { SlideUpAnimation } from "./SlideUpAnimation";

export function Projects() {
  const {projects} = useAppSelector((state) => state.portfolio);

  return (
    <section id="projects" className="w-full py-12">
      <div className="container px-4 md:px-6">
        <SlideUpAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Projects</h2>
            <p className="text-gray-500 mt-2">Check out my recent work</p>
          </div>
        </SlideUpAnimation>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <SlideUpAnimation key={project.id} delay={100 * (index + 1)}>
              <Card
                className="overflow-hidden card-type-projects"
              >
                <ProjectCarousel project={project} />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.tags.join(" • ")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    size="lg"
                    className="group relative overflow-hidden w-full transition-all duration-300 cursor-pointer"
                  >
                    <Link href={project.link}>
                      <span className="absolute left-0 top-0 h-full w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                        View Project
                      </span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </SlideUpAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
