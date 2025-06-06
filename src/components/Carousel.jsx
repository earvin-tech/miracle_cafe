import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FadeInSection from "./FadeInSection";

const images = [
  "/site_images/cafe_background_1.jpg",
  "/site_images/cafe_outdoor.jpg",
  "/site_images/coffee_beans_&_cups.png",
  "/site_images/flower.jpg",
  "/site_images/dark_background.jpg",
  "/site_images/sberry_matcha.jpg",
  "site_images/menu_window.jpg"
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    setCurrentIndex((previousIndex) =>
      previousIndex === 0 ? images.length - 1 : previousIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((previousIndex) =>
      previousIndex === images.length - 1 ? 0 : previousIndex + 1
    );
  };

  return (
    <>
    <FadeInSection>

      <div className="w-[90vw] h-[85vh] max-w-4xl mx-auto relative overflow-hidden rounded-2xl shadow-md my-8 bg-black">
        {/* Images */}
        <div
          className="flex h-full transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full shrink-0 object-contain"
            />
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={previousSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
        >
          <ChevronRight />
        </button>
      </div>
    </FadeInSection>
    </>
  );
}
