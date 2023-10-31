import type { Metadata } from "next";
import { GeistSans } from "geist/font";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
