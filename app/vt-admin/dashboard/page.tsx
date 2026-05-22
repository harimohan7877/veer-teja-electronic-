'use client';

import { Package, Wrench, Calendar, MessageSquare, Users, Star, TrendingUp, ShoppingBag, Phone } from 'lucide-react';
import AdminLayout from '../layout';
import Link from 'next/link';
import { PRODUCTS, SERVICES, CATEGORIES } from '@/lib/data';

export default function DashboardPage() {
  // Static stats from our data
  const stats = [
    {
      label: 'Total Products',
      value: PRODUCTS.length.toString(),
      subtext: `${CATEGORIES.length} categories`,
      icon: Package,
      color: 'bg-blue-500',
      href: '/vt-admin/dashboard/products',
    },
    {
      label: 'Services',
      value: SERVICES.length.toString(),
      subtext: 'Repair & maintenance',
      icon: Wrench,
      color: 'bg-green-500',
      href: '/vt-admin/dashboard/services',
    },
    {
      label: 'Bookings',
      value: '0',
      subtext: 'From database',
      icon: Calendar,
      color: 'bg-purple-500',
      href: '/vt-admin/dashboard/bookings',
    },
    {
      label: 'Enquiries',
      value: '0',
      subtext: 'From contact form',
      icon: MessageSquare,
      color: 'bg-orange-500',
      href: '/vt-admin/dashboard/enquiries',
    },
  ];

  const featuredProducts = PRODUCTS.filter(p => p.isFeatured).slice(0, 5);

  return (
    <AdminLayout>
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-500 text-sm mt-1">Welcome to Veer Teja Admin Panel</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-sm px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 font-medium"
            >
              View Website
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, idx) => (
            <Link key={idx} href={stat.href} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm font-medium text-gray-700">{stat.label}</div>
              <div className="text-xs text-gray-400 mt-1">{stat.subtext}</div>
            </Link>
          ))}
        </div>

        {/* Products Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Featured Products */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Featured Products</h2>
              <Link href="/vt-admin/dashboard/products" className="text-sm text-blue-600 hover:underline font-medium">
                Manage All →
              </Link>
            </div>
            <div className="space-y-3">
              {featuredProducts.map((product) => (
                <div key={product.id} className="flex items-center gap-4 py-2 border-b last:border-0">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded-lg border"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 text-sm truncate">{product.name}</p>
                    <p className="text-xs text-gray-500">{product.brand} • {CATEGORIES.find(c => c.id === product.categoryId)?.nameEn}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-blue-700">₹{product.price?.toLocaleString()}</p>
                    {product.discount && (
                      <p className="text-xs text-green-600 font-medium">{product.discount}% off</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category Summary */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Categories</h2>
            <div className="space-y-3">
              {CATEGORIES.map((cat) => {
                const count = PRODUCTS.filter(p => p.categoryId === cat.id).length;
                return (
                  <div key={cat.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{cat.icon}</span>
                      <span className="text-sm font-medium text-gray-700 truncate max-w-[120px]">{cat.nameEn}</span>
                    </div>
                    <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-bold">
                      {count} items
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/vt-admin/dashboard/products"
              className="p-4 bg-blue-50 rounded-xl text-center hover:bg-blue-100 transition-colors border border-blue-100 group">
              <Package className="w-6 h-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-blue-900">Manage Products</span>
              <p className="text-xs text-blue-500 mt-1">{PRODUCTS.length} total</p>
            </Link>
            <Link href="/vt-admin/dashboard/services"
              className="p-4 bg-green-50 rounded-xl text-center hover:bg-green-100 transition-colors border border-green-100 group">
              <Wrench className="w-6 h-6 text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-green-900">Manage Services</span>
              <p className="text-xs text-green-500 mt-1">{SERVICES.length} active</p>
            </Link>
            <Link href="/vt-admin/dashboard/bookings"
              className="p-4 bg-purple-50 rounded-xl text-center hover:bg-purple-100 transition-colors border border-purple-100 group">
              <Calendar className="w-6 h-6 text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-purple-900">View Bookings</span>
              <p className="text-xs text-purple-500 mt-1">Repair requests</p>
            </Link>
            <Link href="/vt-admin/dashboard/enquiries"
              className="p-4 bg-orange-50 rounded-xl text-center hover:bg-orange-100 transition-colors border border-orange-100 group">
              <MessageSquare className="w-6 h-6 text-orange-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-orange-900">Enquiries</span>
              <p className="text-xs text-orange-500 mt-1">Customer messages</p>
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white">
          <h2 className="text-lg font-bold mb-3">Shop Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 opacity-80" />
              <div>
                <p className="font-semibold">मेश सारण (जयसंगसर)</p>
                <p className="text-blue-200 text-sm">9928330252 | 6350211515</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 opacity-80" />
              <div>
                <p className="font-semibold">पप्पूराम सारण (गोमटिया)</p>
                <p className="text-blue-200 text-sm">6350211515 | 6350211515</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
