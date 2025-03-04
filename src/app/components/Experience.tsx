"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import DiscImage from "@/public/disc-rescue-network.png";

export function Experience() {
  return (
    <section id="experience" className="w-full py-12">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Work Experience
        </h2>

        <div className="space-y-8">
          {/* Primeira experiência */}
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex gap-4 items-center">
                  <div>
                    <Image
                      src="/experience-images/disc-rescue-network.png"
                      alt={"Disc Rescue Network"}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl">
                      Mid-Level Front-End Developer
                    </CardTitle>
                    <CardDescription className="mt-1">
                      <Link
                        href="https://discrescuenetwork.com"
                        className="text-blue-600 hover:underline"
                      >
                        Disc Rescue Network
                      </Link>
                      <span className="text-gray-500">
                        {" "}
                        • Full-time • New Jersey
                      </span>
                    </CardDescription>
                  </div>
                </div>
                <div className="mt-2 md:mt-0">
                  <Badge variant="outline">Current Position</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">
                Building and maintaining key application features using React,
                Next.js, TypeScript, and Shadcn UI. My work includes the
                development of the public-facing disc recovery platform and an
                administrative dashboard for disc management.
              </p>

              <div className="mb-4">
                <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>
                    Implemented responsive UI components and interactive
                    features
                  </li>
                  <li>
                    Developed and maintained administrative dashboard with
                    complex data visualization
                  </li>
                  <li>
                    Optimized application performance and improved Core Web
                    Vitals
                  </li>
                  <li>
                    Collaborated with cross-functional teams in an agile
                    environment
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">React.js</Badge>
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                  <Badge variant="outline">Redux</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Bootstrap</Badge>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Projects:</h4>
                <div className="space-y-2">
                  <div>
                    <Link
                      href="#"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Disc Rescue Platform
                    </Link>
                    <p className="text-sm text-gray-600">
                      Public-facing platform for disc recovery services
                    </p>
                  </div>
                  <div>
                    <Link
                      href="#"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Disc Rescue Admin Dashboard
                    </Link>
                    <p className="text-sm text-gray-600">
                      Internal admin tool for disc management and tracking
                    </p>
                  </div>
                  <div>
                    <Link
                      href="#"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Team Challenge App
                    </Link>
                    <p className="text-sm text-gray-600">
                      Team collaboration tool for employee engagement
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Segunda experiência */}
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex gap-4 items-center">
                  <div>
                    <Image
                      src="/experience-images/aglet-digital-logo.jpeg"
                      alt={"Aglet Digital"}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Front-End Intern</CardTitle>
                    <CardDescription className="mt-1">
                      <Link
                        href="https://www.aglet.com.br/"
                        className="text-blue-600 hover:underline"
                      >
                        Aglet Digital
                      </Link>
                      <span className="text-gray-500">
                        {" "}
                        • Internship • Rio de Janeiro, Brazil
                      </span>
                    </CardDescription>
                  </div>
                </div>
                <div className="mt-2 md:mt-0">
                  <Badge variant="outline">Past Position</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">
                Started my career as a Front-End Intern, developing over 80 web
                pages and focusing on improving user experience and optimizing
                web systems.
              </p>

              <div className="mb-4">
                <h4 className="font-semibold mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">HTML</Badge>
                  <Badge variant="outline">CSS</Badge>
                  <Badge variant="outline">Bootstrap</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Achievements:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Developed 80+ responsive web pages</li>
                  <li>Improved site loading performance by 40%</li>
                  <li>
                    Collaborated with design team to implement UI improvements
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Currently Learning</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-green-500">🌱</span>
              <span>
                I'm currently learning Angular and Vue.js to expand my framework
                expertise
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500">⚡</span>
              <span>
                Working on improving Accessibility (a11y) implementation and
                internationalization (i18n)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-500">🔍</span>
              <span>Diving deeper into GraphQL and modern API patterns</span>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 italic">
            "Always seeking opportunities to collaborate with motivated
            professionals on innovative and impactful projects."
          </p>
        </div>
      </div>
    </section>
  );
}
