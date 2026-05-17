'use client';

import { Heart } from 'lucide-react';
import { useWishlistStore } from '@/lib/store';
import { Product } from '@/types';

interface WishlistButtonProps {
  product: Partial<Product> & { id: string };
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export default function WishlistButton({ product, size = 'md', showLabel = false }: WishlistButtonProps) {
  const { addItem, removeItem, isInWishlist } = useWishlistStore();
  const isWishlisted = isInWishlist(product.id);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isWishlisted) {
      removeItem(product.id);
    } else {
      // Add with defaults for required fields
      const fullProduct: Product = {
        id: product.id,
        name: product.name || '',
        nameHi: product.nameHi || '',
        slug: product.slug || '',
        price: product.price || 0,
        mrp: product.mrp,
        discount: product.discount,
        brand: product.brand || '',
        categoryId: product.categoryId || '',
        images: product.images || [],
        inStock: product.inStock ?? true,
        isFeatured: product.isFeatured ?? false,
        isWholesale: product.isWholesale ?? false,
        isActive: product.isActive ?? true,
        rating: product.rating ?? 0,
        reviewCount: product.reviewCount ?? 0,
        tags: product.tags || [],
        createdAt: product.createdAt || new Date(),
      };
      addItem(fullProduct);
    }
  };

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <button
      onClick={handleClick}
      className={`${sizeClasses[size]} rounded-full flex items-center justify-center transition-all ${
        isWishlisted
          ? 'bg-red-50 text-red-500 hover:bg-red-100'
          : 'bg-white text-gray-400 hover:text-red-500 shadow-md hover:shadow-lg'
      }`}
      title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      <Heart className={`${iconSizes[size]} ${isWishlisted ? 'fill-current' : ''}`} />
      {showLabel && (
        <span className="ml-2 text-sm font-medium">
          {isWishlisted ? 'Wishlisted' : 'Wishlist'}
        </span>
      )}
    </button>
  );
}