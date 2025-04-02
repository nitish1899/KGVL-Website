

import React from "react";
import crausal1 from "../resource/gallary1.JPG";
import crausal2 from "../resource/gallary2.JPG";
import crausal3 from "../resource/bikeabout.jpg";
import crausal4 from "../resource/avanger.jpg";
import crausal5 from "../resource/victor.jpg";
import crausal6 from "../resource/crausal6.jpg";
import crausal7 from "../resource/crausal7.jpg";
import crausal8 from "../resource/crausal8.jpg";
import crausal15 from "../resource/kgvsecond.png";
import crausal16 from "../resource/kgvfirst.png";
import crausal17 from "../resource/kgvthird.png";
import sdg1 from "../resource/sdg1.png";
import sdg2 from "../resource/sdg2.png";
import sdg3 from "../resource/sdg3.png";
import sdg4 from "../resource/sdg4.png";
import sdg5 from "../resource/sdg5.png";
import sdg6 from "../resource/sdg6.png";
import sdg7 from "../resource/sdg7.png";
import sdg8 from "../resource/sdg8.png";
import kgvwherehouse2 from "../resource/kgvwherehouse2.jpeg";
import zamatoboy from "../resource/zamatoboy.mp4";
import zamatoboy2 from "../resource/zamatoboy2.mp4";
import zamatoboy3 from "../resource/zamatoboy3.mp4";


import wave from "../resource/wave_final.png";
import goldenwave from "../resource/golden_wave.png";
import { Book } from "../components/Book";
import { MissionVision } from "../components/MissionVision";
import { Button2 } from "../components/Button2";
import { keyBenefits } from "../Data/KeyBenefits";
import { BenefitCard } from "../components/BenefitCard";

