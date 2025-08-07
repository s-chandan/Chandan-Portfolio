import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio - Creative Developer & QA Tester",
  description:
    "I'm Chandan Sharma, a passionate QA Tester and Creative Developer. I specialize in React, Next.js, and modern web technologies, ensuring both design excellence and bug-free functionality.",
  keywords: [
    "portfolio",
    "QA tester",
    "creative developer",
    "react",
    "nextjs",
    "website testing",
    "web development",
    "manual testing"
  ],
  authors: [{ name: "Chandan Sharma" }],
  creator: "Chandan Sharma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Portfolio - Creative Developer & QA Tester",
    description: "Creative Developer and QA Tester specializing in React, Next.js, and website quality assurance.",
    siteName: "Chandan Sharma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Creative Developer & QA Tester",
    description: "Discover Chandan Sharma’s portfolio – blending clean UI with smooth performance and reliable QA.",
    creator: "@chandantester", // Replace with your actual Twitter handle if available
  },
  generator: 'v0.dev',
};


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
