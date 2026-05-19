import { NextRequest, NextResponse } from 'next/server';

// Disable static generation for this API
export const dynamic = 'force-dynamic';

// Mock data storage for demo (in production, use database)
const enquiries: Record<string, unknown>[] = [];

// POST: Create new enquiry
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, message, source } = body;

    // Validate required fields
    if (!name || !phone || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, phone, and message are required' },
        { status: 400 }
      );
    }

    // Save to mock storage (in production, use Prisma)
    const enquiry = {
      id: `enq_${Date.now()}`,
      name,
      phone,
      email: email || null,
      message,
      source: source || 'contact-page',
      isRead: false,
      createdAt: new Date(),
    };
    enquiries.push(enquiry);

    return NextResponse.json({
      success: true,
      data: enquiry,
      message: 'Enquiry submitted successfully',
    });
  } catch (error) {
    console.error('Enquiry API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit enquiry' },
      { status: 500 }
    );
  }
}

// GET: Fetch all enquiries (for admin)
export async function GET() {
  try {
    return NextResponse.json({ success: true, data: enquiries });
  } catch (error) {
    console.error('Fetch enquiries error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch enquiries' },
      { status: 500 }
    );
  }
}