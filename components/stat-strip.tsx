import { Mountain, Clock, Users, Cable } from "lucide-react";
import { siteConfig } from "@/config/site";

const stats = [
  {
    icon: Mountain,
    value: siteConfig.stats.pistes,
    label: "of pistes",
    description: "Across Portes du Soleil"
  },
  {
    icon: Clock,
    value: siteConfig.stats.transferTime,
    label: "from Geneva",
    description: "Easy airport access"
  },
  {
    icon: Users,
    value: siteConfig.stats.resorts,
    label: "connected resorts",
    description: "All on one pass"
  },
  {
    icon: Cable,
    value: siteConfig.stats.lifts,
    label: "lifts & gondolas",
    description: "Seamless mountain access"
  }
];

export function StatStrip() {
  return (
    <section className="py-16 bg-pdse-ice">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-pdse-navy mb-4">
            Europe&apos;s Largest Ski Area
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the vast Portes du Soleil region with unparalleled access 
            to world-class skiing and alpine adventures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pdse-navy/10 rounded-full mb-4">
                  <IconComponent className="w-8 h-8 text-pdse-navy" />
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-pdse-navy">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-800">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