import news from "../resource/news_clipping.jpeg";
import news1 from "../resource/news1.jpg";
import news2 from "../resource/news2.jpg";
import { Link } from "react-router-dom";
import { BusinessBook } from "../components/BusinessBook";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Home = () => {
  const images = [
    crausal3,
    crausal2,
    crausal1,
    crausal4,
    crausal5,
 
  
  ];

  return (
    <div className="w-screen bg-gradient-to-b from-white to-white">
<div className="w-full h-screen">

  <Carousel
    autoPlay
    infiniteLoop
    showThumbs={false}
    showStatus={false}
    interval={3000}
    className="h-full"
    renderArrowPrev={(onClickHandler, hasPrev, label) =>
      hasPrev && (
        <button
          type="button"
          onClick={onClickHandler}
          title={label}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 z-10"
        >
          {/* Left arrow icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )
    }
    renderArrowNext={(onClickHandler, hasNext, label) =>
      hasNext && (
        <button
          type="button"
          onClick={onClickHandler}
          title={label}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 z-10"
        >
       
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )
    }
  >

    <div>
      <img src={crausal16} alt="Slide 1" className="object-cover w-full h-screen sm:h-[70vh] md:h-[80vh] lg:h-screen" />
    </div>
    <div>
      <img src={crausal15} alt="Slide 2" className="object-cover w-full h-screen sm:h-[70vh] md:h-[80vh] lg:h-screen" />
    </div>
    <div>
      <img src={crausal17} alt="Slide 3" className="object-cover w-full h-screen sm:h-[70vh] md:h-[80vh] lg:h-screen" />
    </div>
    
  </Carousel>
</div>



<div className="w-full h-screen flex flex-col justify-center relative items-center z-10 ">
<img src={wave} alt="Background wave" className="w-full absolute h-full top-0 -z-10 opacity-60" />
  
  <div className="hover:scale-110 transition-all duration-500 box-content flex flex-col justify-center rounded-xl shadow-2xl h-[50%] p-6 w-[80%] min-w-[320px] max-w-[600px] items-center gap-y-6 bg-white border-4 border-yellow-200"
    style={{ boxShadow: '0 10px 20px rgba(0, 0, 0, 0.9)' }}
  >
    <div
      className="text-4xl font-extrabold text-center text-transparent bg-clip-text text-yellow-300"
      style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
    >
      About Us
    </div>

    <div className="text-center text-lg max-w-[85%]">
      KGV is a smart e-mobility solution provider that aims to cater to society by reducing the immense burden on the middle and lower segments of the community, lowering commuting costs by more than 90%.
    </div>
    
    <div className="flex justify-center items-center gap-4">
      <Book />
      <Button2 />
    </div>
  </div>
</div>




<div className="p-6 rounded-lg shadow-lg">
      {/* First Row: Image and Description */}
      <div className="flex flex-col md:flex-row items-center mb-8">
        {/* Left Side: Description */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4 text-yellow-300"
           style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>KARISHMA GLOBAL VENTURES</h2>
          <p className="text-lg text-black">
          KGV, situated in the heart of NSP(Delhi), is a leading provider of innovative e-mobility solutions, dedicated to revolutionizing the transportation industry. With a focus on sustainability and efficiency, KGV offers a wide range of products and services tailored to meet the evolving needs of modern commuters. Our mission at KGV is to empower individuals and communities by providing affordable, eco-friendly alternatives to traditional modes of transportation. Through cutting-edge technology and forward-thinking initiatives, we aim to reduce carbon emissions, alleviate traffic congestion, and promote a cleaner, greener future for all. At the core of KGV's ethos is a commitment to excellence and customer satisfaction. Our team of experts works tirelessly to deliver superior quality products and exceptional service, ensuring a seamless and enjoyable experience for our valued customers. Whether you're a daily commuter, business owner, or environmental advocate, KGV has the solutions you need to drive positive change and make a meaningful impact on the world. Join us on our journey towards a brighter, more sustainable future with KGV.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 p-4 flex justify-center">
          <img src={kgvwherehouse2} alt="Illustrative" className="rounded-lg shadow-md max-w-md h-auto" />
        </div>
      </div>

    </div>

<MissionVision />

{/* SDG Goals Section */}
<div className="w-full min-h-screen flex flex-col justify-center items-center relative px-4 sm:px-6 lg:px-8">
  {/* Background Wave */}
  <img src={wave} className="w-full h-full absolute top-0  opacity-60 object-cover" alt="Background Wave" />

  {/* Header Section */}
  <div className="text-center z-10 mb-8">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-300" style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)" }}>
       SDG Goals
    </h1>
    <p className="text-sm md:text-lg font-bold max-w-4xl mx-auto leading-relaxed">
    At KGV, we are committed to achieving several Sustainable Development Goals (SDGs) set by the United Nations. Our primary focus areas include providing affordable and sustainable mobility solutions, reducing carbon emissions, promoting renewable energy usage, and contributing to economic growth and social equity. Through innovation and collaboration, we aim to make a positive impact on the environment and society, creating a better and more sustainable future for all.
  </p>
  </div>

  <div className="absolute bottom-10 left-10 flex flex-col gap-4">
    <img
      src={sdg1}
      className="w-20 h-20 sm:w-56 sm:h-40 object-cover rounded-lg border-2 border-white shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
      alt="SDG 7"
    />
    <img
      src={sdg2}
      className="w-20 h-20 sm:w-56 sm:h-40 object-cover rounded-lg border-2 border-white shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
      alt="SDG 9"
    />
    <img
      src={sdg3}
      className="w-20 h-20 sm:w-56 sm:h-40 object-cover rounded-lg border-2 border-white shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
      alt="SDG 11"
    />
    <img
      src={sdg7}
      className="w-20 h-20 sm:w-56 sm:h-40 object-cover rounded-lg border-2 border-white shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
      alt="SDG 11"
    />
    
  </div>

  <div className="absolute bottom-10 right-10 flex flex-col gap-4">
    <img
      src={sdg4}
      className="w-20 h-20 sm:w-56 sm:h-40 object-cover rounded-lg border-2 border-white shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
      alt="SDG 13"
    />
    <img
      src={sdg5}
      className="w-20 h-20 sm:w-56 sm:h-40 object-cover rounded-lg border-2 border-white shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
      alt="SDG 15"
    />
    <img
      src={sdg6}
      className="w-20 h-20 sm:w-56 sm:h-40 object-cover rounded-lg border-2 border-white shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
      alt="SDG 17"
    />
    <img
      src={sdg8}
      className="w-20 h-20 sm:w-56 sm:h-40 object-cover rounded-lg border-2 border-white shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
      alt="SDG 17"
    />
  </div>
</div>



{/* Key benefits section */}
<div className="flex flex-col min-h-screen w-full justify-around items-center py-12 px-4">
  <div className="font-extrabold text-4xl md:text-5xl text-yellow-300 text-center mb-8"
  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
    Key Benefits
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-[1204px] w-full">
    {keyBenefits.map((benefits, index) => {
      return <BenefitCard key={index} passed={benefits} />;
    })}
  </div>
</div>





<div className=" relative  justify-center gap-6 mb-8">
<h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-300 text-center" style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)" }}>
       Problem Statements
    </h1>
  
    <div className=" relative flex flex-wrap justify-center gap-6 mb-8 mt-16">
  <div className=" relative w-[calc(33.33% - 20px)]  ">
    <video controls className="w-full h-[550px] rounded-lg shadow-lg hover:scale-105 hover:transition-all hover:duration-500  ">
      <source src={zamatoboy} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

  <div className="w-[calc(33.33% - 20px)] relative">
    <video controls className="w-full h-[550px] rounded-lg shadow-lg lg:hover:scale-105 lg:hover:transition-all lg:hover:duration-500 ">
      <source src={zamatoboy2} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  <div className="w-[calc(33.33% - 20px)] relative">
    <video controls className="w-full h-[550px] rounded-lg shadow-lg lg:hover:scale-105 lg:hover:transition-all lg:hover:duration-500 ">
      <source src={zamatoboy3} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  </div>
</div>




<div className="w-screen h-auto relative z-10 p-6 md:p-12 overflow-hidden">
  <img
   alt="Background goldenwave"
    src={goldenwave}
    className="w-full h-full object-cover absolute inset-0 scale-110"
    loading="lazy"
  />
  <div className="relative flex flex-col justify-evenly gap-8 md:gap-12 max-w-[1204px] mx-auto h-full">
    <div className="text-white text-3xl md:text-5xl font-extrabold text-center">
      #KGVPhotoWall
    </div>
    <div className="flex justify-center w-full gap-6 md:gap-10">
      <div className="w-full max-w-2xl md:max-w-4xl mx-auto">
        <Carousel
          showThumbs={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay
          className="rounded-lg shadow-lg relative hover:scale-105 transition-transform duration-500"
        >
          {images.map((image, index) => (
            <div key={index}>
           
              <img
                src={image}
                alt={`Slide ${index}`}
                className="object-cover h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-lg"
              />
            </div>
          ))}
        </Carousel>
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
      <img alt="Background news" src={news} className="w-[300px] h-[300px] max-w-[300px] mx-auto border-black border-2 rounded-md" loading="lazy" />
    </Link>
    <Link 
      className="items-center hover:scale-110 transition-all duration-500" 
      to={"https://www.ehitavada.com/index.php?edition=NCpage&date=2024-08-29&page=3"}
    >
      <img alt="Background news1" src={news1} className="w-[300px] h-[300px] max-w-[300px] mx-auto border-black border-2 rounded-md" loading="lazy" />
    </Link>
    <Link 
      className="items-center hover:scale-110 transition-all duration-500" 
      to={"https://epaper.bhaskarhindi.com/3911626/%E0%A4%A8%E0%A4%BE%E0%A4%97%E0%A4%AA%E0%A5%81%E0%A4%B0-%E0%A4%B5%E0%A4%BF%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%AD/%E0%A4%A8%E0%A4%BE%E0%A4%97%E0%A4%AA%E0%A5%81%E0%A4%B0-%E0%A4%B5%E0%A4%BF%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%AD#page/19/1"}
    >
      <img alt="Background news2" src={news2} className="w-[300px] h-[300px] max-w-[300px] mx-auto border-black border-2 rounded-md" loading="lazy" />
    </Link>
  </div>
</div>


      <BusinessBook />
    </div>
  );
};
