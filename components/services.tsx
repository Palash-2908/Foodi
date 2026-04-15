import { Utensils, Truck, ShoppingCart, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Utensils,
    title: "CATERING",
    description: "Delight your guests with our flavors and presentation"
  },
  {
    icon: Truck,
    title: "FAST DELIVERY",
    description: "We deliver your order promptly to your door"
  },
  {
    icon: ShoppingCart,
    title: "ONLINE ORDERING",
    description: "Explore menu & order with ease using our Online Ordering"
  },
  {
    icon: Gift,
    title: "GIFT CARDS",
    description: "Give the gift of exceptional dining with Foodi Gift Cards"
  }
]

export function Services() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-16 bg-secondary">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* Left Side - Content */}
        <div className="flex-1">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Our Story & Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 leading-tight">
            Our Culinary Journey
            <br />
            And Services
          </h2>
          <p className="text-muted-foreground mt-6 text-base md:text-lg max-w-md">
            Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base mt-8">
            Explore
          </Button>
        </div>

        {/* Right Side - Service Cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-primary font-bold text-sm uppercase tracking-wider mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
