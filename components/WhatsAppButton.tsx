"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
  className?: string
  size?: "default" | "sm" | "lg" | "icon"
  children?: React.ReactNode
}

export default function WhatsAppButton({
  phoneNumber,
  message = "Hi! I saw your portfolio and would like to connect.",
  className,
  size = "lg",
  children,
}: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      size={size}
      className={
        className ||
        "bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-white font-medium px-8"
      }
    >
      <MessageCircle className="w-4 h-4 mr-2" />
      {children || "Get In Touch"}
    </Button>
  )
}
