import React from "react";
import Image from "next/image";

const Awards = () => {
  // Award data with image paths and alt text
  const awards = [
    {
      id: 1,
      image: "/a1.jpg",
      alt: "World Boutique Hotel Awards",
    },
    {
      id: 2,
      image: "/a2.jpg",
      alt: "2015 Travellers' Choice - TripAdvisor",
    },
    {
      id: 3,
      image: "/a3.jpg",
      alt: "World Luxury Spa Winner 2016",
    },
    {
      id: 4,
      image: "/a4.jpg",
      alt: "European Hotel Design Awards",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-2 items-center justify-items-center">
          {awards.map((award) => (
            <div
              key={award.id}
              className="w-full max-w-[180px] h-24 relative flex items-center justify-center"
            >
              <Image
                src={award.image}
                alt={award.alt}
                width={180}
                height={96}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
