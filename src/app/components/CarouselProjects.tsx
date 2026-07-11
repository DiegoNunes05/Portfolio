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
import {Project} from "@/lib/redux/slices/portfolioSlice";

interface ProjectCarouselProps {
  project: Project;
}

export function ProjectCarousel({project}: ProjectCarouselProps) {
  const isVideo = (file: string) => {
    const videoExtensions = [".mp4", ".mov", ".webm", ".ogg", ".avi"];
    return videoExtensions.some((ext) => file.toLowerCase().endsWith(ext));
  };

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {project.images.map((file, index) => (
          <CarouselItem key={index}>
            <div className="relative aspect-[16/10] w-full bg-graphite">
              {isVideo(file) ? (
                <video
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-contain"
                >
                  <source src={file} type="video/mp4" />
                  Your browser does not support the video element.
                </video>
              ) : (
                <Image
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  src={file}
                  alt={`${project.title} — image ${index + 1}`}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              )}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {project.images.length > 1 && (
        <>
          <CarouselPrevious className="left-3 h-9 w-9 rounded-none border-hairline bg-background/70 text-foreground backdrop-blur-sm hover:border-gold hover:bg-background hover:text-gold" />
          <CarouselNext className="right-3 h-9 w-9 rounded-none border-hairline bg-background/70 text-foreground backdrop-blur-sm hover:border-gold hover:bg-background hover:text-gold" />
        </>
      )}
    </Carousel>
  );
}
