// ========================================
// Veer Teja Electronics - Constants
// ========================================

// Shop Contact Information
export const SHOP_PHONES = {
  pappuram: {
    name: 'पप्पूराम सारण',
    nameEn: 'Pappuram Saran',
    role: 'Shop Owner',
    area: 'वीर तेजा इलेक्ट्रॉनिक्स',
    phones: ['6350211515', '9928330252'],
  },
};

export const WHATSAPP_NUMBER = '919928330252';

// WhatsApp message templates
export const WHATSAPP_MESSAGES = {
  booking: (name: string, phone: string, service: string, issue: string) =>
    encodeURIComponent(
      `🔔 *नई बुकिंग आई है!*\n\n👤 नाम: ${name}\n📞 फोन: ${phone}\n🔧 सेवा: ${service}\n📝 समस्या: ${issue}\n\nकृपया जल्दी संपर्क करें!`
    ),
  enquiry: (name: string, phone: string, message: string) =>
    encodeURIComponent(
      `📨 *नई पूछताछ*\n\n👤 ${name}\n📞 ${phone}\n💬 ${message}`
    ),
  general: encodeURIComponent('नमस्ते! मुझे अपने इलेक्ट्रॉनिक सामान की मरम्मत करवानी है। क्या आप उपलब्ध हैं?'),
};

// Working Hours
export const WORKING_HOURS = {
  weekday: { open: '9:00 AM', close: '8:00 PM' },
  weekend: { open: '10:00 AM', close: '5:00 PM' },
};

// SEO Configuration
export const SEO_CONFIG = {
  title: {
    default: 'वीर तेजा इलेक्ट्रॉनिक & रिपेयरिंग सेंटर | Cooler Fan Fridge Repair Rajasthan',
    template: '%s | वीर तेजा इलेक्ट्रॉनिक',
  },
  description: 'वीर तेजा इलेक्ट्रॉनिक सेंटर में कूलर, पंखा, फ्रिज, वाशिंग मशीन, इन्वेर्टर की मरम्मत और बिक्री। Cooler Fan Fridge Washing Machine Inverter Repair in Rajasthan. थोक और खुदरा सामान उपलब्ध।',
  keywords: ['cooler repair rajasthan', 'पंखा मरम्मत', 'fridge repair', 'inverter battery', 'electronics shop rajasthan', 'वीर तेजा', 'washing machine repair'],
  siteName: 'वीर तेजा इलेक्ट्रॉनिक',
  locale: 'hi_IN',
};

// Design System Colors
export const COLORS = {
  primary: '#E65100',
  primaryLight: '#FF8F00',
  primaryDark: '#BF360C',
  secondary: '#1A237E',
  accent: '#FFD600',
  danger: '#8B0000',
  success: '#2E7D32',
  bgLight: '#FFF8F0',
  bgDark: '#0D0D0D',
  cardLight: '#FFFFFF',
  cardDark: '#1A1A2E',
  textPrimary: '#1A1A1A',
  textSecondary: '#5C5C5C',
  border: '#E0D8CC',
};

// Service Categories
export const REPAIR_SERVICES = [
  'कूलर मरम्मत',
  'पंखा मरम्मत',
  'फ्रिज मरम्मत',
  'वाशिंग मशीन',
  'चक्की मरम्मत',
  'मधानी मरम्मत',
  'प्रेस मरम्मत',
  'गैस चुल्हा',
  'इन्वेर्टर सर्विस',
  'बैटरी रिप्लेसमेंट',
  'पानी पम्प मरम्मत',
  'मोटर वाइंडिंग',
];

export const PRODUCT_CATEGORIES = [
  'इन्वेर्टर & बैटरी',
  'पानी फिटिंग सामान',
  'लाईट फिटिंग सामान',
  'सभी प्रकार के इलेक्ट्रॉनिक सामान',
];

// Admin Credentials (default - should be changed)
export const DEFAULT_ADMIN = {
  email: 'admin@veerteja.com',
  password: 'VeerTeja@2025',
  name: 'Admin',
  role: 'SUPER_ADMIN',
};

// Marquee Messages
export const MARQUEE_MESSAGES = [
  '🔥 ग्रीष्मकालीन ऑफर — कूलर सर्विस में 20% छूट',
  '📦 थोक में खरीदें, ज्यादा बचाएं',
  '⚡ इन्वेर्टर-बैटरी पर स्पेशल डील',
  '🛠️ घर पर आकर मरम्मत — Call 9928330252',
];

// Brand Logos (for marquee)
export const BRAND_LOGOS = [
  'Samsung', 'LG', 'Whirlpool', 'Havells', 'Bajaj', 'Crompton', 'Syska', 'Luminous',
  'Exide', 'Amaron', 'V-Guard', 'Orient', 'Usha', 'Anchor', 'Panasonic', 'Voltas',
];