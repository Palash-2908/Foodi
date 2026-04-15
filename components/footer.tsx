import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

const usefulLinks = [
  { name: "About us", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Blogs", href: "/blogs" },
  { name: "FAQ", href: "/faq" }
]

const mainMenu = [
  { name: "Home", href: "/" },
  { name: "Offers", href: "/offers" },
  { name: "Menus", href: "/menus" },
  { name: "Reservation", href: "/reservation" }
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" }
]

export function Footer() {
  return (
    <footer className="w-full px-4 md:px-8 lg:px-16 py-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-1 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold text-foreground">OODI</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Savor the artistry where every dish is a culinary masterpiece
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Useful links</h3>
            <ul className="space-y-3">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Menu */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Main Menu</h3>
            <ul className="space-y-3">
              {mainMenu.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:example@email.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  example@email.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+64958248966"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +64 958 248 966
                </a>
              </li>
              <li className="text-muted-foreground text-sm">Social media</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-12 pt-8 border-t border-border gap-4">
          {/* Social Icons */}
          <div className="flex items-center gap-3 order-2 md:order-1">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center hover:bg-foreground/80 transition-colors"
              >
                <social.icon className="w-5 h-5 text-background" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm order-1 md:order-2">
            Copyright © 2023 Dscode | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
