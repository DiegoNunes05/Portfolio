"use client";

import {useAppSelector} from "@/lib/redux/hooks";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export function Contact() {
  const {contact} = useAppSelector((state) => state.portfolio);

  return (
    <section id="contact" className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Contact Me</h2>
          <p className="text-gray-500 mt-2">
            &apos;Let&apos;s work together on your next project&apos;
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="card-type">
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-500">{contact.email}</p>
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-500">{contact.phone}</p>
              </div>
              <div>
                <h3 className="font-semibold">Social</h3>
                <div className="flex space-x-4 mt-2">
                  <a
                    href={contact.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-black"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={contact.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-black"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="card-type">
            <CardHeader>
              <CardTitle>Request a Call</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medi</div>um">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-2 border rounded-md"
                    placeholder="Your email"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full p-2 border rounded-md min-h-[100px]"
                    placeholder="Tell me about your project"
                  ></textarea>
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
