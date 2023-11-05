import type { Metadata } from "next";
import { GeistSans } from "geist/font";
import { ColorSchemeController } from "@/features/color-scheme/controller";

import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Infostack",
  description: "Make documentation a joy to write",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="text-gray-12 bg-app-background">{children}</body>
      {/* <ColorSchemeController /> */}
    </html>
  );
}
