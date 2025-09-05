import { NextRequest, NextResponse } from 'next/server';
import { leadFormSchema } from '@/lib/validators';
import { Lead } from '@/types/package';

// Simple in-memory storage for MVP (replace with database in production)
const leads: Lead[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the form data
    const validatedData = leadFormSchema.parse(body);
    
    // Create a new lead
    const lead: Lead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      startDate: validatedData.startDate,
      endDate: validatedData.endDate,
      adults: validatedData.adults,
      children: validatedData.children,
      packageId: validatedData.packageId,
      notes: validatedData.notes,
      source: validatedData.source || 'website',
      createdAt: new Date().toISOString(),
    };
    
    // Store the lead (in production, save to database)
    leads.push(lead);
    
    // In production, you would:
    // 1. Save to database (Prisma, MongoDB, etc.)
    // 2. Send notification email to team
    // 3. Send confirmation email to customer
    // 4. Add to CRM system
    
    console.log('New lead received:', {
      id: lead.id,
      name: lead.name,
      email: lead.email,
      source: lead.source,
      packageId: lead.packageId,
      createdAt: lead.createdAt
    });
    
    // Simulate email sending (replace with actual email service)
    await sendNotificationEmail(lead);
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Lead submitted successfully',
        leadId: lead.id 
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Lead submission error:', error);
    
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid form data',
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
    totalLeads: leads.length,
    recentLeads: leads.slice(-5).map(lead => ({
      id: lead.id,
      name: lead.name,
      email: lead.email,
      source: lead.source,
      createdAt: lead.createdAt
    }))
  });
}

// Simulate email notification (replace with actual email service like Resend, SendGrid, etc.)
async function sendNotificationEmail(lead: Lead) {
  console.log('📧 Email Notification (simulated)');
  console.log('To: info@alps-experience.com');
  console.log('Subject: New Lead from Website');
  console.log('Body:');
  console.log(`
    New lead received from ${lead.name}
    
    Contact Information:
    - Email: ${lead.email}
    - Phone: ${lead.phone || 'Not provided'}
    
    Trip Details:
    - Start Date: ${lead.startDate || 'Not specified'}
    - End Date: ${lead.endDate || 'Not specified'}
    - Adults: ${lead.adults || 'Not specified'}
    - Children: ${lead.children || 'Not specified'}
    - Package Interest: ${lead.packageId || 'Not specified'}
    
    Message:
    ${lead.notes || 'No additional message'}
    
    Source: ${lead.source}
    Lead ID: ${lead.id}
    Submitted: ${lead.createdAt}
  `);
  
  // In production, implement actual email sending:
  /*
  import { Resend } from 'resend';
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  await resend.emails.send({
    from: 'website@pdse.example',
    to: ['info@alps-experience.com'],
    subject: `New Lead: ${lead.name}`,
    html: emailTemplate(lead)
  });
  */
  
  return Promise.resolve();
}
