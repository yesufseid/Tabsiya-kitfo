"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Star, Quote } from "lucide-react"



export default function HomePage() {
  const { t } = useLanguage()

  const specialDishes = [
    {
      name: t("dishes.kitfo.name"),
      description: t("dishes.kitfo.description"),
      image: "/k 1.jpg",
      price: "$18.99",
    },
    {
      name: t("dishes.gomen.name"),
      description: t("dishes.gomen.description"),
      image: "/k 4.jpg",
      price: "$14.99",
    },
    {
      name: t("dishes.doro.name"),
      description: t("dishes.doro.description"),
      image: "/doro.jpg",
      price: "$16.99",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "The most authentic Ethiopian food I've ever had! The kitfo was absolutely incredible.",
      avatar: "/k 4.jpg",
    },
    {
      name: "Michael Chen",
      rating: 5,
      comment: "Amazing atmosphere and the staff is so welcoming. The traditional coffee ceremony was a highlight!",
      avatar: "/ktfo 2.jpg",
    },
    {
      name: "Aisha Mohammed",
      rating: 5,
      comment: "Feels like home! The flavors are authentic and the service is exceptional.",
      avatar: "/ktfo 3.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-2xl">T</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">
              {t("hero.title")}
            </h1>
            <p className="text-xl md:text-2xl mb-2 text-orange-200">{t("hero.subtitle")}</p>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">{t("hero.description")}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
              <Link href="/menu">{t("hero.viewMenu")}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              <Link href="/contact">{t("hero.bookTable")}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              <Link href="/contact">{t("hero.contact")}</Link>
            </Button>
          </div>
        </div>

        {/* Decorative Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10"></div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">{t("about.title")}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t("about.description")}</p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Special Dishes Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{t("dishes.title")}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialDishes.map((dish, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64">
                  <Image src={dish.image || "/placeholder.svg"} alt={dish.name} fill className="object-cover" />
                  <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full font-semibold">
                    {dish.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{dish.name}</h3>
                  <p className="text-muted-foreground">{dish.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">What Our Customers Say</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Quote className="h-6 w-6 text-orange-400 mb-2" />
                  <p className="text-muted-foreground italic">{testimonial.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Authentic Ethiopian Cuisine?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Visit us today and taste the tradition that has been passed down for generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              <Link href="/menu">View Our Menu</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
            >
              <Link href="/contact">Make a Reservation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
