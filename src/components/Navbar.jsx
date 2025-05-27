import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../resource/kgvl.png";
import { IoReorderThreeOutline } from "react-icons/io5";
import { Book } from "./Book";
import { Button2 } from "./Button2";
import Vector from "../resource/Vector.png";
import {FaChevronDown} from "react-icons/fa";

export const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBookingDropdownOpen, setBookingDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Dropdown ko reference dene ke liye useRef
  const [isMobileBookingDropdownOpen, setMobileBookingDropdownOpen] =
    useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setBookingDropdownOpen(false); // Agar click dropdown ke bahar hua to close kar do
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sticky top-0 z-50 w-screen bg-white shadow-lg">
      <div className="flex flex-row md:flex-row items-center justify-between align-middle max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-[72px] w-[72px] my-1">
          <img src={logo} alt="Logo" className="h-full w-full object-contain" />
        </div>
        <div className="hidden md:flex font-inter gap-6 lg:gap-14 text-lg items-center">
          <Link to="/" className="hover:border-b-2 hover:border-[#ecf662] ">
            Home
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setBookingDropdownOpen(!isBookingDropdownOpen)}
              className="py-2 flex items-center justify-center hover:border-b-2 hover:border-[#ecf662] transition duration-200"
            >
              Bikes <FaChevronDown className="ml-1" />
            </button>

            {isBookingDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white text-green-700 rounded-md overflow-hidden shadow-lg z-50 w-52">
                <Link
                  to="/Purchagekgvbike"
                  onClick={() => setBookingDropdownOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-200 transition duration-200"
                >
                  🏍️ Buy KGV BIKE
                </Link>
                <Link
                  to="/booking"
                  onClick={() => setBookingDropdownOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-200 transition duration-200"
                >
                  🔖 Buy KGV KIT
                </Link>
                <Link
                  to="/rentkgvbike"
                  onClick={() => setBookingDropdownOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-200 transition duration-200"
                >
                  📃 Rent KGV BIKE
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/distribution"
            className="hover:border-b-2 hover:border-[#ecf662]"
          >
            Distribution
          </Link>
          <Link to="/event" className="hover:border-b-2 hover:border-[#ecf662]">
            Events
          </Link>
          <Link to="/about" className="hover:border-b-2 hover:border-[#ecf662] whitespace-nowrap">
            About Us
          </Link>

          <Link
            to="/contactUs"
            className="hover:border-b-2 hover:border-[#ecf662] whitespace-nowrap"
          >
            Contact Us
          </Link>
        </div>

        <button
          onClick={() => alert("Button clicked!")}
             className="
    hidden md:flex items-center justify-center 
    gap-2 
    bg-green-600 hover:bg-green-700 active:scale-95 
    transition-all duration-200 
    text-white text-base sm:text-base md:text-sm lg:text-base 
    font-bold 
    px-3 py-1.5 sm:px-3 sm:py-1.5 md:px-2.5 md:py-1.5 md:mx-4 lg:px-3 lg:py-2 
    rounded-xl
  ">
  <span className="whitespace-nowrap">Book Now</span>
          <img src={Vector} alt="Vector" className="h-[16px] w-[16px]" />
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white"
          >
            <IoReorderThreeOutline size={30} color="black" />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black text-white flex flex-col items-center py-2">
          <Link
            to="/"
            className="py-2 hover:border-b-2 hover:border-[#ecf662]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="py-2 hover:border-b-2 hover:border-[#ecf662]"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/product"
            className="py-2 hover:border-b-2 hover:border-[#ecf662]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Product
          </Link>

          <div className="relative w-full text-center">
            <button
              onClick={() =>
                setMobileBookingDropdownOpen(!isMobileBookingDropdownOpen)}
              className="hidden md:flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 active:scale-95 transition-all duration-200 text-white text-base font-semibold px-4 py-2 rounded-xl min-w-[140px] h-[44px]"
            >
              <span className="whitespace-nowrap">Book Now</span>
              <img src={Vector} alt="Vector" className="h-[16px] w-[16px]" />
            </button>

            {isMobileBookingDropdownOpen && (
              <div className="bg-gray-800 text-white w-full flex flex-col rounded-md overflow-hidden shadow-md">
                <Link
                  to="/Purchagekgvbike"
                  onClick={() => setBookingDropdownOpen(false)}
                  className="block px-6 py-2 hover:bg-gray-700 transition duration-200"
                >
                  🏍️ BOOK KGV HYBRID BIKE
                </Link>
                <Link
                  to="/booking"
                  onClick={() => setBookingDropdownOpen(false)}
                  className="block px-6 py-2 hover:bg-gray-700 transition duration-200"
                >
                  🔖 BOOK KGV HYBRID KIT
                </Link>
                <Link
                  to="/rentkgvbike"
                  onClick={() => setBookingDropdownOpen(false)}
                  className="block px-6 py-2 hover:bg-gray-700 transition duration-200"
                >
                  📃 RENT KGV HYBRID BIKE
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/distribution"
            className="py-2 hover:border-b-2 hover:border-[#ecf662]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Distributorship
          </Link>
          <Link
            to="/contactUs"
            className="py-2 hover:border-b-2 hover:border-[#ecf662]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
          <Book />
          <Button2 />
        </div>
      )}
    </div>
  );
};
