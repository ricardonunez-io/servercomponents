import "./globals.css";
import Footer from "@/components/footer";
import type { ReactNode } from "react";
import { JetBrains_Mono, Inter } from "next/font/google";

const inter = Inter({
  display: "block",
  subsets: ["latin"],
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "system-ui",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
  variable: "--font-inter",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains_mono",
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "'Liberation Mono'",
    "Monaco",
    "Consolas",
    "'Courier New'",
    "monospace",
  ],
});

export const metadata = {
  icons: "./favicon.ico",
  twitter: {
    card: "summary_large_image",
    title: "ServerComponents.dev | What are RSCs",
  },
  openGraph: {
    title: "ServerComponents.dev | What are RSCs",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetBrainsMono.variable}`}>
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <meta
          name="twitter:text:title"
          content="ServerComponents.dev | What are RSCs"
        />
      </head>
      <body
        className={`bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 font-normal text-sm antialiased overflow-x-hidden`}
      >
        <div className="relative">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
