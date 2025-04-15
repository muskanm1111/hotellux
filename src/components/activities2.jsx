"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaCar,
  FaMapMarkedAlt,
  FaShip,
  FaCompass,
  FaUtensils,
  FaClock,
  FaArrowRight,
  FaHatCowboy,
  FaBook,
  FaMugHot,
  FaPencilAlt,
} from "react-icons/fa";

const Activitiestwo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const ActivityCard = ({ icon: Icon, title, description, listItems }) => (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-gradient-to-br from-white to-amber-40/80 p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-sm border border-amber-100/50 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 rounded-xl bg-amber-100/50 group-hover:bg-amber-100 transition-colors">
          <Icon className="w-6 h-6 text-[#b99470]" />
        </div>
        <h5 className="text-2xl font-light text-[#b7916b] Cormo">{title}</h5>
      </div>
      <p className="text-gray-600 leading-relaxed mb-6 dosis">{description}</p>
      {listItems && (
        <ul className="space-y-3">
          {listItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 text-gray-600"
            >
              <span className="w-1.5 h-1.5 bg-[#b99470] rounded-full" />
              {item}
            </motion.li>
          ))}
        </ul>
      )}
      <motion.div
        className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
        whileHover={{ x: 5 }}
      >
        <FaArrowRight className="w-5 h-5 text-amber-600" />
      </motion.div>
    </motion.div>
  );

  const SectionTitle = ({ title, subtitle }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h3 className="text-5xl md:text-6xl font-light text-black Cormo mb-4">
        {title}
      </h3>
      {subtitle && <p className="text-xl text-gray-600 dosis italic">{subtitle}</p>}
    </motion.div>
  );

  const CulinarySection = () => (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/80 backdrop-blur-sm p-12 rounded-2xl shadow-lg border border-amber-100/50"
    >
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-3/5 space-y-8">
          <div className="flex items-center gap-4">
            <FaHatCowboy className="w-8 h-8 text-[#b99470]" />
            <h4 className="text-3xl font-light text-[#b99470] Cormo">
              Kashmiri Cooking Experience
            </h4>
          </div>
          <p className="text-gray-600 leading-relaxed">
            At Naaz Stay, we invite our guests to not just taste Kashmir, but to
            learn the secrets behind its rich and aromatic cuisine. Join our
            special cooking classes where you&apos;ll discover the art of preparing
            authentic Kashmiri dishes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <div className="flex items-start gap-3">
              <FaUtensils className="w-6 h-6 text-[#b99470]" />
              <div>
                <h5 className="font-medium text-[#b99470]">Signature Dishes</h5>
                <p className="text-gray-600 text-sm mt-1">
                  Nadroo Yakhni (yogurt-based lotus stem curry), Kashmiri Haaz
                  (traditional seasonal vegetable dish)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaClock className="w-6 h-6 text-[#b99470]" />
              <div>
                <h5 className="font-medium text-[#b99470]">Experience</h5>
                <p className="text-gray-600 text-sm mt-1">
                  Hands-on cooking sessions with warm conversations and hearty
                  meals
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-2/5">
          <div className="relative h-[300px] rounded-2xl overflow-hidden">
            <Image
              src="/c1.JPG"
              alt="Kashmiri Cooking Class"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );

  const LibrarySection = () => (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/80 backdrop-blur-sm p-12 rounded-2xl shadow-lg border border-amber-100/50"
    >
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/5">
          <div className="relative h-[300px] rounded-2xl overflow-hidden">
            <Image
              src="/os2.jpeg"
              alt="Naaz Stay Library"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>
        </div>
        <div className="lg:w-3/5 space-y-8">
          <div className="flex items-center gap-4">
            <FaBook className="w-8 h-8 text-[#b99470]" />
            <h4 className="text-3xl font-light text-[#b99470] Cormo">
              Cozy Lobby Library
            </h4>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Our lobby area is designed as a peaceful corner where you can relax,
            read, or simply take in the calm vibes of Kashmir. It features a
            mini library with a wide selection of books – from travel tales and
            fiction to culture and history.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <div className="flex items-start gap-3">
              <FaBook className="w-6 h-6 text-[#b99470]" />
              <div>
                <h5 className="font-medium text-[#b99470]">Book Collection</h5>
                <p className="text-gray-600 text-sm mt-1">
                  Travel tales, fiction, culture, and history books
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaMugHot className="w-6 h-6 text-[#b99470]" />
              <div>
                <h5 className="font-medium text-[#b99470]">Perfect For</h5>
                <p className="text-gray-600 text-sm mt-1">
                  Reading, journaling, or enjoying Kahwa in a peaceful setting
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="w-full py-32 bg-gradient-to-b from-[#f8f8f8] to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Main Title */}
          <motion.div variants={itemVariants} className="mb-24">
            <SectionTitle
              title="Activities"
              subtitle="Explore Kashmir with Us – Tours & Experiences"
            />
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-gray-600 dosis leading-relaxed">
                At Naaz Stay, we go beyond just offering a place to stay – we
                help you experience Kashmir to the fullest.
              </p>
            </div>
          </motion.div>

          {/* Activities Grid */}
          <motion.div variants={itemVariants} className="mb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ActivityCard
                icon={FaCar}
                title="Car Rental Services"
                description="Want to explore Srinagar and nearby towns at your own pace? We offer reliable car rental services so you can travel in comfort and style."
              />
              <ActivityCard
                icon={FaMapMarkedAlt}
                title="Guided Excursions"
                description="Discover the stunning beauty of Kashmir with our custom excursion tours – from hidden gems to must-see landmarks, we help you explore it all."
              />
              <ActivityCard
                icon={FaShip}
                title="Shikara Rides"
                description="No stay by Nigeen Lake is complete without a peaceful Shikara ride. Glide across the lake and take in the tranquil atmosphere and scenic beauty."
              />
              <ActivityCard
                icon={FaCompass}
                title="Excursions by Shikara"
                description="We also offer special Shikara tours to iconic locations around the lake."
                listItems={[
                  "Char Chinar – the beautiful island with four majestic Chinar trees",
                  "Meena Bazaar – the local floating market for authentic handicrafts",
                  "Floating Vegetable Market – a unique glimpse into Kashmir's lake culture",
                ]}
              />
            </div>
          </motion.div>

          {/* Cooking Classes Section */}
          <motion.div variants={itemVariants} className="mb-32">
            <SectionTitle
              title="Cooking Classes"
              subtitle="Experience Kashmiri Flavors – On Request"
            />
            <CulinarySection />
          </motion.div>

          {/* Library Section */}
          <motion.div variants={itemVariants}>
            <SectionTitle
              title="Library"
              subtitle="Relax & Unwind at Naaz Stay"
            />
            <LibrarySection />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Activitiestwo;
