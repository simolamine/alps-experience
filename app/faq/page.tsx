import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What&apos;s included in your packages?",
    answer: "Our packages typically include accommodation, lift passes, airport transfers, and concierge support. Specific inclusions vary by package - check individual package details for complete lists. We can also customize any package to meet your specific needs."
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking 3-6 months in advance for peak season (Christmas/New Year and February holidays) and 2-3 months for other periods. However, we often have last-minute availability, so contact us even for short-notice trips."
  },
  {
    question: "What if I&apos;m a beginner skier?",
    answer: "Morzine is perfect for beginners! We work with excellent English-speaking ski schools and can arrange lessons appropriate for your level. The Portes du Soleil area has plenty of gentle slopes and modern lift systems."
  },
  {
    question: "Do you arrange airport transfers?",
    answer: "Yes, we provide comfortable transfers from Geneva Airport (about 1 hour 20 minutes) and can also arrange transfers from other airports like Lyon or Zurich. All our vehicles are equipped with winter tires and driven by experienced local drivers."
  },
  {
    question: "What if there&apos;s no snow?",
    answer: "Morzine has excellent snowmaking facilities covering most slopes. The season typically runs December through April. In the rare event of poor snow conditions, we can help arrange alternative activities or discuss rescheduling options."
  },
  {
    question: "Can you accommodate dietary restrictions?",
    answer: "Absolutely! French cuisine is very accommodating to various dietary needs. We work with restaurants that can handle vegetarian, vegan, gluten-free, and other dietary requirements. Just let us know when booking."
  },
  {
    question: "What&apos;s your cancellation policy?",
    answer: "Cancellation policies vary by package and timing. Generally, we offer flexible cancellation up to 60 days before arrival. Travel insurance is recommended for additional protection. We&apos;ll provide full policy details with your booking."
  },
  {
    question: "Do I need travel insurance?",
    answer: "We strongly recommend comprehensive travel insurance covering trip cancellation, medical emergencies, and winter sports activities. We can recommend trusted providers or you can use your preferred insurance company."
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-pdse-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Everything you need to know about planning your perfect Morzine experience.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-pdse-navy">
                  <HelpCircle className="w-6 h-6" />
                  Common Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left hover:text-pdse-navy">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-pdse-ice">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-pdse-navy mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our local concierge team is here to help with any questions about Morzine, 
            our packages, or planning your trip.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-pdse-navy hover:bg-pdse-navy/90" asChild>
              <Link href="/contact">Ask a Question</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/plan-trip">Start Planning</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
