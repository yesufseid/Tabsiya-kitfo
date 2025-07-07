"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "am" | "gu"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.menu": "Menu",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": "Tabsiya Yegurage Kitfo",
    "hero.subtitle": "Authentic Gurage Kitfo Experience",
    "hero.description": "Discover the rich flavors of traditional Ethiopian cuisine in our warm, welcoming restaurant.",
    "hero.viewMenu": "View Menu",
    "hero.bookTable": "Book a Table",
    "hero.contact": "Contact Us",

    // About Section
    "about.title": "Our Story",
    "about.description":
      "For generations, our family has perfected the art of preparing authentic Gurage kitfo. We bring you the finest traditional recipes passed down through our ancestors, served with love and respect for our rich cultural heritage.",

    // Special Dishes
    "dishes.title": "Our Specialties",
    "dishes.kitfo.name": "Traditional Kitfo",
    "dishes.kitfo.description": "Fresh, lean beef served raw or lightly cooked with mitmita spice and clarified butter",
    "dishes.gomen.name": "Gomen Kitfo",
    "dishes.gomen.description": "Finely chopped collard greens mixed with spices and clarified butter",
    "dishes.doro.name": "Doro Wot",
    "dishes.doro.description": "Traditional chicken stew with berbere spice and hard-boiled eggs",

    // Menu Categories
    "menu.kitfo": "Kitfo Dishes",
    "menu.sides": "Sides & Vegetables",
    "menu.drinks": "Traditional Drinks",
    "menu.desserts": "Desserts",

    // Contact
    "contact.title": "Contact Us",
    "contact.address": "Address",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.hours": "Opening Hours",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",

    // Footer
    "footer.copyright": "© 2024 Tabsiya Yegurage Kitfo. All rights reserved.",
    "footer.quickLinks": "Quick Links",
  },
  am: {
    // Navigation
    "nav.home": "ቤት",
    "nav.menu": "ምግብ ዝርዝር",
    "nav.contact": "አድራሻ",

    // Hero Section
    "hero.title": "ታብሲያ የጉራጌ ክትፎ",
    "hero.subtitle": "ምርጥ የጉራጌ ክትፎ ቤት",
    "hero.description": "በሞቅ እና አቀባባይ ሬስቶራንታችን ውስጥ የባህላዊ የኢትዮጵያ ምግብ ሀብታም ጣዕም ያግኙ።",
    "hero.viewMenu": "ምግብ ዝርዝር ይመልከቱ",
    "hero.bookTable": "ጠረጴዛ ይያዙ",
    "hero.contact": "አግኙን",

    // About Section
    "about.title": "የእኛ ታሪክ",
    "about.description":
      "ለትውልዶች፣ ቤተሰባችን ትክክለኛ የጉራጌ ክትፎ የማዘጋጀት ጥበብን አጠናክሯል። የአያቶቻችንን የተላለፉ ባህላዊ የምግብ አዘገጃጀት ዘዴዎች በፍቅር እና ለሀብታም ባህላዊ ቅርሳችን በሚገባ አክብሮት እናቀርባለን።",

    // Special Dishes
    "dishes.title": "የእኛ ልዩ ምግቦች",
    "dishes.kitfo.name": "ባህላዊ ክትፎ",
    "dishes.kitfo.description": "ትኩስ፣ ቀጭን የበሬ ሥጋ ጥሬ ወይም በትንሹ የተበሰለ ከሚትሚታ ቅመም እና የተጣራ ቅቤ ጋር",
    "dishes.gomen.name": "ጎመን ክትፎ",
    "dishes.gomen.description": "በደንብ የተከተፈ የጎመን ቅጠል ከቅመሞች እና የተጣራ ቅቤ ጋር የተቀላቀለ",
    "dishes.doro.name": "ዶሮ ወጥ",
    "dishes.doro.description": "ባህላዊ የዶሮ ወጥ ከበርበሬ ቅመም እና የተቀቀለ እንቁላል ጋር",

    // Menu Categories
    "menu.kitfo": "የክትፎ ምግቦች",
    "menu.sides": "ጎን ምግቦች እና አትክልቶች",
    "menu.drinks": "ባህላዊ መጠጦች",
    "menu.desserts": "ጣፋጭ ምግቦች",

    // Contact
    "contact.title": "አግኙን",
    "contact.address": "አድራሻ",
    "contact.phone": "ስልክ",
    "contact.email": "ኢሜይል",
    "contact.hours": "የመክፈቻ ሰዓቶች",
    "contact.form.name": "ስም",
    "contact.form.email": "ኢሜይል",
    "contact.form.message": "መልእክት",
    "contact.form.send": "መልእክት ላክ",

    // Footer
    "footer.copyright": "© 2024 ጣብሲያ የጉራጌ ክትፎ። ሁሉም መብቶች የተጠበቁ ናቸው።",
    "footer.quickLinks": "ፈጣን አገናኞች",
  },
  gu: {
    // Navigation (Guragegna - using available characters)
    "nav.home": "ቤት",
    "nav.menu": "ምግብ ዝርዝር",
    "nav.contact": "አድራሻ",

    // Hero Section
    "hero.title": "ጣብሲያ የጉራጌ ክትፎ",
    "hero.subtitle": "ትክክለኛ የጉራጌ ክትፎ ልምድ",
    "hero.description": "በሞቅ እና አቀባባይ ሬስቶራንታችን ውስጥ የባህላዊ የጉራጌ ምግብ ሀብታም ጣዕም ያግኙ።",
    "hero.viewMenu": "ምግብ ዝርዝር ይመልከቱ",
    "hero.bookTable": "ጠረጴዛ ይያዙ",
    "hero.contact": "አግኙን",

    // About Section
    "about.title": "የእኛ ታሪክ",
    "about.description":
      "ለትውልዶች፣ ቤተሰባችን ትክክለኛ የጉራጌ ክትፎ የማዘጋጀት ጥበብን አጠናክሯል። የአያቶቻችንን የተላለፉ ባህላዊ የምግብ አዘገጃጀት ዘዴዎች በፍቅር እና ለሀብታም ባህላዊ ቅርሳችን በሚገባ አክብሮት እናቀርባለን።",

    // Special Dishes
    "dishes.title": "የእኛ ልዩ ምግቦች",
    "dishes.kitfo.name": "ባህላዊ ክትፎ",
    "dishes.kitfo.description": "ትኩስ፣ ቀጭን የበሬ ሥጋ ጥሬ ወይም በትንሹ የተበሰለ ከሚትሚታ ቅመም እና የተጣራ ቅቤ ጋር",
    "dishes.gomen.name": "ጎመን ክትፎ",
    "dishes.gomen.description": "በደንብ የተከተፈ የጎመን ቅጠል ከቅመሞች እና የተጣራ ቅቤ ጋር የተቀላቀለ",
    "dishes.doro.name": "ዶሮ ወጥ",
    "dishes.doro.description": "ባህላዊ የዶሮ ወጥ ከበርበሬ ቅመም እና የተቀቀለ እንቁላል ጋር",

    // Menu Categories
    "menu.kitfo": "የክትፎ ምግቦች",
    "menu.sides": "ጎን ምግቦች እና አትክልቶች",
    "menu.drinks": "ባህላዊ መጠጦች",
    "menu.desserts": "ጣፋጭ ምግቦች",

    // Contact
    "contact.title": "አግኙን",
    "contact.address": "አድራሻ",
    "contact.phone": "ስልክ",
    "contact.email": "ኢሜይል",
    "contact.hours": "የመክፈቻ ሰዓቶች",
    "contact.form.name": "ስም",
    "contact.form.email": "ኢሜይል",
    "contact.form.message": "መልእክት",
    "contact.form.send": "መልእክት ላክ",

    // Footer
    "footer.copyright": "© 2024 ጣብሲያ የጉራጌ ክትፎ። ሁሉም መብቶች የተጠበቁ ናቸው።",
    "footer.quickLinks": "ፈጣን አገናኞች",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
