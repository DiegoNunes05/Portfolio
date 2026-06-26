"use client";

import {useAppSelector} from "@/lib/redux/hooks";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Card, CardContent} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import perfil from "../../../public/images/perfil.jpg"
import {SlideUpAnimation} from "./SlideUpAnimation";

export function About() {
  const {name} = useAppSelector((state) => state.portfolio);

  return (
    <section id="about" className="w-full py-12 bg-gray-50">
      <div className="container px-4 md:px-6">
        <SlideUpAnimation>
          <h2 className="text-3xl font-bold text-center mb-12">Who I Am</h2>
        </SlideUpAnimation>
        <Card className="card-type bg-white">
          <CardContent className="p-6">
            <div className="grid gap-6 md:grid-cols-[1fr_2fr] items-start">
              <SlideUpAnimation delay={100}>
                <div className="flex flex-col items-center gap-4">
                  <Avatar className="w-40 h-40">
                    <AvatarImage
                      src={perfil.src}
                      alt={name}
                      width={120}
                      height={120}
                      style={{ objectFit: "cover" }}
                    />
                    <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold">{name}</h3>
                    <p className="text-sm text-gray-500">Senior Frontend Engineer</p>
                  </div>
                </div>
              </SlideUpAnimation>
              <SlideUpAnimation delay={200}>
                <div className="space-y-4">
                  <blockquote className="italic text-gray-600 border-l-4 border-gray-300 pl-4">
                    Great frontend isn&apos;t just the UI – it&apos;s the
                    architecture, performance, and handling of real-world
                    complexity that keep the experience effortless.
                  </blockquote>
                  <p>
                    I&apos;m a Senior Frontend Engineer focused on complex,
                    real-time web applications. At Billor I own the frontend
                    architecture of two logistics products — an internal TMS and
                    a public-facing broker platform — built with React,
                    TypeScript, and modern tooling.
                  </p>
                  <Separator />
                  <p>
                    I care about WebSocket-driven interfaces, smooth data-heavy
                    UX, and clean component architecture — and I enjoy turning
                    hard real-time problems into interfaces that just work.
                  </p>
                </div>
              </SlideUpAnimation>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
