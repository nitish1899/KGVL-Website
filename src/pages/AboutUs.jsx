
import React from "react";
import crausal1 from "../resource/crausal1.jpg";
import crausal2 from "../resource/crausal2.jpg";
import crausal3 from "../resource/crausal3.jpg";
import crausal4 from "../resource/crausal4.jpg";
import crausal5 from "../resource/crausal5.jpg";
import crausal6 from "../resource/crausal6.jpg";
import crausal7 from "../resource/crausal7.jpg";
import crausal8 from "../resource/crausal8.jpg";


import pusparaj from "../resource/pusparaj.png";
import uttam from "../resource/uttam.png";

import wave from "../resource/wave_final.png";
import goldenwave from "../resource/golden_wave.png";
import { Book } from "../components/Book";
import { Button2 } from "../components/Button2";
import { keyBenefits } from "../Data/KeyBenefits";
import { BenefitCard } from "../components/BenefitCard";

import news from "../resource/news_clipping.jpeg";
import news1 from "../resource/news1.jpg";
import news2 from "../resource/news2.jpg";
import { Link } from "react-router-dom";
import { BusinessBook } from "../components/BusinessBook";
import bike5 from '../resource/bike_main.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { MissionVision } from "../components/MissionVision";

export const AboutUs = () => {

  const images = [
    crausal1,
    crausal2,
    crausal3,
    crausal4,
    crausal5,
    crausal6,
    crausal7,
    crausal8,
  
  ];

  return (
    <div className="w-screen bg-gradient-to-b from-white to-white">

<div className="relative h-screen bg-cover bg-center bg-blue-400" style={{ backgroundImage: `url(${crausal1})` }}>
      <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-start p-8 md:p-16">
        <div className="max-w-2xl text-white">

      <div className="block uppercase tracking-wide text-sm font-bold mb-2 ml-2 flex gap-2">
      <div className="bg-yellow-500 w-2 h-4"></div>About Us
      </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4"
             style={{ textShadow: "2px 2px 4px yellow, 4px 4px 6px rgba(0, 0, 0, 0.6)" }}>KARISHMA GLOBAL VENTURES</h1>
          <p className="text-lg md:text-xl mb-8"
          style={{ textShadow: "2px 2px 4px yellow, 4px 4px 6px rgba(0, 0, 0, 0.6)" }}>
          Empower Public to motivate Green and Sustainable future using Hybrid Kits Convert your operating expenses negligible or near to zero
          </p>
          <Link to="/MissionVision" className="inline-block bg-yellow-500 text-blue-800 text-lg font-semibold py-3 px-6 rounded shadow hover:bg-yellow-400 transition duration-200">
            Explore More
          </Link>
        </div>
      </div>
    </div>


    {/* SDG Goals Section */}
<div className="w-full min-h-screen flex flex-col justify-center items-center relative px-4 sm:px-6 lg:px-8">
  {/* Background Wave */}
  <img src={wave} className="w-full h-full absolute top-0  opacity-60 object-cover" alt="Background Wave" />

  {/* Header Section */}
  <div className="text-center z-10 mb-8">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-300" style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)" }}>
       KGV
    </h1>
    <p className="text-sm md:text-lg font-bold max-w-4xl mx-auto leading-relaxed">
    We at KGV, are developing a product that is customer-oriented and manufactured with a vision of solving the problem of high transportation costs by converting currently available conventional two-wheelers into plug-in hybrid EVs. We also want to expose our product to the international market. The current landscape of transportation faces significant challenges in both petrol-powered and electric bikes, each with its set of environmental, infrastructure, and usability issues. We are providing E-mobility solutions to people as our hybrid accessories that solve the problem of both the cons of petrol as well as electric motorcycles. 
  </p>
  </div>
</div>

    <MissionVision />



<div className="container mx-auto p-6">

  <div className="text-center mb-12">
    <h2 className="text-4xl font-extrabold mb-6 text-yellow-300"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>Meet Our Expert Team</h2>
    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
      Our dedicated and experienced professionals are the driving force behind our success.
    </p>
  </div>

  {/* Team Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* Team Member 1 */}
    <div className="bg-white shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105">
      <div className="flex justify-center mb-6">
        <img
          src={pusparaj}
          alt="Mr. Purushottam P Singhal"
          className="w-48 h-48 rounded-full object-cover shadow-lg"
        />
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800">Mr. Purushottam P Singhal</h3>
        <p className="text-gray-500 text-lg mb-4">CEO</p>
        <p className="text-gray-700">
          CEO of the company with a B.Com, Mores, and MBA in Logistics. Mr. Singhal has led the organization
          since 1990, achieving milestones across Pan India. He is also a social activist and trustee of S.H. Jaiparia
          International Hospital, with a strong reputation in handling critical jobs.
        </p>
      </div>
    </div>

    <div className="bg-white shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105">
      <div className="flex justify-center mb-6">
        <img
          src={uttam}
          alt="Dr. Uttam Singhal"
          className="w-48 h-48 rounded-full object-cover shadow-lg"
        />
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800">Dr. Uttam Singhal</h3>
        <p className="text-gray-500 text-lg mb-4">Managing Director</p>
        <p className="text-gray-700">
          Managing Director with a B.Com (H) & MBA (Fin), leading with excellence since 2006. Recognized for his
          modern outlook and innovative solutions, Dr. Singhal has expanded our reach across India with a strong vendor
          base.
        </p>
      </div>
    </div>
  </div>
</div>




<div className="w-11/12 max-w-[1204px] mx-auto pt-11 pb-16">
  <div className="uppercase pb-5 text-center text-4xl md:text-5xl font-bold mb-4 text-yellow-300" 
    style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)" }}>
    Our Recent achievements...
  </div>
  <div className="w-full mx-auto pt-11 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <Link 
      className="items-center hover:scale-110 transition-all duration-500" 
      to={"https://hindi.news18.com/news/auto/petrol-bike-will-also-become-electric-2-brothers-have-invented-a-kit-7880156.html?1701845158"}
    >
      <img src={news} className="w-[300px] h-[300px] max-w-[300px] mx-auto border-black border-2 rounded-md" loading="lazy" />
    </Link>
    <Link 
      className="items-center hover:scale-110 transition-all duration-500" 
      to={"https://www.ehitavada.com/index.php?edition=NCpage&date=2024-08-29&page=3"}
    >
      <img src={news1} className="w-[300px] h-[300px] max-w-[300px] mx-auto border-black border-2 rounded-md" loading="lazy" />
    </Link>
    <Link 
      className="items-center hover:scale-110 transition-all duration-500" 
      to={"https://epaper.bhaskarhindi.com/3911626/%E0%A4%A8%E0%A4%BE%E0%A4%97%E0%A4%AA%E0%A5%81%E0%A4%B0-%E0%A4%B5%E0%A4%BF%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%AD/%E0%A4%A8%E0%A4%BE%E0%A4%97%E0%A4%AA%E0%A5%81%E0%A4%B0-%E0%A4%B5%E0%A4%BF%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%AD#page/19/1"}
    >
      <img src={news2} className="w-[300px] h-[300px] max-w-[300px] mx-auto border-black border-2 rounded-md" loading="lazy" />
    </Link>
  </div>
</div>
      <BusinessBook />
    </div>
  );
};


