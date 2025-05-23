"use client";

import Image from "next/image";
import { useEffect, useState, useCallback, useMemo, memo } from "react";

interface Photo {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  photographer: string;
  photographerUrl: string;
}

// Memoized card component to prevent unnecessary re-renders
const PhotoCard = memo(({ photo }: { photo: Photo }) => {
  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105"
    >
      <div className="relative aspect-[4/3]">
        <Image
          width={600}
          height={450}
          alt={photo.title || 'Gallery image'}
          src={photo.image}
          className="object-cover w-full h-full"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          priority={false}
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{photo.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {photo.description}
        </p>
        {photo.photographer && (
          <p className="text-sm text-gray-500">
            Photo by{' '}
            <a 
              href={photo.photographerUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-600 hover:underline"
            >
              {photo.photographer}
            </a>
          </p>
        )}
      </div>
    </div>
  );
});

// Loading skeleton component
const PhotoSkeleton = () => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden animate-pulse">
    <div className="aspect-square bg-gray-300 dark:bg-gray-700"></div>
    <div className="p-6">
      <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
    </div>
  </div>
);

export default function Gallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);

  const fetchPhotos = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/photos');
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Failed to fetch');

      setPhotos(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  const loadMore = useCallback(() => {
    setVisibleCount(prev => prev + 12);
  }, []);

  const retryFetch = useCallback(() => {
    setError(null);
    fetchPhotos();
  }, [fetchPhotos]);

  // Memoize the visible photos and photo grid
  const visiblePhotos = useMemo(() => 
    photos.slice(0, visibleCount), 
    [photos, visibleCount]
  );

  const photoGrid = useMemo(() => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {visiblePhotos.map((photo) => (
        <PhotoCard 
          key={`photo-${photo.id}`} 
          photo={photo} 
        />
      ))}
    </div>
  ), [visiblePhotos]);

  // Loading skeletons
  const skeletonGrid = useMemo(() => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 12 }).map((_, index) => (
        <PhotoSkeleton key={`skeleton-${index}`} />
      ))}
    </div>
  ), []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Gallery</h1>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
            Explore our collection of AI-generated artwork
          </p>
          {skeletonGrid}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">Error: {error}</p>
          <button
            onClick={retryFetch}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Gallery</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Explore our collection of AI-generated artwork
        </p>

        {photoGrid}

        {/* Load more button */}
        {visibleCount < photos.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Load More ({photos.length - visibleCount} remaining)
            </button>
          </div>
        )}

        {/* Show total count */}
        <div className="text-center mt-8 text-gray-500 dark:text-gray-400">
          Showing {Math.min(visibleCount, photos.length)} of {photos.length} photos
        </div>
      </div>
    </div>
  );
}