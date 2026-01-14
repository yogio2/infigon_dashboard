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
      <label className="block text-xs sm:text-sm font-medium text-foreground mb-3 sm:mb-4">
        Filter by Category
      </label>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {/* All Categories Button - Touch-friendly */}
        <button
          onClick={() => onCategoryChange('')}
          className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-full font-medium text-sm sm:text-base transition-colors duration-200 min-h-10 sm:min-h-11 flex items-center ${
            selectedCategory === ''
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
          }`}
          aria-pressed={selectedCategory === ''}
        >
          All
        </button>

        {/* Category Chips - Touch-friendly */}
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-full font-medium text-sm sm:text-base transition-colors duration-200 capitalize min-h-10 sm:min-h-11 flex items-center ${
              selectedCategory === category
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
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
