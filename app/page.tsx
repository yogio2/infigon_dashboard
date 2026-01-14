'use client';

import { useEffect, useState, useMemo } from 'react';
import ProductGrid from '@/src/components/ProductGrid';
import ErrorMessage from '@/src/components/ErrorMessage';
import SearchBar from '@/src/components/SearchBar';
import CategoryFilter from '@/src/components/CategoryFilter';
import ProductCard from '@/src/components/ProductCard';
import { fetchProducts } from '@/src/lib/api';
import { Product } from '@/src/types/product';
import { useFavorites } from '@/src/hooks/useFavorites';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const { favorites, toggleFavorite, isFavorite, favoritesCount, isLoaded } = useFavorites();

  // Extract unique categories from products
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(products.map((p) => p.category)));
    return uniqueCategories.sort();
  }, [products]);

  // Filter products based on search term, category, and favorites
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === '' || product.category === selectedCategory;
      const matchesFavorites = !showFavoritesOnly || isFavorite(product.id);

      return matchesSearch && matchesCategory && matchesFavorites;
    });
  }, [products, searchTerm, selectedCategory, showFavoritesOnly, isFavorite]);

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
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Product Explorer</h1>
              <p className="text-gray-600 mt-2">Browse our collection of products</p>
            </div>
            {isLoaded && favoritesCount > 0 && (
              <div className="text-right">
                <p className="text-sm text-gray-600">Favorites</p>
                <p className="text-2xl font-bold text-red-500">{favoritesCount}</p>
              </div>
            )}
          </div>
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

                {/* Favorites Toggle */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2 ${
                        showFavoritesOnly
                          ? 'bg-red-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                      aria-pressed={showFavoritesOnly}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                      <span>{showFavoritesOnly ? 'Showing Favorites' : 'Show Favorites'}</span>
                    </button>
                  </div>

                  {/* Results Count */}
                  {(searchTerm || selectedCategory || showFavoritesOnly) && (
                    <div className="text-sm text-gray-600">
                      Found <span className="font-semibold">{filteredProducts.length}</span>{' '}
                      product{filteredProducts.length !== 1 ? 's' : ''}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Products Grid */}
            {isLoading ? (
              <ProductGrid products={[]} isLoading={true} />
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  {showFavoritesOnly
                    ? 'No favorite products yet. Start adding your favorites!'
                    : 'No products found matching your criteria.'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isFavorite={isFavorite(product.id)}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
