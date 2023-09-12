import type {Metadata} from "next";
import {Inter} from "next/font/google";

import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Welcome to Verify!",
  description: "Verify your degrees/certificates online",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.className} py-2 px-2 md:px-12 lg:px-32 h-screen w-screen`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
