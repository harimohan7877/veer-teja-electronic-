import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export const dynamic = 'force-dynamic';

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

    const bookingNo = `BK${Date.now().toString(36).toUpperCase()}`;

    // Note: ensure the `serviceId` passed from the frontend actually exists in the `Service` table.
    // If it's just a string like "AC Repair", we might need to handle it differently, 
    // or seed the services first. For now, assuming serviceId is a valid ID.
    
    // Check if the service exists, if not, create a generic placeholder service just to satisfy the relation
    let existingService = await prisma.service.findUnique({ where: { id: serviceId } });
    if (!existingService) {
      // Fallback if frontend sends a name instead of ID
      existingService = await prisma.service.findFirst({ where: { nameHi: serviceId } });
      
      if (!existingService) {
          existingService = await prisma.service.create({
            data: {
                id: serviceId,
                name: serviceId,
                nameHi: serviceId,
                slug: serviceId.toLowerCase().replace(/\\s+/g, '-'),
            }
          });
      }
    }

    const booking = await prisma.booking.create({
      data: {
        bookingNo,
        customerName,
        phone,
        address: address || null,
        serviceId: existingService.id,
        deviceBrand: deviceBrand || null,
        deviceModel: deviceModel || null,
        issueDesc,
        preferredDate: preferredDate ? new Date(preferredDate) : null,
      },
    });

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
    const bookings = await prisma.booking.findMany({
      orderBy: { createdAt: 'desc' },
      include: { service: true }
    });
    return NextResponse.json({ success: true, data: bookings });
  } catch (error) {
    console.error('Fetch bookings error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch bookings' },
      { status: 500 }
    );
  }
}
