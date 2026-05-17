// ========================================
// Database Client - Safe wrapper for Prisma
// ========================================

// This is a placeholder that will be replaced with real Prisma client
// when database is properly configured
export const prisma = {
  enquiry: {
    create: async (data: any) => ({ id: 'mock', ...data }),
    findMany: async () => [],
  },
  booking: {
    create: async (data: any) => ({ id: 'mock', ...data }),
    findMany: async () => [],
  },
  product: {
    create: async (data: any) => ({ id: 'mock', ...data }),
    findMany: async () => [],
    update: async (data: any) => ({ id: 'mock', ...data }),
    delete: async () => ({}),
  },
};

// Mock Prisma client for build time
export default prisma;