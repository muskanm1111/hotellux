"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
      name: "DELUXE LAKE VIEW",
      type: "ROOM",
      view: "Stunning views of Nigeen Lake and mountains",
      description:
        "Our Deluxe Lake View room offers a comfortable queen-size bed, a cozy sitting area, and a private bathroom. The room is adorned with traditional Kashmiri décor and features large windows that frame the breathtaking views of Nigeen Lake and the surrounding mountains.",
      price: "3500",
      image: "/os2.jpeg",
    },
    {
      id: 2,
      name: "PREMIUM SUITE",
      type: "SUITE",
      view: "Panoramic lake and mountain views",
      description:
        "The Premium Suite at Naaz Stay offers spacious comfort with a king-size bed, separate living area, and a luxurious bathroom. Enjoy the best views of Nigeen Lake from your private balcony while experiencing authentic Kashmiri hospitality.",
      price: "4500",
      image: "/40.jpeg",
    },
    {
      id: 3,
      name: "FAMILY ROOM",
      type: "COMFORT",
      view: "Perfect for families with children",
      description:
        "Our Family Room is designed for comfort and convenience, featuring two queen beds, a cozy seating area, and a spacious bathroom. Ideal for families traveling with children, this room offers a peaceful retreat after a day of exploring Kashmir.",
      price: "4000",
      image: "/50.jpeg",
    },
    {
      id: 4,
      name: "MOUNTAIN VIEW",
      type: "ROOM",
      view: "Scenic mountain vistas",
      description:
        "The Mountain View room offers spectacular views of the surrounding mountains. With a comfortable queen bed, modern amenities, and traditional Kashmiri touches, this room provides a perfect blend of comfort and local charm.",
      price: "3200",
      image: "/40.jpeg",
    },
    {
      id: 5,
      name: "COUPLE SUITE",
      type: "ROMANTIC",
      view: "Intimate setting with lake views",
      description:
        "Our Couple Suite is designed for romance and relaxation, featuring a king-size bed, a private balcony with lake views, and elegant Kashmiri décor. Perfect for honeymooners or couples seeking a romantic getaway in Kashmir.",
      price: "3800",
      image: "/50.jpeg",
    },
    {
      id: 6,
      name: "TRIPLE ROOM",
      type: "COMFORT",
      view: "Spacious accommodation for three",
      description:
        "The Triple Room is ideal for friends traveling together or small families. With three single beds, a comfortable seating area, and a spacious bathroom, this room offers practical comfort with traditional Kashmiri hospitality.",
      price: "4200",
      image: "/60.jpeg",
    },
    {
      id: 7,
      name: "BUDGET ROOM",
      type: "ECONOMY",
      view: "Comfortable and affordable",
      description:
        "Our Budget Room offers comfortable accommodation at an affordable price. With a queen-size bed, essential amenities, and a clean, cozy environment, this room is perfect for budget-conscious travelers who still want to experience the beauty of Kashmir.",
      price: "2500",
      image: "/70.jpeg",
    },
    {
      id: 8,
      name: "EXECUTIVE ROOM",
      type: "BUSINESS",
      view: "Work-friendly with lake views",
      description:
        "The Executive Room is designed for business travelers who need a comfortable workspace with a view. Featuring a work desk, high-speed internet, and a comfortable bed, this room combines functionality with the serene beauty of Nigeen Lake.",
      price: "3600",
      image: "/80.jpeg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="w-full bg-[#f5f5f5] py-12 md:py-24">
      <div className="max-w-7xl  mx-auto px-4 mb-12 md:mb-16 relative text-center">
        <h2 className="text-[80px] md:text-[7rem]  HerrVon  font-serif text-gray-400 opacity-30 absolute top-0 left-1/2 transform -translate-x-1/2">
          Comfort
        </h2>
        <h1 className="text-5xl font-serif Cormo text-gray-800 pt-10 md:pt-16 relative z-10">
          OUR ROOMS
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <Carousel
          className="w-full"
          onSelect={(index) => setCurrentSlide(index)}
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {rooms.map((room) => (
              <CarouselItem key={room.id} className="w-full">
                <div className="border-none shadow-none">
                  <div className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-1/2 h-[450px] relative">
                        <Image
                          src={room.image}
                          alt={room.name}
                          fill
                          className="object-cover"
                        />
                      </div>

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
