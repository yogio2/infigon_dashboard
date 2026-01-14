'use client';

import { useEffect, useState, useCallback } from 'react';

const FAVORITES_STORAGE_KEY = 'product_favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load favorites from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setFavorites(Array.isArray(parsed) ? parsed : []);
      }
      setIsLoaded(true);
    } catch (error) {
      console.error('Failed to load favorites from localStorage:', error);
      setIsLoaded(true);
    }
  }, []);

  // Toggle favorite status
  const toggleFavorite = useCallback((productId: number) => {
    try {
      setFavorites((prev) => {
        const updated = prev.includes(productId)
          ? prev.filter((id) => id !== productId)
          : [...prev, productId];

        // Save to localStorage
        try {
          localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(updated));
        } catch (error) {
          console.error('Failed to save favorites to localStorage:', error);
        }

        return updated;
      });
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  }, []);

  // Check if a product is favorited
  const isFavorite = useCallback(
    (productId: number) => favorites.includes(productId),
    [favorites]
  );

  // Clear all favorites
  const clearFavorites = useCallback(() => {
    try {
      setFavorites([]);
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify([]));
    } catch (error) {
      console.error('Failed to clear favorites:', error);
    }
  }, []);

  return {
    favorites,
    toggleFavorite,
    isFavorite,
    clearFavorites,
    favoritesCount: favorites.length,
    isLoaded,
  };
}
