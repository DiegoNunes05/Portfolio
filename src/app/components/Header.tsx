"use client"

import Link from "next/link";
import {Button} from "@/components/ui/button";

export function Header() {
  return (
    <header className="w-full py-4 border-b">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Developer Portfolio
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/#about"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              About Me
            </Link>
            <Link
              href="/#skills"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              My Skills
            </Link>
            <Link
              href="/#projects"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Projects
            </Link>
            <Link
              href="/#services"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Services
            </Link>
          </nav>
          <Button size="sm">Contact Me</Button>
        </div>
      </div>
    </header>
  );
}
