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
          WONDERFUL HOTEL IN THE
          <br />
          HEART OF ATHENS, GREECE.
        </h1>

       
        <p className="text-gray-600 dosis leading-relaxed mb-10 max-w-2xl mx-auto text-xl">
          Hotel LUX is an oasis in the heart of the historic and business center
          of Athens. Here the Greek art of hospitality complements the legendary
          passion for service of the Spanish chain, creating a unique living
          experience. Located in the heart of Athens, only 200 m away from the
          central metro station. Enjoy a comfortable stay in our Luxury Room.
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
              alt="Hotel view"
              fill
              className="object-left object-cover "
            />
          </div>

         
          <div className="h-80 md:h-96 relative overflow-hidden">
            <Image
              src="/os2.jpeg"
              alt="Hotel guest"
              fill
              className="object-top object-cover "
            />
          </div>

       
          <div className="h-80 md:h-96 relative overflow-hidden">
            <Image
              src="/os3.jpeg"
              alt="Hotel dining"
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
