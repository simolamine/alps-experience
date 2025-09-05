"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
// Removed unused imports
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  Globe, 
  Download, 
  Mail, 
  Phone,
  CheckCircle,
  Star,
  Handshake
} from "lucide-react";

const commissionTiers = [
  {
    tier: "Bronze Partner",
    bookingsPerYear: "1-10",
    commissionRate: "8%",
    benefits: ["Standard commission", "Marketing materials", "Email support"],
    color: "bg-orange-100 text-orange-800"
  },
  {
    tier: "Silver Partner", 
    bookingsPerYear: "11-25",
    commissionRate: "10%",
    benefits: ["Higher commission", "Priority support", "Co-marketing opportunities", "Quarterly incentives"],
    color: "bg-gray-100 text-gray-800"
  },
  {
    tier: "Gold Partner",
    bookingsPerYear: "26-50", 
    commissionRate: "12%",
    benefits: ["Premium commission", "Dedicated account manager", "Custom pricing", "FAM trips"],
    color: "bg-yellow-100 text-yellow-800"
  },
  {
    tier: "Platinum Partner",
    bookingsPerYear: "51+",
    commissionRate: "15%",
    benefits: ["Maximum commission", "White-label options", "Exclusive rates", "VIP support"],
    color: "bg-purple-100 text-purple-800"
  }
];

const partnerBenefits = [
  {
    icon: DollarSign,
    title: "Competitive Commissions",
    description: "Earn 8-15% commission on all bookings with performance-based tiers"
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Personal account manager and priority customer service for your clients"
  },
  {
    icon: Globe,
    title: "Marketing Resources", 
    description: "High-quality images, videos, and marketing materials for your campaigns"
  },
  {
    icon: TrendingUp,
    title: "Performance Tracking",
    description: "Real-time dashboard to track bookings, commissions, and client satisfaction"
  }
];

type AgentFormData = {
  name: string;
  email: string;
  phone?: string;
  company: string;
  website?: string;
  experience: string;
  notes?: string;
  consent: boolean;
};

