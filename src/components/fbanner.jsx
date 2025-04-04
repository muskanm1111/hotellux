"use client";

import Image from "next/image";
import Link from "next/link";

const Fbanner = () => {
  return (
    <section className="relative w-full h-[80vh] md:h-[60vh]  overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/fb.jpg"
          alt="Aerial view of hotel lobby"
          layout="fill"
          objectFit="cover"
          priority
          className="brightness-[0.85]"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-24">
        {/* Decorative "Discount" Text */}
        <div className="relative mb-6">
          <span className="text-5xl  HerrVon  text-gray-400 opacity-40 md:text-4xl lg:text-7xl">
            Discount
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="max-w-lg text-3xl Cormo text-white uppercase md:text-4xl lg:text-5xl xl:text-5xl">
          TAKE ADVANTAGE OF OUR SEASONAL SPECIALS.
        </h1>

        {/* CTA Button */}
        <div className="mt-8 md:mt-12">
          <Link
            href="/reservations"
            className="inline-block dosis px-0 py-2 text-lg font-light text-amber-400 transition-all border-b border-transparent md:text-xl hover:border-amber-400"
          >
            Make a Reservation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Fbanner;
