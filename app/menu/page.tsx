"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Flame, Leaf } from "lucide-react"

export default function MenuPage() {
  const { t, language } = useLanguage()

  const menuCategories = [
    {
      title: t("menu.kitfo"),
      items: [
        {
          name: "Traditional Kitfo",
          nameAm: "ባህላዊ ክትፎ",
          nameGu: "ባህላዊ ክትፎ",
          description: "Fresh, lean beef served raw or lightly cooked with mitmita spice and clarified butter",
          descriptionAm: "ትኩስ፣ ቀጭን የበሬ ሥጋ ጥሬ ወይም በትንሹ የተበሰለ ከሚትሚታ ቅመም እና የተጣራ ቅቤ ጋር",
          descriptionGu: "ትኩስ፣ ቀጭን የበሬ ሥጋ ጥሬ ወይም በትንሹ የተበሰለ ከሚትሚታ ቅመም እና የተጣራ ቅቤ ጋር",
          price: "$18.99",
          image: "/k 1.jpg",
          spicy: true,
          popular: true,
        },
        {
          name: "Gomen Kitfo",
          nameAm: "ጎመን ክትፎ",
          nameGu: "ጎመን ክትፎ",
          description: "Finely chopped collard greens mixed with spices and clarified butter",
          descriptionAm: "በደንብ የተከተፈ የጎመን ቅጠል ከቅመሞች እና የተጣራ ቅቤ ጋር የተቀላቀለ",
          descriptionGu: "በደንብ የተከተፈ የጎመን ቅጠል ከቅመሞች እና የተጣራ ቅቤ ጋር የተቀላቀለ",
          price: "$14.99",
          image: "/k 4.jpg",
          vegetarian: true,
        },
        {
          name: "Kitfo Special",
          nameAm: "ክትፎ ስፔሻል",
          nameGu: "ክትፎ ስፔሻል",
          description: "Our signature kitfo served with ayib (cottage cheese) and gomen",
          descriptionAm: "የእኛ ልዩ ክትፎ ከአይብ (ኮቴጅ ቺዝ) እና ጎመን ጋር የሚቀርብ",
          descriptionGu: "የእኛ ልዩ ክትፎ ከአይብ (ኮቴጅ ቺዝ) እና ጎመን ጋር የሚቀርብ",
          price: "$22.99",
          image: "/ktfo 2.jpg",
          spicy: true,
          popular: true,
        },
      ],
    },
    {
      title: t("menu.sides"),
      items: [
        {
          name: "Injera",
          nameAm: "እንጀራ",
          nameGu: "እንጀራ",
          description: "Traditional Ethiopian sourdough flatbread",
          descriptionAm: "ባህላዊ የኢትዮጵያ የእርሾ ጠፍጣፋ ዳቦ",
          descriptionGu: "ባህላዊ የኢትዮጵያ የእርሾ ጠፍጣፋ ዳቦ",
          price: "$3.99",
          image: "/placeholder.svg?height=200&width=300",
          vegetarian: true,
        },
        {
          name: "Shiro",
          nameAm: "ሽሮ",
          nameGu: "ሽሮ",
          description: "Ground chickpea stew with berbere spice",
          descriptionAm: "የተፈጨ ሽምብራ ወጥ ከበርበሬ ቅመም ጋር",
          descriptionGu: "የተፈጨ ሽምብራ ወጥ ከበርበሬ ቅመም ጋር",
          price: "$12.99",
          image: "/placeholder.svg?height=200&width=300",
          vegetarian: true,
          spicy: true,
        },
        {
          name: "Tikel Gomen",
          nameAm: "ጥቅል ጎመን",
          nameGu: "ጥቅል ጎመን",
          description: "Cabbage, carrots, and potatoes cooked with turmeric",
          descriptionAm: "ጎመን፣ ካሮት እና ድንች በእርድ የተበሰለ",
          descriptionGu: "ጎመን፣ ካሮት እና ድንች በእርድ የተበሰለ",
          price: "$11.99",
          image: "/placeholder.svg?height=200&width=300",
          vegetarian: true,
        },
      ],
    },
    {
      title: t("menu.drinks"),
      items: [
        {
          name: "Ethiopian Coffee",
          nameAm: "የኢትዮጵያ ቡና",
          nameGu: "የኢትዮጵያ ቡና",
          description: "Traditional coffee ceremony with freshly roasted beans",
          descriptionAm: "ባህላዊ የቡና ሥነ ሥርዓት ከትኩስ የተጠበሰ ቡና ጋር",
          descriptionGu: "ባህላዊ የቡና ሥነ ሥርዓት ከትኩስ የተጠበሰ ቡና ጋር",
          price: "$4.99",
          image: "/buna.jpg",
          popular: true,
        },
        {
          name: "Tej",
          nameAm: "ጠጅ",
          nameGu: "ጠጅ",
          description: "Traditional honey wine",
          descriptionAm: "ባህላዊ የማር ወይን",
          descriptionGu: "ባህላዊ የማር ወይን",
          price: "$8.99",
          image: "/tej.jpg",
        },
        {
          name: "Tella",
          nameAm: "ጠላ",
          nameGu: "ጠላ",
          description: "Freshly squeezed mango, orange, or avocado juice",
          descriptionAm: "ትኩስ የተጨመቀ ማንጎ፣ ብርቱካን ወይም አቮካዶ ጁስ",
          descriptionGu: "ትኩስ የተጨመቀ ማንጎ፣ ብርቱካን ወይም አቮካዶ ጁስ",
          price: "$5.99",
          image: "/tella.jpg",
        },
      ],
    },
    {
      title: t("menu.desserts"),
      items: [
        {
          name: "Honey Cake",
          nameAm: "የማር ኬክ",
          nameGu: "የማር ኬክ",
          description: "Traditional Ethiopian honey cake with spices",
          descriptionAm: "ባህላዊ የኢትዮጵያ የማር ኬክ ከቅመሞች ጋር",
          descriptionGu: "ባህላዊ የኢትዮጵያ የማር ኬክ ከቅመሞች ጋር",
          price: "$6.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Baklava",
          nameAm: "ባክላቫ",
          nameGu: "ባክላቫ",
          description: "Layered pastry with nuts and honey",
          descriptionAm: "ከለውዝ እና ማር ጋር የተደረደረ ፓስትሪ",
          descriptionGu: "ከለውዝ እና ማር ጋር የተደረደረ ፓስትሪ",
          price: "$5.99",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
  ]

  const getLocalizedName = (item: any) => {
    if (language === "am") return item.nameAm
    if (language === "gu") return item.nameGu
    return item.name
  }

  const getLocalizedDescription = (item: any) => {
    if (language === "am") return item.descriptionAm
    if (language === "gu") return item.descriptionGu
    return item.description
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header with Video Background */}
        <section className="relative py-20 overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
              poster="/placeholder.svg?height=600&width=1920"
            >
              <source src="/menu.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          {/* Header Content */}
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">
              Our Menu
            </h1>
            <p className="text-lg text-orange-100 max-w-2xl mx-auto">
              Discover authentic Ethiopian flavors crafted with traditional recipes passed down through generations
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto mt-6"></div>
          </div>
        </section>

        {/* Menu Categories */}
        {menuCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">{category.title}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, itemIndex) => (
                <Card
                  key={itemIndex}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="relative h-48">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={getLocalizedName(item)}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 flex gap-1">
                      {item.popular && <Badge className="bg-orange-600 hover:bg-orange-700">Popular</Badge>}
                      {item.spicy && (
                        <Badge variant="destructive" className="flex items-center gap-1">
                          <Flame className="h-3 w-3" />
                          Spicy
                        </Badge>
                      )}
                      {item.vegetarian && (
                        <Badge variant="secondary" className="flex items-center gap-1 bg-green-100 text-green-800">
                          <Leaf className="h-3 w-3" />
                          Veg
                        </Badge>
                      )}
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-3 py-1 rounded-full font-bold">
                      {item.price}
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{getLocalizedName(item)}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{getLocalizedDescription(item)}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Can't decide? Try our Chef's Special!</h3>
          <p className="text-muted-foreground mb-6">
            Let our experienced chefs create a perfect combination of our signature dishes for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center rounded-md bg-orange-600 px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-orange-700"
            >
              Call to Order
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-orange-600 px-6 py-3 text-sm font-medium text-orange-600 shadow-sm transition-colors hover:bg-orange-50 dark:hover:bg-orange-950/20"
            >
              Make Reservation
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
