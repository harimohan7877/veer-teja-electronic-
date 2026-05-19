import { NextRequest, NextResponse } from 'next/server';

// Disable static generation for this API
export const dynamic = 'force-dynamic';

// Mock data storage for demo (in production, use database)
const bookings: Record<string, unknown>[] = [];

// POST: Create new booking
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      customerName,
      phone,
      address,
      serviceId,
      deviceBrand,
      deviceModel,
      issueDesc,
      preferredDate,
    } = body;

    // Validate required fields
    if (!customerName || !phone || !serviceId || !issueDesc) {
      return NextResponse.json(
        { success: false, error: 'Required fields are missing' },
        { status: 400 }
      );
    }

    // Generate booking number
    const bookingNo = `BK${Date.now().toString(36).toUpperCase()}`;

    // Save to mock storage
    const booking = {
      id: `bk_${Date.now()}`,
      bookingNo,
      customerName,
      phone,
      address: address || null,
      serviceId,
      deviceBrand: deviceBrand || null,
      deviceModel: deviceModel || null,
      issueDesc,
      preferredDate: preferredDate || null,
      status: 'PENDING',
      createdAt: new Date(),
    };
    bookings.push(booking);

    return NextResponse.json({
      success: true,
      data: booking,
      message: 'Booking created successfully',
    });
  } catch (error) {
    console.error('Booking API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create booking' },
      { status: 500 }
    );
  }
}

// GET: Fetch all bookings (for admin)
export async function GET() {
  try {
    return NextResponse.json({ success: true, data: bookings });
  } catch (error) {
    console.error('Fetch bookings error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch bookings' },
      { status: 500 }
    );
  }
}