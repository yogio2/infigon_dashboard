'use client';

interface FavoriteButtonProps {
  productId: number;
  isFavorite: boolean;
  onToggle: (productId: number) => void;
  size?: 'sm' | 'md' | 'lg';
}

export default function FavoriteButton({
  productId,
  isFavorite,
  onToggle,
  size = 'md',
}: FavoriteButtonProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggle(productId);
  };

  return (
    <button
      onClick={handleClick}
      className="transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-full p-1"
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      <svg
        className={`${sizeClasses[size]} transition-colors duration-200 ${
          isFavorite ? 'fill-red-500 text-red-500' : 'fill-none text-gray-400 hover:text-gray-600'
        }`}
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={isFavorite ? 0 : 2}
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </button>
  );
}
