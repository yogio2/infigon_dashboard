'use client';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  searchTerm,
  onSearchChange,
  placeholder = 'Search products by title...',
}: SearchBarProps) {
  return (
    <div className="w-full">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 sm:px-4 py-3 sm:py-4 text-base border border-gray-300 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 min-h-11 sm:min-h-12"
        aria-label="Search products"
      />
      {searchTerm && (
        <p className="text-xs sm:text-sm text-gray-500 mt-2">
          Searching for: <span className="font-semibold">&quot;{searchTerm}&quot;</span>
        </p>
      )}
    </div>
  );
}
