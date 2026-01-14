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
        {/* Image Container */}
        <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            width={150}
            height={150}
            className="object-contain p-4"
            priority={false}
          />

          {/* Favorite Button */}
          {onToggleFavorite && (
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <FavoriteButton
                productId={product.id}
                isFavorite={isFavorite}
                onToggle={onToggleFavorite}
              />
            </div>
          )}
        </div>

        {/* Content Container */}
        <div className="p-4 flex flex-col h-full">
          {/* Title */}
          <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2">
            {product.title}
          </h3>

          {/* Category */}
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">
            {product.category}
          </p>

          {/* Price */}
          <div className="mt-auto">
            <p className="text-lg font-bold text-blue-600">
              ${product.price.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
