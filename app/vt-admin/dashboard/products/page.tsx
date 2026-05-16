'use client';

import { useState } from 'react';
import { Plus, Edit, Trash2, Eye, Search, Filter } from 'lucide-react';
import AdminLayout from '@/app/vt-admin/layout';
import { PRODUCTS, CATEGORIES } from '@/lib/data';

export default function ProductsAdminPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesSearch = product.nameHi.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !categoryFilter || product.categoryId === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <AdminLayout>
      <div>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Products Management</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">
            <Plus className="w-5 h-5" />
            Add Product
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
            >
              <option value="">All Categories</option>
              {CATEGORIES.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Image</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Product Name</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Category</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Brand</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Price</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Stock</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredProducts.map(product => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <div>
                        <p className="font-medium text-gray-900">{product.nameHi}</p>
                        <p className="text-sm text-gray-500">{product.name}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {CATEGORIES.find(c => c.id === product.categoryId)?.name || 'N/A'}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{product.brand}</td>
                    <td className="px-4 py-3">
                      <span className="font-medium text-gray-900">₹{product.price?.toLocaleString()}</span>
                      {product.mrp && (
                        <span className="text-sm text-gray-400 line-through ml-2">₹{product.mrp.toLocaleString()}</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        product.inStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-gray-600 hover:text-primary hover:bg-gray-100 rounded-lg">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-gray-100 rounded-lg">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found</p>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}