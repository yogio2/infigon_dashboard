'use client';

import { useEffect, useState, useMemo } from 'react';
import ProductGrid from '@/src/components/ProductGrid';
import ErrorMessage from '@/src/components/ErrorMessage';
import SearchBar from '@/src/components/SearchBar';
import CategoryFilter from '@/src/components/CategoryFilter';
import { fetchProducts } from '@/src/lib/api';
import { Product } from '@/src/types/product';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Extract unique categories from products
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(products.map((p) => p.category)));
    return uniqueCategories.sort();
  }, [products]);

  // Filter products based on search term and category
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === '' || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

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
          <>
            {/* Filters Section */}
            {!isLoading && products.length > 0 && (
              <div className="mb-8 space-y-6">
                {/* Search Bar */}
                <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

                {/* Category Filter */}
                <CategoryFilter
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                />

                {/* Results Count */}
                {(searchTerm || selectedCategory) && (
                  <div className="text-sm text-gray-600">
                    Found <span className="font-semibold">{filteredProducts.length}</span> product
                    {filteredProducts.length !== 1 ? 's' : ''}
                    {searchTerm && ` matching "${searchTerm}"`}
                    {searchTerm && selectedCategory && ' in'}
                    {selectedCategory && ` ${selectedCategory}`}
                  </div>
                )}
              </div>
            )}

            {/* Products Grid */}
            <ProductGrid products={filteredProducts} isLoading={isLoading} />
          </>
        )}
      </div>
    </main>
  );
}
