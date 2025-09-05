"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah & Mike Johnson",
    location: "Denver, Colorado",
    rating: 5,
    text: "Alps Experience made our family ski trip absolutely magical. The local team's attention to detail was incredible - from the perfectly located chalet to the kids' ski lessons. Our children are already asking when we can go back!",
    trip: "Family Ski Week",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 2,
    name: "David Chen",
    location: "San Francisco, California",
    rating: 5,
    text: "The luxury chalet experience exceeded all expectations. Having a private chef who knew exactly what we wanted, combined with the concierge's local knowledge, made this the best ski trip of my life.",
    trip: "Luxury Chalet & Gourmet",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 3,
    name: "Emma & Friends",
    location: "Austin, Texas",
    rating: 5,
    text: "Perfect for our group of 8! The spa days balanced perfectly with amazing skiing. Alps Experience handled every detail seamlessly, and their recommendations for après-ski spots were spot on.",
    trip: "Group Ski & Spa",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 4,
    name: "Robert & Linda Martinez",
    location: "Phoenix, Arizona",
    rating: 5,
    text: "As first-time visitors to the Alps, we were nervous about the logistics. Alps Experience's team made everything effortless. The USD pricing transparency was appreciated, and the local support was outstanding.",
    trip: "Family Ski Week",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-pdse-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            What Our Guests Say
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Hear from fellow travelers who&apos;ve experienced 
            the magic of Morzine with our concierge service.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white text-gray-900 relative overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="absolute top-6 left-6 text-pdse-navy/20">
                <Quote className="w-12 h-12" />
              </div>

              <div className="relative z-10">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6 justify-center">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl md:text-2xl font-light text-center leading-relaxed mb-8 text-gray-700">
                  &ldquo;{currentTestimonial.text}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-4">
                    <div 
                      className="w-12 h-12 rounded-full bg-cover bg-center"
                      style={{ backgroundImage: `url('${currentTestimonial.image}')` }}
                    />
                    <div className="text-left">
                      <div className="font-semibold text-lg text-pdse-navy">
                        {currentTestimonial.name}
                      </div>
                      <div className="text-gray-500">
                        {currentTestimonial.location}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">
                    Experienced: {currentTestimonial.trip}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-pdse-navy"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-white' : 'bg-white/30'
                  }`}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-pdse-navy"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
