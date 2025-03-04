"use client";

import {useAppSelector} from "@/lib/redux/hooks";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Card, CardContent} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";

export function About() {
  const {name} = useAppSelector((state) => state.portfolio);

  return (
    <section id="about" className="w-full py-12 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Who I Am</h2>
        <Card>
          <CardContent className="p-6">
            <div className="grid gap-6 md:grid-cols-[1fr_2fr] items-start">
              <div className="flex flex-col items-center gap-4">
                <Avatar className="w-32 h-32">
                  <AvatarImage src="/images/avatar.jpg" alt={name} />
                  <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="text-xl font-semibold">{name}</h3>
                  <p className="text-sm text-gray-500">Front-end Developer</p>
                </div>
              </div>
              <div className="space-y-4">
                <blockquote className="italic text-gray-600 border-l-4 border-gray-300 pl-4">
                  Design isn&apos;t just about making things look
                  pretty – it&apos;s about solving problems and creating
                  intuitive, enjoyable experiences for users.
                </blockquote>
                <p>
                  I am a passionate interface designer dedicated to creating
                  interactive and intuitive digital experiences. With over 5
                  years of experience in front-end development, my goal is to
                  combine aesthetics and functionality to create digital
                  products that users love.
                </p>
                <Separator />
                <p>
                  When I&apos;m not designing interfaces, I enjoy exploring new
                  design trends, contributing to open-source projects, and
                  sharing knowledge with the design community.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
