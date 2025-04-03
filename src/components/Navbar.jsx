import React, { useState, useEffect, useRef  } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaChevronDown } from 'react-icons/fa';
import logo from '../resource/logokgv.jpg';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { Book } from "./Book";
import { Button2 } from "./Button2";

export const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hideContest, setHideContest] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [isBookingDropdownOpen, setBookingDropdownOpen] = useState(false);
  const [isMobileBookingDropdownOpen, setMobileBookingDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Dropdown ko reference dene ke liye useRef

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
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setFadeOut(true);
        setTimeout(() => setHideContest(true), 300); 
      } else {
        setFadeOut(false);
        setHideContest(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 w-screen bg-yellow-100">
      {/* Top Contact Info Section */}
      
      <div className="bg-black w-full flex flex-col md:flex-row items-center justify-between py-2 px-4">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-[60px] w-[100px]" />
        </div>
        {/* Contact Info */}
        <div className="hidden md:flex flex-1 justify-around items-center text-center">
          <div className="flex flex-col items-center">
            <span
              className="text-white text-3xl font-bold"
              style={{ textShadow: "2px 2px 4px yellow, 4px 4px 6px rgba(0, 0, 0, 0.6)" }}
            >
              KARISHMA GLOBAL VENTURES
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-white flex items-center">
              <FaMapMarkerAlt className="mr-2" size={20} /> Our Location
            </span>
            <span className="text-white">Pearls Omaxe, Netaji Subash Place, Pitampura, New Delhi</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-green-500 flex items-center">
              <FaPhoneAlt className="mr-2" size={16} /> Free Call +91-9661829944
            </span>
            <span className="text-white">Call Us Now 24/7 Customer Support</span>
          </div>
        </div>
      </div>

      {/* Navbar Links Section */}
      
      <div className="flex flex-col md:flex-row items-center justify-between max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mt-3">
        <div className="hidden md:flex font-inter gap-6 lg:gap-14 text-lg items-center">
          <Link to="/" className="hover:border-b-2 hover:border-[#ecf662] ">Home</Link>
          <Link to="/about" className="hover:border-b-2 hover:border-[#ecf662]">About</Link>
          <Link to="/product" className="hover:border-b-2 hover:border-[#ecf662]">Product</Link>
          <div className="relative" ref={dropdownRef}>
          <button onClick={() => setBookingDropdownOpen(!isBookingDropdownOpen)} className="hover:border-b-2 hover:border-[#ecf662] flex items-center">
              Booking <FaChevronDown className="ml-1" />
            </button>
            {isBookingDropdownOpen && (
  <div className="absolute bg-white shadow-xl rounded-xl mt-2 w-44 border border-gray-200 overflow-hidden backdrop-blur-md">
    <Link
      to="/Purchagekgvbike"
      onClick={() => setBookingDropdownOpen(false)}
      className="block px-5 py-3 text-gray-800 hover:bg-gray-100 transition-all duration-200 ease-in-out"
    >
      🏍️ KGV HYBRID BIKE 
    </Link>
    <Link
      to="/booking"
      onClick={() => setBookingDropdownOpen(false)}
      className="block px-5 py-3 text-gray-800 hover:bg-gray-100 transition-all duration-200 ease-in-out"
    >
      🔖 KGV HYBRID KIT
    </Link>
    <Link
      to="/rentkgvbike"
      onClick={() => setBookingDropdownOpen(false)}
      className="block px-5 py-3 text-gray-800 hover:bg-gray-100 transition-all duration-200 ease-in-out"
    >
      📃 KGV HYBRID BIKE RENT
    </Link>
  </div>
)}
          </div>
          <Link to="/distribution" className="hover:border-b-2 hover:border-[#ecf662]">Distributorship</Link>
          <Link to="/contactUs" className="hover:border-b-2 hover:border-[#ecf662]">Contact Us</Link>
        </div>

        <div className="hidden md:flex items-center gap-3 mb-3">
          <a href="https://www.facebook.com/share/DfiunaneErmM6FqR/?mibextid=qi2Omg" className="text-blue-600 text-2xl hover:text-blue-800" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://x.com/KGVllp?t=LyZz_BWLQevEMsUFA8ggew&s=08" className="text-blue-600 text-2xl hover:text-blue-600" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/kgvllp?igsh=MWZwbnZxbG4xZnZz" className="text-pink-500 text-2xl hover:text-pink-700" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/karishmaglobal/" className="text-blue-700 text-2xl hover:text-blue-900" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <Book />
          <Button2 />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
            <IoReorderThreeOutline size={30} color='black' />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black text-white flex flex-col items-center py-2">
          <Link to="/" className="py-2 hover:border-b-2 hover:border-[#ecf662]" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className="py-2 hover:border-b-2 hover:border-[#ecf662]" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/product" className="py-2 hover:border-b-2 hover:border-[#ecf662]" onClick={() => setMobileMenuOpen(false)}>Product</Link>
          <div className="relative w-full text-center">
      <button
        onClick={() => setMobileBookingDropdownOpen(!isMobileBookingDropdownOpen)}
        className="py-2 w-full flex items-center justify-center hover:border-b-2 hover:border-[#ecf662] transition duration-200"
      >
        Booking <FaChevronDown className="ml-1" />
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
          <Link to="/distribution" className="py-2 hover:border-b-2 hover:border-[#ecf662]" onClick={() => setMobileMenuOpen(false)}>Distributorship</Link>
          <Link to="/contactUs" className="py-2 hover:border-b-2 hover:border-[#ecf662]" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
          <Book />
          <Button2 />
        </div>
      )}

      {/* Participate Contest Section (Hidden when scrolled 500px) */}
      {!hideContest && (
        <div className={`transition-opacity duration-500 ease-in-out ${fadeOut ? 'opacity-0' : 'opacity-100'} flex flex-col sm:flex-row items-center justify-center animate-bg-color-change p-4`}>
          <div className="text-lg text-white text-center sm:text-left mb-4 sm:mb-0 sm:mr-4">
            [Contest is Live]!! Participate & get a chance to convert your petrol bike to a hybrid completely. Click below to know more.
          </div>
          <div>
            <Link
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 w-full sm:w-auto text-center block"
              to="https://play.google.com/store/apps/details?id=com.tsilteam.KGVHybridSol"
              target="_blank"
            >
              Participate Now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};