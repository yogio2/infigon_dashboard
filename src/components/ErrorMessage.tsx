'use client';

interface ErrorMessageProps {
  title?: string;
  message: string;
  onRetry?: () => void;
}

export default function ErrorMessage({
  title = 'Error',
  message,
  onRetry,
}: ErrorMessageProps) {
  return (
    <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 text-center max-w-md mx-auto my-12">
      <h3 className="text-lg font-semibold text-destructive mb-2">{title}</h3>
      <p className="text-destructive/80 text-sm mb-4">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-destructive hover:bg-destructive text-destructive-foreground font-semibold py-2 px-4 rounded transition-colors duration-200"
        >
          Try Again
        </button>
      )}
    </div>
  );
}
