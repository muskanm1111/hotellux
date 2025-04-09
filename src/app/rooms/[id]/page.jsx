"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const RoomPage = () => {
  const room = {
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
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-[400px] md:h-[600px]">
            <Image
              src={room.image}
              alt={room.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl Cormo text-gray-800 mb-4">
              {room.name}
            </h1>

            <div className="prose max-w-none mb-12">
              <h2 className="text-2xl Cormo text-gray-800 mb-4">
                Room Description
              </h2>
              <p className="text-gray-600 dosis mb-8">{room.description}</p>

              <h2 className="text-2xl Cormo text-gray-800 mb-4">
                Room Features
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {room.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-600 dosis"
                  >
                    <span className="w-2 h-2 bg-[#a98868] rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl Cormo text-gray-800 mb-4">
                Book Your Stay
              </h2>
              <p className="text-gray-600 dosis mb-6">
                Experience the perfect blend of comfort and luxury in our
                Premium Deluxe Room. Contact us to make your reservation or
                inquire about availability.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#a98868] text-white px-8 py-3 rounded-md hover:bg-[#8f7357] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
