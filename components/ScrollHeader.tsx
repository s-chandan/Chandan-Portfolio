"use client"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function ScrollHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 border-b transition-all duration-700 ease-in-out",
        isScrolled
          ? "bg-gradient-to-r from-rose-500/90 via-pink-500/90 to-purple-600/90 backdrop-blur-xl border-white/20 shadow-2xl shadow-rose-500/20"
          : "bg-transparent border-transparent backdrop-blur-none",
      )}
      style={{
        backdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
      }}
    >
      <div className={cn("transition-all duration-700", isScrolled ? "bg-white/10 backdrop-blur-sm" : "")}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Portfolio Title */}
          <h1
            className={cn(
              "text-2xl font-bold transition-all duration-700",
              isScrolled
                ? "bg-gradient-to-r from-white via-rose-100 to-white bg-clip-text text-transparent drop-shadow-lg"
                : "bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 bg-clip-text text-transparent",
            )}
          >
            ✨ chandan
          </h1>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "transition-all duration-700 font-medium hover:scale-105",
                  isScrolled ? "text-white/90 hover:text-white drop-shadow-md" : "text-slate-800 hover:text-rose-500",
                )}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Menu
                  className={cn(
                    "w-6 h-6 cursor-pointer transition-colors duration-700",
                    isScrolled ? "text-white" : "text-slate-800",
                  )}
                />
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-white dark:bg-slate-900">
                <nav className="flex flex-col gap-4 pt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)} // Close menu on click
                      className="text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
