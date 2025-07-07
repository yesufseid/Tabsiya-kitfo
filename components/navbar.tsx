"use client"

import { useState } from "react"
import Link from "next/link"
import { useTheme } from "./theme-provider"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  const languages = [
    { code: "en", name: "English" },
    { code: "am", name: "አማርኛ" },
    { code: "gu", name: "ጉራጌኛ" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Tabsiya
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-orange-600 transition-colors">
              {t("nav.home")}
            </Link>
            <Link href="/menu" className="text-foreground hover:text-orange-600 transition-colors">
              {t("nav.menu")}
            </Link>
            <Link href="/contact" className="text-foreground hover:text-orange-600 transition-colors">
              {t("nav.contact")}
            </Link>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as any)}
                    className={language === lang.code ? "bg-orange-50 dark:bg-orange-950" : ""}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <Button variant="ghost" size="sm" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-foreground hover:text-orange-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.home")}
              </Link>
              <Link
                href="/menu"
                className="text-foreground hover:text-orange-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.menu")}
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-orange-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.contact")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
