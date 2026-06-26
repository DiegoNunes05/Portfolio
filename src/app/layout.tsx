import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import { ReduxProvider } from "@/lib/redux/Provider";
import { ActiveSectionContextProvider } from './context/active-section-context'

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-one-zeta-90.vercel.app"),
  title: "Diego Nunes — Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer specialized in complex, real-time web applications with React, TypeScript, and modern tooling.",
  openGraph: {
    type: "website",
    url: "https://portfolio-one-zeta-90.vercel.app",
    title: "Diego Nunes — Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer specialized in complex, real-time web applications with React, TypeScript, and modern tooling.",
    images: [
      {
        url: "/images/perfil.jpg",
        width: 1200,
        height: 630,
        alt: "Diego Nunes — Senior Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diego Nunes — Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer specialized in complex, real-time web applications with React, TypeScript, and modern tooling.",
    images: ["/images/perfil.jpg"],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ReduxProvider>
          <ActiveSectionContextProvider>
            {children}
          </ActiveSectionContextProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
