"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, ExternalLink } from "lucide-react"

interface GoogleMapProps {
  address?: string
  className?: string
}

export default function GoogleMap({ address = "123 Ethiopian Street, City, State", className = "" }: GoogleMapProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sTabsiya%20Yegurage%20Kitfo!5e0!3m2!1sen!2sus!4v1635959542742!5m2!1sen!2sus`

  const directionsUrl = `https://www.google.com/maps/place/Tabsiya+Yegurage+Kitfo/@8.287857,37.7773968,17z/data=!3m1!4b1!4m6!3m5!1s0x17b2cfc40a16e139:0x626a94c3ccce35d7!8m2!3d8.287857!4d37.7799717!16s%2Fg%2F11tcx5kry5?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D`

  return (
    <Card className={`hover:shadow-lg transition-shadow duration-300 ${className}`}>
      <CardContent className="p-0">
        <div className="relative h-64 rounded-lg overflow-hidden bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-950/20 dark:to-red-950/20">
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-orange-600 mx-auto mb-2" />
                <p className="text-muted-foreground mb-2">Loading Map...</p>
                <Button variant="outline" size="sm" onClick={() => setIsLoaded(true)} className="bg-transparent">
                  Load Interactive Map
                </Button>
              </div>
            </div>
          )}

          {isLoaded && (
            <iframe
              src={mapUrl}
              width="100%"
              height="256"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tabsiya Yegurage Kitfo Restaurant Location"
              className="rounded-lg"
              onLoad={() => setIsLoaded(true)}
            />
          )}
        </div>

        <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/10 dark:to-red-950/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Find Us Here</p>
              <p className="text-sm text-muted-foreground">{address}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(directionsUrl, "_blank")}
              className="bg-transparent"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Directions
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
