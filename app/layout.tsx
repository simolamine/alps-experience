import type { Metadata } from "next";
import { Inter, Playfair_Display, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alps Experience | Premium Ski Packages in Morzine, France",
  description: "Premium U.S.-friendly ski & snowboard packages in Morzine, France. On-the-ground concierge, curated experiences across 650km of Portes du Soleil.",
  keywords: ["Morzine", "Portes du Soleil", "ski packages", "snowboard", "France", "alpine", "luxury", "concierge"],
  icons: {
    icon: [
      {
        url: "/favicon.jpg",
        type: "image/jpeg",
      },
    ],
    apple: [
      {
        url: "/favicon.jpg",
        type: "image/jpeg",
      },
    ],
  },
  openGraph: {
    title: "Alps Experience",
    description: "Premium ski packages in Morzine with on-the-ground concierge service",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
