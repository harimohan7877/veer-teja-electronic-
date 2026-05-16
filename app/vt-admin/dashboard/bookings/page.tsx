'use client';

import { useState } from 'react';
import { Search, Filter, Phone, MessageCircle } from 'lucide-react';
import AdminLayout from '@/app/vt-admin/layout';

const bookings = [
  { id: 'BK001', name: 'राम सिंह', phone: '9928330252', service: 'कूलर मरम्मत', device: 'Bajaj', date: '2025-05-15', status: 'PENDING', issue: 'कूलर ठीक से नहीं चल रहा' },
  { id: 'BK002', name: 'सीता देवी', phone: '6350211515', service: 'पंखा मरम्मत', device: 'Crompton', date: '2025-05-14', status: 'CONFIRMED', issue: 'पंखे में आवाज आती है' },
  { id: 'BK003', name: 'मोहन लाल', phone: '8955293732', service: 'फ्रिज मरम्मत', device: 'Whirlpool', date: '2025-05-13', status: 'IN_PROGRESS', issue: 'फ्रिज ठंडा नहीं कर रहा' },
  { id: 'BK004', name: 'पूजा शर्मा', phone: '9876543210', service: 'वाशिंग मशीन', device: 'Samsung', date: '2025-05-12', status: 'COMPLETED', issue: 'स्पिन नहीं हो रहा' },
  { id: 'BK005', name: 'राजेश कुमार', phone: '9123456789', service: 'इन्वेर्टर सर्विस', device: 'Luminous', date: '2025-05-11', status: 'CANCELLED', issue: 'बैटरी बदलवानी है' },
];

const statusOptions = ['PENDING', 'CONFIRMED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'];

export default function BookingsAdminPage() {
  const [statusFilter, setStatusFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = !searchTerm ||
      booking.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredBookings.map(booking => (
                  <tr key={booking.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">{booking.id}</td>
                    <td className="px-4 py-3">
                      <div>
                        <p className="font-medium text-gray-900">{booking.name}</p>
                        <p className="text-sm text-gray-500">{booking.phone}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{booking.service}</td>
                    <td className="px-4 py-3 text-gray-600">{booking.device}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm max-w-xs truncate">{booking.issue}</td>
                    <td className="px-4 py-3 text-gray-600">{booking.date}</td>
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
                        {statusOptions.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <a href={`tel:${booking.phone}`} className="p-2 text-gray-600 hover:text-primary hover:bg-gray-100 rounded-lg">
                          <Phone className="w-4 h-4" />
                        </a>
                        <a href={`https://wa.me/91${booking.phone}?text=नमस्ते ${booking.name}! आपकी बुकिंग ${booking.id} के बारे में अपडेट।`} target="_blank" className="p-2 text-gray-600 hover:text-green-600 hover:bg-gray-100 rounded-lg">
                          <MessageCircle className="w-4 h-4" />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}