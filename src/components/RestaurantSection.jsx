import React from "react";
import Image from "next/image";

export default function RestaurantSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-neutral-900 overflow-hidden">
      <div className="relative w-full mb-12 lg:mb-16 text-center">
        <h2 className="relative z-10 text-[50px] text-[#b99470]  Cormo font-normal text-center uppercase md:text-5xl lg:text-[60px]">
          Services
        </h2>
        <span className="absolute top-0  -mt-6 md:-mb-4 left-0 right-0 z-0 text-[100px] HerrVon   text-center text-gray-700 transform -translate-y-1/4 md:text-6xl lg:text-[140px]">
          Authentic
        </span>
      </div>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto">
          {/* Left side - Image */}
           <div className="w-full md:w-1/2">
            <div className="relative group">
              <div className="relative w-full h-[500px] bg-zinc-800 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-[#b99470] text-5xl Cormo mb-2">Coming Soon</h3>
                  <p className="text-gray-400 dosis">Our new dining experience</p>
                </div>
                <div className="absolute inset-0 border border-[#b99470]/20"></div>
              </div>
            </div>
          </div>

          {/* Right side - Restaurant Information */}
          <div className="w-full md:w-1/2 space-y-8">
            <div className="space-y-4">
              <span className="text-[#b99470] text-sm tracking-wider uppercase dosis">
                Fine Dining Experience
              </span>
              <h2 className="text-5xl font-light text-[#b99470] Cormo leading-tight">
                Rooftop Dining
              </h2>
              <h3 className="text-2xl text-gray-300 dosis italic font-light">
                Dine with a View
              </h3>
            </div>

            <div className="space-y-6 text-gray-300 dosis">
              <p className="leading-relaxed border-l-2 border-[#b99470] pl-6">
                Our cozy rooftop restaurant offers a delightful dining
                experience with stunning panoramic views of the tranquil Nigeen
                Lake and the surrounding mountains. It&apos;s the perfect place
                to unwind and soak in the beauty of Kashmir.
              </p>

              <p className="leading-relaxed border-l-2 border-[#b99470] pl-6">
                We serve a multicuisine menu featuring a variety of flavorful
                vegetarian and non-vegetarian dishes, along with a range of
                quick snacks, hot and cold beverages, and traditional Kashmiri
                treats.
              </p>

              <p className="leading-relaxed border-l-2 border-[#b99470] pl-6">
                Whether you&apos;re enjoying a hearty meal, sipping on a cup of
                Kehwa, or just grabbing a light bite, our rooftop is your go-to
                spot for relaxing moments, great food, and breathtaking views.
              </p>
            </div>

            <div className="pt-4">
              <button className="group relative px-6 py-3 overflow-hidden  bg-[#b99470] text-white Cormo text-xl">
                <span className="relative group-hover:text-black z-10">
                  Reserve A Table
                </span>
                <div className="absolute inset-0 bg-white transform scale-x-0  group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <span className="absolute inset-0 flex items-center justify-center text-[#b99470] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300">
                  Reserve A Table
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}