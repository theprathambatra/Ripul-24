import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ripul · 24 years of you. 12 saal of us.",
  description: "A birthday universe for Ripul. Opens 11 September 2026 at midnight India time.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
