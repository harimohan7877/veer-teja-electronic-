// ========================================
// Mock Data - Real Electronics Images
// ========================================

export const CATEGORIES = [
  { id: '1', name: 'कूलर & AC', nameEn: 'Air Cooler & AC', slug: 'cooler-ac', icon: '❄️', imageUrl: 'https://images.unsplash.com/photo-1631545729918-48bc1665cb00?w=800&q=80' },
  { id: '2', name: 'पंखा', nameEn: 'Fan', slug: 'fan', icon: '🌀', imageUrl: 'https://images.unsplash.com/photo-1618939637303-34e2f9d658ca?w=800&q=80' },
  { id: '3', name: 'फ्रिज', nameEn: 'Refrigerator', slug: 'fridge', icon: '🧊', imageUrl: 'https://images.unsplash.com/photo-1571175432248-5210b1df9942?w=800&q=80' },
  { id: '4', name: 'वाशिंग मशीन', nameEn: 'Washing Machine', slug: 'washing-machine', icon: '🧺', imageUrl: 'https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?w=800&q=80' },
  { id: '5', name: 'इन्वेर्टर & बैटरी', nameEn: 'Inverter & Battery', slug: 'inverter-battery', icon: '🔋', imageUrl: 'https://images.unsplash.com/photo-1617469165786-8007eda3caa7?w=800&q=80' },
  { id: '6', name: 'लाईट फिटिंग', nameEn: 'Light & Bulbs', slug: 'light-fitting', icon: '💡', imageUrl: 'https://images.unsplash.com/photo-1550985616-10810253b84d?w=800&q=80' },
  { id: '7', name: 'पानी फिटिंग', nameEn: 'Plumbing', slug: 'water-fitting', icon: '🚰', imageUrl: 'https://images.unsplash.com/photo-1581244276894-0f7358797f7f?w=800&q=80' },
  { id: '8', name: 'टीवी & मीडिया', nameEn: 'TV & Media', slug: 'tv-media', icon: '📺', imageUrl: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80' },
];

export const SERVICES = [
  { id: '1', name: 'Cooler Repair', nameHi: 'कूलर मरम्मत', slug: 'cooler-repair', price: 299, duration: 'Same Day', icon: '❄️', description: 'Professional air cooler repair & service', descriptionHi: 'प्रोफेशनल एयर कूलर मरम्मत और सर्विस', isFeatured: true, imageUrl: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80' },
  { id: '2', name: 'Fan Repair', nameHi: 'पंखा मरम्मत', slug: 'fan-repair', price: 199, duration: 'Same Day', icon: '🌀', description: 'Ceiling, table & exhaust fan repair', descriptionHi: 'सीलिंग, टेबल और एक्सॉस्ट पंखा मरम्मत', isFeatured: true, imageUrl: 'https://images.unsplash.com/photo-1591181520189-adcb0735c85a?w=800&q=80' },
  { id: '3', name: 'Refrigerator Repair', nameHi: 'फ्रिज मरम्मत', slug: 'fridge-repair', price: 399, duration: '1-2 Days', icon: '🧊', description: 'All brands refrigerator repair', descriptionHi: 'सभी ब्रांड फ्रिज मरम्मत', isFeatured: true, imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80' },
  { id: '4', name: 'Washing Machine Repair', nameHi: 'वाशिंग मशीन मरम्मत', slug: 'washing-machine-repair', price: 499, duration: '1-2 Days', icon: '🧺', description: 'Front load & top load washing machine', descriptionHi: 'फ्रंट लोड और टॉप लोड वाशिंग मशीन', isFeatured: true, imageUrl: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=800&q=80' },
  { id: '5', name: 'Inverter Service', nameHi: 'इन्वेर्टर सर्विस', slug: 'inverter-service', price: 349, duration: 'Same Day', icon: '🔋', description: 'Inverter repair & service', descriptionHi: 'इन्वेर्टर मरम्मत और सर्विस', isFeatured: true, imageUrl: 'https://images.unsplash.com/photo-1621905252507-b35492ac74e4?w=800&q=80' },
  { id: '6', name: 'LED TV Repair', nameHi: 'LED टीवी मरम्मत', slug: 'led-tv-repair', price: 599, duration: '2-3 Days', icon: '📺', description: 'LED & Smart TV repair', descriptionHi: 'LED और स्मार्ट टीवी मरम्मत', imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80' },
  { id: '7', name: 'Geyser Repair', nameHi: 'गीजर मरम्मत', slug: 'geyser-repair', price: 399, duration: 'Same Day', icon: '🚿', description: 'Water heater repair & service', descriptionHi: 'वाटर हीटर मरम्मत और सर्विस', imageUrl: 'https://images.unsplash.com/photo-1626242403666-419106093630?w=800&q=80' },
  { id: '8', name: 'Microwave Repair', nameHi: 'माइक्रोवेव मरम्मत', slug: 'microwave-repair', price: 349, duration: 'Same Day', icon: '🍽️', description: 'Microwave oven repair', descriptionHi: 'माइक्रोवेव ओवन मरम्मत', imageUrl: 'https://images.unsplash.com/photo-1585771724684-38269d7239d4?w=800&q=80' },
];

export const PRODUCTS = [
  { id: '1', name: 'Luminous Inverter 1KVA', nameHi: 'लुमिनस इन्वेर्टर 1KVA', slug: 'luminous-inverter-1kva', price: 8500, mrp: 9500, discount: 10, brand: 'Luminous', categoryId: '5', isFeatured: true, isBestSeller: true, inStock: true, rating: 4.5, reviewCount: 245, images: ['https://images.unsplash.com/photo-1621905252507-b35492ac74e4?w=800&q=80'] },
  { id: '2', name: 'Luminous Battery 150Ah', nameHi: 'लुमिनस बैटरी 150Ah', slug: 'luminous-battery-150ah', price: 12500, mrp: 14000, discount: 10, brand: 'Luminous', categoryId: '5', isFeatured: true, inStock: true, rating: 4.7, reviewCount: 189, images: ['https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80'] },
  { id: '3', name: 'Exide Battery 100Ah', nameHi: 'एक्साइड बैटरी 100Ah', slug: 'exide-battery-100ah', price: 8500, mrp: 9500, discount: 10, brand: 'Exide', categoryId: '5', inStock: true, rating: 4.3, reviewCount: 156, images: ['https://images.unsplash.com/photo-1619641805618-7c207c0d9e1c?w=800&q=80'] },
  { id: '4', name: 'Havells Ceiling Fan 1200mm', nameHi: 'हैवल्स सीलिंग फैन', slug: 'havells-ceiling-fan', price: 2200, mrp: 2800, discount: 21, brand: 'Havells', categoryId: '2', isFeatured: true, isBestSeller: true, inStock: true, rating: 4.4, reviewCount: 389, images: ['https://images.unsplash.com/photo-1618939637303-34e2f9d658ca?w=800&q=80'] },
  { id: '5', name: 'Crompton Fan 48 inch', nameHi: 'क्रॉम्प्टन फैन 48 इंच', slug: 'crompton-fan-48', price: 1800, mrp: 2200, discount: 18, brand: 'Crompton', categoryId: '2', inStock: true, rating: 4.2, reviewCount: 267, images: ['https://images.unsplash.com/photo-1591181520189-adcb0735c85a?w=800&q=80'] },
  { id: '6', name: 'Whirlpool 190L Refrigerator', nameHi: 'व्हर्लपूल फ्रिज 190L', slug: 'whirlpool-fridge-190l', price: 14500, mrp: 18500, discount: 21, brand: 'Whirlpool', categoryId: '3', isFeatured: true, inStock: true, rating: 4.5, reviewCount: 423, images: ['https://images.unsplash.com/photo-1571175432248-5210b1df9942?w=800&q=80'] },
  { id: '7', name: 'Samsung 7kg Washing Machine', nameHi: 'सैमसंग 7kg वाशिंग मशीन', slug: 'samsung-washing-machine', price: 18900, mrp: 24500, discount: 22, brand: 'Samsung', categoryId: '4', isFeatured: true, isBestSeller: true, inStock: true, rating: 4.6, reviewCount: 312, images: ['https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?w=800&q=80'] },
  { id: '8', name: 'LG 185L Refrigerator', nameHi: 'LG फ्रिज 185L', slug: 'lg-fridge-185l', price: 16500, mrp: 21000, discount: 21, brand: 'LG', categoryId: '3', inStock: true, rating: 4.4, reviewCount: 198, images: ['https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80'] },
  { id: '9', name: 'Bajaj Air Cooler 50L', nameHi: 'बजाज कूलर 50L', slug: 'bajaj-cooler-50l', price: 7500, mrp: 9500, discount: 21, brand: 'Bajaj', categoryId: '1', inStock: true, rating: 4.1, reviewCount: 145, images: ['https://images.unsplash.com/photo-1631545729918-48bc1665cb00?w=800&q=80'] },
  { id: '10', name: 'Philips LED Bulb 12W', nameHi: 'फिलिप्स LED बल्ब 12W', slug: 'philips-led-bulb', price: 149, mrp: 199, discount: 25, brand: 'Philips', categoryId: '6', isWholesale: true, inStock: true, rating: 4.5, reviewCount: 892, images: ['https://images.unsplash.com/photo-1550985616-10810253b84d?w=800&q=80'] },
  { id: '11', name: 'Syska LED Tube 20W', nameHi: 'सिस्का LED ट्यूब 20W', slug: 'syska-led-tube', price: 249, mrp: 399, discount: 37, brand: 'Syska', categoryId: '6', isWholesale: true, inStock: true, rating: 4.2, reviewCount: 567, images: ['https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=800&q=80'] },
  { id: '12', name: 'Sony LED TV 32 inch', nameHi: 'सोनी LED टीवी 32 इंच', slug: 'sony-led-tv-32', price: 18900, mrp: 25000, discount: 24, brand: 'Sony', categoryId: '8', isFeatured: true, inStock: true, rating: 4.7, reviewCount: 234, images: ['https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80'] },
];

export const TESTIMONIALS = [
  { id: '1', name: 'रामचंद्र जी', location: 'जयसंगसर', review: 'Excellent service! My cooler was fixed within hours. Very professional team.', reviewHi: 'बहुत अच्छी सेवा! मेरा कूलर कुछ ही घंटों में ठीक हो गया। बहुत प्रोफेशनल टीम।', rating: 5, imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
  { id: '2', name: 'सुनीता देवी', location: 'गोमटिया', review: 'Affordable prices and great quality work. My fan works like new now!', reviewHi: 'सस्ती कीमत और बढ़िया काम। मेरा पंखा अब नया जैसा काम करता है!', rating: 5, imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face' },
  { id: '3', name: 'मोहन लाल', location: 'सरदारशहर', review: 'Best inverter service in the area. Highly recommended!', reviewHi: 'इस इलाके में सबसे अच्छी इन्वेर्टर सेवा। जरूर सुझाऊंगा!', rating: 5, imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face' },
  { id: '4', name: 'पूजा शर्मा', location: 'राजस्थान', review: 'Quick turnaround for washing machine repair. Very satisfied with the service.', reviewHi: 'वाशिंग मशीन मरम्मत में जल्दी सेवा। सेवा से बहुत संतुष्ट।', rating: 4, imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
  { id: '5', name: 'राजेश कुमार', location: 'जयपुर', review: 'Great deals on wholesale electronics. Best prices in town!', reviewHi: 'थोक इलेक्ट्रॉनिक्स में बढ़िया डील। शहर में सबसे अच्छी कीमतें!', rating: 5, imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
];

export const BANNERS = [
  { id: '1', title: 'Repair Services', titleHi: 'मरम्मत सेवाएं', subtitle: 'कूलर • पंखा • फ्रिज • वाशिंग मशीन • इन्वेर्टर', imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&h=800&fit=crop', link: '/services', sortOrder: 1 },
  { id: '2', title: 'Sale on Inverters', titleHi: 'इन्वेर्टर पर बिक्री', subtitle: 'बड़ी बचत • सभी ब्रांड • थोक दरें', imageUrl: 'https://images.unsplash.com/photo-1621905252507-b35492ac74e4?w=1920&h=800&fit=crop', link: '/products?category=inverter-battery', sortOrder: 2 },
  { id: '3', title: 'Home Appliances', titleHi: 'घरेलू उपकरण', subtitle: 'फ्रिज, वाशिंग मशीन और बहुत कुछ', imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1920&h=800&fit=crop', link: '/products', sortOrder: 3 },
  { id: '4', title: 'Expert Repair', titleHi: 'विशेषज्ञ मरम्मत', subtitle: 'अनुभवी कारीगरों द्वारा तुरंत सेवा', imageUrl: 'https://images.unsplash.com/photo-1558227691-41ea78a1f631?w=1920&h=800&fit=crop', link: '/services', sortOrder: 4 },
];

export const BRANDS = [
  { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
  { name: 'LG', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/LG_logo.svg' },
  { name: 'Whirlpool', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Whirlpool_Logo.svg' },
  { name: 'Havells', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Havells_Logo.svg' },
  { name: 'Bajaj', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Bajaj_Auto_logo.svg' },
  { name: 'Crompton', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Crompton_Greaves_logo.svg' },
  { name: 'Luminous', logo: 'https://via.placeholder.com/100x40?text=Luminous' },
  { name: 'Exide', logo: 'https://via.placeholder.com/100x40?text=Exide' },
  { name: 'Amaron', logo: 'https://via.placeholder.com/100x40?text=Amaron' },
  { name: 'Sony', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Sony_logo.svg' },
  { name: 'Philips', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Philips_logo.svg' },
  { name: 'Syska', logo: 'https://via.placeholder.com/100x40?text=Syska' },
];

export const CONTACTS = {
  mesh: {
    name: 'मेश सारण',
    nameEn: 'Mesh Saran',
    role: 'Electrician',
    area: 'जयसंगसर वाले',
    phones: ['9928330252', '9929124331'],
    whatsapp: '919928330252',
  },
  pappuram: {
    name: 'पप्पूराम सारण',
    nameEn: 'Pappuram Saran',
    role: 'Shop Owner',
    area: 'गोमटिया वाले',
    phones: ['6350211515', '8955293732'],
    whatsapp: '916350211515',
  },
};

export const MARQUEE_MESSAGES = [
  '🔥 स्पेशल ऑफर: इन्वेर्टर बैटरी पर 15% छूट',
  '📦 थोक में खरीदें, ज्यादा बचाएं',
  '⚡ फ्री इंस्टॉलेशन: सभी इन्वेर्टर खरीद पर',
  '🛠️ घर पर सर्विस: कॉल करें 9928330252',
  '⭐ 20+ साल का भरोसा - हजारों संतुष्ट ग्राहक',
];

export const STATS = {
  customers: 5000,
  years: 20,
  services: 12,
  brands: 100,
};

// Real electronics images from Unsplash
export const REAL_IMAGES = {
  hero: [
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=800&fit=crop',
    'https://images.unsplash.com/photo-1621905252507-b35492ac74e4?w=1920&h=800&fit=crop',
    'https://images.unsplash.com/photo-1585771724684-38269d7239d4?w=1920&h=800&fit=crop',
  ],
  repair: 'https://images.unsplash.com/photo-1585771724684-38269d7239d4?w=800&h=600&fit=crop',
  shop: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
  team: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=600&fit=crop',
};