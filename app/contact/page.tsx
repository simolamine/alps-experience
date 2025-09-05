"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { leadFormSchema, LeadFormData } from "@/lib/validators";
import { siteConfig } from "@/config/site";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Send,
  Users,
  Calendar
} from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      source: 'website' as const,
      consent: false
    }
  });


  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
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
            <h2 className="text-2xl font-bold text-pdse-navy mb-4">Message Sent!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for contacting us. Our concierge team will respond within 24 hours.
            </p>
            <Button 
              onClick={() => setSubmitStatus('idle')}
              className="bg-pdse-navy hover:bg-pdse-navy/90"
            >
              Send Another Message
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
              Contact Our Concierge
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Ready to plan your perfect Morzine adventure? Our local team is here to help 
              create an unforgettable alpine experience tailored just for you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <Clock className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">24hr Response</div>
                <div className="text-sm text-gray-300">Guaranteed reply</div>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">Local Team</div>
                <div className="text-sm text-gray-300">Based in Morzine</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">Personal Service</div>
                <div className="text-sm text-gray-300">Dedicated advisor</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-pdse-navy">
                    Tell Us About Your Trip
                  </CardTitle>
                  <p className="text-gray-600">
                    Share your preferences and we&apos;ll create a customized proposal for your Morzine experience.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          {...register('name')}
                          className={errors.name ? 'border-red-500' : ''}
                        />
                        {errors.name && (
                          <p className="text-sm text-red-500">{errors.name.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          {...register('email')}
                          className={errors.email ? 'border-red-500' : ''}
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        {...register('phone')}
                      />
                    </div>

                    {/* Trip Details */}
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold text-pdse-navy mb-4">Trip Details</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2">
                          <Label htmlFor="startDate">Preferred Start Date</Label>
                          <Input
                            id="startDate"
                            type="date"
                            {...register('startDate')}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="endDate">Preferred End Date</Label>
                          <Input
                            id="endDate"
                            type="date"
                            {...register('endDate')}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2">
                          <Label htmlFor="adults">Number of Adults</Label>
                          <Select onValueChange={(value) => setValue('adults', parseInt(value))}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select adults" />
                            </SelectTrigger>
                            <SelectContent>
                              {Array.from({ length: 20 }, (_, i) => (
                                <SelectItem key={i + 1} value={(i + 1).toString()}>
                                  {i + 1} Adult{i > 0 ? 's' : ''}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="children">Number of Children</Label>
                          <Select onValueChange={(value) => setValue('children', parseInt(value))}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select children" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0">No Children</SelectItem>
                              {Array.from({ length: 10 }, (_, i) => (
                                <SelectItem key={i + 1} value={(i + 1).toString()}>
                                  {i + 1} Child{i > 0 ? 'ren' : ''}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="packageId">Interested Package</Label>
                        <Select onValueChange={(value) => setValue('packageId', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a package (optional)" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="family-ski-week">Family Ski Week</SelectItem>
                            <SelectItem value="group-ski-spa">Group Ski & Spa</SelectItem>
                            <SelectItem value="luxury-chalet-gourmet">Luxury Chalet & Gourmet</SelectItem>
                            <SelectItem value="custom">Custom Package</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="notes">Additional Information</Label>
                      <Textarea
                        id="notes"
                        placeholder="Tell us about your skiing experience, dietary requirements, special requests, or any questions you have..."
                        rows={4}
                        {...register('notes')}
                      />
                      {errors.notes && (
                        <p className="text-sm text-red-500">{errors.notes.message}</p>
                      )}
                    </div>

                    {/* Consent */}
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="consent"
                        checked={watch('consent')}
                        onCheckedChange={(checked) => setValue('consent', checked as boolean)}
                        className={errors.consent ? 'border-red-500' : ''}
                      />
                      <div className="space-y-1">
                        <Label htmlFor="consent" className="text-sm font-normal">
                          I agree to be contacted by Alps Experience regarding my inquiry. *
                        </Label>
                        {errors.consent && (
                          <p className="text-sm text-red-500">{errors.consent.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-pdse-navy hover:bg-pdse-navy/90"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                      
                      {submitStatus === 'error' && (
                        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-center gap-2 text-red-700">
                          <AlertCircle className="w-4 h-4" />
                          <span className="text-sm">
                            Sorry, there was an error sending your message. Please try again or contact us directly.
                          </span>
                        </div>
                      )}
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Direct Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-pdse-navy">
                    Direct Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-pdse-navy" />
                    <div>
                      <div className="font-medium">Email</div>
                      <a 
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-pdse-navy hover:underline"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-pdse-navy" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <a 
                        href={`tel:${siteConfig.contact.phone}`}
                        className="text-pdse-navy hover:underline"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-pdse-navy mt-0.5" />
                    <div>
                      <div className="font-medium">Address</div>
                      <div className="text-gray-600">
                        {siteConfig.contact.address}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-pdse-navy">
                    What to Expect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-pdse-navy mt-0.5" />
                    <div>
                      <div className="font-medium">24-Hour Response</div>
                      <div className="text-sm text-gray-600">
                        We guarantee a response within 24 hours, usually much sooner.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-pdse-navy mt-0.5" />
                    <div>
                      <div className="font-medium">Personal Consultation</div>
                      <div className="text-sm text-gray-600">
                        Your dedicated advisor will understand your needs and preferences.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-pdse-navy mt-0.5" />
                    <div>
                      <div className="font-medium">Custom Proposal</div>
                      <div className="text-sm text-gray-600">
                        Receive a detailed itinerary with transparent pricing.
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Clock className="w-8 h-8 text-pdse-navy mx-auto mb-2" />
                    <div className="font-medium mb-1">Office Hours</div>
                    <div className="text-sm text-gray-600">
                      Monday - Friday: 9:00 - 18:00 CET<br />
                      Saturday: 10:00 - 16:00 CET<br />
                      Sunday: Emergency only
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
