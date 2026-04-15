import Image from "next/image"
import { Star } from "lucide-react"

const avatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
]

export function Testimonials() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-16 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Side - Chef Image */}
        <div className="relative flex-1 w-full max-w-md">
          {/* Green Background Shape */}
          <div className="absolute right-0 top-8 w-64 h-80 md:w-80 md:h-96 bg-primary rounded-t-full rounded-br-full"></div>
          
          {/* Chef Image */}
          <div className="relative z-10">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jnzYmsItHQdExJQ4bfQkzIPdmG3Xy1.png"
              alt="Our Best Chef"
              width={400}
              height={500}
              className="object-contain"
            />
          </div>

          {/* Our Best Chef Badge */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-background rounded-full px-6 py-2 shadow-lg z-20 whitespace-nowrap">
            <span className="text-sm font-medium text-foreground">Our Best Chef 👨‍🍳</span>
          </div>

          {/* Floating Emojis */}
          <div className="absolute left-4 top-1/2 text-2xl">😊</div>
          <div className="absolute right-8 top-1/3 text-2xl">🍕</div>
        </div>

        {/* Right Side - Testimonial Content */}
        <div className="flex-1 text-center lg:text-left">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 leading-tight">
            What Our Customers
            <br />
            Say About Us
          </h2>
          <p className="text-muted-foreground mt-6 text-base md:text-lg max-w-lg">
            &quot;I had the pleasure of dining at Foodi last night, and I&apos;m still raving about the experience! The attention to detail in presentation and service was impeccable&quot;
          </p>

          {/* Customer Feedback */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-8 justify-center lg:justify-start">
            {/* Avatars */}
            <div className="flex items-center -space-x-3">
              {avatars.map((avatar, index) => (
                <div
                  key={index}
                  className="w-12 h-12 rounded-full border-2 border-background overflow-hidden"
                >
                  <Image
                    src={avatar}
                    alt={`Customer ${index + 1}`}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>

            {/* Rating */}
            <div>
              <p className="font-semibold text-foreground">Customer Feedback</p>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="font-bold text-foreground">4.9</span>
                <span className="text-muted-foreground text-sm">(18.6k Reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
