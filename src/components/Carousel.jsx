import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    "/site_images/sign.jpg",
    "/site_images/cafe_outdoor.jpg"
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
        <div className="w-[90vw] h-[90vh] max-w-4xl mx-auto relative overflow-hidden rounded-2xl shadow-md mt-8">
          {/* Images */}
          <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full shrink-0 object-cover"
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
      );
    }