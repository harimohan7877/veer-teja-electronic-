import type { Admin, Category, Product, Service, Booking, Enquiry, Testimonial, Banner, GalleryImage, SiteSetting } from '@prisma/client';

// Extend Prisma types with custom fields
export type { Admin, Category, Product, Service, Booking, Enquiry, Testimonial, Banner, GalleryImage, SiteSetting };

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