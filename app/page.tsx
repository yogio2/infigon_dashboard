'use client';

import { useEffect, useState, useMemo } from 'react';
import ProductGrid from '@/src/components/ProductGrid';
import ErrorMessage from '@/src/components/ErrorMessage';
import SearchBar from '@/src/components/SearchBar';
import CategoryFilter from '@/src/components/CategoryFilter';
import SortBar, { type SortType } from '@/src/components/SortBar';
import Pagination from '@/src/components/Pagination';
import ThemeToggle from '@/src/components/ThemeToggle';
import ProductCard from '@/src/components/ProductCard';
import { fetchProducts } from '@/src/lib/api';
import { Product } from '@/src/types/product';
import { useFavorites } from '@/src/hooks/useFavorites';

const ITEMS_PER_PAGE = 8;

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [sortBy, setSortBy] = useState<SortType>('price-asc');
  const [currentPage, setCurrentPage] = useState(1);
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

  // Sort products based on sortBy state
  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];

    switch (sortBy) {
      case 'price-asc':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return sorted.sort((a, b) => b.price - a.price);
      case 'rating-desc':
        return sorted.sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0));
      case 'title-asc':
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return sorted;
    }
  }, [filteredProducts, sortBy]);

  // Paginate products
  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return sortedProducts.slice(startIndex, endIndex);
  }, [sortedProducts, currentPage]);

  // Reset to page 1 when filters or sort changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, showFavoritesOnly, sortBy]);

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
    <main className="min-h-screen bg-base text-base">
      {/* Header - Responsive padding and layout */}
      <div className="bg-card shadow-sm border-b border-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Product Explorer
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                Browse our collection of products
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:items-center sm:gap-6">
              {/* Theme Toggle - No longer overlaps on mobile */}
              <ThemeToggle />
              {/* Favorites Count */}
              {isLoaded && favoritesCount > 0 && (
                <div className="text-right">
                  <p className="text-xs sm:text-sm text-muted-foreground">Favorites</p>
                  <p className="text-2xl sm:text-3xl font-bold text-destructive">{favoritesCount}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-base text-base">
        {error ? (
          <ErrorMessage
            title="Failed to Load Products"
            message={error}
            onRetry={handleRetry}
          />
        ) : (
          <>
            {/* Filters Section - Responsive spacing */}
            {!isLoading && products.length > 0 && (
              <div className="mb-8 sm:mb-12 space-y-4 sm:space-y-6">
                {/* Search Bar */}
                <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

                {/* Filters Grid - Category and Sort */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Category Filter */}
                  <CategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                  />

                  {/* Sort Bar */}
                  <SortBar sortBy={sortBy} onSortChange={setSortBy} />
                </div>

                {/* Favorites Toggle and Results Count */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                      className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg font-medium text-sm sm:text-base transition-colors duration-200 flex items-center gap-2 min-h-10 sm:min-h-11 ${
                        showFavoritesOnly
                          ? 'bg-destructive text-destructive-foreground'
                          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                      }`}
                      aria-pressed={showFavoritesOnly}
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                      <span className="hidden sm:inline">
                        {showFavoritesOnly ? 'Showing Favorites' : 'Show Favorites'}
                      </span>
                      <span className="sm:hidden">
                        {showFavoritesOnly ? 'Favorites' : 'Show'}
                      </span>
                    </button>
                  </div>

                  {/* Results Count - Responsive text */}
                  {(searchTerm || selectedCategory || showFavoritesOnly) && (
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      Found <span className="font-semibold text-foreground">{filteredProducts.length}</span>{' '}
                      product{filteredProducts.length !== 1 ? 's' : ''}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Products Grid */}
            {isLoading ? (
              <ProductGrid products={[]} isLoading={true} />
            ) : paginatedProducts.length === 0 ? (
              <div className="text-center py-12 sm:py-16">
                <p className="text-muted-foreground text-base sm:text-lg">
                  {showFavoritesOnly
                    ? 'No favorite products yet. Start adding your favorites!'
                    : 'No products found matching your criteria.'}
                </p>
              </div>
            ) : (
              <>
                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                  {paginatedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      isFavorite={isFavorite(product.id)}
                      onToggleFavorite={toggleFavorite}
                    />
                  ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                )}
              </>
            )}
          </>
        )}
      </div>
    </main>
  );
}
