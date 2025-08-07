import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "portfolio - Creative Developer & Designer",
  description:
    "Passionate about creating beautiful, functional, and user-friendly applications. Specializing in React, Next.js, and modern web technologies.",
  keywords: ["portfolio", "developer", "designer", "react", "nextjs", "web development"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Portfolio - Creative Developer & Designer",
    description: "Passionate about creating beautiful, functional, and user-friendly applications.",
    siteName: "Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Creative Developer & Designer",
    description: "Passionate about creating beautiful, functional, and user-friendly applications.",
    creator: "@yourusername",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
