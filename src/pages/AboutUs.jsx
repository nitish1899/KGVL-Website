
import React from "react";
// import crausal1 from "../resource/bikeabout.jpg";
// import crausal2 from "../resource/crausal2.jpg";
// import crausal3 from "../resource/crausal3.jpg";
// import crausal4 from "../resource/crausal4.jpg";
// import crausal5 from "../resource/crausal5.jpg";
// import crausal6 from "../resource/crausal6.jpg";
// import crausal7 from "../resource/crausal7.jpg";
// import crausal8 from "../resource/crausal8.jpg";


import pusparaj from "../resource/pusparaj.png";
import uttam from "../resource/uttam.png";
import Siddharth from "../resource/Siddharth.jpeg";

import wave from "../resource/wave_final.png";
// import goldenwave from "../resource/golden_wave.png";
// import { Book } from "../components/Book";
// import { Button2 } from "../components/Button2";
// import { keyBenefits } from "../Data/KeyBenefits";
// import { BenefitCard } from "../components/BenefitCard";

// import news from "../resource/news_clipping.jpeg";
// import news1 from "../resource/news1.jpg";
// import news2 from "../resource/news2.jpg";
// import { Link } from "react-router-dom";
// import { BusinessBook } from "../components/BusinessBook";
// import bike5 from '../resource/bike_main.png';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { MissionVision } from "../components/MissionVision";

export const AboutUs = () => {

  // const images = [
  //   crausal1,
  //   crausal2,
  //   crausal3,
  //   crausal4,
  //   crausal5,
  //   crausal6,
  //   crausal7,
  //   crausal8,
  
  // ];

  return (
    <div className="w-screen bg-gradient-to-b from-white to-white">


<div className="w-full min-h-screen flex flex-col justify-center items-center relative px-4 sm:px-6 lg:px-8 bg-white">
  {/* Background Wave */}
  <img
    src={wave}
    className="w-full h-full absolute top-0 left-0 opacity-30 object-cover pointer-events-none"
    alt="Background Wave"
  />

  {/* Main Card */}
  <div className="max-w-4xl w-full z-10 px-6 py-10">
    <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl p-8 text-center">
           <h1 className="text-2xl font-bold text-green-600 mb-6"> The KGV</h1>
      <p className="text-sm md:text-lg font-medium text-gray-700 leading-relaxed">
        We at KGV, are developing a product that is customer-oriented and manufactured with a vision of solving the problem of high transportation costs by converting currently available conventional two-wheelers into plug-in hybrid EVs. We also want to expose our product to the international market. The current landscape of transportation faces significant challenges in both petrol-powered and electric bikes, each with its set of environmental, infrastructure, and usability issues. We are providing E-mobility solutions to people as our hybrid accessories that solve the problem of both the cons of petrol as well as electric motorcycles.
      </p>
    </div>
  </div>
</div>


      <div className="bg-white rounded-xl shadow-2xl p-6 text-center max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-green-600 mb-6">About Us</h2>
        <div className="grid md:grid-cols-2 gap-6 text-left">
<div className="rounded-lg p-4 shadow-md bg-gradient-to-br from-green-100 to-white border border-green-400">
  <h3 className="text-xl font-semibold text-green-700 mb-2 text-center">Vision</h3>
  <p className="text-gray-700 text-sm">
    We started from the bike and will make its delivery shortly to all in southern India. Our team of engineering excellence is also working on bringing this system to other and wider modes of transportation including 3-wheelers, cars, LMMs, LCVs, and even HCVs.
  </p>
</div>


    <div className="rounded-lg p-4 shadow-md bg-gradient-to-br from-green-100 to-white border border-green-400">
            <h3 className="text-xl font-semibold text-green-700 mb-2 text-center">Mission</h3>
            <ul className="text-gray-700 text-sm list-disc pl-4 space-y-1">
              <li>To save mother Earth from end noise pollution as well as a greener and cleaner environment for saving life and humanity.</li>
              <li>We are creating a noise-free instance for the environment and also the riders and co-riders by introducing the hybrid electric kit.</li>
              <li>To reduce the entire cost of conversion, accelerate hybrid models by more than 70%.</li>
              <li>Our plug-in hybrid was designed to fit the battery and can be charged inside the home.</li>
            </ul>
          </div>
        </div>
      </div>


          {/* Visionary Leaders Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 text-center my-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-green-600 mb-2">Meet Our Visionary Leaders</h2>
        <p className="text-gray-600 mb-6 text-sm max-w-3xl mx-auto">
          Our CEO and MD are the driving force behind our innovation and success, leading with expertise and a commitment to excellence.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Leader 1 */}
       <div className="rounded-lg p-4 shadow-md bg-gradient-to-br from-green-100 to-white border border-green-400">
         <div className="flex justify-center mb-6">
        <img
          src={pusparaj}
          alt="Mr. Purushottam P Singhal"
          className="w-48 h-48 rounded-full object-cover shadow-lg"
        />
      </div> {/* Placeholder for image */}
            <h3 className="text-green-700 font-semibold">Mr. Purushottam P Singhal</h3>
            <p className="text-xs text-gray-700 font-semibold mb-1">Chief Executive Officer</p>
            <p className="text-sm text-gray-600">
              Mr. Singhal, with a Bcom, Mcom, and MBA (Logistics), leads the company as CEO. He has worked in Amazon, Flipkart, and Meesho as a trusted asset across 6+ years in logistics. Let us know your case and we'll resolve it.
            </p>
          </div>

          {/* Leader 2 */}
<div className="rounded-lg p-4 shadow-md bg-gradient-to-br from-green-100 to-white border border-green-400">
         <div className="flex justify-center mb-6">
        <img
          src={uttam}
          alt="Dr. Uttam Singhal"
          className="w-48 h-48 rounded-full object-cover shadow-lg"
        />
      </div> {/* Placeholder for image */}
            <h3 className="text-green-700 font-semibold">Dr. Uttam Singhal</h3>
            <p className="text-xs text-gray-700 font-semibold mb-1">Managing Director</p>
            <p className="text-sm text-gray-600">
              Dr. Singhal, our Managing Director, holds a B.Com, an MBA in Finance, and a Doctorate. His leadership inspires the organization. His strategic vision has strengthened our presence across India.
            </p>
          </div>

          {/* Leader 3 */}
      <div className="rounded-lg p-4 shadow-md bg-gradient-to-br from-green-100 to-white border border-green-400">
    <div className="flex justify-center mb-6">
        <img
          src={Siddharth}
          alt="Mr. Siddharth "
          className="w-48 h-48 rounded-full object-cover shadow-lg"
        />
      </div>
            <h3 className="text-green-700 font-semibold">Mr. Siddharth Kashyap</h3>
            <p className="text-xs text-gray-700 font-semibold mb-1">Chief Financial Officer</p>
            <p className="text-sm text-gray-600">
              CFO & COO with expertise in financial management, Siddharth ensures efficiency and vision. He has been instrumental in driving financial and operational effectiveness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};