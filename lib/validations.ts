import { z } from 'zod';

// ============ Booking Form Validation ============
export const bookingSchema = z.object({
  customerName: z.string().min(2, 'नाम कम से कम 2 अक्षर का होना चाहिए'),
  phone: z.string()
    .min(10, 'सही फोन नंबर दर्ज करें')
    .regex(/^[6-9]\d{9}$/, 'सही फोन नंबर दर्ज करें'),
  address: z.string().optional(),
  serviceId: z.string().min(1, 'सेवा चुनें'),
  deviceBrand: z.string().optional(),
  deviceModel: z.string().optional(),
  issueDesc: z.string().min(10, 'समस्या कम से कम 10 अक्षर की हो'),
  preferredDate: z.string().optional(),
});

// ============ Contact/Enquiry Form Validation ============
export const enquirySchema = z.object({
  name: z.string().min(2, 'नाम कम से कम 2 अक्षर का होना चाहिए'),
  phone: z.string()
    .min(10, 'सही फोन नंबर दर्ज करें')
    .regex(/^[6-9]\d{9}$/, 'सही फोन नंबर दर्ज करें'),
  email: z.string().email('सही ईमेल दर्ज करें').optional().or(z.literal('')),
  message: z.string().min(10, 'संदेश कम से कम 10 अक्षर का होना चाहिए'),
});

// ============ Admin Login Validation ============
export const loginSchema = z.object({
  email: z.string().email('सही ईमेल दर्ज करें'),
  password: z.string().min(6, 'पासवर्ड कम से कम 6 अक्षर का होना चाहिए'),
});

// ============ Product Validation ============
export const productSchema = z.object({
  name: z.string().min(2, 'नाम कम से कम 2 अक्षर का होना चाहिए'),
  nameHi: z.string().min(2, 'Hindi नाम आवश्यक है'),
  slug: z.string().min(2, 'Slug आवश्यक है'),
  description: z.string().optional(),
  descriptionHi: z.string().optional(),
  price: z.number().positive('कीमत सकारात्मक होनी चाहिए').optional(),
  mrp: z.number().positive().optional(),
  discount: z.number().min(0).max(100).optional(),
  images: z.string().optional(),
  brand: z.string().optional(),
  model: z.string().optional(),
  inStock: z.boolean().default(true),
  isWholesale: z.boolean().default(false),
  isFeatured: z.boolean().default(false),
  isActive: z.boolean().default(true),
  categoryId: z.string().min(1, 'Category आवश्यक है'),
  tags: z.string().optional(),
  specifications: z.string().optional(),
});

// ============ Service Validation ============
export const serviceSchema = z.object({
  name: z.string().min(2, 'नाम कम से कम 2 अक्षर का होना चाहिए'),
  nameHi: z.string().min(2, 'Hindi नाम आवश्यक है'),
  slug: z.string().min(2, 'Slug आवश्यक है'),
  description: z.string().optional(),
  descriptionHi: z.string().optional(),
  price: z.number().positive().optional(),
  duration: z.string().optional(),
  imageUrl: z.string().url().optional().or(z.literal('')),
  icon: z.string().optional(),
  isActive: z.boolean().default(true),
  isFeatured: z.boolean().default(false),
  categoryId: z.string().optional(),
});

// ============ Banner Validation ============
export const bannerSchema = z.object({
  title: z.string().min(2, 'टाइटल आवश्यक है'),
  titleHi: z.string().optional(),
  subtitle: z.string().optional(),
  imageUrl: z.string().url('सही URL दर्ज करें'),
  link: z.string().optional(),
  isActive: z.boolean().default(true),
  sortOrder: z.number().int().default(0),
  expiresAt: z.string().optional(),
});

// ============ Testimonial Validation ============
export const testimonialSchema = z.object({
  name: z.string().min(2, 'नाम आवश्यक है'),
  location: z.string().optional(),
  review: z.string().min(10, 'समीक्षा कम से कम 10 अक्षर की हो'),
  reviewHi: z.string().optional(),
  rating: z.number().int().min(1).max(5).default(5),
  imageUrl: z.string().url().optional().or(z.literal('')),
  isActive: z.boolean().default(true),
  isFeatured: z.boolean().default(false),
});

// ============ Type Exports ============
export type BookingFormData = z.infer<typeof bookingSchema>;
export type EnquiryFormData = z.infer<typeof enquirySchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
export type ProductFormData = z.infer<typeof productSchema>;
export type ServiceFormData = z.infer<typeof serviceSchema>;
export type BannerFormData = z.infer<typeof bannerSchema>;
export type TestimonialFormData = z.infer<typeof testimonialSchema>;