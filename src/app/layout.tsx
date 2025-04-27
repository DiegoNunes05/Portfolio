import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import { ReduxProvider } from "@/lib/redux/Provider";
import { ActiveSectionContextProvider } from './context/active-section-context'

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Portfolio - Front-end Developer",
  description:
    "Professional portfolio with web and mobile development projects",
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
