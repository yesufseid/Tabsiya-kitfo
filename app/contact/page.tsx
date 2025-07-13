"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import GoogleMap from "@/components/google-map"

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    alert("Thank you for your message! We will get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header with Image Background */}
        <section className="relative py-20 overflow-hidden">
          {/* Image Background */}
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/jefore 1.jpg')`,
              }}
            ></div>
          </div>

          {/* Header Content */}
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">
              {t("contact.title")}
            </h1>
            <p className="text-lg text-orange-100 max-w-2xl mx-auto">
              We'd love to hear from you. Get in touch with us for reservations, questions, or just to say hello!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto mt-6"></div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-orange-600">
                  <MapPin className="h-5 w-5" />
                  {t("contact.address")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  123 Ethiopian Street
                  <br />
                  Cultural District
                  <br />
                  City, State 12345
                </p>
                <Button
                  variant="outline"
                  className="mt-4 bg-transparent"
                  onClick={() => window.open("https://maps.google.com", "_blank")}
                >
                  View on Google Maps
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-orange-600">
                  <Phone className="h-5 w-5" />
                  {t("contact.phone")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  <a href="tel:+15551234567" className="hover:text-orange-600 transition-colors">
                    +1 (555) 123-4567
                  </a>
                </p>
                <p className="text-sm text-muted-foreground">Call us for reservations or takeout orders</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-orange-600">
                  <Mail className="h-5 w-5" />
                  {t("contact.email")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  <a href="mailto:info@tabsiya.com" className="hover:text-orange-600 transition-colors">
                    info@jeforenda.com
                  </a>
                </p>
                <p className="text-sm text-muted-foreground">Email us for general inquiries or catering requests</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-orange-600">
                  <Clock className="h-5 w-5" />
                  {t("contact.hours")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Thursday:</span>
                    <span>11:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday - Saturday:</span>
                    <span>11:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>12:00 PM - 9:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.form.name")}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.form.email")}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.form.message")}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your inquiry, reservation request, or any questions you have..."
                      rows={6}
                      className="w-full"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    {t("contact.form.send")}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Google Maps */}
            <GoogleMap address="123 Ethiopian Street, Cultural District, City, State 12345" className="mt-6" />
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Planning a Special Event?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We offer catering services and private dining options for your special occasions. Contact us to discuss your
            event needs and let us bring authentic Ethiopian flavors to your celebration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-orange-600 hover:bg-orange-700">
              <a href="tel:+15551234567">Call for Catering</a>
            </Button>
            <Button
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-950/20 bg-transparent"
            >
              <a href="mailto:catering@tabsiya.com">Email Catering Team</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
