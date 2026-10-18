import type { Metadata, Viewport } from "next";
import { SITE_URL } from "@/lib/site";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Emirhan Yaman — Software Engineer", template: "%s — Emirhan Yaman" },
  description: "Backend-focused. Full-stack capable. Emirhan Yaman builds software with .NET, Next.js, React, Blazor, and TypeScript. Based in Istanbul.",
  authors: [{ name: "Emirhan Yaman" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "en_US", url: SITE_URL,
    title: "Emirhan Yaman — Software Engineer",
    description: "Selected work in .NET, Next.js, React, Blazor, TypeScript, and local AI. Backend-focused. Full-stack capable.",
    siteName: "Emirhan Yaman",
  },
  twitter: { card: "summary", title: "Emirhan Yaman — Software Engineer" },
};

export const viewport: Viewport = { themeColor: "#1b1e20", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
