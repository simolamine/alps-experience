"use client";

import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { DateStep } from "./date-step";
import { GuestsStep } from "./guests-step";
import { PackageStep } from "./package-step";
import { ContactStep } from "./contact-step";
import { ReviewStep } from "./review-step";
import { CurrencyProvider } from "@/components/currency-provider";
import { CurrencyToggle } from "@/components/currency-toggle";
import { BookingDraftData } from "@/lib/validators";
import { Check } from "lucide-react";

export interface BookingData {
  dates?: {
    startDate: string;
    endDate: string;
  };
  guests?: {
    adults: number;
    children: number;
  };
  package?: {
    packageId: string;
    addons: string[];
  };
  contact?: {
    name: string;
    email: string;
    phone?: string;
    notes?: string;
    consent?: boolean;
  };
}

interface Step {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export function BookingWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps: Step[] = [
    {
      id: 1,
      title: "Dates",
      description: "When would you like to visit?",
      completed: !!bookingData.dates
    },
    {
      id: 2,
      title: "Guests",
      description: "How many people are traveling?",
      completed: !!bookingData.guests
    },
    {
      id: 3,
      title: "Package",
      description: "Choose your perfect package",
      completed: !!bookingData.package
    },
    {
      id: 4,
      title: "Contact",
      description: "Your contact information",
      completed: !!bookingData.contact
    },
    {
      id: 5,
      title: "Review",
      description: "Confirm your booking request",
      completed: false
    }
  ];

  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;

  const updateBookingData = (stepData: Partial<BookingData>) => {
    setBookingData(prev => ({ ...prev, ...stepData }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (step: number) => {
    setCurrentStep(step);
  };

  const submitBooking = async () => {
    setIsSubmitting(true);
    try {
      // Create the booking draft
      const draftData: BookingDraftData = {
        step: 5,
        payload: bookingData
      };

      const response = await fetch('/api/booking-draft', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(draftData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Booking submitted:', result);
        // Redirect to thank you page or show success message
        alert('Booking request submitted successfully! We will contact you within 24 hours.');
      } else {
        throw new Error('Failed to submit booking');
      }
    } catch (error) {
      console.error('Booking submission error:', error);
      alert('Sorry, there was an error submitting your booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <DateStep
            data={bookingData.dates}
            onUpdate={(dates) => updateBookingData({ dates })}
            onNext={nextStep}
          />
        );
      case 2:
        return (
          <GuestsStep
            data={bookingData.guests}
            onUpdate={(guests) => updateBookingData({ guests })}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 3:
        return (
          <PackageStep
            data={bookingData.package}
            guests={bookingData.guests}
            dates={bookingData.dates}
            onUpdate={(packageData) => updateBookingData({ package: packageData })}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 4:
        return (
          <ContactStep
            data={bookingData.contact}
            onUpdate={(contact) => updateBookingData({ contact })}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 5:
        return (
          <ReviewStep
            bookingData={bookingData}
            onSubmit={submitBooking}
            onPrev={prevStep}
            isSubmitting={isSubmitting}
          />
        );
      default:
        return null;
    }
  };

  return (
    <CurrencyProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-pdse-navy text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="font-serif text-3xl md:text-5xl font-bold mb-2">
                    Plan Your Trip
                  </h1>
                  <p className="text-gray-200">
                    Let&apos;s create your perfect Morzine experience
                  </p>
                </div>
                <CurrencyToggle />
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-300">Step {currentStep} of {steps.length}</span>
                  <span className="text-sm text-gray-300">{Math.round(progress)}% Complete</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              {/* Step Navigation */}
              <div className="hidden md:flex items-center justify-between">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <button
                      onClick={() => goToStep(step.id)}
                      className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                        step.id === currentStep
                          ? 'bg-white text-pdse-navy border-white'
                          : step.completed
                          ? 'bg-green-500 text-white border-green-500'
                          : 'bg-transparent text-white border-white/30'
                      }`}
                      disabled={step.id > currentStep && !step.completed}
                    >
                      {step.completed ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <span className="text-sm font-semibold">{step.id}</span>
                      )}
                    </button>
                    <div className="ml-3 text-left">
                      <div className={`font-medium ${step.id === currentStep ? 'text-white' : 'text-gray-300'}`}>
                        {step.title}
                      </div>
                      <div className="text-sm text-gray-400 hidden lg:block">
                        {step.description}
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block w-8 h-px bg-white/30 mx-4" />
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Step Indicator */}
              <div className="md:hidden flex items-center justify-center">
                <Badge variant="secondary" className="bg-white/20 text-white">
                  {steps[currentStep - 1].title}: {steps[currentStep - 1].description}
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Step Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {renderCurrentStep()}
          </div>
        </section>
      </div>
    </CurrencyProvider>
  );
}
