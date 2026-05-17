// ============ Mock Types (no Prisma dependency) ============

// Basic types for the application
export interface Admin {
  id: string;
  email: string;
  name: string;
  role: string;
  createdAt: Date;
}

export interface Category {
  id: string;
  name: string;
  nameEn: string;
  slug: string;
  icon: string;
  imageUrl?: string;
  description?: string;
  sortOrder: number;
  isActive: boolean;
  createdAt: Date;
}

export interface Product {
  id: string;
  name: string;
  nameHi: string;
  slug: string;
  description?: string;
  descriptionHi?: string;
  price?: number;
  mrp?: number;
  discount?: number;
  images: string[];
  brand?: string;
  model?: string;
  inStock: boolean;
  isWholesale: boolean;
  isFeatured: boolean;
  isActive: boolean;
  rating: number;
  reviewCount: number;
  categoryId: string;
  tags: string[];
  specifications?: Record<string, string>;
  createdAt: Date;
}

export interface Service {
  id: string;
  name: string;
  nameHi: string;
  slug: string;
  description?: string;
  descriptionHi?: string;
  price?: number;
  duration?: string;
  imageUrl?: string;
  icon?: string;
  isActive: boolean;
  isFeatured: boolean;
  categoryId?: string;
  createdAt: Date;
}

export interface Booking {
  id: string;
  bookingNo: string;
  customerName: string;
  phone: string;
  address?: string;
  serviceId: string;
  deviceBrand?: string;
  deviceModel?: string;
  issueDesc: string;
  preferredDate?: Date;
  status: string;
  adminNotes?: string;
  estimatedCost?: number;
  createdAt: Date;
}

export interface Enquiry {
  id: string;
  name: string;
  phone: string;
  email?: string;
  message: string;
  source?: string;
  isRead: boolean;
  createdAt: Date;
}

export interface Testimonial {
  id: string;
  name: string;
  location?: string;
  review: string;
  reviewHi?: string;
  rating: number;
  imageUrl?: string;
  isActive: boolean;
  isFeatured: boolean;
  createdAt: Date;
}

export interface Banner {
  id: string;
  title: string;
  titleHi?: string;
  subtitle?: string;
  imageUrl: string;
  link?: string;
  isActive: boolean;
  sortOrder: number;
  expiresAt?: Date;
  createdAt: Date;
}

export interface GalleryImage {
  id: string;
  imageUrl: string;
  caption?: string;
  captionHi?: string;
  category?: string;
  isActive: boolean;
  createdAt: Date;
}

export interface SiteSetting {
  id: string;
  key: string;
  value: string;
  updatedAt: Date;
}

// ============ Custom Types ============

export interface CategoryWithRelations extends Category {
  products?: Product[];
  services?: Service[];
}

export interface ProductWithCategory extends Product {
  category?: Category;
}

export interface ServiceWithBookings extends Service {
  category?: Category | null;
  bookings?: Booking[];
}

export interface BookingWithService extends Booking {
  service?: Service;
}

export interface BannerWithExpiry extends Banner {
  isExpired?: boolean;
}

// ============ UI Types ============

export interface NavItem {
  label: string;
  labelHi: string;
  href: string;
  children?: NavItem[];
}

export interface ServiceCardProps {
  service: Service;
  onBooking?: (serviceId: string) => void;
}

export interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
  onEnquiry?: (productId: string) => void;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
}

export interface StatsCounterProps {
  value: number;
  label: string;
  labelHi: string;
  suffix?: string;
  duration?: number;
}

export interface BookingFormProps {
  services: Service[];
  onSubmit: (data: any) => Promise<void>;
}

export interface ContactCardProps {
  name: string;
  nameEn: string;
  role: string;
  area: string;
  phones: string[];
  whatsappNumber: string;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  title: string;
  message?: string;
}

// ============ API Response Types ============

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// ============ Admin Types ============

export interface AdminSession {
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
  };
  expires: string;
}

export interface DashboardStats {
  totalBookings: number;
  pendingBookings: number;
  totalEnquiries: number;
  unreadEnquiries: number;
  totalProducts: number;
  totalServices: number;
}

export interface RecentBooking extends BookingWithService {
  createdAtDate: string;
}

export interface RecentEnquiry extends Enquiry {
  createdAtDate: string;
}

// ============ Form Types ============

export interface BookingFormData {
  customerName: string;
  phone: string;
  address?: string;
  serviceId: string;
  deviceBrand?: string;
  deviceModel?: string;
  issueDesc: string;
  preferredDate?: string;
}

export interface EnquiryFormData {
  name: string;
  phone: string;
  email?: string;
  message: string;
  source?: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  message: string;
}

// ============ Filter Types ============

export interface ProductFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  isFeatured?: boolean;
  brand?: string;
  search?: string;
}

export interface ServiceFilters {
  category?: string;
  minPrice?: number;
  isFeatured?: boolean;
  search?: string;
}

export interface BookingFilters {
  status?: string;
  startDate?: string;
  endDate?: string;
  serviceId?: string;
  search?: string;
}

// ============ Theme Types ============

export type ThemeMode = 'light' | 'dark';

export interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
}

// ============ Cart Types ============

export interface CartItem {
  productId: string;
  quantity: number;
  price: number;
  name: string;
}

export interface WishlistItem {
  productId: string;
  addedAt: Date;
}