import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Brazy Tools",
  description: "Brazy landing, roadmap, and dashboard",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
