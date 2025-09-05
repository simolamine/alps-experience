"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const packages = [
  {
    title: "Family Ski Week",
    href: "/packages/family-ski-week",
    description: "Perfect for families with children, includes lessons and activities.",
  },
  {
    title: "Group Ski & Spa",
    href: "/packages/group-ski-spa", 
    description: "Combine thrilling skiing with relaxing spa treatments.",
  },
  {
    title: "Luxury Chalet & Gourmet",
    href: "/packages/luxury-chalet-gourmet",
    description: "Ultimate luxury with private chef and exclusive experiences.",
  },
];

const services = [
  {
    title: "Ski Lessons",
    href: "/services#lessons",
    description: "Professional instruction for all skill levels.",
  },
  {
    title: "Equipment Rental",
    href: "/services#rentals",
    description: "High-quality ski and snowboard equipment.",
  },
  {
    title: "Spa & Wellness",
    href: "/services#spa",
    description: "Relax and rejuvenate after a day on the slopes.",
  },
  {
    title: "Dining Experiences",
    href: "/services#dining",
    description: "Authentic Alpine cuisine and gourmet experiences.",
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-serif text-2xl font-bold text-pdse-navy">
              {siteConfig.name}
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Packages Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Packages</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {packages.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                    <ListItem href="/packages" title="View All Packages">
                      See our complete range of ski packages and experiences.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Direct Links */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/accommodation" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Accommodation
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/agents" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    For Agents
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" asChild className="hidden sm:inline-flex">
            <Link href="/contact">Contact</Link>
          </Button>
          <Button size="sm" asChild className="bg-pdse-navy hover:bg-pdse-navy/90">
            <Link href="/plan-trip">Plan Your Trip</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <MobileNav />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = ({ className, title, children, ...props }: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

function MobileNav() {
  return (
    <div className="flex flex-col space-y-3">
      <Link href="/" className="flex items-center space-x-2">
        <span className="font-serif text-xl font-bold text-pdse-navy">
          {siteConfig.name}
        </span>
      </Link>
      <div className="flex flex-col space-y-2">
        <div className="font-medium text-sm text-muted-foreground">Packages</div>
        {packages.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm hover:text-pdse-navy transition-colors pl-4"
            >
            {item.title}
          </Link>
        ))}
        <Link href="/packages" className="text-sm hover:text-pdse-navy transition-colors pl-4">
          View All Packages
        </Link>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="font-medium text-sm text-muted-foreground">Services</div>
        {services.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm hover:text-pdse-navy transition-colors pl-4"
            >
            {item.title}
          </Link>
        ))}
      </div>
      <Link href="/accommodation" className="text-sm hover:text-pdse-navy transition-colors">
        Accommodation
      </Link>
      <Link href="/agents" className="text-sm hover:text-pdse-navy transition-colors">
        For Agents
      </Link>
      <Link href="/about" className="text-sm hover:text-pdse-navy transition-colors">
        About
      </Link>
      <Link href="/contact" className="text-sm hover:text-pdse-navy transition-colors">
        Contact
      </Link>
      <div className="pt-4">
        <Button size="sm" asChild className="w-full bg-pdse-navy hover:bg-pdse-navy/90">
          <Link href="/plan-trip">Plan Your Trip</Link>
        </Button>
      </div>
    </div>
  );
}
