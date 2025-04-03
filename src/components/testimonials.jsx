"use client";

import { useState } from "react";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Chilling out on the bed in your hotel room watching television, while wearing your own pajamas, is sometimes the best part of a vacation.",
      name: "LAURA MARANO",
      title: "DESIGNER",
      image: "/t1.jpg",
    },
    {
      id: 2,
      quote:
        "The attention to detail and personalized service made our stay truly unforgettable. The staff went above and beyond to ensure our comfort.",
      name: "MICHAEL CHEN",
      title: "ENTREPRENEUR",
      image: "/t2.jpg",
    },
    {
      id: 3,
      quote:
        "From the moment we arrived, we were treated like royalty. The amenities are world-class and the views from our suite were absolutely breathtaking.",
      name: "SOPHIA RODRIGUEZ",
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
    <section className="w-full max-w-full px-4 py-16 mx-auto overflow-hidden bg-white md:px-8 lg:px-16">
      {/* Heading with the stylish "Client" text */}
      <div className="relative w-full mb-16 text-center">
        <h2 className="relative z-10 text-4xl font-normal text-center uppercase md:text-5xl lg:text-6xl">
          TESTIMONIALS
        </h2>
        <span className="absolute top-0 left-0 right-0 z-0 text-5xl font-light text-center text-gray-200 transform -translate-y-1/4 md:text-6xl lg:text-7xl">
          Client
        </span>
      </div>

      {/* Testimonial Slider */}
      <div className="relative max-w-4xl mx-auto">
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 flex items-center justify-center w-10 h-10 text-gray-400 transform -translate-y-1/2 bg-transparent top-1/2 hover:text-gray-700"
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
          className="absolute right-0 z-10 flex items-center justify-center w-10 h-10 text-gray-400 transform -translate-y-1/2 bg-transparent top-1/2 hover:text-gray-700"
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

        {/* Testimonial Content */}
        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <div className="relative w-20 h-20 mb-8 overflow-hidden rounded-full md:w-24 md:h-24">
            <Image
              src={currentTestimonial.image}
              alt={`Testimonial by ${currentTestimonial.name}`}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-300"
            />
          </div>

          {/* Quote */}
          <blockquote className="mb-6 text-lg font-light text-center text-gray-800 md:text-xl lg:text-2xl italic max-w-2xl">
            {currentTestimonial.quote}
          </blockquote>

          {/* Name and Title */}
          <div className="text-center">
            <p className="text-lg font-medium tracking-wide text-gray-900 uppercase md:text-xl">
              {currentTestimonial.name}
            </p>
            <p className="text-sm font-light tracking-wider text-gray-500 uppercase md:text-base">
              {currentTestimonial.title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
