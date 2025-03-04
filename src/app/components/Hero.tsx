"use client"

import {useAppSelector} from "@/lib/redux/hooks";
import {Button} from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  const {title, description} = useAppSelector((state) => state.portfolio);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Welcome to my portfolio!
              <br />
              &apos;I&apos;m&apos;{title}.
            </h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              {description}
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white"
              >
                Contact Me
              </Button>
              <Button size="lg" variant="outline">
                View Projects
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <Image
                width={30}
                height={30}
                src="/images/laptop-mockup.png"
                alt="Portfolio Preview"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
