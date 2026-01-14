import { Product } from '@/src/types/product';

const API_URL = 'https://fakestoreapi.com/products';

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch(API_URL, {
      cache: 'no-store', // Ensure fresh data on each request
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const products: Product[] = await response.json();

    // Validate that we received an array
    if (!Array.isArray(products)) {
      throw new Error('Invalid API response: expected an array of products');
    }

    // Check if data is empty
    if (products.length === 0) {
      throw new Error('No products available at the moment');
    }

    return products;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Failed to fetch products:', errorMessage);
    throw new Error(errorMessage);
  }
}