export default function AgentsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset
  } = useForm<AgentFormData>({
    defaultValues: { consent: false }
  });

  const consent = watch('consent');

  const onSubmit = async (data: AgentFormData) => {
    setIsSubmitting(true);
    try {
      const leadData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        notes: `B2B Agent Inquiry - Company: ${data.company}, Website: ${data.website || 'Not provided'}, Experience: ${data.experience}. Additional notes: ${data.notes || 'None'}`,
        source: 'agents' as const,
        consent: data.consent
      };

      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <Card className="max-w-md mx-auto">
          <CardContent className="text-center py-12">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-pdse-navy mb-4">Application Received!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your interest in partnering with us. Our partnerships team will review your application and respond within 2 business days.
            </p>
            <Button 
              onClick={() => setSubmitStatus('idle')}
              className="bg-pdse-navy hover:bg-pdse-navy/90"
            >
              Submit Another Application
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-pdse-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Travel Agent Partners
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Join our exclusive network of U.S. travel agents and offer your clients 
              premium ski experiences in the French Alps with competitive commissions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15%</div>
                <div className="text-sm text-gray-300">Maximum Commission</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm text-gray-300">Partner Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Partner With Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-pdse-navy mb-4">
              Why Partner With Alps Experience?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We&apos;re more than just a supplier - we&apos;re your dedicated partner in creating 
              unforgettable alpine experiences for your clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {partnerBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-pdse-navy/10 rounded-full mb-4">
                      <IconComponent className="w-8 h-8 text-pdse-navy" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-pdse-navy">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Commission Structure */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-2xl text-pdse-navy text-center">
                Commission Structure & Partner Tiers
              </CardTitle>
              <p className="text-center text-gray-600">
                Earn more as you grow with our performance-based commission tiers
              </p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Partner Tier</TableHead>
                      <TableHead>Annual Bookings</TableHead>
                      <TableHead>Commission Rate</TableHead>
                      <TableHead>Benefits</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {commissionTiers.map((tier, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Badge className={tier.color}>{tier.tier}</Badge>
                        </TableCell>
                        <TableCell className="font-medium">{tier.bookingsPerYear}</TableCell>
                        <TableCell>
                          <span className="text-lg font-bold text-pdse-navy">{tier.commissionRate}</span>
                        </TableCell>
                        <TableCell>
                          <ul className="text-sm space-y-1">
                            {tier.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-center gap-1">
                                <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Payment Terms</h4>
                <div className="text-sm text-blue-800 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>• Commission paid within 30 days of client check-out</div>
                  <div>• Monthly statements provided</div>
                  <div>• Direct deposit or wire transfer available</div>
                  <div>• No booking fees or hidden charges</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resources */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-pdse-navy">
                  <Download className="w-5 h-5" />
                  Marketing Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Partner Information Packet</span>
                    <Button size="sm" variant="outline">Download PDF</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>High-Resolution Images</span>
                    <Button size="sm" variant="outline">Download ZIP</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Package Flyers & Brochures</span>
                    <Button size="sm" variant="outline">Download PDF</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Social Media Kit</span>
                    <Button size="sm" variant="outline">Download ZIP</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-pdse-navy">
                  <Star className="w-5 h-5" />
                  Client Testimonials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <blockquote className="border-l-4 border-pdse-navy pl-4">
                    &ldquo;Working with Alps Experience has transformed our ski business. Their on-ground support in Morzine is exceptional.&rdquo;
                    <footer className="mt-2 text-gray-600">- Alpine Travel Solutions, Colorado</footer>
                  </blockquote>
                  <blockquote className="border-l-4 border-pdse-navy pl-4">
                    &ldquo;Our clients love the seamless experience and we love the reliable commissions.&rdquo;
                    <footer className="mt-2 text-gray-600">- Summit Adventures, California</footer>
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Application Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-pdse-navy text-center flex items-center justify-center gap-2">
                  <Handshake className="w-6 h-6" />
                  Become a Partner
                </CardTitle>
                <p className="text-center text-gray-600">
                  Ready to join our partner network? Fill out the application below and we&apos;ll be in touch within 2 business days.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Contact Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        {...register('name', { required: 'Name is required' })}
                        className={errors.name ? 'border-red-500' : ''}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500">{errors.name.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@agency.com"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Please enter a valid email address'
                          }
                        })}
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        {...register('phone')}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Agency/Company Name *</Label>
                      <Input
                        id="company"
                        placeholder="Your travel agency"
                        {...register('company', { required: 'Company name is required' })}
                        className={errors.company ? 'border-red-500' : ''}
                      />
                      {errors.company && (
                        <p className="text-sm text-red-500">{errors.company.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <Input
                        id="website"
                        placeholder="https://youragency.com"
                        {...register('website')}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">Years in Travel Industry *</Label>
                      <Input
                        id="experience"
                        placeholder="e.g., 5 years"
                        {...register('experience', { required: 'Experience is required' })}
                        className={errors.experience ? 'border-red-500' : ''}
                      />
                      {errors.experience && (
                        <p className="text-sm text-red-500">{errors.experience.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Information</Label>
                    <Textarea
                      id="notes"
                      placeholder="Tell us about your agency, target markets, average group sizes, or any questions..."
                      rows={4}
                      {...register('notes')}
                    />
                  </div>

                  {/* Consent */}
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="consent"
                      checked={consent}
                      onCheckedChange={(checked) => setValue('consent', checked as boolean)}
                      className={errors.consent ? 'border-red-500' : ''}
                    />
                    <div className="space-y-1">
                      <Label htmlFor="consent" className="text-sm font-normal">
                        I agree to be contacted by Alps Experience regarding partnership opportunities. *
                      </Label>
                      {errors.consent && (
                        <p className="text-sm text-red-500">You must agree to be contacted</p>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting || !consent}
                    className="w-full bg-pdse-navy hover:bg-pdse-navy/90"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Submitting Application...
                      </>
                    ) : (
                      'Submit Partnership Application'
                    )}
                  </Button>

                  {submitStatus === 'error' && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
                      Sorry, there was an error submitting your application. Please try again or contact us directly.
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Contact Information */}
      <section className="py-12 bg-pdse-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-6">Questions About Partnership?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Our partnerships team is here to help you get started and maximize your success.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white/10 border-white/20">
                <CardContent className="text-center py-6">
                  <Mail className="w-8 h-8 mx-auto mb-4" />
                  <div className="font-semibold mb-2">Email Our Partnership Team</div>
                  <a href="mailto:partners@pdse.example" className="text-gray-200 hover:text-white">
                    partners@pdse.example
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20">
                <CardContent className="text-center py-6">
                  <Phone className="w-8 h-8 mx-auto mb-4" />
                  <div className="font-semibold mb-2">Call Direct</div>
                  <a href="tel:+33450747272" className="text-gray-200 hover:text-white">
                    +33 4 50 74 72 72
                  </a>
                  <div className="text-sm text-gray-300 mt-1">Mon-Fri 9:00-18:00 CET</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
