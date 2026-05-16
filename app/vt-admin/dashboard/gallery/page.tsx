'use client';

import { useState } from 'react';
import { Plus, Trash2, Image, GripVertical } from 'lucide-react';
import AdminLayout from '@/app/vt-admin/layout';

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop', caption: 'Shop Image', category: 'shop', isActive: true },
  { id: 2, src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=300&fit=crop', caption: 'Showroom', category: 'shop', isActive: true },
  { id: 3, src: 'https://images.unsplash.com/photo-1585771724684-38269d7239d4?w=400&h=300&fit=crop', caption: 'Repair Workshop', category: 'repair', isActive: true },
  { id: 4, src: 'https://images.unsplash.com/photo-1621905252507-b35492ac74e4?w=400&h=300&fit=crop', caption: 'Inverter Service', category: 'repair', isActive: true },
  { id: 5, src: 'https://images.unsplash.com/photo-1616628188467-8fb2e5832a0e?w=400&h=300&fit=crop', caption: 'Fan Display', category: 'products', isActive: true },
  { id: 6, src: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400&h=300&fit=crop', caption: 'Refrigerators', category: 'products', isActive: true },
];

const categories = ['shop', 'repair', 'products', 'team'];

export default function GalleryAdminPage() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredImages = selectedCategory
    ? galleryImages.filter(img => img.category === selectedCategory)
    : galleryImages;

  return (
    <AdminLayout>
      <div>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Gallery Management</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">
            <Plus className="w-5 h-5" />
            Add Image
          </button>
        </div>

        {/* Category Filter */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                !selectedCategory ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-medium capitalize transition-colors ${
                  selectedCategory === cat ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredImages.map(image => (
            <div key={image.id} className="group relative bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-square">
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <p className="text-sm font-medium text-gray-900 truncate">{image.caption}</p>
                <p className="text-xs text-gray-500 capitalize">{image.category}</p>
              </div>

              {/* Hover Actions */}
              <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 bg-white rounded-lg shadow hover:bg-gray-100">
                  <GripVertical className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 bg-white rounded-lg shadow hover:bg-red-50">
                  <Trash2 className="w-4 h-4 text-red-600" />
                </button>
              </div>

              {/* Active Toggle */}
              <div className="absolute bottom-2 right-2">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked={image.isActive}
                    className="sr-only peer"
                  />
                  <div className="w-8 h-4 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-green-500"></div>
                </label>
              </div>
            </div>
          ))}

          {/* Add New */}
          <button className="aspect-square border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-colors">
            <Plus className="w-8 h-8 mb-2" />
            <span className="text-sm">Add Image</span>
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}