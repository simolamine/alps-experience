import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      {/* CTA Section */}
      <div className="border-b">
        <div className="container py-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tighter text-pdse-navy">
              Ready to Experience Morzine?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let our concierge team plan your perfect alpine getaway.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-pdse-navy hover:bg-pdse-navy/90 text-white">
                <Link href="/plan-trip">Plan Your Trip</Link>
              </Button>
              <Button size="lg" asChild className="bg-pdse-navy hover:bg-pdse-navy/90 text-white">
                <Link href="/contact">Talk to a Concierge</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Main Footer Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-serif text-xl font-bold text-pdse-navy">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              {siteConfig.description}
            </p>
            <div className="flex space-x-4">
              <Link
                href={siteConfig.social.instagram}
                className="text-muted-foreground hover:text-pdse-navy transition-colors"
                aria-label="Instagram"
                >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href={siteConfig.social.facebook}
                className="text-muted-foreground hover:text-pdse-navy transition-colors"
                aria-label="Facebook"
                >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href={siteConfig.social.youtube}
                className="text-muted-foreground hover:text-pdse-navy transition-colors"
                aria-label="YouTube"
                >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Packages */}
          <div className="space-y-4">
            <h4 className="font-semibold">Packages</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/packages/family-ski-week" className="text-muted-foreground hover:text-pdse-navy transition-colors">
                  Family Ski Week
                </Link>
              </li>
              <li>
                <Link href="/packages/group-ski-spa" className="text-muted-foreground hover:text-pdse-navy transition-colors">
                  Group Ski & Spa
                </Link>
              </li>
              <li>
                <Link href="/packages/luxury-chalet-gourmet" className="text-muted-foreground hover:text-pdse-navy transition-colors">
                  Luxury Chalet & Gourmet
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-muted-foreground hover:text-pdse-navy transition-colors">
                  View All Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Services & Info</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/accommodation" className="text-muted-foreground hover:text-pdse-navy transition-colors">
                  Accommodation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-pdse-navy transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/agents" className="text-muted-foreground hover:text-pdse-navy transition-colors">
                  For Travel Agents
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-pdse-navy transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-pdse-navy transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a 
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-muted-foreground hover:text-pdse-navy transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a 
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-muted-foreground hover:text-pdse-navy transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                <span className="text-muted-foreground">
                  {siteConfig.contact.address}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t">
        <div className="container flex flex-col sm:flex-row justify-between items-center py-6 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="/legal/privacy" className="hover:text-pdse-navy transition-colors">
              Privacy Policy
            </Link>
            <Link href="/legal/terms" className="hover:text-pdse-navy transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
