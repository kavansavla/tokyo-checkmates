"use client"; // required for hooks & Keen Slider

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useEffect } from "react";

interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 4,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 1,
          spacing: 8,
        },
      },
    },
  });

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 2500); // Change slide every 2.5 seconds
    return () => clearInterval(interval);
  }, [instanceRef]);

  if (!images || images.length === 0) {
    return null; // or a placeholder
  }

  return (
    <section className="px-4">
      <div ref={sliderRef} className="keen-slider overflow-hidden">
        {images.map((imgUrl, idx) => (
          <div className="keen-slider__slide" key={idx}>
            <Image
              src={imgUrl} // use Sanity image URL
              alt={`Chess event ${idx + 1}`}
              width={900}
              height={600}
              className="w-full h-auto object-cover rounded-xl"
              priority={idx === 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
