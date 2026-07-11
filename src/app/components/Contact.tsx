"use client";

import {useAppSelector} from "@/lib/redux/hooks";
import {SlideUpAnimation} from "./SlideUpAnimation";

export function Contact() {
  const {contact} = useAppSelector((state) => state.portfolio);

  return (
    <section
      id="contact"
      className="w-full scroll-mt-24 border-t border-hairline py-28 md:py-44"
    >
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          {/* Left: invitation */}
          <SlideUpAnimation>
            <div>
              <div className="mb-8 flex items-center gap-4">
                <span className="font-display text-lg text-gold">06</span>
                <span className="rule" />
                <p className="eyebrow">Contact</p>
              </div>

              <h2 className="font-display text-[clamp(40px,6vw,84px)] font-light leading-[1.02] tracking-[-0.02em]">
                Let&apos;s build
                <br />
                something{" "}
                <span className="italic text-gold">exceptional</span>.
              </h2>

              <div className="mt-14 space-y-8">
                <div>
                  <p className="font-ui text-[11px] uppercase tracking-[0.16em] text-silver">
                    Email
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-2 inline-block font-display text-2xl font-light transition-colors duration-300 hover:text-gold"
                  >
                    {contact.email}
                  </a>
                </div>
                <div>
                  <p className="font-ui text-[11px] uppercase tracking-[0.16em] text-silver">
                    Phone
                  </p>
                  <p className="mt-2 font-display text-2xl font-light">
                    {contact.phone}
                  </p>
                </div>
                <div className="flex gap-8 pt-2">
                  <a
                    href={contact.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-ui text-[11px] uppercase tracking-[0.14em] text-foreground transition-colors hover:text-gold"
                  >
                    LinkedIn ↗
                  </a>
                  <a
                    href={contact.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-ui text-[11px] uppercase tracking-[0.14em] text-foreground transition-colors hover:text-gold"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          </SlideUpAnimation>

          {/* Right: form */}
          <SlideUpAnimation delay={150}>
            <form className="flex flex-col gap-9">
              {[
                {id: "name", label: "Name", type: "text", ph: "Your name"},
                {id: "email", label: "Email", type: "email", ph: "you@email.com"},
              ].map((f) => (
                <div key={f.id} className="flex flex-col gap-3">
                  <label
                    htmlFor={f.id}
                    className="font-ui text-[11px] uppercase tracking-[0.16em] text-silver"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.type}
                    placeholder={f.ph}
                    className="w-full border-b border-hairline bg-transparent py-3 font-sans text-base text-foreground outline-none transition-colors duration-300 placeholder:text-silver/40 focus:border-gold"
                  />
                </div>
              ))}
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="message"
                  className="font-ui text-[11px] uppercase tracking-[0.16em] text-silver"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell me about your project"
                  className="w-full resize-none border-b border-hairline bg-transparent py-3 font-sans text-base text-foreground outline-none transition-colors duration-300 placeholder:text-silver/40 focus:border-gold"
                />
              </div>
              <button
                type="submit"
                className="mt-2 w-full border border-foreground bg-foreground py-4 font-ui text-[11px] font-semibold uppercase tracking-[0.16em] text-background transition-all duration-300 hover:bg-transparent hover:text-foreground"
              >
                Send message
              </button>
            </form>
          </SlideUpAnimation>
        </div>
      </div>
    </section>
  );
}
