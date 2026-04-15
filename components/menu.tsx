"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Star, ChevronLeft, ChevronRight } from "lucide-react"

const dishes = [
  {
    name: "Fattoush salad",
    description: "Description of the item",
    price: 24.00,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop",
    favorite: true
  },
  {
    name: "Vegetable salad",
    description: "Description of the item",
    price: 26.00,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
    favorite: false
  },
  {
    name: "Egg vegi salad",
    description: "Description of the item",
    price: 23.00,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=400&fit=crop",
    favorite: false
  }
]

export function Menu() {
  const [favorites, setFavorites] = useState<number[]>([0])

  const toggleFavorite = (index: number) => {
    setFavorites(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    )
  }

  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-16 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Special Dishes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Standout Dishes
              <br />
              From Our Menu
            </h2>
          </div>
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors">
              <ChevronRight className="w-5 h-5 text-primary-foreground" />
            </button>
          </div>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-3xl p-6 relative hover:shadow-lg transition-shadow"
            >
              {/* Favorite Button */}
              <button
                onClick={() => toggleFavorite(index)}
                className={`absolute top-4 right-4 w-10 h-10 rounded-lg flex items-center justify-center transition-colors z-10 ${
                  favorites.includes(index)
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                <Heart className={`w-5 h-5 ${favorites.includes(index) ? "fill-current" : ""}`} />
              </button>

              {/* Dish Image */}
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>

              {/* Dish Info */}
              <h3 className="text-xl font-semibold text-foreground mb-1">{dish.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{dish.description}</p>

              {/* Price and Rating */}
              <div className="flex items-center justify-between">
                <p className="text-primary font-bold text-xl">
                  <span className="text-base">$</span>{dish.price.toFixed(2)}
                </p>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-muted-foreground text-sm">{dish.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
