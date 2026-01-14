'use client';

import { useEffect } from 'react';
import Link from 'next/link';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to console for debugging
    console.error('Application error:', error);
  }, [error]);

  return (
    <main className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-md">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="inline-block">
            <svg
              className="w-16 sm:w-20 h-16 sm:h-20 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4v2m0 0a9 9 0 1 1 0-18 9 9 0 0 1 0 18zm0-14a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
              />
            </svg>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Something Went Wrong
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-4">
            An unexpected error occurred while loading this page.
          </p>
          {error.message && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-left mb-4">
              <p className="text-sm text-red-700 font-mono">{error.message}</p>
            </div>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 min-h-11 sm:min-h-12"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 sm:py-4 bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium rounded-lg transition-colors duration-200 min-h-11 sm:min-h-12"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
