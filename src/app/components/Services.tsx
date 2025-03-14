"use client"

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export function Services() {
  const services = [
    {
      title: "UI/UX Design",
      description:
        "Criação de interfaces intuitivas e agradáveis que proporcionam uma experiência excepcional para os usuários.",
      icon: "✏️",
    },
    {
      title: "Web Development",
      description:
        "Desenvolvimento de websites e aplicações web com tecnologias modernas como React, Next.js e TailwindCSS.",
      icon: "💻",
    },
    {
      title: "Responsive Design",
      description:
        "Criação de layouts que se adaptam perfeitamente a diferentes tamanhos de tela e dispositivos.",
      icon: "📱",
    },
    {
      title: "Performance Optimization",
      description:
        "Otimização de aplicações web para máxima performance e velocidade de carregamento.",
      icon: "⚡",
    },
  ];

  return (
    <section id="services" className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">My Services</h2>
          <p className="text-gray-500 mt-2">What I can do for you</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card className="card-type" key={index}>
              <CardHeader>
                <div className="text-4xl mb-2">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
