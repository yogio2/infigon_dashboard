'use client';

import { Product } from '@/src/types/product';
import Image from 'next/image';
import Link from 'next/link';
import FavoriteButton from './FavoriteButton';

interface ProductDetailProps {
  product: Product;
  isFavorite?: boolean;
  onToggleFavorite?: (productId: number) => void;
}

export default function ProductDetail({
  product,
  isFavorite = false,
  onToggleFavorite,
}: ProductDetailProps) {
  return (
    <div className="bg-white">
      {/* Back Button - Responsive padding */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm sm:text-base"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Products
        </Link>
      </div>

      {/* Product Detail Content - Responsive padding and layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Product Image - Responsive height and padding */}
          <div className="flex items-center justify-center bg-gray-100 rounded-lg p-4 sm:p-6 md:p-8">
            <div className="relative w-full h-72 sm:h-80 md:h-96">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Product Information - Responsive spacing */}
          <div className="flex flex-col justify-start space-y-4 sm:space-y-6">
            {/* Header with Category and Favorite Button */}
            <div className="flex items-start justify-between gap-3">
              <div className="inline-block">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase">
                  {product.category}
                </span>
              </div>
              {onToggleFavorite && (
                <FavoriteButton
                  productId={product.id}
                  isFavorite={isFavorite}
                  onToggle={onToggleFavorite}
                  size="lg"
                />
              )}
            </div>

            {/* Title - Responsive text size */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {product.title}
            </h1>

            {/* Rating (if available) */}
            {product.rating && (
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${
                        i < Math.round(product.rating.rate)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-gray-600">
                  {product.rating.rate.toFixed(1)} ({product.rating.count})
                </span>
              </div>
            )}

            {/* Price - Responsive padding and text */}
            <div className="py-4 sm:py-6 border-t border-b border-gray-200">
              <p className="text-xs sm:text-sm text-gray-600 mb-2">Price</p>
              <p className="text-3xl sm:text-4xl font-bold text-blue-600">
                ${product.price.toFixed(2)}
              </p>
            </div>

            {/* Description - Responsive text size */}
            <div>
              <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                Description
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Add to Cart Button - Touch-friendly size (≥44px) */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-3 sm:py-4 px-6 rounded-lg transition-colors duration-200 text-base sm:text-lg min-h-[44px] sm:min-h-[48px]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
