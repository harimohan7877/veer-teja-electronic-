import Link from 'next/link';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { CONTACTS } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1 - Logo & About */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <div>
                <h3 className="text-xl font-black text-accent hindi-text tracking-tight uppercase">
                  वीर तेजा
                </h3>
                <p className="text-[10px] text-white/50 font-bold uppercase tracking-[0.2em]">Electronics</p>
              </div>
            </Link>
            <p className="text-white/60 hindi-text leading-relaxed text-lg">
              हर इलेक्ट्रॉनिक की विश्वसनीय मरम्मत, <br />
              <span className="text-white font-bold">एक ही छत के नीचे।</span>
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/919928330252"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-whatsapp/10 border border-whatsapp/20 text-whatsapp rounded-xl flex items-center justify-center hover:bg-whatsapp hover:text-white transition-all shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="tel:9928330252"
                className="w-10 h-10 bg-secondary/10 border border-secondary/20 text-secondary rounded-xl flex items-center justify-center hover:bg-secondary hover:text-white transition-all shadow-lg"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white/40 mb-8">Navigation</h4>
            <ul className="grid grid-cols-1 gap-4">
              {[
                { label: 'होम', href: '/' },
                { label: 'उत्पाद', href: '/products' },
                { label: 'सेवाएं', href: '/services' },
                { label: 'गैलरी', href: '/gallery' },
                { label: 'बारे में', href: '/about' },
                { label: 'संपर्क', href: '/contact' }
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-accent transition-all flex items-center gap-2 group font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary scale-0 group-hover:scale-100 transition-transform"></span>
                    <span className="hindi-text">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Our Services */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white/40 mb-8">Specialties</h4>
            <ul className="grid grid-cols-1 gap-4">
              {['कूलर मरम्मत', 'पंखा मरम्मत', 'फ्रिज मरम्मत', 'वाशिंग मशीन', 'इन्वेर्टर सर्विस', 'बैटरी रिप्लेसमेंट'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/60 font-medium">
                  <div className="w-1 h-1 rounded-full bg-accent/30"></div>
                  <span className="hindi-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white/40 mb-8">Support Hub</h4>
            <div className="space-y-4">
              {/* Pappuram Saran */}
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-secondary/20 transition-all group">
                <p className="font-bold text-accent hindi-text text-lg mb-1">{CONTACTS.pappuram.name}</p>
                <p className="text-[11px] text-white/40 font-bold uppercase tracking-wider mb-3">
                  {CONTACTS.pappuram.role} • {CONTACTS.pappuram.area}
                </p>
                <div className="flex flex-col gap-2">
                  {CONTACTS.pappuram.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="text-sm text-white/70 hover:text-white flex items-center gap-2 transition-colors font-semibold"
                    >
                      <Phone className="w-3.5 h-3.5 text-secondary" /> {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-white/40 text-[11px] font-bold uppercase tracking-[0.2em]">
              © {currentYear} Veer Teja Electronics
            </p>
            <p className="text-white/20 text-[10px] font-medium">
              Professional Electronic Repair & Retail Center
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
              <span className="text-[10px] text-white/40 font-bold uppercase tracking-wider">System Online</span>
            </div>
            <p className="text-white/40 text-[11px] font-bold">
              MADE WITH <span className="text-danger mx-1">❤</span> IN RAJASTHAN
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}