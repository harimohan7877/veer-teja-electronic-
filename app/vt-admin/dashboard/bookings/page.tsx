'use client';

import { useState, useEffect } from 'react';
import { Search, Filter, Phone, MessageCircle, Loader2 } from 'lucide-react';
import AdminLayout from '@/app/vt-admin/layout';

const statusOptions = ['PENDING', 'CONFIRMED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'];

export default function BookingsAdminPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/api/booking')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setBookings(data.data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = !searchTerm ||
      booking.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.phone.includes(searchTerm);
    const matchesStatus = !statusFilter || booking.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <AdminLayout>
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Bookings Management</h1>

        {/* Filters */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
            >
              <option value="">All Status</option>
              {statusOptions.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Bookings Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : filteredBookings.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              No bookings found.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Booking ID</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Customer</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Service</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Device</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Issue</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Date</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredBookings.map(booking => (
                    <tr key={booking.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{booking.bookingNo}</td>
                      <td className="px-4 py-3">
                        <div>
                          <p className="font-medium text-gray-900">{booking.customerName}</p>
                          <p className="text-sm text-gray-500">{booking.phone}</p>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-gray-600">{booking.service?.nameHi || booking.service?.name || 'Unknown'}</td>
                      <td className="px-4 py-3 text-gray-600">{booking.deviceBrand} {booking.deviceModel}</td>
                      <td className="px-4 py-3 text-gray-600 text-sm max-w-xs truncate">{booking.issueDesc}</td>
                      <td className="px-4 py-3 text-gray-600">{new Date(booking.createdAt).toLocaleDateString()}</td>
                      <td className="px-4 py-3">
                        <select
                          defaultValue={booking.status}
                          className="text-xs px-2 py-1 border rounded-full focus:outline-none"
                          style={{
                            backgroundColor: booking.status === 'PENDING' ? '#FEF3C7' :
                              booking.status === 'CONFIRMED' ? '#DBEAFE' :
                              booking.status === 'IN_PROGRESS' ? '#E0E7FF' :
                              booking.status === 'COMPLETED' ? '#D1FAE5' : '#FEE2E2',
                            color: booking.status === 'PENDING' ? '#92400E' :
                              booking.status === 'CONFIRMED' ? '#1E40AF' :
                              booking.status === 'IN_PROGRESS' ? '#3730A3' :
                              booking.status === 'COMPLETED' ? '#065F46' : '#991B1B'
                          }}
                        >
                          {statusOptions.map(status => (
                            <option key={status} value={status}>{status}</option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
