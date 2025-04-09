"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Activities = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Activities Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl Cormo font-light text-amber-700">
                ACTIVITIES
              </h3>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-2xl Cormo font-light text-amber-700 mb-6">
                Explore Kashmir with Us – Tours & Experiences
              </h4>
              <p className="text-gray-700 text-base dosis leading-relaxed mb-8">
                At Naaz Stay, we go beyond just offering a place to stay – we
                help you experience Kashmir to the fullest.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">🚗</span>
                    <h5 className="text-xl font-semibold text-amber-700">
                      Car Rental Services
                    </h5>
                  </div>
                  <p className="text-gray-700">
                    Want to explore Srinagar and nearby towns at your own pace?
                    We offer reliable car rental services so you can travel in
                    comfort and style.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">🏞️</span>
                    <h5 className="text-xl font-semibold text-amber-700">
                      Guided Excursions
                    </h5>
                  </div>
                  <p className="text-gray-700">
                    Discover the stunning beauty of Kashmir with our custom
                    excursion tours – from hidden gems to must-see landmarks, we
                    help you explore it all.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">🚣</span>
                    <h5 className="text-xl font-semibold text-amber-700">
                      Shikara Rides
                    </h5>
                  </div>
                  <p className="text-gray-700">
                    No stay by Nigeen Lake is complete without a peaceful
                    Shikara ride. Glide across the lake and take in the tranquil
                    atmosphere and scenic beauty.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">🌳</span>
                    <h5 className="text-xl font-semibold text-amber-700">
                      Excursions by Shikara
                    </h5>
                  </div>
                  <p className="text-gray-700 mb-4">
                    We also offer special Shikara tours to iconic spots like:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>
                      Char Chinar – the beautiful island with four majestic
                      Chinar trees
                    </li>
                    <li>
                      Meena Bazaar – the local floating market for authentic
                      handicrafts
                    </li>
                    <li>
                      Floating Vegetable Market – a unique glimpse into
                      Kashmir&apos;s lake culture
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Cooking Classes Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl Cormo font-light text-amber-700">
                COOKING CLASSES ON REQUEST
              </h3>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-2xl Cormo font-light text-amber-700 mb-6">
                Experience Kashmiri Flavors – Cooking Classes at Naaz Stay
              </h4>
              <p className="text-gray-700 text-base dosis leading-relaxed mb-6">
                At Naaz Stay, we invite our guests to not just taste Kashmir,
                but to learn the secrets behind its rich and aromatic cuisine.
              </p>
              <p className="text-gray-700 text-base dosis leading-relaxed mb-6">
                Join our special cooking classes where you&apos;ll discover the art
                of preparing authentic Kashmiri dishes like:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <h5 className="text-xl font-semibold text-amber-700 mb-2">
                    Nadroo Yakhni
                  </h5>
                  <p className="text-gray-700">
                    A delicate yogurt-based lotus stem curry
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <h5 className="text-xl font-semibold text-amber-700 mb-2">
                    Kashmiri Haaz
                  </h5>
                  <p className="text-gray-700">
                    A traditional seasonal vegetable dish
                  </p>
                </motion.div>
              </div>
              <p className="text-gray-700 text-base dosis leading-relaxed">
                Whether you&apos;re a food lover or just curious about local culture,
                our cooking experience offers an intimate way to connect with
                Kashmir&apos;s culinary heritage – all while enjoying warm
                conversations and hearty meals.
              </p>
            </div>
          </motion.div>

          {/* Library Section */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl Cormo font-light text-amber-700">
                LIBRARY
              </h3>
              <p className="text-lg text-gray-600 mt-2">by Naaz Stays</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-2xl Cormo font-light text-amber-700 mb-6">
                Relax & Unwind – Our Cozy Lobby Library
              </h4>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-full md:w-1/3"
                >
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/s3.jpg"
                      alt="Naaz Stay Library"
                      className="object-cover w-full h-full"
                      width={500}
                      height={500}
                    />
                  </div>
                </motion.div>
                <div className="w-full md:w-2/3">
                  <p className="text-gray-700 text-base dosis leading-relaxed mb-4">
                    Our lobby area is designed as a peaceful corner where you
                    can relax, read, or simply take in the calm vibes of
                    Kashmir. It features a mini library with a wide selection of
                    books – from travel tales and fiction to culture and
                    history.
                  </p>
                  <p className="text-gray-700 text-base dosis leading-relaxed">
                    Whether you&apos;re curling up with a good book, journaling your
                    travel memories, or just enjoying a quiet moment with a cup
                    of Kahwa, this cozy space is the perfect retreat during your
                    stay at Naaz Stay.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Activities;
