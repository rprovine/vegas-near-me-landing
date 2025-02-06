import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vegas Near Me Top 5 Shows February 2025",
  description:
    "Purchase tickets to the top 5 shows in Las Vegas for February 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
