import Image from "next/image"
import { Play, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-8 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Dive into Delights
            <br />
            Of Delectable{" "}
            <span className="text-primary">Food</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-md mx-auto lg:mx-0">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 justify-center lg:justify-start">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base">
              Order Now
            </Button>
            <button className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center group-hover:bg-foreground/80 transition-colors">
                <Play className="w-5 h-5 text-background fill-background ml-1" />
              </div>
              <span className="text-foreground font-medium">Watch Video</span>
            </button>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="flex-1 relative">
          {/* Green Circle Background */}
          <div className="relative w-full max-w-lg mx-auto">
            <div className="absolute inset-0 bg-primary rounded-full scale-90 -translate-y-4"></div>
            
            {/* Main Image */}
            <div className="relative z-10">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Y6lgqTBrsuitYh0yqLV1wWb9eCb7Q0.png"
                alt="Chef with delicious food"
                width={500}
                height={500}
                className="object-contain"
                priority
              />
            </div>

            {/* Hot Spicy Food Badge */}
            <div className="absolute top-8 right-4 md:right-0 bg-background rounded-full px-4 py-2 shadow-lg z-20">
              <span className="text-sm font-medium text-foreground">Hot spicy Food 🌶️</span>
            </div>

            {/* Food Cards */}
            <div className="absolute bottom-16 right-0 md:right-8 bg-background rounded-xl p-3 shadow-lg z-20 w-40">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-accent flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=100&h=100&fit=crop"
                    alt="Spicy noodles"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-foreground">Spicy noodles</h4>
                  <div className="flex items-center gap-1">
                    {[...Array(3)].map((_, i) => (
                      <Star key={i} className="w-2 h-2 text-yellow-400 fill-yellow-400" />
                    ))}
                    {[...Array(2)].map((_, i) => (
                      <Star key={i} className="w-2 h-2 text-muted-foreground" />
                    ))}
                  </div>
                  <p className="text-primary font-bold text-sm">
                    <span className="text-xs">$</span>18.00
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 right-20 md:right-32 bg-background rounded-xl p-3 shadow-lg z-20 w-44">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-accent flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=100&h=100&fit=crop"
                    alt="Vegetarian salad"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-foreground">Vegetarian salad</h4>
                  <div className="flex items-center gap-1">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-2 h-2 text-yellow-400 fill-yellow-400" />
                    ))}
                    {[...Array(1)].map((_, i) => (
                      <Star key={i} className="w-2 h-2 text-muted-foreground" />
                    ))}
                  </div>
                  <p className="text-primary font-bold text-sm">
                    <span className="text-xs">$</span>23.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
