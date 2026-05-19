import { Package, Wrench, Calendar, MessageSquare, TrendingUp, Users } from 'lucide-react';
import AdminLayout from '../layout';
import { prisma } from '@/lib/db';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const productsCount = await prisma.product.count();
  const servicesCount = await prisma.service.count();
  const bookingsCount = await prisma.booking.count();
  const enquiriesCount = await prisma.enquiry.count();

  const recentBookings = await prisma.booking.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' },
    include: { service: true }
  });

  const recentEnquiries = await prisma.enquiry.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' }
  });

  const stats = [
    { label: 'Total Products', value: productsCount.toString(), icon: Package, color: 'bg-blue-500' },
    { label: 'Services', value: servicesCount.toString(), icon: Wrench, color: 'bg-green-500' },
    { label: 'Bookings', value: bookingsCount.toString(), icon: Calendar, color: 'bg-purple-500' },
    { label: 'Enquiries', value: enquiriesCount.toString(), icon: MessageSquare, color: 'bg-orange-500' },
  ];

  return (
    <AdminLayout>
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Bookings */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Recent Bookings</h2>
              <Link href="/vt-admin/dashboard/bookings" className="text-sm text-primary hover:underline">
                View All
              </Link>
            </div>
            <div className="space-y-4">
              {recentBookings.length === 0 ? (
                <p className="text-sm text-gray-500">No bookings yet.</p>
              ) : (
                recentBookings.map(booking => (
                  <div key={booking.id} className="flex items-center justify-between py-3 border-b last:border-0">
                    <div>
                      <p className="font-medium text-gray-900">{booking.customerName}</p>
                      <p className="text-sm text-gray-500">{booking.service?.nameHi || booking.service?.name || 'Service'}</p>
                      <p className="text-xs text-gray-400">{booking.phone}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      booking.status === 'PENDING' ? 'bg-yellow-100 text-yellow-700' :
                      booking.status === 'CONFIRMED' ? 'bg-blue-100 text-blue-700' :
                      booking.status === 'IN_PROGRESS' ? 'bg-indigo-100 text-indigo-700' :
                      booking.status === 'COMPLETED' ? 'bg-green-100 text-green-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {booking.status}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Recent Enquiries */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Recent Enquiries</h2>
              <Link href="/vt-admin/dashboard/enquiries" className="text-sm text-primary hover:underline">
                View All
              </Link>
            </div>
            <div className="space-y-4">
              {recentEnquiries.length === 0 ? (
                <p className="text-sm text-gray-500">No enquiries yet.</p>
              ) : (
                recentEnquiries.map(enquiry => (
                  <div key={enquiry.id} className="py-3 border-b last:border-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-gray-900 flex items-center gap-2">
                        {enquiry.name}
                        {!enquiry.isRead && <span className="w-2 h-2 rounded-full bg-primary" title="Unread"></span>}
                      </p>
                      <span className="text-xs text-gray-400">
                        {new Date(enquiry.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">{enquiry.message}</p>
                    <p className="text-xs text-gray-400 mt-1">{enquiry.phone}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/vt-admin/dashboard/products" className="p-4 bg-blue-50 rounded-lg text-center hover:bg-blue-100 transition-colors">
              <Package className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <span className="text-sm font-medium text-blue-900">Manage Products</span>
            </Link>
            <Link href="/vt-admin/dashboard/services" className="p-4 bg-green-50 rounded-lg text-center hover:bg-green-100 transition-colors">
              <Wrench className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <span className="text-sm font-medium text-green-900">Manage Services</span>
            </Link>
            <Link href="/vt-admin/dashboard/bookings" className="p-4 bg-purple-50 rounded-lg text-center hover:bg-purple-100 transition-colors">
              <Calendar className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <span className="text-sm font-medium text-purple-900">View Bookings</span>
            </Link>
            <Link href="/vt-admin/dashboard/enquiries" className="p-4 bg-orange-50 rounded-lg text-center hover:bg-orange-100 transition-colors">
              <MessageSquare className="w-6 h-6 text-orange-600 mx-auto mb-2" />
              <span className="text-sm font-medium text-orange-900">View Enquiries</span>
            </Link>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
