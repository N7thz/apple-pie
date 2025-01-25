import { ThemeProvider } from "@/providers/theme-context"
import type { Metadata } from "next"
import { Oswald } from "next/font/google"
import "./globals.css"

const oswald = Oswald({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Apple pie",
  description: "PWA application with Next 13",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    { name: "Nathan Ferreira" },
    {
      name: "Nathan Ferreira",
      url: "https://www.linkedin.com/in/raazeshp96/",
    },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "/icon-128x128.png" },
    { rel: "icon", url: "/icon-128x128.png" },
  ],
}

type LayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="pt-br">
      <body className={oswald.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
