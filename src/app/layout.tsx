import "./globals.css";
import type {Metadata} from "next";
import {Inter, JetBrains_Mono} from "next/font/google";
import {ReduxProvider} from "@/lib/redux/Provider";
import {ActiveSectionContextProvider} from "./context/active-section-context";
import {SmoothScroll} from "./components/SmoothScroll";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
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

// Runs before first paint — applies the stored theme so there is no flash.
// Dark is the default; only "light" adds a class.
const themeScript = `
try {
  if (localStorage.getItem('theme') === 'light') {
    document.documentElement.classList.add('light');
  }
} catch (e) {}
`;

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{__html: themeScript}} />
      </head>
      <body className="font-sans antialiased">
        <ReduxProvider>
          <ActiveSectionContextProvider>
            <SmoothScroll>{children}</SmoothScroll>
          </ActiveSectionContextProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
