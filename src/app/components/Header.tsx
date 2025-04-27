"use client";

import Link from "next/link";
import {Button} from "@/components/ui/button";
import {useEffect} from "react";

export function Header() {
  
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute("href");

      if (href && href.startsWith("/#")) {
        e.preventDefault();

        const targetId = href.substring(2);
        const element = document.getElementById(targetId);

        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, 
            behavior: "smooth",
          });
          window.history.pushState(null, "", href);
        }
      }
    };

    const links = document.querySelectorAll<HTMLAnchorElement>("a[href^='/#']");
    
    links.forEach((link) => {
      link.addEventListener("click", handleAnchorClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleAnchorClick);
      });
    };
  }, []);

  return (
    <header className="w-full py-4 border-b fixed bg-white z-10">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Front-end Developer
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/#about"
              className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-300"
            >
              About Me
            </Link>
            <Link
              href="/#projects"
              className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-300"
            >
              Projects
            </Link>
            <Link
              href="/#experience"
              className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-300"
            >
              Experience
            </Link>
            <Link
              href="/#skills"
              className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-300"
            >
              Skills
            </Link>
            <Link
              href="/#services"
              className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-300"
            >
              Services
            </Link>
          </nav>
          <Button
            variant="outline"
            size="lg"
            className="group relative overflow-hidden transition-all duration-300 cursor-pointer bg-black text-white border border-white hover:border-black"
          >
            <Link href="/#contact">
              <span className="absolute left-0 top-0 h-full w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                Contact me
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
