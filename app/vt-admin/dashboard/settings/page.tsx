'use client';

import { useState } from 'react';
import { Save, Settings, Building, Phone, Clock, Globe } from 'lucide-react';
import AdminLayout from '@/app/vt-admin/layout';

export default function SettingsAdminPage() {
  const [settings, setSettings] = useState({
    shopName: 'वीर तेजा इलेक्ट्रॉनिक & रिपेयरिंग सेंटर',
    shopNameEn: 'Veer Teja Electronic & Repairing Center',
    tagline: 'हर इलेक्ट्रॉनिक की मरम्मत, एक ही छत के नीचे',
    taglineEn: 'All electronics repair under one roof',
    address: 'जयसंगसर & गोमटिया, Rajasthan, India',
    phone1: '9928330252',
    phone2: '6350211515',
    phone3: '6350211515',
    phone4: '6350211515',
    whatsapp1: '919928330252',
    whatsapp2: '916350211515',
    mondayOpen: '9:00 AM',
    mondayClose: '8:00 PM',
    sundayOpen: '10:00 AM',
    sundayClose: '5:00 PM',
    metaTitle: 'वीर तेजा इलेक्ट्रॉनिक & रिपेयरिंग सेंटर | Cooler Fan Fridge Repair Rajasthan',
    metaDescription: 'वीर तेजा इलेक्ट्रॉनिक सेंटर में कूलर, पंखा, फ्रिज, वाशिंग मशीन, इन्वेर्टर की मरम्मत और बिक्री। थोक और खुदरा सामान उपलब्ध।',
    metaKeywords: 'cooler repair, fan repair, fridge repair, inverter, electronics shop, rajasthan',
  });

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <AdminLayout>
      <div>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
          >
            <Save className="w-5 h-5" />
            Save Changes
          </button>
        </div>

        {saved && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
            Settings saved successfully!
          </div>
        )}

        <div className="space-y-6">
          {/* Shop Info */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Building className="w-5 h-5 text-primary" />
              Shop Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Shop Name (Hindi)</label>
                <input
                  type="text"
                  value={settings.shopName}
                  onChange={(e) => setSettings({ ...settings, shopName: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Shop Name (English)</label>
                <input
                  type="text"
                  value={settings.shopNameEn}
                  onChange={(e) => setSettings({ ...settings, shopNameEn: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Tagline (Hindi)</label>
                <input
                  type="text"
                  value={settings.tagline}
                  onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <input
                  type="text"
                  value={settings.address}
                  onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>
            </div>
          </div>

          {/* Contact Numbers */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              Contact Numbers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone 1 (मेश सारण)</label>
                <input
                  type="tel"
                  value={settings.phone1}
                  onChange={(e) => setSettings({ ...settings, phone1: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone 2</label>
                <input
                  type="tel"
                  value={settings.phone2}
                  onChange={(e) => setSettings({ ...settings, phone2: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone 3 (पप्पूराम सारण)</label>
                <input
                  type="tel"
                  value={settings.phone3}
                  onChange={(e) => setSettings({ ...settings, phone3: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone 4</label>
                <input
                  type="tel"
                  value={settings.phone4}
                  onChange={(e) => setSettings({ ...settings, phone4: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp 1</label>
                <input
                  type="text"
                  value={settings.whatsapp1}
                  onChange={(e) => setSettings({ ...settings, whatsapp1: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp 2</label>
                <input
                  type="text"
                  value={settings.whatsapp2}
                  onChange={(e) => setSettings({ ...settings, whatsapp2: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Business Hours
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Monday - Saturday Open</label>
                <input
                  type="text"
                  value={settings.mondayOpen}
                  onChange={(e) => setSettings({ ...settings, mondayOpen: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Monday - Saturday Close</label>
                <input
                  type="text"
                  value={settings.mondayClose}
                  onChange={(e) => setSettings({ ...settings, mondayClose: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sunday Open</label>
                <input
                  type="text"
                  value={settings.sundayOpen}
                  onChange={(e) => setSettings({ ...settings, sundayOpen: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sunday Close</label>
                <input
                  type="text"
                  value={settings.sundayClose}
                  onChange={(e) => setSettings({ ...settings, sundayClose: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>
            </div>
          </div>

          {/* SEO Settings */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              SEO Settings
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Meta Title</label>
                <input
                  type="text"
                  value={settings.metaTitle}
                  onChange={(e) => setSettings({ ...settings, metaTitle: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Meta Description</label>
                <textarea
                  value={settings.metaDescription}
                  onChange={(e) => setSettings({ ...settings, metaDescription: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Meta Keywords</label>
                <input
                  type="text"
                  value={settings.metaKeywords}
                  onChange={(e) => setSettings({ ...settings, metaKeywords: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}