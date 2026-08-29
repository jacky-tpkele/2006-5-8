"use client";

import Image from "next/image";
import { useState } from "react";

type ProductGalleryProps = {
  images: string[];
  alt: string;
  productName?: string;
  category?: string;
};

const galleryAltDescriptors = [
  "front view with DIN rail mounting",
  "internal mechanism and contact assembly",
  "installation in electrical panel",
  "side view showing terminals",
  "top view of arc chamber",
  "dimension diagram",
  "wiring connection detail",
  "complete unit with accessories",
];

export function ProductGallery({ images, alt, productName, category }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex] ?? images[0];

  // Generate descriptive alt for each gallery image
  function getImageAlt(index: number): string {
    if (!productName && !category) return alt;

    const baseName = productName || alt;
    const descriptor = galleryAltDescriptors[index] || `view ${index + 1}`;
    const categoryPrefix = category ? `${category} ` : "";

    return `${categoryPrefix}${baseName} - ${descriptor}`;
  }

  const mainImageAlt = getImageAlt(activeIndex);

  return (
    <div className="product-gallery">
      <div className="product-gallery-main">
        <div className="product-gallery-main-stage">
          <Image
            key={active}
            src={active}
            alt={mainImageAlt}
            width={620}
            height={620}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 620px"
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
              aria-label={`Show image ${index + 1}: ${galleryAltDescriptors[index] || `view ${index + 1}`}`}
              className={`product-gallery-thumb ${activeIndex === index ? "is-active" : ""}`}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
            >
              <Image
                src={src}
                alt=""
                width={120}
                height={120}
                sizes="120px"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
