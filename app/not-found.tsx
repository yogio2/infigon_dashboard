'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-gray-900 mb-4">
            404
          </h1>
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </div>

        {/* Error Icon */}
        <div className="mb-12">
          <div className="inline-block">
            <svg
              className="w-16 sm:w-20 h-16 sm:h-20 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 min-h-11 sm:min-h-12"
          >
            <span>← Back to Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-8 py-3 sm:py-4 bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium rounded-lg transition-colors duration-200 min-h-11 sm:min-h-12"
          >
            Go Back
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-sm text-gray-500">
          <p>
            Need help? <a href="/" className="text-blue-600 hover:text-blue-700 font-medium">
              Return to the product explorer
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
