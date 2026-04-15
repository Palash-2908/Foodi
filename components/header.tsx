"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, Phone, ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full bg-background py-4 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">F</span>
          </div>
          <span className="text-xl font-bold text-foreground">OODI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-primary font-medium">
            Home
          </Link>
          <div className="flex items-center gap-1 text-foreground hover:text-primary cursor-pointer">
            <span>Menu</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-1 text-foreground hover:text-primary cursor-pointer">
            <span>Services</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <Link href="/offers" className="text-foreground hover:text-primary">
            Offers
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="p-2 hover:bg-muted rounded-full transition-colors">
            <Search className="w-5 h-5 text-foreground" />
          </button>
          <button className="p-2 hover:bg-muted rounded-full transition-colors relative">
            <ShoppingCart className="w-5 h-5 text-foreground" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
              8
            </span>
          </button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
            <Phone className="w-4 h-4 mr-2" />
            Contact
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
          <nav className="flex flex-col gap-4">
            <Link href="/" className="text-primary font-medium">
              Home
            </Link>
            <Link href="/menu" className="text-foreground hover:text-primary">
              Menu
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary">
              Services
            </Link>
            <Link href="/offers" className="text-foreground hover:text-primary">
              Offers
            </Link>
          </nav>
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <Search className="w-5 h-5 text-foreground" />
            </button>
            <button className="p-2 hover:bg-muted rounded-full transition-colors relative">
              <ShoppingCart className="w-5 h-5 text-foreground" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                8
              </span>
            </button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
              <Phone className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
