import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/lib/redux/Provider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Portfolio - UI/UX Designer & Developer",
  description:
    "Portfolio profissional com projetos de UI/UX e desenvolvimento web",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
