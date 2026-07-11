"use client";

import Link from "next/link";
import {useEffect, useState} from "react";

const NAV = [
  {href: "/#about", label: "About"},
  {href: "/#work", label: "Work"},
  {href: "/#experience", label: "Experience"},
  {href: "/#expertise", label: "Expertise"},
  {href: "/#services", label: "Services"},
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleAnchorClick = (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute("href");
      if (href && href.startsWith("/#")) {
        e.preventDefault();
        const el = document.getElementById(href.substring(2));
        if (el) {
          window.scrollTo({top: el.offsetTop - 80, behavior: "smooth"});
          window.history.pushState(null, "", href);
        }
        setOpen(false);
      }
    };
    const links = document.querySelectorAll<HTMLAnchorElement>("a[href^='/#']");
    links.forEach((l) => l.addEventListener("click", handleAnchorClick));
    return () =>
      links.forEach((l) => l.removeEventListener("click", handleAnchorClick));
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-hairline bg-background/85 py-4 backdrop-blur-md"
          : "border-b border-transparent bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl font-normal tracking-[0.02em] text-foreground"
        >
          Diego Nunes
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-ui text-[12px] font-normal uppercase tracking-[0.14em] text-silver transition-colors duration-300 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/#contact"
            className="hidden border border-foreground/60 px-6 py-2.5 font-ui text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-background sm:inline-block"
          >
            Get in touch
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`h-px w-6 bg-foreground transition-all duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-foreground transition-all duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-hairline bg-background/95 backdrop-blur-md transition-all duration-500 md:hidden ${
          open ? "max-h-96" : "max-h-0 border-transparent"
        }`}
      >
        <nav className="container flex flex-col gap-5 py-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-ui text-sm uppercase tracking-[0.14em] text-silver hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="font-ui text-sm uppercase tracking-[0.14em] text-gold"
          >
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
