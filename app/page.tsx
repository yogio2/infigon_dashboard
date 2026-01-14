'use client';

import { useEffect, useState } from 'react';
import ProductGrid from '@/src/components/ProductGrid';
import ErrorMessage from '@/src/components/ErrorMessage';
import { fetchProducts } from '@/src/lib/api';
import { Product } from '@/src/types/product';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const handleRetry = () => {
    loadProducts();
  };

  const loadProducts = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchProducts();
      setProducts(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load products';
      setError(errorMessage);
      console.error('Error loading products:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Product Explorer</h1>
          <p className="text-gray-600 mt-2">Browse our collection of products</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {error ? (
          <ErrorMessage
            title="Failed to Load Products"
            message={error}
            onRetry={handleRetry}
          />
        ) : (
          <ProductGrid products={products} isLoading={isLoading} />
        )}
      </div>
    </main>
  );
}
