"use client"; // required if using Next.js App Router and React hooks

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useEffect } from "react";

export default function ImageCarousel() {
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

  const images = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg",
    "photo5.jpg",
    "photo6.jpg",
    "photo7.jpg",
    "photo8.jpg",
    "photo9.jpg",
    // add your image filenames here
  ];

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 2500); // Change slide every 2.5 seconds
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <section className="px-4">
      <div ref={sliderRef} className="keen-slider overflow-hidden">
        {images.map((img, idx) => (
          <div className="keen-slider__slide" key={idx}>
            <Image
              src={`/images/photos/${img}`}
              alt={`Chess event ${idx + 1}`}
              width={900}
              height={600}
              className="w-full h-auto object-cover"
              priority={idx === 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
