"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/breadcrumb";

const RoomsPage = () => {
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
      image: "/os2.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Breadcrumb
        title="OUR ROOMS"
        items={[
          { label: "Home", href: "/" },
          { label: "Rooms", href: "/rooms" },
        ]}
        backgroundImage="/os2.jpeg"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl Cormo text-gray-800 mb-4">
              Discover Our Rooms
            </h2>
            <p className="text-gray-600 dosis max-w-3xl mx-auto">
              Experience the perfect blend of comfort and luxury in our
              carefully designed rooms. Each room is thoughtfully crafted to
              provide you with a memorable stay in the heart of Kashmir.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2 h-[400px] md:h-[600px] relative">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
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

                    <div className="mt-auto">
                      <Link
                        href={`/rooms/${room.id}`}
                        className="inline-flex items-center text-[#a98868] hover:text-[#8f7357] transition-colors"
                      >
                        <span className="mr-2 Cormo italic">View Details</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomsPage;
