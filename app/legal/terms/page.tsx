import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-serif text-4xl font-bold text-pdse-navy mb-4">Terms of Service</h1>
              <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-pdse-navy">Terms and Conditions</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <h3>Acceptance of Terms</h3>
                <p>
                  By using our website and services, you agree to these terms and conditions. 
                  If you do not agree, please do not use our services.
                </p>

                <h3>Services</h3>
                <p>
                  Alps Experience provides travel arrangement services including accommodation, 
                  activities, and concierge services in the Morzine/Portes du Soleil region.
                </p>

                <h3>Booking and Payment</h3>
                <ul>
                  <li>All bookings are subject to availability</li>
                  <li>Deposits may be required to secure bookings</li>
                  <li>Full payment terms will be provided with booking confirmation</li>
                  <li>Prices are subject to change until booking is confirmed</li>
                </ul>

                <h3>Cancellations and Refunds</h3>
                <p>
                  Cancellation policies vary by service provider and season. Specific cancellation 
                  terms will be provided with each booking. We recommend travel insurance for 
                  maximum protection.
                </p>

                <h3>Liability</h3>
                <p>
                  We act as intermediaries arranging services with third-party providers. While we 
                  carefully select our partners, we cannot be held liable for services provided by 
                  third parties beyond our direct control.
                </p>

                <h3>Force Majeure</h3>
                <p>
                  We are not liable for delays or cancellations due to circumstances beyond our control, 
                  including weather conditions, natural disasters, or government restrictions.
                </p>

                <h3>Governing Law</h3>
                <p>
                  These terms are governed by French law. Any disputes will be resolved through 
                  French courts or alternative dispute resolution mechanisms.
                </p>

                <h3>Contact Information</h3>
                <p>
                  For questions about these terms, contact us at legal@pdse.example or through 
                  our contact form.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
