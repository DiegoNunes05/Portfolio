"use client";

import {useAppSelector} from "@/lib/redux/hooks";
import {SlideUpAnimation} from "./SlideUpAnimation";
import {Mail, Phone, Github, Linkedin} from "lucide-react";

export function Contact() {
  const {contact} = useAppSelector((state) => state.portfolio);

  return (
    <section id="contact" className="w-full scroll-mt-24 py-24 md:py-32">
      <div className="container">
        <SlideUpAnimation>
          <div className="card overflow-hidden p-8 md:p-14">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
              {/* Invitation */}
              <div>
                <p className="eyebrow mb-4">{"// Contact"}</p>
                <h2 className="display text-[clamp(34px,5vw,60px)]">
                  Let&apos;s build something{" "}
                  <span className="text-accent">great</span>.
                </h2>

                <div className="mt-10 space-y-4">
                  <a
                    href={`mailto:${contact.email}`}
                    className="group flex items-center gap-4 rounded-2xl border border-hairline p-4 transition-colors duration-200 hover:bg-surface-2"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <Mail size={18} />
                    </span>
                    <span>
                      <span className="block font-mono text-[11px] text-muted">
                        Email
                      </span>
                      <span className="text-[15px] font-medium">
                        {contact.email}
                      </span>
                    </span>
                  </a>
                  <div className="flex items-center gap-4 rounded-2xl border border-hairline p-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <Phone size={18} />
                    </span>
                    <span>
                      <span className="block font-mono text-[11px] text-muted">
                        Phone
                      </span>
                      <span className="text-[15px] font-medium">
                        {contact.phone}
                      </span>
                    </span>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <a
                      href={contact.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-[13px] font-medium text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
                    >
                      <Github size={15} /> GitHub
                    </a>
                    <a
                      href={contact.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-[13px] font-medium text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
                    >
                      <Linkedin size={15} /> LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form className="flex flex-col gap-4">
                {[
                  {id: "name", label: "Name", type: "text", ph: "Your name"},
                  {id: "email", label: "Email", type: "email", ph: "you@email.com"},
                ].map((f) => (
                  <div key={f.id} className="flex flex-col gap-2">
                    <label
                      htmlFor={f.id}
                      className="font-mono text-[11px] text-muted"
                    >
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      type={f.type}
                      placeholder={f.ph}
                      className="w-full rounded-2xl border border-hairline bg-surface-2 px-4 py-3.5 text-[15px] text-foreground outline-none transition-all duration-200 placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                ))}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-mono text-[11px] text-muted">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project"
                    className="w-full resize-none rounded-2xl border border-hairline bg-surface-2 px-4 py-3.5 text-[15px] text-foreground outline-none transition-all duration-200 placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 rounded-full bg-accent py-4 text-[15px] font-semibold text-white transition-transform duration-200 hover:scale-[1.02] active:scale-95"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </SlideUpAnimation>
      </div>
    </section>
  );
}
