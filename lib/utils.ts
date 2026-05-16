import { type ClassValue, clsx } from 'clsx';

// Combine class names
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Format price in INR
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('hi-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

// Generate slug from string
export function generateSlug(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Get Unsplash image URL
export function getUnsplashImage(query: string, width = 800, height = 600): string {
  return `https://source.unsplash.com/${width}x${height}/?${encodeURIComponent(query)}`;
}

// Get default hero images
export function getHeroImages() {
  return [
    getUnsplashImage('electronics repair technician workshop', 1920, 600),
    getUnsplashImage('electronics store products LED lights', 1920, 600),
    getUnsplashImage('happy customer appliance repair india', 1920, 600),
  ];
}

// Get category images
export function getCategoryImages() {
  return {
    cooler: getUnsplashImage('air cooler appliance', 400, 300),
    fan: getUnsplashImage('ceiling fan white', 400, 300),
    fridge: getUnsplashImage('refrigerator modern', 400, 300),
    washing: getUnsplashImage('washing machine front load', 400, 300),
    inverter: getUnsplashImage('inverter battery home', 400, 300),
    light: getUnsplashImage('LED light bulb bright', 400, 300),
    plumbing: getUnsplashImage('water pipe fitting tools', 400, 300),
    tools: getUnsplashImage('electronic repair tools screwdriver', 400, 300),
  };
}

// Get service images
export function getServiceImages() {
  return {
    coolerRepair: getUnsplashImage('technician repairing air cooler', 400, 300),
    fanRepair: getUnsplashImage('electrician ceiling fan repair', 400, 300),
    fridgeRepair: getUnsplashImage('refrigerator repair technician', 400, 300),
    washingRepair: getUnsplashImage('washing machine repair service', 400, 300),
    grinder: getUnsplashImage('grinder flour mill motor repair', 400, 300),
    iron: getUnsplashImage('electric iron repair', 400, 300),
    gasStove: getUnsplashImage('gas stove repair burner', 400, 300),
    inverterRepair: getUnsplashImage('inverter repair service technician', 400, 300),
  };
}

// Format date for display
export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString('hi-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Format relative time (e.g., "2 hours ago")
export function formatRelativeTime(date: Date | string): string {
  const now = new Date();
  const d = new Date(date);
  const diffMs = now.getTime() - d.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 60) return `${diffMins} मिनट पहले`;
  if (diffHours < 24) return `${diffHours} घंटे पहले`;
  if (diffDays < 7) return `${diffDays} दिन पहले`;
  return formatDate(date);
}

// Validate phone number (Indian)
export function isValidIndianPhone(phone: string): boolean {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
}

// Parse JSON safely
export function safeJsonParse<T>(str: string | null | undefined, defaultValue: T): T {
  if (!str) return defaultValue;
  try {
    return JSON.parse(str) as T;
  } catch {
    return defaultValue;
  }
}

// Truncate text
export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}

// Generate booking number
export function generateBookingNo(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `VT-${timestamp}-${random}`;
}

// Status color mapping
export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    PENDING: 'yellow',
    CONFIRMED: 'blue',
    IN_PROGRESS: 'orange',
    COMPLETED: 'green',
    CANCELLED: 'red',
  };
  return colors[status] || 'gray';
}

// Status labels (Hindi)
export function getStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    PENDING: 'लंबित',
    CONFIRMED: 'पुष्टि',
    IN_PROGRESS: 'कार्यरत',
    COMPLETED: 'पूर्ण',
    CANCELLED: 'रद्द',
  };
  return labels[status] || status;
}