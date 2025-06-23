'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0F172A] text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
        <p className="text-gray-400 mb-8">
          An error occurred while loading this page.
        </p>
        <button
          onClick={() => reset()}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors mr-4"
        >
          Try again
        </button>
        <button
          onClick={() => window.location.href = '/'}
          className="bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
