"use client"

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

export function Projects() {
  const {projects} = useAppSelector((state) => state.portfolio);

  return (
    <section id="projects" className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">My Projects</h2>
          <p className="text-gray-500 mt-2">Check out my recent work</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="aspect-video w-full relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.tags.join(" • ")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Project
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
