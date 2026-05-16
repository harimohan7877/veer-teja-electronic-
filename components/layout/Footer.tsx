import Link from 'next/link';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { CONTACTS } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Logo & About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">⚡</span>
              <div>
                <h3 className="text-xl font-bold text-orange-500 hindi-text">
                  वीर तेजा इलेक्ट्रॉनिक
                </h3>
                <p className="text-sm text-gray-400">Veer Teja Electronics</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 hindi-text">
              हर इलेक्ट्रॉनिक की मरम्मत, एक ही छत के नीचे
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/919928330252"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['होम', 'उत्पाद', 'सेवाएं', 'गैलरी', 'बारे में', 'संपर्क'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item === 'होम' ? '' : item === 'उत्पाद' ? 'products' : item === 'सेवाएं' ? 'services' : item === 'गैलरी' ? 'gallery' : item === 'बारे में' ? 'about' : 'contact'}`}
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">हमारी सेवाएं</h4>
            <ul className="space-y-2">
              {['कूलर मरम्मत', 'पंखा मरम्मत', 'फ्रिज मरम्मत', 'वाशिंग मशीन', 'इन्वेर्टर सर्विस', 'बैटरी रिप्लेसमेंट'].map((item) => (
                <li key={item}>
                  <span className="text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">संपर्क</h4>
            <div className="space-y-3">
              {/* Mesh Saran */}
              <div className="p-3 bg-gray-800 rounded-lg">
                <p className="font-medium text-orange-400 hindi-text">{CONTACTS.mesh.name}</p>
                <p className="text-sm text-gray-400">{CONTACTS.mesh.role} - {CONTACTS.mesh.area}</p>
                <div className="mt-2 flex flex-col gap-1">
                  {CONTACTS.mesh.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="text-sm text-gray-300 hover:text-white flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3" /> {phone}
                    </a>
                  ))}
                </div>
              </div>
              {/* Pappuram Saran */}
              <div className="p-3 bg-gray-800 rounded-lg">
                <p className="font-medium text-orange-400 hindi-text">{CONTACTS.pappuram.name}</p>
                <p className="text-sm text-gray-400">{CONTACTS.pappuram.role} - {CONTACTS.pappuram.area}</p>
                <div className="mt-2 flex flex-col gap-1">
                  {CONTACTS.pappuram.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="text-sm text-gray-300 hover:text-white flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3" /> {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} वीर तेजा इलेक्ट्रॉनिक सेंटर | All rights reserved
          </p>
          <p className="text-gray-400 text-sm">
            Made with ❤️ in Rajasthan
          </p>
        </div>
      </div>
    </footer>
  );
}