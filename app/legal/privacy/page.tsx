import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-serif text-4xl font-bold text-pdse-navy mb-4">Privacy Policy</h1>
              <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-pdse-navy">Your Privacy Matters</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  At Alps Experience, we are committed to protecting your privacy and personal information. 
                  This policy explains how we collect, use, and safeguard your data.
                </p>

                <h3>Information We Collect</h3>
                <ul>
                  <li>Contact information (name, email, phone number)</li>
                  <li>Travel preferences and requirements</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Website usage data through cookies</li>
                </ul>

                <h3>How We Use Your Information</h3>
                <ul>
                  <li>To provide and improve our services</li>
                  <li>To communicate about your bookings and travel arrangements</li>
                  <li>To send relevant travel information and updates (with your consent)</li>
                  <li>To comply with legal obligations</li>
                </ul>

                <h3>Data Protection</h3>
                <p>
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. Your data is stored securely 
                  and accessed only by authorized personnel.
                </p>

                <h3>Your Rights</h3>
                <p>
                  You have the right to access, update, or delete your personal information. You may also 
                  opt out of marketing communications at any time. Contact us to exercise these rights.
                </p>

                <h3>Contact Us</h3>
                <p>
                  If you have questions about this privacy policy, please contact us at privacy@pdse.example 
                  or through our contact form.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
