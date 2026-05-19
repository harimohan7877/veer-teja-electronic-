'use client';

import { useState, useEffect } from 'react';
import { Search, Phone, MessageCircle, Check, Trash2, Loader2 } from 'lucide-react';
import AdminLayout from '@/app/vt-admin/layout';

export default function EnquiriesAdminPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showUnread, setShowUnread] = useState(false);

  useEffect(() => {
    fetch('/api/enquiry')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setEnquiries(data.data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

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
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : filteredEnquiries.length === 0 ? (
          <div className="text-center py-20 text-gray-500 bg-white rounded-xl">
            No enquiries found.
          </div>
        ) : (
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
                    <p className="text-sm text-gray-500">{new Date(enquiry.createdAt).toLocaleString()}</p>
                  </div>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">{enquiry.source || 'Website'}</span>
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
                    <button className="p-2 text-gray-400 hover:text-gray-600" title="Read">
                      <Check className="w-5 h-5" />
                    </button>
                  ) : (
                    <button className="p-2 text-primary hover:bg-primary/10 rounded-lg" title="Mark as read">
                      <Check className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
