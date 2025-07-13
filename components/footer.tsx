"use client"

import Link from "next/link"
import { useLanguage } from "./language-provider"
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gradient-to-r from-orange-900 to-red-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold text-sm">T</span>
              </div>
              <span className="font-bold text-lg">Jeforenda Yegurage Kitfo</span>
            </div>
            <p className="text-orange-100 text-sm">Authentic Ethiopian cuisine served with tradition and love.</p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-orange-300 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-orange-300 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-orange-300 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t("footer.quickLinks")}</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-orange-100 hover:text-white transition-colors">
                {t("nav.home")}
              </Link>
              <Link href="/menu" className="block text-orange-100 hover:text-white transition-colors">
                {t("nav.menu")}
              </Link>
              <Link href="/contact" className="block text-orange-100 hover:text-white transition-colors">
                {t("nav.contact")}
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t("contact.title")}</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-orange-100">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">123 Ethiopian Street, City</span>
              </div>
              <div className="flex items-center space-x-2 text-orange-100">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-orange-100">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@jeforenda.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t("contact.hours")}</h3>
            <div className="space-y-1 text-orange-100 text-sm">
              <div>Mon - Thu: 11:00 AM - 10:00 PM</div>
              <div>Fri - Sat: 11:00 AM - 11:00 PM</div>
              <div>Sunday: 12:00 PM - 9:00 PM</div>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-800 mt-8 pt-8 text-center">
          <p className="text-orange-200 text-sm">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
