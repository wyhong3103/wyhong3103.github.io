"use client";

import React, { useState, useEffect } from 'react';

type MultiImageProps = {
  images: string[];
  caption?: string;
  height?: string;
  width?: string;
  columns?: number;
  maxWidth?: string;
};

const MultiImage: React.FC<MultiImageProps> = ({
  images,
  caption,
  height,
  width,
  columns,
  maxWidth,
}) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Handle scroll locking and keydown events when lightbox is open
  useEffect(() => {
    if (!activeImage) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeImage]);

  const isGrid = typeof columns === 'number';
  const defaultHeight = isGrid ? '100%' : '300px';
  const defaultWidth = isGrid ? '100%' : 'auto';

  const finalHeight = height ?? defaultHeight;
  const finalWidth = width ?? defaultWidth;

  return (
    <div className="text-center my-8">
      <div
        className={isGrid ? "grid gap-4 mx-auto" : "flex flex-wrap justify-center gap-4 mx-auto"}
        style={{
          gridTemplateColumns: isGrid ? `repeat(${columns}, minmax(0, 1fr))` : undefined,
          maxWidth: maxWidth || undefined,
        }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            style={
              isGrid
                ? { width: finalWidth, height: finalHeight, objectFit: 'cover' }
                : { maxHeight: finalHeight, width: finalWidth }
            }
            className="rounded-md object-cover !m-0 cursor-zoom-in transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:brightness-105 active:scale-[0.98]"
            onClick={() => setActiveImage(src)}
          />
        ))}
      </div>
      {caption && (
        <div className="text-sm text-zinc-400 dark:text-zinc-500 mt-4">
          {caption}
        </div>
      )}

      {/* Lightbox / Zoom Portal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md cursor-zoom-out mdx-lightbox-fade"
          onClick={() => setActiveImage(null)}
        >
          {/* Embedded keyframe styles to avoid dependency on tailwind custom animations */}
          <style>{`
            @keyframes mdxLightboxFadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes mdxLightboxZoomIn {
              from { transform: scale(0.95); opacity: 0; }
              to { transform: scale(1); opacity: 1; }
            }
            .mdx-lightbox-fade {
              animation: mdxLightboxFadeIn 0.2s ease-out forwards;
            }
            .mdx-lightbox-zoom {
              animation: mdxLightboxZoomIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `}</style>

          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm z-55"
            onClick={(e) => {
              e.stopPropagation();
              setActiveImage(null);
            }}
            aria-label="Close image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center mdx-lightbox-zoom"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage}
              alt="Enlarged view"
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl select-none cursor-zoom-out"
              onClick={() => setActiveImage(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiImage;

