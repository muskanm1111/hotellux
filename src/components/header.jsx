"use client";
import React, { useState } from "react";

import Link from "next/link";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
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
      {/* Left section - Logo */}
      <div className=" flex items-start">
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt="Logo"
            width={200}
            height={50}
            className="  h-16   lg:h-20"
          />
        </Link>
      </div>

      {/* Middle section - Navigation */}
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
              href="/"
              className="uppercase text-base font-medium hover:text-[#b99470]"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="uppercase text-base font-medium hover:text-[#b99470]"
            >
              Shortcodes
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="uppercase text-base font-medium hover:text-[#b99470]"
            >
              Post Types
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

      {/* Right section - Icons and CTA */}
      <div className="flex items-center">
        {/* Search and Cart Icons */}
        <div className="flex md:flex items-center bg-white h-16 px-4 lg:h-20">
          <button className="p-2" aria-label="Search">
            <Search size={20} />
          </button>
          {/* <Link href="/cart" className="p-2 relative" aria-label="Cart">
            <ShoppingBag size={20} />
            <span className="absolute top-0 right-0 bg-amber-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              1
            </span>
          </Link> */}
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
          className="bg-[#b99470] text-white hover:bg-black  transition duration-300 ease-in-out px-4 py-2 h-16 flex items-center text-nowrap font-medium lg:h-20 lg:px-8"
        >
          BOOK NOW
        </Link>
      </div>

      {/* Mobile Navigation Menu */}
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
                  href="/"
                  onClick={closeMenu}
                  className="block uppercase text-sm font-medium hover:text-[#b99470]"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="block uppercase text-sm font-medium hover:text-[#b99470]"
                >
                  Shortcodes
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="block uppercase text-sm font-medium hover:text-[#b99470]"
                >
                  Post Types
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
