'use client';

export type SortType = 'price-asc' | 'price-desc' | 'rating-desc' | 'title-asc';

interface SortBarProps {
  sortBy: SortType;
  onSortChange: (sort: SortType) => void;
}

export default function SortBar({ sortBy, onSortChange }: SortBarProps) {
  const sortOptions: { value: SortType; label: string }[] = [
    { value: 'price-asc', label: 'Price: Low → High' },
    { value: 'price-desc', label: 'Price: High → Low' },
    { value: 'rating-desc', label: 'Rating: High → Low' },
    { value: 'title-asc', label: 'Title: A → Z' },
  ];

  return (
    <div className="w-full">
      <label className="block text-xs sm:text-sm font-medium text-foreground mb-3 sm:mb-4">
        Sort by
      </label>
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value as SortType)}
        className="w-full px-4 py-2 sm:py-3 border border-input rounded-lg bg-card text-card-foreground text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent cursor-pointer hover:border-input transition-colors min-h-[44px] sm:min-h-[48px]"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
