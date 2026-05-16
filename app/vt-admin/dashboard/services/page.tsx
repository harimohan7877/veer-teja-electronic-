'use client';

import { useState } from 'react';
import { Plus, Edit, Trash2, Eye, Search } from 'lucide-react';
import AdminLayout from '@/app/vt-admin/layout';
import { SERVICES } from '@/lib/data';

export default function ServicesAdminPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = SERVICES.filter(service =>
    service.nameHi.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <div>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Services Management</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">
            <Plus className="w-5 h-5" />
            Add Service
          </button>
        </div>

        {/* Search */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map(service => (
            <div key={service.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img
                src={service.imageUrl}
                alt={service.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{service.icon}</span>
                  <h3 className="font-bold text-gray-900">{service.nameHi}</h3>
                </div>
                <p className="text-sm text-gray-500 mb-3">{service.descriptionHi}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-primary font-bold">₹{service.price} से शुरू</span>
                  <span className="text-sm text-gray-500">{service.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No services found</p>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}