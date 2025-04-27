"use client"

import { useAppSelector } from "@/lib/redux/hooks";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ImagePlay } from "./icons/ImagePlay";
import { SlideUpAnimation } from "./SlideUpAnimation";
import { useEffect } from "react";

export function Hero() {
  const { description } = useAppSelector((state) => state.portfolio);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute("href");

      if (href && href.startsWith("/#")) {
        e.preventDefault();

        const targetId = href.substring(2);
        const element = document.getElementById(targetId);

        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: "smooth",
          });

          window.history.pushState(null, "", href);
        }
      }
    };

    const links = document.querySelectorAll<HTMLAnchorElement>("a[href^='/#']");

    links.forEach((link) => {
      link.addEventListener("click", handleAnchorClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleAnchorClick);
      });
    };
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <SlideUpAnimation>
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Welcome to my portfolio!
                <br />
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                {description}
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  variant="outline"
                  size="lg"
                  className="group relative overflow-hidden transition-all duration-300 cursor-pointer bg-black text-white border border-white hover:border-black"
                >
                  <Link href="/#contact">
                    <span className="absolute left-0 top-0 h-full w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    <span className="relative z-5 transition-colors duration-300 group-hover:text-black">
                      Contact me
                    </span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="group px-1 relative overflow-hidden transition-all duration-300 hover:px-3 bg-white hover:bg-gray-100"
                >
                  <Link
                    href="/#projects"
                    className="flex items-center justify-center"
                  >
                    <span className="flex items-center">
                      <ImagePlay className="transform transition-transform duration-300 translate-y-10 group-hover:translate-y-0" />
                      <span className="px-1 transform transition-transform duration-300 translate-x-[-8px] group-hover:translate-x-1">
                        View Projects
                      </span>
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </SlideUpAnimation>
          <SlideUpAnimation delay={200}>
            <div className="flex justify-end">
              <div className="relative w-full max-w-lg">
                <Image
                  width={1100}
                  height={700}
                  src="/images/dev-job-2.jpg"
                  alt="Portfolio Preview"
                  className="w-full h-full"
                />
              </div>
            </div>
          </SlideUpAnimation>
        </div>
      </div>
    </section>
  );
}
