"use client";

import Link from "next/link";
import {useEffect, useState} from "react";
import {ThemeToggle} from "./ThemeToggle";

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
    const onScroll = () => setScrolled(window.scrollY > 16);
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
          window.scrollTo({top: el.offsetTop - 90, behavior: "smooth"});
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
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-3 py-2.5 transition-all duration-500 ${
          scrolled
            ? "glass border-hairline shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
            : "border-transparent bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="pl-3 pr-2 text-[15px] font-semibold tracking-tight text-foreground"
        >
          Diego Nunes
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-[13px] font-medium text-muted transition-colors duration-200 hover:bg-surface-2 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/#contact"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-[13px] font-semibold text-white transition-transform duration-200 hover:scale-[1.03] active:scale-95 sm:inline-block"
          >
            Get in touch
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-full hover:bg-surface-2 md:hidden"
          >
            <span
              className={`h-[1.5px] w-4 bg-foreground transition-all duration-300 ${
                open ? "translate-y-[3.25px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-4 bg-foreground transition-all duration-300 ${
                open ? "-translate-y-[3.25px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl transition-all duration-500 md:hidden ${
          open ? "max-h-96 border border-hairline glass" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 p-4">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-muted hover:bg-surface-2 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="mt-1 rounded-2xl bg-accent px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
