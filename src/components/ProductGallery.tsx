"use client";

import Image from "next/image";
import { useState } from "react";

type ProductGalleryProps = {
  images: string[];
  alt: string;
};

export function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex] ?? images[0];

  return (
    <div className="product-gallery">
      <div className="product-gallery-main">
        <div className="product-gallery-main-stage">
          <Image
            key={active}
            src={active}
            alt={alt}
            width={620}
            height={620}
            priority
            className="product-gallery-main-image"
          />
        </div>
        <div className="product-gallery-thumbs" role="tablist" aria-label="Product images">
          {images.map((src, index) => (
            <button
              key={`${src}-${index}`}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              aria-label={`Show image ${index + 1}`}
              className={`product-gallery-thumb ${activeIndex === index ? "is-active" : ""}`}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
            >
              <Image src={src} alt="" width={120} height={120} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
