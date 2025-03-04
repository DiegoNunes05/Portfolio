"use client"

import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-6 border-t bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">Developer Portfolio</h3>
            <p className="text-sm text-gray-500 mt-2">
              Designing and developing amazing digital experiences.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Links</h3>
            <nav className="flex flex-col gap-2 mt-2">
              <Link
                href="/#about"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                About Me
              </Link>
              <Link
                href="/#skills"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                Skills
              </Link>
              <Link
                href="/#projects"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                Projects
              </Link>
              <Link
                href="/#contact"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Find Me Out</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-500 hover:text-gray-900">
                LinkedIn
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                GitHub
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
