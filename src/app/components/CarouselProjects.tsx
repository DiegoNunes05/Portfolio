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
            <div className="aspect-video w-full relative">
              {isVideo(file) ? (
                <video
                  controls
                  autoPlay
                  muted
                  className="w-full h-full object-cover"
                  style={{objectFit: "contain"}}
                >
                  <source
                    src={file}
                    type="video/mp4"/>
                  Your browser does not support the video element.
                </video>
              ) : (
                <Image
                  width={900}
                  height={740}
                  src={file}
                  style={{objectFit: "fill"}}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              )}
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
