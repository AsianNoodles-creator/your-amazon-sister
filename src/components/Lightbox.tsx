"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  initialIndex: number;
  onClose: () => void;
}

function LightboxModal({ images, initialIndex, onClose }: LightboxProps) {
  const [index, setIndex] = useState(initialIndex);

  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.92)" }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        onClick={onClose}
        aria-label="Close"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          className="absolute left-4 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          onClick={(e) => { e.stopPropagation(); prev(); }}
          aria-label="Previous"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Image */}
      <div
        className="relative flex items-center justify-center"
        style={{ maxWidth: "90vw", maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[index].src}
          alt={images[index].alt}
          width={1200}
          height={900}
          className="rounded-xl object-contain"
          style={{ maxWidth: "90vw", maxHeight: "90vh", width: "auto", height: "auto" }}
        />
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 text-white/80 text-xs px-3 py-1 rounded-full">
            {index + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          className="absolute right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          onClick={(e) => { e.stopPropagation(); next(); }}
          aria-label="Next"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}

interface ClickableImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  images: LightboxImage[];
  imageIndex: number;
}

export function ClickableImage({ src, alt, width, height, className, images, imageIndex }: ClickableImageProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <>
      <button
        className="block w-full cursor-zoom-in focus:outline-none"
        onClick={() => setOpen(true)}
        aria-label={`View full size`}
        type="button"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
        />
      </button>
      {mounted && open && createPortal(
        <LightboxModal
          images={images}
          initialIndex={imageIndex}
          onClose={() => setOpen(false)}
        />,
        document.body
      )}
    </>
  );
}
