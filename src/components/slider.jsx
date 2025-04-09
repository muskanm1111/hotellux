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
      name: "PREMIUM DELUXE ROOM",
      type: "COMFORT",
      view: "Stunning views of Nigeen Lake and mountains",
      description:
        "Our Premium Deluxe Rooms are designed for guests who appreciate a blend of traditional charm and modern convenience. Each room offers all the essential comforts to make your stay as relaxing as possible. Whether you're waking up to the view of Nigeen Lake or unwinding after a day of exploring Srinagar, our Premium Deluxe Rooms offer the perfect setting for rest and rejuvenation.",
      features: [
        "Tea & Coffee maker in every room",
        "Complimentary Wi-Fi",
        "Hot & Cold Air-conditioning for all seasons",
        "24x7 Power Backup",
        "Attached private bathroom with essential toiletries",
        "Elegant interiors with Kashmiri-inspired décor",
      ],
      // price: "3500",
      image: "/os2.jpeg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="w-full bg-[#f5f5f5] py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 mb-12 md:mb-16 relative text-center">
        <h2 className="text-[80px] md:text-[7rem] HerrVon font-serif text-gray-400 opacity-30 absolute top-0 left-1/2 transform -translate-x-1/2">
          Comfort
        </h2>
        <h1 className="text-5xl font-serif Cormo text-gray-800 pt-10 md:pt-16 relative z-10">
          OUR ROOMS
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {rooms.length === 1 ? (
          // Single room view
          <div className="border-none shadow-none">
            <div className="p-0">
              <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden">
                <div className="w-full md:w-1/2 h-[400px] md:h-[600px] relative">
                  <Image
                    src={rooms[0].image}
                    alt={rooms[0].name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl Cormo text-gray-800 mb-2">
                    {rooms[0].name}
                  </h3>
                  <h3 className="text-2xl md:text-3xl Cormo text-gray-800 mb-4">
                    {rooms[0].type}
                  </h3>

                  <p className="italic Cormo text-gray-500 mb-6">
                    {rooms[0].view}
                  </p>

                  <p className="text-gray-600 dosis mb-8">
                    {rooms[0].description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-xl Cormo text-gray-800 mb-4">
                      Room Features:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600 dosis">
                      {rooms[0].features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-[#a98868] rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4">
                    {/* <div className="text-xl text-[#a98868] dosis font-light mb-4 md:mb-0">
                      {rooms[0].price} / Night
                    </div> */}

                    <Link
                      href={`/rooms/${rooms[0].id}`}
                      className="flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <span className="mr-2 Cormo italic">Learn More</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Multiple rooms carousel view
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
                      <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden">
                        <div className="w-full md:w-1/2 h-[400px] md:h-[600px] relative">
                          <Image
                            src={room.image}
                            alt={room.name}
                            fill
                            className="object-cover"
                            priority
                          />
                        </div>

                        <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
                          <h3 className="text-2xl md:text-3xl Cormo text-gray-800 mb-2">
                            {room.name}
                          </h3>
                          <h3 className="text-2xl md:text-3xl Cormo text-gray-800 mb-4">
                            {room.type}
                          </h3>

                          <p className="italic Cormo text-gray-500 mb-6">
                            {room.view}
                          </p>

                          <p className="text-gray-600 dosis mb-8">
                            {room.description}
                          </p>

                          <div className="mb-8">
                            <h4 className="text-xl Cormo text-gray-800 mb-4">
                              Room Features:
                            </h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600 dosis">
                              {room.features.map((feature, index) => (
                                <li key={index} className="flex items-center">
                                  <span className="w-2 h-2 bg-[#a98868] rounded-full mr-2"></span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

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
        )}
      </div>

      {rooms.length > 1 && (
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
      )}
    </section>
  );
};

export default Slider;
