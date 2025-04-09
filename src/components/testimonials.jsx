"use client";

import { useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "The view of Nigeen Lake from our room was absolutely breathtaking. Waking up to the serene waters and mountains was the highlight of our Kashmir trip.",
      name: "Rohan Sharma",
      title: "TRAVELER",
      image: "/t1.jpg",
    },
    {
      id: 2,
      quote:
        "The warmth of Kashmiri hospitality at Naaz Stay was unmatched. The rooftop restaurant served the most authentic local cuisine with a view that made every meal special.",
      name: "Rohit Verma",
      title: "FOOD ENTHUSIAST",
      image: "/t2.jpg",
    },
    {
      id: 3,
      quote:
        "Our stay at Naaz Stay felt like being welcomed into a Kashmiri family home. The attention to detail, the traditional décor, and the peaceful location by Nigeen Lake made it perfect.",
      name: "Priya Singh",
      title: "TRAVEL BLOGGER",
      image: "/t2.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="w-full max-w-full px-4 lg:py-24 py-12 mx-auto overflow-hidden bg-white md:px-8 lg:px-16">
      <div className="relative w-full mb-16 text-center">
        <h2 className="relative z-10 text-[40px] Cormo font-normal text-center uppercase md:text-5xl lg:text-6xl">
          TESTIMONIALS
        </h2>
        <span className="absolute top-0 left-0 HerrVon -mt-2 right-0 z-0 text-[100px] font-light text-center text-gray-200 transform -translate-y-1/4 md:text-6xl lg:text-[140px]">
          Guest
        </span>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10  flex items-center justify-center w-10 h-10 text-gray-400 transform -translate-y-1/2 bg-transparent top-1/2 hover:text-gray-700"
          aria-label="Previous testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 z-10  flex items-center justify-center w-10 h-10 text-gray-400 transform -translate-y-1/2 bg-transparent top-1/2 hover:text-gray-700"
          aria-label="Next testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <div className="flex flex-col items-center">
          <blockquote className="mb-6 text-xl font-light text-center text-gray-800 md:text-xl lg:text-2xl italic max-w-4xl">
            {currentTestimonial.quote}
          </blockquote>

          <div className="text-center">
            <p className="text-lg font-medium tracking-wide text-gray-900 uppercase md:text-xl">
              {currentTestimonial.name}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
