import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <section className="w-full bg-white">
      <div className=" mx-auto px-4 py-16 md:py-24 text-center max-w-7xl">
        <div className="relative mb-9">
          <h2 className="text-[100px] xl:text-[6.5rem] HerrVon  text-[#dedede] opacity-90 absolute top-0 left-0 right-0 ">
            Welcome
          </h2>
          <div className="pt-8 md:pt-12"></div> {/* Spacing for watermark */}
        </div>

        <h1 className="text-[40px] Cormo md:text-4xl  text-gray-800 leading-tight mb-8">
          WELCOME TO NAAZ STAY
          <br />
          YOUR COZY RETREAT BY NIGEEN LAKE
        </h1>

        <p className="text-gray-600 dosis leading-relaxed mb-10 max-w-2xl mx-auto text-xl">
          Nestled right on the serene banks of Nigeen Lake, Naaz Stay offers an
          intimate and charming escape into the heart of Kashmir. Our homestay
          is a unique, small property that promises comfort, warmth, and an
          authentic local experience – just steps away from the peaceful waters.
        </p>

        <p className="text-gray-600 dosis leading-relaxed mb-10 max-w-2xl mx-auto text-xl">
          Each of our tastefully designed rooms comes with attached bathrooms
          and is adorned with traditional Kashmiri décor, blending elegance with
          cultural richness. Whether you&apos;re sipping Kahwa by the window or
          relaxing after a day of exploring, you&apos;ll feel right at home.
        </p>

        <p className="text-gray-600 dosis leading-relaxed mb-10 max-w-2xl mx-auto text-xl">
          The highlight? Our rooftop restaurant – the perfect spot to unwind
          with a hot cup of tea while soaking in breathtaking views of Nigeen
          Lake and the majestic mountains that frame it.
        </p>

        <p className="text-gray-600 dosis leading-relaxed mb-10 max-w-2xl mx-auto text-xl">
          Whether you&apos;re a solo traveler, a couple, or a small group of friends,
          Naaz Stay is your cozy base to experience the beauty, tranquility, and
          warmth of Kashmir.
        </p>

        <div className="mb-16">
          <Link
            href="/services"
            className="text-[#b99470] Cormo italic text-2xl hover:text-amber-700 transition-colors"
          >
            View Our Services
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-80 md:h-96 relative overflow-hidden">
            <Image
              src="/os1.jpeg"
              alt="Naaz Stay view"
              fill
              className="object-left object-cover "
            />
          </div>

          <div className="h-80 md:h-96 relative overflow-hidden">
            <Image
              src="/os2.jpeg"
              alt="Naaz Stay guest"
              fill
              className="object-top object-cover "
            />
          </div>

          <div className="h-80 md:h-96 relative overflow-hidden">
            <Image
              src="/os3.jpeg"
              alt="Naaz Stay dining"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
