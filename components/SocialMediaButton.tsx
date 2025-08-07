"use client"

import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Linkedin, Twitter, Youtube, ExternalLink } from "lucide-react"
import Link from "next/link"

interface SocialMediaButtonProps {
  platform: "instagram" | "facebook" | "linkedin" | "twitter" | "youtube"
  url: string
  className?: string
}

const socialIcons = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  twitter: Twitter,
  youtube: Youtube,
}

const socialColors = {
  instagram: "text-pink-600 border-pink-200 hover:border-pink-300 hover:bg-pink-50 dark:hover:bg-pink-900/20",
  facebook: "text-blue-600 border-blue-200 hover:border-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20",
  linkedin: "text-blue-700 border-blue-200 hover:border-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20",
  twitter: "text-blue-400 border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900/20",
  youtube: "text-red-600 border-red-200 hover:border-red-300 hover:bg-red-50 dark:hover:bg-red-900/20",
}

export default function SocialMediaButton({ platform, url, className }: SocialMediaButtonProps) {
  const Icon = socialIcons[platform]
  const colorClass = socialColors[platform]

  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <Button
        variant="outline"
        size="icon"
        className={`hover:scale-110 transition-all duration-300 bg-white/80 ${colorClass} ${className}`}
        title={`Visit my ${platform}`}
      >
        <Icon className="w-4 h-4" /> {/* Icon now directly uses the text color from colorClass */}
        <ExternalLink className="w-2 h-2 absolute -top-1 -right-1 text-slate-400" />
      </Button>
    </Link>
  )
}
