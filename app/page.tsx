import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Categories } from "@/components/categories"
import { Menu } from "@/components/menu"
import { Testimonials } from "@/components/testimonials"
import { Services } from "@/components/services"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Categories />
      <Menu />
      <Testimonials />
      <Services />
      <Footer />
    </main>
  )
}
