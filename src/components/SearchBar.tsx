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
        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-zinc-700 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        aria-label="Search products"
      />
      {searchTerm && (
        <p className="text-sm text-gray-500 mt-1">
          Searching for: <span className="font-semibold text-zinc-700">"{searchTerm}"</span>
        </p>
      )}
    </div>
  );
}
