import { NextRequest, NextResponse } from 'next/server';
import { bookingDraftSchema } from '@/lib/validators';
import { BookingDraft } from '@/types/package';

// Simple in-memory storage for MVP (replace with database in production)
const bookingDrafts: BookingDraft[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the booking draft data
    const validatedData = bookingDraftSchema.parse(body);
    
    // Create a new booking draft
    const bookingDraft: BookingDraft = {
      id: `draft_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      step: validatedData.step,
      payload: validatedData.payload,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    // Store the booking draft
    bookingDrafts.push(bookingDraft);
    
    // In production, you would:
    // 1. Save to database
    // 2. Convert to a lead in the leads system
    // 3. Send notification email to team
    // 4. Send confirmation email to customer
    // 5. Trigger follow-up automation
    
    console.log('Booking draft created:', {
      id: bookingDraft.id,
      step: bookingDraft.step,
      contact: bookingDraft.payload.contact?.name,
      package: bookingDraft.payload.package?.packageId,
      createdAt: bookingDraft.createdAt
    });
    
    // Create a lead from the completed booking draft
    if (bookingDraft.step === 5 && bookingDraft.payload.contact) {
      await createLeadFromBooking(bookingDraft);
    }
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Booking draft saved successfully',
        draftId: bookingDraft.id 
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Booking draft error:', error);
    
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid booking data',
          errors: error.message 
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error' 
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Return basic stats (for admin/development purposes)
  return NextResponse.json({
    totalDrafts: bookingDrafts.length,
    completedBookings: bookingDrafts.filter(draft => draft.step === 5).length,
    recentDrafts: bookingDrafts.slice(-5).map(draft => ({
      id: draft.id,
      step: draft.step,
      contact: draft.payload.contact?.name,
      createdAt: draft.createdAt
    }))
  });
}

// Convert completed booking to a lead
async function createLeadFromBooking(bookingDraft: BookingDraft) {
  try {
    // Create lead data from booking draft
    const leadData = {
      name: bookingDraft.payload.contact?.name || '',
      email: bookingDraft.payload.contact?.email || '',
      phone: bookingDraft.payload.contact?.phone,
      startDate: bookingDraft.payload.dates?.startDate,
      endDate: bookingDraft.payload.dates?.endDate,
      adults: bookingDraft.payload.guests?.adults,
      children: bookingDraft.payload.guests?.children,
      packageId: bookingDraft.payload.package?.packageId,
      notes: `Booking request via wizard. Selected addons: ${bookingDraft.payload.package?.addons?.join(', ') || 'None'}. Additional notes: ${bookingDraft.payload.contact?.notes || 'None'}`,
      source: 'website' as const,
      consent: true
    };

    // Submit to lead endpoint
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/lead`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData),
    });

    if (response.ok) {
      console.log('Lead created from booking draft:', bookingDraft.id);
    } else {
      console.error('Failed to create lead from booking draft');
    }
  } catch (error) {
    console.error('Error creating lead from booking:', error);
  }
}
