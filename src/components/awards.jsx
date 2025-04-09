"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Awards = () => {
  const awards = [
    {
      id: 1,
      image: "/a1.jpg",
      alt: "Best Homestay in Kashmir 2023",
    },
    {
      id: 2,
      image: "/a2.jpg",
      alt: "Top Rated on TripAdvisor",
    },
    {
      id: 3,
      image: "/a3.jpg",
      alt: "Excellence in Kashmiri Hospitality",
    },
    {
      id: 4,
      image: "/a4.jpg",
      alt: "Best Lake View Accommodation",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="w-full bg-white pb-10 md:pb-12">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-2 items-center justify-items-center"
        >
          {awards.map((award) => (
            <motion.div
              key={award.id}
              variants={itemVariants}
              className="w-full max-w-[190px] h-32 relative flex items-center justify-center"
            >
              <Image
                src={award.image}
                alt={award.alt}
                width={180}
                height={96}
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
