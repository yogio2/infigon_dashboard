'use client';

import { Product } from '@/src/types/product';
import Link from 'next/link';
import Image from 'next/image';
import FavoriteButton from './FavoriteButton';

interface ProductCardProps {
  product: Product;
  isFavorite?: boolean;
  onToggleFavorite?: (productId: number) => void;
}

export default function ProductCard({
  product,
  isFavorite = false,
  onToggleFavorite,
}: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full cursor-pointer relative group">
        {/* Image Container - Responsive height */}
        <div className="relative w-full h-40 sm:h-48 md:h-52 bg-gray-100 flex items-center justify-center overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            width={150}
            height={150}
            className="object-contain p-3 sm:p-4"
            priority={false}
          />

          {/* Favorite Button - Always visible on mobile, hover on desktop */}
          {onToggleFavorite && (
            <div className="absolute top-2 right-2 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
              <FavoriteButton
                productId={product.id}
                isFavorite={isFavorite}
                onToggle={onToggleFavorite}
              />
            </div>
          )}
        </div>

        {/* Content Container - Responsive padding */}
        <div className="p-3 sm:p-4 flex flex-col h-full">
          {/* Title - Responsive text size */}
          <h3 className="text-xs sm:text-sm font-semibold text-gray-800 line-clamp-2 mb-2">
            {product.title}
          </h3>

          {/* Category - Responsive text size */}
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">
            {product.category}
          </p>

          {/* Price - Responsive text size */}
          <div className="mt-auto">
            <p className="text-base sm:text-lg font-bold text-blue-600">
              ${product.price.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
