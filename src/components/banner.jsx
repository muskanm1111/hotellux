"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const images = [
    {
      img: "/os2.jpeg",
      title: "Book Early Save More",
      description: "FINEST HOTEL COLLECTION",
    },
    {
      img: "/1.jpg",
      title: "Feel Like Home",
      description: "FINEST HOTEL COLLECTION",
    },
  ];
  const intervalRef = useRef(null);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const preloadImages = async () => {
      try {
        const imagePromises = images.map((item) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = item.img;
            img.onload = resolve;
            img.onerror = reject;
          });
        });
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error preloading images:", error);
        setImagesLoaded(true);
      }
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (imagesLoaded) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [imagesLoaded, images.length]);

 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const imageVariants = {
    enter: {
      opacity: 0,
      scale: 1.2,
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        opacity: { duration: 1 },
        scale: { duration: 8 },
      },
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: {
        opacity: { duration: 1 },
        scale: { duration: 2 },
      },
    },
  };

  return (
    <div className="relative w-full h-[80vh] md:h-screen overflow-hidden">
   
      {imagesLoaded && (
        <div className="absolute inset-0 w-full h-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1 }}
            className="absolute w-full h-full bg-black inset-0 z-[5]"
          />
          <AnimatePresence mode="sync">
            <motion.div
              key={currentIndex}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={images[currentIndex].img}
                alt={`banner-${currentIndex}`}
                fill
                className="object-cover object-center w-full h-full bg-black/20"
                priority={true}
                sizes="(max-width: 640px) 100vw,
                       (max-width: 768px) 100vw,
                       (max-width: 1024px) 100vw,
                       100vw"
                quality={90}
           
              />
            </motion.div>
          </AnimatePresence>
        </div>
      )}









      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-30 hover:bg-white/50 p-1 sm:p-2 bg-black/20 rounded-full hidden sm:block"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-30 hover:bg-white/50 p-1 sm:p-2 bg-black/20 rounded-full hidden sm:block"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

    
      <section className="absolute inset-0 z-20 flex items-center justify-center px-4 sm:px-6">
        <div className="container mx-auto">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 p-2 sm:p-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-6xl xl:text-[6.5rem] HerrVon text-white leading-tight tracking-wide"
              variants={headingVariants}
            >
              {images[currentIndex].title}
            </motion.h1>

            <motion.p
              className="text-gray-200 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-2xl mx-auto px-2"
              variants={itemVariants}
            >
              {images[currentIndex].description}
            </motion.p>

            <motion.button
              className="bg-[#b99470] text-white hover:text-[#b99470] dosis  py-2 sm:py-3 px-4 sm:px-6 md:px-8 text-xs sm:text-sm md:text-base shadow-lg hover:bg-[#f7f7f7] transition duration-300 ease-in-out "
              variants={itemVariants}
            >
              ROOMS & SUITS
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
