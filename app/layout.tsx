import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VegasNearMe",
  description: "Find and book the best shows in Las Vegas",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
