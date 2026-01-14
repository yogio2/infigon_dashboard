'use client';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-3">
        Filter by Category
      </label>
      <div className="flex flex-wrap gap-2">
        {/* All Categories Button */}
        <button
          onClick={() => onCategoryChange('')}
          className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
            selectedCategory === ''
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          aria-pressed={selectedCategory === ''}
        >
          All
        </button>

        {/* Category Chips */}
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 capitalize ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            aria-pressed={selectedCategory === category}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
