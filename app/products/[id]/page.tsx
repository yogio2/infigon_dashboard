'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ProductDetail from '@/src/components/ProductDetail';
import ErrorMessage from '@/src/components/ErrorMessage';
import { fetchProducts } from '@/src/lib/api';
import { Product } from '@/src/types/product';
import { useFavorites } from '@/src/hooks/useFavorites';

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;
  
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toggleFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Fetch all products and find the one with matching ID
        const allProducts = await fetchProducts();
        const foundProduct = allProducts.find(
          (p) => p.id === parseInt(productId, 10)
        );

        if (!foundProduct) {
          setError(
            `Product with ID ${productId} not found. Please check the URL and try again.`
          );
          setProduct(null);
        } else {
          setProduct(foundProduct);
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error
            ? err.message
            : 'Failed to load product. Please try again later.';
        setError(errorMessage);
        setProduct(null);
        console.error('Error loading product:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadProduct();
  }, [productId]);

  const handleRetry = () => {
    // Reload the product
    setIsLoading(true);
    setError(null);
    
    const loadProduct = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const allProducts = await fetchProducts();
        const foundProduct = allProducts.find(
          (p) => p.id === parseInt(productId, 10)
        );

        if (!foundProduct) {
          setError(
            `Product with ID ${productId} not found. Please check the URL and try again.`
          );
          setProduct(null);
        } else {
          setProduct(foundProduct);
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error
            ? err.message
            : 'Failed to load product. Please try again later.';
        setError(errorMessage);
        setProduct(null);
        console.error('Error loading product:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadProduct();
  };

  // Loading state
  if (isLoading) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse space-y-8">
            {/* Back button skeleton */}
            <div className="h-10 bg-gray-300 rounded w-32"></div>

            {/* Content skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Image skeleton */}
              <div className="bg-gray-300 rounded-lg h-96"></div>

              {/* Info skeleton */}
              <div className="space-y-6">
                <div className="h-8 bg-gray-300 rounded w-24"></div>
                <div className="h-10 bg-gray-300 rounded w-full"></div>
                <div className="h-6 bg-gray-300 rounded w-1/2"></div>
                <div className="h-12 bg-gray-300 rounded w-1/3"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                </div>
                <div className="h-12 bg-gray-300 rounded w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Error state
  if (error) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-6">
            <a
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
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
            </a>
          </div>
          <ErrorMessage
            title="Product Not Found"
            message={error}
            onRetry={handleRetry}
          />
        </div>
      </main>
    );
  }

  // Product found - display it
  if (product) {
    return (
      <main className="min-h-screen bg-gray-50">
        <ProductDetail
          product={product}
          isFavorite={isFavorite(product.id)}
          onToggleFavorite={toggleFavorite}
        />
      </main>
    );
  }

  // Should not reach here, but just in case
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ErrorMessage
          title="Error"
          message="Unable to load the product. Please try again later."
          onRetry={handleRetry}
        />
      </div>
    </main>
  );
}
