"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Aboutaward = () => {
  // Animation variants
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };

  // Award logos data
  const awardLogos = [
    {
      name: "World Boutique Hotel Awards",
      src: "/a1.jpg",
      width: 200,
      height: 80,
    },
    {
      name: "TripAdvisor Travellers' Choice",
      src: "/a2.jpg",
      width: 100,
      height: 100,
    },
    {
      name: "World Luxury Spa Awards",
      src: "/a3.jpg",
      width: 100,
      height: 100,
    },
    {
      name: "European Hotel Design Awards",
      src: "/a4.jpg",
      width: 200,
      height: 80,
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Decorative title and main heading */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h3
            className="text-gray-300 text-5xl md:text-6xl lg:text-7xl font-light italic mb-2"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Winner
          </motion.h3>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            OUR AWARDS
          </motion.h2>
        </motion.div>

        {/* Content area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left column - Text content */}
          <motion.div variants={itemVariants}>
            <motion.h4
              className="text-2xl md:text-3xl lg:text-4xl font-serif mb-3"
              variants={itemVariants}
            >
              Awards Received 2001-2017
            </motion.h4>
            <motion.p
              className="text-gray-400 italic mb-6"
              variants={itemVariants}
            >
              Stylish global leader of hospitality.
            </motion.p>
            <motion.p
              className="text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque fermentum massa vel enim feugiat gravida. Phasellus
              velit risus, euismod a lacus et. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </motion.p>
          </motion.div>

          {/* Right column - Award logos */}
          <motion.div
            className="grid grid-cols-2 gap-8"
            variants={itemVariants}
          >
            {awardLogos.map((logo, index) => (
              <motion.div
                key={index}
                className="flex justify-center items-center p-2"
                variants={logoVariants}
                whileHover="hover"
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain max-h-24"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Aboutaward;
