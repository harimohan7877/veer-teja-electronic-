'use client';

import { Package, Wrench, Calendar, MessageSquare, TrendingUp, Users } from 'lucide-react';
import AdminLayout from '../layout';

const stats = [
  { label: 'Total Products', value: '12', icon: Package, color: 'bg-blue-500' },
  { label: 'Services', value: '8', icon: Wrench, color: 'bg-green-500' },
  { label: 'Bookings', value: '24', icon: Calendar, color: 'bg-purple-500' },
  { label: 'Enquiries', value: '15', icon: MessageSquare, color: 'bg-orange-500' },
];

const recentBookings = [
  { id: 'BK001', name: 'राम सिंह', service: 'कूलर मरम्मत', phone: '9928330252', status: 'PENDING' },
  { id: 'BK002', name: 'सीता देवी', service: 'पंखा मरम्मत', phone: '6350211515', status: 'CONFIRMED' },
  { id: 'BK003', name: 'मोहन लाल', service: 'फ्रिज मरम्मत', phone: '8955293732', status: 'COMPLETED' },
];

const recentEnquiries = [
  { id: 1, name: 'जय प्रकाश', phone: '9928330252', message: 'इन्वेर्टर की कीमत पूछनी है', time: '2 hours ago' },
  { id: 2, name: 'अनीता शर्मा', phone: '6350211515', message: 'वाशिंग मशीन सर्विस के बारे में', time: '5 hours ago' },
  { id: 3, name: 'राजेश कुमार', phone: '8955293732', message: 'बैटरी रिप्लेसमेंट चाहिए', time: '1 day ago' },
];

export default function DashboardPage() {
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
              <a href="/vt-admin/dashboard/bookings" className="text-sm text-primary hover:underline">
                View All
              </a>
            </div>
            <div className="space-y-4">
              {recentBookings.map(booking => (
                <div key={booking.id} className="flex items-center justify-between py-3 border-b last:border-0">
                  <div>
                    <p className="font-medium text-gray-900">{booking.name}</p>
                    <p className="text-sm text-gray-500">{booking.service}</p>
                    <p className="text-xs text-gray-400">{booking.phone}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    booking.status === 'PENDING' ? 'bg-yellow-100 text-yellow-700' :
                    booking.status === 'CONFIRMED' ? 'bg-blue-100 text-blue-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {booking.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Enquiries */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Recent Enquiries</h2>
              <a href="/vt-admin/dashboard/enquiries" className="text-sm text-primary hover:underline">
                View All
              </a>
            </div>
            <div className="space-y-4">
              {recentEnquiries.map(enquiry => (
                <div key={enquiry.id} className="py-3 border-b last:border-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-gray-900">{enquiry.name}</p>
                    <span className="text-xs text-gray-400">{enquiry.time}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{enquiry.message}</p>
                  <p className="text-xs text-gray-400 mt-1">{enquiry.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="/vt-admin/dashboard/products/add" className="p-4 bg-blue-50 rounded-lg text-center hover:bg-blue-100 transition-colors">
              <Package className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <span className="text-sm font-medium text-blue-700">Add Product</span>
            </a>
            <a href="/vt-admin/dashboard/services/add" className="p-4 bg-green-50 rounded-lg text-center hover:bg-green-100 transition-colors">
              <Wrench className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <span className="text-sm font-medium text-green-700">Add Service</span>
            </a>
            <a href="/vt-admin/dashboard/gallery" className="p-4 bg-purple-50 rounded-lg text-center hover:bg-purple-100 transition-colors">
              <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <span className="text-sm font-medium text-purple-700">Gallery</span>
            </a>
            <a href="/vt-admin/dashboard/settings" className="p-4 bg-orange-50 rounded-lg text-center hover:bg-orange-100 transition-colors">
              <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <span className="text-sm font-medium text-orange-700">Settings</span>
            </a>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}