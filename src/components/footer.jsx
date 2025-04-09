"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Facebook,
  Twitter,
  Rss,
} from "lucide-react";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const linkHoverVariants = {
    hover: {
      color: "#a98868",
      x: 5,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <footer className="bg-[#151515] text-white">
      <motion.div
        className="max-w-7xl mx-auto px-4 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div variants={itemVariants}>
            <div className="flex justify-center">
              <Image
                src="/logo.png"
                alt="Naaz Stay Logo"
                width={220}
                height={220}
                className="w-[150px] h-auto sm:w-[180px] md:w-[200px] lg:w-[220px] brightness-0 invert mr-auto"
              />
            </div>
            <ul className="space-y-4">
              <motion.li
                className="flex items-start gap-3"
                whileHover="hover"
                variants={linkHoverVariants}
              >
                <MapPin className="h-5 md:w-8 w-5 md:h-8 text-[#a98868] mt-0.5" />
                <span>Saderbal, Nageen Lake, Saderbal, Srinagar, Ghat #7</span>
              </motion.li>
              <motion.li
                className="flex items-center gap-3"
                whileHover="hover"
                variants={linkHoverVariants}
              >
                <Mail className="h-5 w-5 text-[#a98868]" />
                <a href="mailto:naazstay@gmail.com">naazstay@gmail.com</a>
              </motion.li>
              <motion.li
                className="flex items-center gap-3"
                whileHover="hover"
                variants={linkHoverVariants}
              >
                <Phone className="h-5 w-5 text-[#a98868]" />
                <a href="tel:9541002517">Mobile: 9541002517 (Tanya)</a>
              </motion.li>
              <motion.li
                className="flex items-center gap-3"
                whileHover="hover"
                variants={linkHoverVariants}
              >
                <Phone className="h-5 w-5 text-[#a98868]" />
                <a href="tel:9810102517">Mobile: 9810102517 (Shazia)</a>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-light mb-6 text-white Cormo">ABOUT</h3>
            <ul className="space-y-4">
              {["About Us", "Services", "Rooms", "Our Location"].map((item) => (
                <motion.li
                  key={item}
                  className="pb-2 border-b border-gray-800 flex items-center"
                  whileHover="hover"
                  variants={linkHoverVariants}
                >
                  <Link
                    href="#"
                    className="w-full flex justify-between items-center"
                  >
                    <span>{item}</span>
                    <span className="text-[#a98868]">•</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-light mb-6 text-white Cormo">
              QUICK LINKS
            </h3>
            <ul className="space-y-4">
              {["Facebook", "Instagram", "YouTube", "Pinterest"].map((item) => (
                <motion.li
                  key={item}
                  className="pb-2 border-b border-gray-800 flex items-center"
                  whileHover="hover"
                  variants={linkHoverVariants}
                >
                  <Link
                    href="#"
                    className="w-full flex justify-between items-center"
                  >
                    <span>{item}</span>
                    <span className="text-[#a98868]">•</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="w-full">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter Your Email..."
                  className="w-full bg-[#1a1a1a] border border-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#a98868]"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <Mail className="h-5 w-5 text-[#a98868]" />
                </div>
              </div>
              <motion.button
                className="w-full bg-[#a98868] text-black font-medium py-3 mt-3"
                whileHover={{ backgroundColor: "white" }}
                whileTap={{ scale: 0.98 }}
              >
                SUBSCRIBE
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="border-t border-gray-800"></div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          <motion.div
            className="flex space-x-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {[
              { icon: <Linkedin className="h-5 w-5" />, href: "#" },
              { icon: <Facebook className="h-5 w-5" />, href: "#" },
              { icon: <Twitter className="h-5 w-5" />, href: "#" },
              { icon: <Rss className="h-5 w-5" />, href: "#" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="text-[#a98868] hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="text-4xl font-bold text-gray-100 Cormo tracking-widest mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex justify-center">
              <Image
                src="/logo.png"
                alt="Naaz Stay Logo"
                width={220}
                height={220}
                className="w-[150px] h-auto sm:w-[180px] md:w-[200px] lg:w-[220px] brightness-0 invert"
              />
            </div>
          </motion.div>

          <motion.div
            className="text-sm text-gray-500 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            <div className="flex flex-wrap justify-center gap-x-2">
              <Link href="#" className="text-[#a98868] hover:underline">
                Privacy Policy
              </Link>
              <span>/</span>
              <span>The site - &#169; 2025 / All Rights Reserved</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
