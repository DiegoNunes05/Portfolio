"use client"

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {SlideUpAnimation} from "./SlideUpAnimation";

export function Services() {
  const services = [
    {
      title: "Frontend Architecture",
      description:
        "Scalable, maintainable frontend architecture for complex apps — clean component design, state management, and modular structure.",
      icon: "🧩",
    },
    {
      title: "Web Development",
      description:
        "Building web applications with modern technologies like React, Next.js, TypeScript, and Tailwind CSS.",
      icon: "💻",
    },
    {
      title: "Real-Time Interfaces",
      description:
        "WebSocket-driven, data-heavy UIs that stay smooth and responsive under high-frequency updates.",
      icon: "📡",
    },
    {
      title: "Performance Optimization",
      description:
        "Optimizing web applications for top performance, fast load times, and solid Core Web Vitals.",
      icon: "⚡",
    },
  ];

  return (
    <section id="services" className="w-full py-12">
      <div className="container px-4 md:px-6">
        <SlideUpAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Services</h2>
            <p className="text-gray-500 mt-2">What I can do for you</p>
          </div>
        </SlideUpAnimation>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <SlideUpAnimation key={index} delay={100 * (index + 1)}>
              <Card className="card-type">
                <CardHeader>
                  <div className="text-3xl mb-2">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">{service.description}</p>
                </CardContent>
              </Card>
            </SlideUpAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
