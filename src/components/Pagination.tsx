'use client';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const handleFirst = () => onPageChange(1);
  const handlePrevious = () => onPageChange(Math.max(1, currentPage - 1));
  const handleNext = () => onPageChange(Math.min(totalPages, currentPage + 1));
  const handleLast = () => onPageChange(totalPages);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 sm:mt-12">
      {/* Page Info */}
      <div className="text-sm sm:text-base text-muted-foreground font-medium">
        Page <span className="font-bold text-foreground">{currentPage}</span> of{' '}
        <span className="font-bold text-foreground">{totalPages}</span>
      </div>

      {/* Pagination Buttons */}
      <div className="flex gap-2 sm:gap-3">
        <button
          onClick={handleFirst}
          disabled={currentPage === 1}
          className="px-3 sm:px-4 py-2 sm:py-2.5 bg-primary hover:bg-primary text-primary-foreground disabled:bg-muted disabled:cursor-not-allowed !disabled:text-muted-foreground font-medium rounded-lg transition-colors duration-200 text-sm sm:text-base min-h-10 sm:min-h-11 flex items-center justify-center"
          aria-label="Go to first page"
        >
          ⟨⟨
        </button>

        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="px-3 sm:px-4 py-2 sm:py-2.5 bg-primary hover:bg-primary text-primary-foreground disabled:bg-muted disabled:cursor-not-allowed !disabled:text-muted-foreground font-medium rounded-lg transition-colors duration-200 text-sm sm:text-base min-h-10 sm:min-h-11 flex items-center justify-center"
          aria-label="Go to previous page"
        >
          ⟨
        </button>

        {/* Page Numbers */}
        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter((page) => {
              // Show current page and adjacent pages
              const diff = Math.abs(page - currentPage);
              return diff === 0 || diff === 1 || page === 1 || page === totalPages;
            })
            .map((page, index, array) => {
              const prevPage = array[index - 1];
              // Show ellipsis if there's a gap
              const showEllipsis = prevPage && page - prevPage > 1;

              return (
                <div key={page} className="flex gap-2 items-center">
                  {showEllipsis && <span className="text-muted-foreground">...</span>}
                  <button
                    onClick={() => onPageChange(page)}
                    className={`px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base min-h-10 sm:min-h-11 flex items-center justify-center ${
                      page === currentPage
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                    }`}
                    aria-label={`Go to page ${page}`}
                    aria-current={page === currentPage ? 'page' : undefined}
                  >
                    {page}
                  </button>
                </div>
              );
            })}
        </div>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-3 sm:px-4 py-2 sm:py-2.5 bg-primary hover:bg-primary text-primary-foreground disabled:bg-muted disabled:cursor-not-allowed !disabled:text-muted-foreground font-medium rounded-lg transition-colors duration-200 text-sm sm:text-base min-h-10 sm:min-h-11 flex items-center justify-center"
          aria-label="Go to next page"
        >
          ⟩
        </button>

        <button
          onClick={handleLast}
          disabled={currentPage === totalPages}
          className="px-3 sm:px-4 py-2 sm:py-2.5 bg-primary hover:bg-primary text-primary-foreground disabled:bg-muted disabled:cursor-not-allowed !disabled:text-muted-foreground font-medium rounded-lg transition-colors duration-200 text-sm sm:text-base min-h-10 sm:min-h-11 flex items-center justify-center"
          aria-label="Go to last page"
        >
          ⟩⟩
        </button>
      </div>
    </div>
  );
}
