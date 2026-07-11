"use client";

import Link from "next/link";
import {useAppSelector} from "@/lib/redux/hooks";

const NAV = [
  {href: "/#about", label: "About"},
  {href: "/#work", label: "Work"},
  {href: "/#experience", label: "Experience"},
  {href: "/#expertise", label: "Expertise"},
  {href: "/#contact", label: "Contact"},
];

export function Footer() {
  const {contact} = useAppSelector((s) => s.portfolio);
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-hairline py-16">
      <div className="container">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <div>
            <Link href="/" className="font-display text-3xl tracking-[0.02em]">
              Diego Nunes
            </Link>
            <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-silver">
              Senior Frontend Engineer — designing and engineering real-time
              digital experiences.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-ui text-[11px] uppercase tracking-[0.14em] text-silver transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-6">
            <a
              href={contact.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-ui text-[11px] uppercase tracking-[0.14em] text-foreground transition-colors hover:text-gold"
            >
              LinkedIn
            </a>
            <a
              href={contact.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-ui text-[11px] uppercase tracking-[0.14em] text-foreground transition-colors hover:text-gold"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-hairline pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-ui text-[10px] uppercase tracking-[0.14em] text-silver">
            © {year} Diego Nunes. All rights reserved.
          </p>
          <p className="font-ui text-[10px] uppercase tracking-[0.14em] text-silver">
            Built with Next.js — Designed with intent
          </p>
        </div>
      </div>
    </footer>
  );
}
