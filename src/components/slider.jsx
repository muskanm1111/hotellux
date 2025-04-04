"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Import Shadcn components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Slider = () => {
  const rooms = [
    {
      id: 1,
      name: "PREMIUM DOUBLE ROOM",
      type: "SUITE",
      view: "A quality room with sea or mountain view",
      description:
        "Premium Double Room Suite has a comfortable queen size or twin bed, a sitting area, separate desk and bathroom with walk-in rain dance shower or a bath and shower and modern art and neutral colors.",
      price: "400",
      image: "/s1.jpg",
    },
    {
      id: 2,
      name: "EXECUTIVE SUITE",
      type: "DELUXE",
      view: "Panoramic city views",
      description:
        "Our Executive Suite offers spacious comfort with a king-size bed, separate living area, work desk, and a luxurious bathroom with both rainfall shower and soaking tub.",
      price: "550",
      image: "/s2.jpg",
    },
    {
      id: 3,
      name: "FAMILY ROOM",
      type: "COMFORT",
      view: "Garden or courtyard view",
      description:
        "Perfect for families, this spacious room features two queen beds, a cozy seating area, and a large bathroom with bathtub and shower combination.",
      price: "480",
      image: "/s3.jpg",
    },
    {
      id: 4,
      name: "FAMILY ROOM",
      type: "COMFORT",
      view: "Garden or courtyard view",
      description:
        "Perfect for families, this spacious room features two queen beds, a cozy seating area, and a large bathroom with bathtub and shower combination.",
      price: "480",
      image: "/s4.jpg",
    },
    {
      id: 4,
      name: "FAMILY ROOM",
      type: "COMFORT",
      view: "Garden or courtyard view",
      description:
        "Perfect for families, this spacious room features two queen beds, a cozy seating area, and a large bathroom with bathtub and shower combination.",
      price: "480",
      image: "/s5.jpg",
    },
    {
      id: 4,
      name: "FAMILY ROOM",
      type: "COMFORT",
      view: "Garden or courtyard view",
      description:
        "Perfect for families, this spacious room features two queen beds, a cozy seating area, and a large bathroom with bathtub and shower combination.",
      price: "480",
      image: "/s6.jpg",
    },
    {
      id: 4,
      name: "FAMILY ROOM",
      type: "COMFORT",
      view: "Garden or courtyard view",
      description:
        "Perfect for families, this spacious room features two queen beds, a cozy seating area, and a large bathroom with bathtub and shower combination.",
      price: "480",
      image: "/s7.jpg",
    },
    {
      id: 4,
      name: "FAMILY ROOM",
      type: "COMFORT",
      view: "Garden or courtyard view",
      description:
        "Perfect for families, this spacious room features two queen beds, a cozy seating area, and a large bathroom with bathtub and shower combination.",
      price: "480",
      image: "/s8.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="w-full bg-[#f5f5f5] py-12 md:py-24">
      {/* Section Header with Watermark */}
      <div className="max-w-7xl  mx-auto px-4 mb-12 md:mb-16 relative text-center">
        <h2 className="text-[80px] md:text-[7rem]  HerrVon  font-serif text-gray-400 opacity-30 absolute top-0 left-1/2 transform -translate-x-1/2">
          Luxury
        </h2>
        <h1 className="text-5xl font-serif Cormo text-gray-800 pt-10 md:pt-16 relative z-10">
          ROOMS
        </h1>
      </div>

      {/* Room Carousel */}
      <div className="max-w-6xl mx-auto px-4">
        <Carousel
          className="w-full"
          onSelect={(index) => setCurrentSlide(index)}
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {rooms.map((room, index) => (
              <CarouselItem key={room.id} className="w-full">
                <div className="border-none shadow-none">
                  <div className="p-0">
                    <div className="flex flex-col md:flex-row">
                      {/* Room Image - Left Side */}
                      <div className="w-full md:w-1/2 h-[450px] relative">
                        <Image
                          src={room.image}
                          alt={room.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Room Details - Right Side */}
                      <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-white">
                        <h3 className="text-2xl md:text-3xl Cormo  text-gray-800 mb-2">
                          {room.name}
                        </h3>
                        <h3 className="text-2xl md:text-3xl Cormo  text-gray-800 mb-4">
                          {room.type}
                        </h3>

                        <p className="italic Cormo text-gray-500 mb-6">
                          {room.view}
                        </p>

                        <p className="text-gray-600 dosis mb-8">
                          {room.description}
                        </p>

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4">
                          <div className="text-xl text-[#a98868] dosis font-light mb-4 md:mb-0">
                            {room.price} / Night
                          </div>

                          <Link
                            href={`/rooms/${room.id}`}
                            className="flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            <span className="mr-2 Cormo italic">
                              Learn More
                            </span>
                            <ArrowRight size={16} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </div>
        </Carousel>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-8 space-x-4">
        {rooms.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-gray-800" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
