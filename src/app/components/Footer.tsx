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
    <footer className="w-full px-4 pb-6">
      <div className="mx-auto max-w-6xl rounded-3xl border border-hairline bg-surface p-8 md:p-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-semibold tracking-tight">Diego Nunes</p>
            <p className="mt-2 max-w-xs text-[14px] leading-relaxed text-muted">
              Senior Frontend Engineer — building real-time digital experiences.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] font-medium text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-3">
            <a
              href={contact.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-hairline px-4 py-2 text-[12px] font-medium text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href={contact.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-hairline px-4 py-2 text-[12px] font-medium text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-hairline pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] text-muted">
            © {year} Diego Nunes
          </p>
          <p className="font-mono text-[11px] text-muted">
            Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
