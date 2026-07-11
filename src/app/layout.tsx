import "./globals.css";
import type {Metadata} from "next";
import {Cormorant_Garamond, Josefin_Sans, Inter} from "next/font/google";
import {ReduxProvider} from "@/lib/redux/Provider";
import {ActiveSectionContextProvider} from "./context/active-section-context";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const josefin = Josefin_Sans({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

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
        url: "/images/perfil.png",
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
    images: ["/images/perfil.png"],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${josefin.variable} ${inter.variable}`}
    >
      <body className="font-sans antialiased">
        <ReduxProvider>
          <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
