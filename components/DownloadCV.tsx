"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useState } from "react"

interface DownloadCVProps {
  className?: string
  size?: "default" | "sm" | "lg" | "icon"
}

export default function DownloadCV({ className, size = "lg" }: DownloadCVProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    try {
      setIsDownloading(true)

      // Create a link element and trigger download
      const link = document.createElement("a")
      link.href = "/cv/resume.pdf"
      link.download = "Your_Name_CV.pdf"
      link.target = "_blank"

      // Append to body, click, and remove
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      // Optional: Track download analytics
      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "download", {
          event_category: "CV",
          event_label: "Resume PDF",
        })
      }
    } catch (error) {
      console.error("Download failed:", error)
      alert("Sorry, download failed. Please try again.")
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <Button
      onClick={handleDownload}
      disabled={isDownloading}
      size={size}
      className={
        className ||
        "bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:from-rose-600 hover:via-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-white font-medium px-8"
      }
    >
      <Download className="w-4 h-4 mr-2" />
      {isDownloading ? "Downloading..." : "Download CV"}
    </Button>
  )
}
