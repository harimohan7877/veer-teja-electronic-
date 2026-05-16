'use client';

import { useState } from 'react';
import { Search, Phone, MessageCircle, Check, Trash2 } from 'lucide-react';
import AdminLayout from '@/app/vt-admin/layout';

const enquiries = [
  { id: 1, name: 'जय प्रकाश', phone: '9928330252', message: 'इन्वेर्टर की कीमत पूछनी है - 1KVA', source: 'Contact Page', isRead: false, createdAt: '2025-05-16 10:30 AM' },
  { id: 2, name: 'अनीता शर्मा', phone: '6350211515', message: 'वाशिंग मशीन सर्विस के बारे में जानना है - कितने दिन लगते हैं?', source: 'WhatsApp', isRead: false, createdAt: '2025-05-16 09:15 AM' },
  { id: 3, name: 'राजेश कुमार', phone: '8955293732', message: 'बैटरी रिप्लेसमेंट चाहिए - 150Ah Luminous', source: 'Contact Page', isRead: true, createdAt: '2025-05-15 04:20 PM' },
  { id: 4, name: 'मोहन सिंह', phone: '9876543210', message: 'पंखा खरीदना है - 48 inch, कौन सा ब्रांड अच्छा है?', source: 'Contact Page', isRead: true, createdAt: '2025-05-14 02:00 PM' },
  { id: 5, name: 'सुनीता देवी', phone: '9123456789', message: 'फ्रिज गैस लीक है, जल्दी आना पड़ेगा', source: 'Phone Call', isRead: true, createdAt: '2025-05-13 11:30 AM' },
];

export default function EnquiriesAdminPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showUnread, setShowUnread] = useState(false);

  const filteredEnquiries = enquiries.filter(enquiry => {
    const matchesSearch = !searchTerm ||
      enquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enquiry.phone.includes(searchTerm) ||
      enquiry.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesUnread = !showUnread || !enquiry.isRead;
    return matchesSearch && matchesUnread;
  });

  return (
    <AdminLayout>
      <div>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Enquiries</h1>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
              {enquiries.filter(e => !e.isRead).length} Unread
            </span>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search enquiries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showUnread}
                onChange={(e) => setShowUnread(e.target.checked)}
                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <span className="text-gray-700">Show unread only</span>
            </label>
          </div>
        </div>

        {/* Enquiries List */}
        <div className="space-y-4">
          {filteredEnquiries.map(enquiry => (
            <div key={enquiry.id} className={`bg-white rounded-xl p-6 shadow-sm ${!enquiry.isRead ? 'border-l-4 border-primary' : ''}`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-gray-900">{enquiry.name}</h3>
                    {!enquiry.isRead && (
                      <span className="px-2 py-0.5 bg-primary text-white text-xs rounded-full">New</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{enquiry.createdAt}</p>
                </div>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">{enquiry.source}</span>
              </div>

              <p className="text-gray-700 mb-4">{enquiry.message}</p>

              <div className="flex items-center gap-3">
                <a href={`tel:${enquiry.phone}`} className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                  <Phone className="w-4 h-4" />
                  Call
                </a>
                <a href={`https://wa.me/91${enquiry.phone}`} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-whatsapp text-white rounded-lg hover:bg-green-600 text-sm">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                {enquiry.isRead ? (
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <Check className="w-5 h-5" />
                  </button>
                ) : (
                  <button className="p-2 text-primary hover:bg-primary/10 rounded-lg" title="Mark as read">
                    <Check className="w-5 h-5" />
                  </button>
                )}
                <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg" title="Delete">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredEnquiries.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No enquiries found</p>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}