"use client";
import React, { useState } from "react";

import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="flex items-center justify-between w-full fixed top-0 left-0 z-50 bg-white shadow-md transition-all duration-300 ease-in-out">
      <div className="flex items-start">
        <Link
          href="/"
          className="flex flex-col items-center justify-center px-2 bg-white h-16 md:h-20"
        >
          <Image
            src={"/logo1.1.png"}
            alt="logo"
            width={250}
            height={100}
            className="w-[120px] h-[200px] p-0 lg:p-6 sm:w-[150px] md:w-[180px] lg:w-[250px]"
          />
        </Link>
      </div>

      <nav className="hidden md:flex flex-1 justify-center bg-white  lg:h-10">
        <ul className="flex items-center space-x-4 lg:space-x-8 text-black dosis">
          <li>
            <Link
              href="/"
              className="uppercase text-base font-medium hover:text-[#b99470]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="uppercase text-base font-medium hover:text-[#b99470]"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/rooms"
              className="uppercase text-base font-medium hover:text-[#b99470]"
            >
              Rooms
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="uppercase text-base font-medium hover:text-[#b99470]"
            >
              Contacts
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center">
        <div className="flex md:flex items-center bg-white h-16 px-4 lg:h-20">
          <button className="p-2" aria-label="Search">
            <Search size={20} />
          </button>
        </div>

        <button
          className="md:hidden  text-black p-4 h-16"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <Link
          href="/booking"
          className="bg-[#b99470] text-white Cormo hover:bg-black  transition duration-300 ease-in-out px-4 py-2 h-16 flex items-center text-nowrap font-bold lg:h-20 lg:px-8"
        >
          BOOK NOW
        </Link>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 w-full text-gray-200 bg-black/95 z-50 shadow-lg">
          <nav className="px-4 py-4">
            <ul className="space-y-4 dosis">
              <li>
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="block uppercase text-sm font-medium hover:text-[#b99470]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={closeMenu}
                  className="block uppercase text-sm font-medium hover:text-[#b99470]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms"
                  onClick={closeMenu}
                  className="block uppercase text-sm font-medium hover:text-[#b99470]"
                >
                  Rooms
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block uppercase text-sm font-medium hover:text-[#b99470]"
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
