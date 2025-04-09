"use client";
import React, { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Contact = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sections = [
    {
      id: 1,
      title: "Welcome to Naaz Stay",
      subtitle: "Your Cozy Retreat by Nigeen Lake",
      content:
        "Nestled right on the serene banks of Nigeen Lake, Naaz Stay offers an intimate and charming escape into the heart of Kashmir. Our homestay is a unique, small property that promises comfort, warmth, and an authentic local experience – just steps away from the peaceful waters.",
      image: "/os2.jpeg",
    },
    {
      id: 2,
      title: "About Us",
      subtitle: "True Kashmiri Hospitality",
      content:
        "Naaz Stay is not just a place to stay – it's an experience of true Kashmiri hospitality. Nestled right on the banks of the serene Nigeen Lake, our homestay is designed to make you feel at home while immersing you in the warmth, culture, and charm of Kashmir.",
      image: "/1.jpg",
    },
    {
      id: 3,
      title: "Premium Deluxe Room",
      subtitle: "Comfort with a Kashmiri Touch",
      content:
        "Our Premium Deluxe Rooms are designed for guests who appreciate a blend of traditional charm and modern convenience. Each room offers all the essential comforts to make your stay as relaxing as possible: Tea & Coffee maker in every room, Complimentary Wi-Fi, Hot & Cold Air-conditioning for all seasons, 24x7 Power Backup, Attached private bathroom with essential toiletries, Elegant interiors with Kashmiri-inspired décor.",
      image: "/os3.jpeg",
    },
    {
      id: 4,
      title: "Services",
      subtitle: "Rooftop Restaurant – Dine with a View",
      content:
        "Our cozy rooftop restaurant offers a delightful dining experience with stunning panoramic views of the tranquil Nigeen Lake and the surrounding mountains. It's the perfect place to unwind and soak in the beauty of Kashmir. We serve a multicuisine menu featuring a variety of flavorful vegetarian and non-vegetarian dishes, along with a range of quick snacks, hot and cold beverages, and traditional Kashmiri treats.",
      image: "/f3.jpg",
    },
    {
      id: 5,
      title: "Activities",
      subtitle: "Explore Kashmir with Us – Tours & Experiences",
      content:
        "At Naaz Stay, we go beyond just offering a place to stay – we help you experience Kashmir to the fullest. Car Rental Services, Guided Excursions, Shikara Rides, and Excursions by Shikara to iconic spots like Char Chinar, Meena Bazaar, and Floating Vegetable Market.",
      image: "/f4.jpg",
    },
    {
      id: 6,
      title: "Cooking Classes",
      subtitle: "Experience Kashmiri Flavors",
      content:
        "At Naaz Stay, we invite our guests to not just taste Kashmir, but to learn the secrets behind its rich and aromatic cuisine. Join our special cooking classes where you'll discover the art of preparing authentic Kashmiri dishes like Nadroo Yakhni, Kashmiri Haaz, and many more family-style, time-honored recipes from the Kashmiri kitchen.",
      image: "/f1.jpg",
    },
    {
      id: 7,
      title: "Library",
      subtitle: "Relax & Unwind – Our Cozy Lobby Library",
      content:
        "Our lobby area is designed as a peaceful corner where you can relax, read, or simply take in the calm vibes of Kashmir. It features a mini library with a wide selection of books – from travel tales and fiction to culture and history. Whether you're curling up with a good book, journaling your travel memories, or just enjoying a quiet moment with a cup of Kahwa, this cozy space is the perfect retreat during your stay at Naaz Stay.",
      image: "/f2.jpg",
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 px-4">
      <div className="w-full text-center mb-16">
        <h2 className="text-[80px] md:text-5xl lg:text-[140px] HerrVon text-gray-300">
          Naaz Stay
        </h2>
        <h2 className="text-4xl md:text-5xl Cormo lg:text-[60px] uppercase -mt-16">
          WELCOME
        </h2>
      </div>

      <div className="max-w-7xl mx-auto">
        <Carousel
          className="w-full mb-12"
          onSelect={(index) => setCurrentSlide(index)}
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {sections.map((section) => (
              <CarouselItem key={section.id} className="w-full">
                <div className="border-none shadow-none">
                  <div className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-1/2 h-[450px] relative">
                        <Image
                          src={section.image}
                          alt={section.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-white">
                        <h3 className="text-2xl md:text-3xl Cormo text-gray-800 mb-2">
                          {section.title}
                        </h3>
                        <h3 className="text-xl md:text-2xl Cormo text-[#b99470] mb-4">
                          {section.subtitle}
                        </h3>

                        <p className="text-gray-600 dosis mb-8">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </div>
        </Carousel>

        <div className="flex justify-center mt-8 space-x-4">
          {sections.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? "bg-gray-800" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
        <div className="flex flex-col">
          <div className="md:w-[400px] md:h-60 overflow-x-hidden bg-gray-100 flex flex-col items-center justify-center mb-8">
            <div className="text-gray-500 mb-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26428.70295067084!2d74.81165658983033!3d34.10569688072556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e185aa289c138b%3A0xd68ebadabcaaac43!2sNaaz%20Kashmir!5e0!3m2!1sen!2sin!4v1744197829070!5m2!1sen!2sin"
                width="400"
                height="240"
                referRepolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="px-4">
            <h3 className="text-2xl Cormo font-light text-gray-700 italic mb-6">
              Our contacts
            </h3>

            <div className="space-y-4 dosis">
              <div className="flex items-start max-w-sm">
                <MapPin className="h-5 w-5 text-[#b99470] mt-1 mr-3" />
                <p className="text-gray-600 text-wrap">
                  Saderbal, Nageen Lake, Saderbal, Srinagar, Ghat #7
                </p>
              </div>

              <div className="flex items-start">
                <Mail className="h-5 w-5 text-[#b99470] mt-1 mr-3" />
                <p className="text-gray-600">naazstay@gmail.com</p>
              </div>

              <div className="flex items-start">
                <Phone className="h-5 w-5 text-[#b99470] mt-1 mr-3" />
                <p className="text-gray-600">Mobile: 9541002517 (Tanya)</p>
              </div>

              <div className="flex items-start">
                <Phone className="h-5 w-5 text-[#b99470] mt-1 mr-3" />
                <p className="text-gray-600">Mobile: 9810102517 (Shazia)</p>
              </div>

              <div className="flex items-start">
                <Mail className="h-5 w-5 text-[#b99470] mt-1 mr-3" />
                <p className="text-gray-600">www.naazstays.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-[18px] dosis text-gray-500 mb-1"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b99470] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-[18px] dosis text-gray-500 mb-1"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b99470] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-[18px] dosis text-gray-500 mb-1"
              >
                Your message (optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b99470] focus:border-transparent"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-32 bg-[#b99470] hover:bg-black text-white py-2 px-4 transition duration-300"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
