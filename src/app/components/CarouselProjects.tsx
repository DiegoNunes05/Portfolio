"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Project } from "@/lib/redux/slices/portfolioSlice";


interface ProjectCarouselProps {
  project: Project;
}

export function ProjectCarousel({project}: ProjectCarouselProps) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {project.images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="aspect-video w-full relative">
              <Image
                width={900}
                height={740}
                src={image}
                style={{ objectFit: "fill"}}
                alt={`${project.title} - Image ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {project.images.length > 1 && (
        <>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </>
      )}
    </Carousel>
  );
}
