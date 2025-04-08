"use client";

import Image from "next/image";

const Services = () => {
  const services = [
    {
      title: "SPA SALON",
      image: "/f1.jpg",
      alt: "Spa salon treatment",
    },
    {
      title: "POOL",
      image: "/f2.jpg",
      alt: "Swimming pool",
    },
    {
      title: "RESTAURANT",
      image: "/f3.jpg",
      alt: "Restaurant dining area",
    },
    {
      title: "ACTIVITIES",
      image: "/f4.jpg",
      alt: "Fitness activities",
    },
  ];

  return (
    <section className="w-full max-w-full px-4 py-20 lg:py-28 mx-auto overflow-hidden bg-white md:px-8 lg:px-16">
     
      <div className="relative w-full mb-12 text-center">
        <h2 className="relative z-10 text-[50px]  Cormo font-normal text-center uppercase md:text-5xl lg:text-[60px]">
          SERVICES
        </h2>
        <span className="absolute top-0  -mt-6 md:-mb-4 left-0 right-0 z-0 text-[100px] HerrVon  text-center text-gray-300 transform -translate-y-1/4 md:text-6xl lg:text-[140px]">
          Awesome
        </span>
      </div>

   
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative w-full overflow-hidden group aspect-w-4 aspect-h-5"
          >
          
            <div className="relative w-full h-0 overflow-hidden pb-[125%]">
             
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={service.image}
                  alt={service.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 group-hover:scale-110"
                />

         
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>

                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <h3 className="text-xl sm:text-2xl font-light tracking-wider text-white uppercase md:text-3xl px-2">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
