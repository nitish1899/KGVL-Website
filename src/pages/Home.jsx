// import React from "react";
// import crausal1 from "../resource/gallary1.JPG";
// import crausal2 from "../resource/gallary2.JPG";
// import crausal3 from "../resource/bikeabout.jpg";
// import crausal4 from "../resource/avanger.jpg";
// import crausal5 from "../resource/victor.jpg";
// import crausal6 from "../resource/crausal6.jpg";
// import crausal7 from "../resource/crausal7.jpg";
// import crausal8 from "../resource/crausal8.jpg";
// import crausal15 from "../resource/kgvsecond.png";
// import crausal16 from "../resource/kgvfirst.png";
// import crausal17 from "../resource/kgvthird.png";
// import sdg1 from "../resource/sdg1.png";
// import sdg2 from "../resource/sdg2.png";
// import sdg3 from "../resource/sdg3.png";
// import sdg4 from "../resource/sdg4.png";
// import sdg5 from "../resource/sdg5.png";
// import sdg6 from "../resource/sdg6.png";
// import sdg7 from "../resource/sdg7.png";
// import sdg8 from "../resource/sdg8.png";
// import kgvwherehouse2 from "../resource/kgvwherehouse2.jpeg";
// import zamatoboy from "../resource/zamatoboy.mp4";
// import zamatoboy2 from "../resource/zamatoboy2.mp4";
// import zamatoboy3 from "../resource/zamatoboy3.mp4";

// import wave from "../resource/wave_final.png";
// import goldenwave from "../resource/golden_wave.png";
// import { Book } from "../components/Book";
// import { MissionVision } from "../components/MissionVision";
// import { Button2 } from "../components/Button2";
// import { keyBenefits } from "../Data/KeyBenefits";
// import { BenefitCard } from "../components/BenefitCard";

// import news from "../resource/news_clipping.jpeg";
// import news1 from "../resource/news1.jpg";
// import news2 from "../resource/news2.jpg";
// import { Link } from "react-router-dom";
// import { BusinessBook } from "../components/BusinessBook";
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// export const Home = () => {
//   const images = [
//     crausal3,
//     crausal2,
//     crausal1,
//     crausal4,
//     crausal5,

//   ];

//   return (
//     <div className="w-screen bg-gradient-to-b from-white to-white">
// <div className="w-full h-screen">

//   <Carousel
//     autoPlay
//     infiniteLoop
//     showThumbs={false}
//     showStatus={false}
//     interval={3000}
//     className="h-full"
//     renderArrowPrev={(onClickHandler, hasPrev, label) =>
//       hasPrev && (
//         <button
//           type="button"
//           onClick={onClickHandler}
//           title={label}
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 z-10"
//         >
//           {/* Left arrow icon */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="white"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>
//       )
//     }
//     renderArrowNext={(onClickHandler, hasNext, label) =>
//       hasNext && (
//         <button
//           type="button"
//           onClick={onClickHandler}
//           title={label}
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 z-10"
//         >

//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="white"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       )
//     }
//   >

//     <div>
//       <img src={crausal16} alt="Slide 1" className="object-cover w-full h-screen sm:h-[70vh] md:h-[80vh] lg:h-screen" />
//     </div>
//     <div>
//       <img src={crausal15} alt="Slide 2" className="object-cover w-full h-screen sm:h-[70vh] md:h-[80vh] lg:h-screen" />
//     </div>
//     <div>
//       <img src={crausal17} alt="Slide 3" className="object-cover w-full h-screen sm:h-[70vh] md:h-[80vh] lg:h-screen" />
//     </div>

//   </Carousel>
// </div>

// <div className="w-full h-screen flex flex-col justify-center relative items-center z-10 ">
// <img src={wave} alt="Background wave" className="w-full absolute h-full top-0 -z-10 opacity-60" />

//   <div className="hover:scale-110 transition-all duration-500 box-content flex flex-col justify-center rounded-xl shadow-2xl h-[50%] p-6 w-[80%] min-w-[320px] max-w-[600px] items-center gap-y-6 bg-white border-4 border-yellow-200"
//     style={{ boxShadow: '0 10px 20px rgba(0, 0, 0, 0.9)' }}
//   >
//     <div
//       className="text-4xl font-extrabold text-center text-transparent bg-clip-text text-yellow-300"
//       style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
//     >
//       About Us
//     </div>

//     <div className="text-center text-lg max-w-[85%]">
//       KGV is a smart e-mobility solution provider that aims to cater to society by reducing the immense burden on the middle and lower segments of the community, lowering commuting costs by more than 90%.
//     </div>

//     <div className="flex justify-center items-center gap-4">
//       <Book />
//       <Button2 />
//     </div>
//   </div>
// </div>

// <div className="p-6 rounded-lg shadow-lg">
//       {/* First Row: Image and Description */}
//       <div className="flex flex-col md:flex-row items-center mb-8">
//         {/* Left Side: Description */}
//         <div className="md:w-1/2 p-4">
//           <h2 className="text-2xl font-bold mb-4 text-yellow-300"
//            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>KARISHMA GLOBAL VENTURES</h2>
//           <p className="text-lg text-black">
//           KGV, situated in the heart of NSP(Delhi), is a leading provider of innovative e-mobility solutions, dedicated to revolutionizing the transportation industry. With a focus on sustainability and efficiency, KGV offers a wide range of products and services tailored to meet the evolving needs of modern commuters. Our mission at KGV is to empower individuals and communities by providing affordable, eco-friendly alternatives to traditional modes of transportation. Through cutting-edge technology and forward-thinking initiatives, we aim to reduce carbon emissions, alleviate traffic congestion, and promote a cleaner, greener future for all. At the core of KGV's ethos is a commitment to excellence and customer satisfaction. Our team of experts works tirelessly to deliver superior quality products and exceptional service, ensuring a seamless and enjoyable experience for our valued customers. Whether you're a daily commuter, business owner, or environmental advocate, KGV has the solutions you need to drive positive change and make a meaningful impact on the world. Join us on our journey towards a brighter, more sustainable future with KGV.
//           </p>
//         </div>

//         {/* Right Side: Image */}
//         <div className="md:w-1/2 p-4 flex justify-center">
//           <img src={kgvwherehouse2} alt="Illustrative" className="rounded-lg shadow-md max-w-md h-auto" />
//         </div>
//       </div>

//     </div>

// <MissionVision />

// {/* SDG Goals Section */}
// <div className="w-full min-h-screen flex flex-col justify-center items-center relative px-4 sm:px-6 lg:px-8">
//   {/* Background Wave */}
//   <img src={wave} className="w-full h-full absolute top-0  opacity-60 object-cover" alt="Background Wave" />

//   {/* Header Section */}
//   <div className="text-center z-10 mb-8">
//     <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-300" style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)" }}>
//        SDG Goals
//     </h1>
//     <p className="text-sm md:text-lg font-bold max-w-4xl mx-auto leading-relaxed">
//     At KGV, we are committed to achieving several Sustainable Development Goals (SDGs) set by the United Nations. Our primary focus areas include providing affordable and sustainable mobility solutions, reducing carbon emissions, promoting renewable energy usage, and contributing to economic growth and social equity. Through innovation and collaboration, we aim to make a positive impact on the environment and society, creating a better and more sustainable future for all.
//   </p>
//   </div>

//   <div className="absolute bottom-10 left-10 flex flex-col gap-4">
//     <img
//       src={sdg1}
//       className="w-20 h-20 sm:w-56 sm:h-40 object-cover rounded-lg border-2 border-white shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
//       alt="SDG 7"
//     />
//     <img
//       src={sdg2}
//       className="w-20 h-20 sm:w-56 sm:h-40 object-cover rounded-lg border-2 border-white shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
//       alt="SDG 9"
//     />
//     <img
//       src={sdg3}
//       className="w-20 h-20 sm:w-56 sm:h-40 object-cover rounded-lg border-2 border-white shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
//       alt="SDG 11"
//     />
//     <img
//       src={sdg7}
//       className="w-20 h-20 sm:w-56 sm:h-40 object-cover rounded-lg border-2 border-white shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
//       alt="SDG 11"
//     />

//   </div>

//   <div className="absolute bottom-10 right-10 flex flex-col gap-4">
//     <img
//       src={sdg4}
//       className="w-20 h-20 sm:w-56 sm:h-40 object-cover rounded-lg border-2 border-white shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
//       alt="SDG 13"
//     />
//     <img
//       src={sdg5}
//       className="w-20 h-20 sm:w-56 sm:h-40 object-cover rounded-lg border-2 border-white shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
//       alt="SDG 15"
//     />
//     <img
//       src={sdg6}
//       className="w-20 h-20 sm:w-56 sm:h-40 object-cover rounded-lg border-2 border-white shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
//       alt="SDG 17"
//     />
//     <img
//       src={sdg8}
//       className="w-20 h-20 sm:w-56 sm:h-40 object-cover rounded-lg border-2 border-white shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
//       alt="SDG 17"
//     />
//   </div>
// </div>

// {/* Key benefits section */}
// <div className="flex flex-col min-h-screen w-full justify-around items-center py-12 px-4">
//   <div className="font-extrabold text-4xl md:text-5xl text-yellow-300 text-center mb-8"
//   style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
//     Key Benefits
//   </div>

//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-[1204px] w-full">
//     {keyBenefits.map((benefits, index) => {
//       return <BenefitCard key={index} passed={benefits} />;
//     })}
//   </div>
// </div>

// <div className=" relative  justify-center gap-6 mb-8">
// <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-300 text-center" style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)" }}>
//        Problem Statements
//     </h1>

//     <div className=" relative flex flex-wrap justify-center gap-6 mb-8 mt-16">
//   <div className=" relative w-[calc(33.33% - 20px)]  ">
//     <video controls className="w-full h-[550px] rounded-lg shadow-lg hover:scale-105 hover:transition-all hover:duration-500  ">
//       <source src={zamatoboy} type="video/mp4" />
//       Your browser does not support the video tag.
//     </video>
//   </div>

//   <div className="w-[calc(33.33% - 20px)] relative">
//     <video controls className="w-full h-[550px] rounded-lg shadow-lg lg:hover:scale-105 lg:hover:transition-all lg:hover:duration-500 ">
//       <source src={zamatoboy2} type="video/mp4" />
//       Your browser does not support the video tag.
//     </video>
//   </div>
//   <div className="w-[calc(33.33% - 20px)] relative">
//     <video controls className="w-full h-[550px] rounded-lg shadow-lg lg:hover:scale-105 lg:hover:transition-all lg:hover:duration-500 ">
//       <source src={zamatoboy3} type="video/mp4" />
//       Your browser does not support the video tag.
//     </video>
//   </div>
//   </div>
// </div>

// <div className="w-screen h-auto relative z-10 p-6 md:p-12 overflow-hidden">
//   <img
//    alt="Background goldenwave"
//     src={goldenwave}
//     className="w-full h-full object-cover absolute inset-0 scale-110"
//     loading="lazy"
//   />
//   <div className="relative flex flex-col justify-evenly gap-8 md:gap-12 max-w-[1204px] mx-auto h-full">
//     <div className="text-white text-3xl md:text-5xl font-extrabold text-center">
//       #KGVPhotoWall
//     </div>
//     <div className="flex justify-center w-full gap-6 md:gap-10">
//       <div className="w-full max-w-2xl md:max-w-4xl mx-auto">
//         <Carousel
//           showThumbs={false}
//           infiniteLoop
//           useKeyboardArrows
//           autoPlay
//           className="rounded-lg shadow-lg relative hover:scale-105 transition-transform duration-500"
//         >
//           {images.map((image, index) => (
//             <div key={index}>

//               <img
//                 src={image}
//                 alt={`Slide ${index}`}
//                 className="object-cover h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-lg"
//               />
//             </div>
//           ))}
//         </Carousel>
//       </div>
//     </div>
//   </div>
// </div>

// <div className="w-11/12 max-w-[1204px] mx-auto pt-11 pb-16">
//   <div className="uppercase pb-5 text-center text-4xl md:text-5xl font-bold mb-4 text-yellow-300"
//     style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)" }}>
//     Our Recent achievements...
//   </div>
//   <div className="w-full mx-auto pt-11 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//     <Link
//       className="items-center hover:scale-110 transition-all duration-500"
//       to={"https://hindi.news18.com/news/auto/petrol-bike-will-also-become-electric-2-brothers-have-invented-a-kit-7880156.html?1701845158"}
//     >
//       <img alt="Background news" src={news} className="w-[300px] h-[300px] max-w-[300px] mx-auto border-black border-2 rounded-md" loading="lazy" />
//     </Link>
//     <Link
//       className="items-center hover:scale-110 transition-all duration-500"
//       to={"https://www.ehitavada.com/index.php?edition=NCpage&date=2024-08-29&page=3"}
//     >
//       <img alt="Background news1" src={news1} className="w-[300px] h-[300px] max-w-[300px] mx-auto border-black border-2 rounded-md" loading="lazy" />
//     </Link>
//     <Link
//       className="items-center hover:scale-110 transition-all duration-500"
//       to={"https://epaper.bhaskarhindi.com/3911626/%E0%A4%A8%E0%A4%BE%E0%A4%97%E0%A4%AA%E0%A5%81%E0%A4%B0-%E0%A4%B5%E0%A4%BF%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%AD/%E0%A4%A8%E0%A4%BE%E0%A4%97%E0%A4%AA%E0%A5%81%E0%A4%B0-%E0%A4%B5%E0%A4%BF%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%AD#page/19/1"}
//     >
//       <img alt="Background news2" src={news2} className="w-[300px] h-[300px] max-w-[300px] mx-auto border-black border-2 rounded-md" loading="lazy" />
//     </Link>
//   </div>
// </div>

//       <BusinessBook />
//     </div>
//   );
// };

// app/page.tsx or src/app/page.tsx

import YamhaBike from "../resource/YamhaBike.png";
import { Link } from "react-router-dom";
import backgroundView from "../resource/backgroundView.jpg";
import group from "../resource/group.png";
import backgroundBlob from "../resource/backgroundBlob.svg";
import kgvmitra from "../resource/kgvmitra.png";
import bike5 from "../resource/bike2.png";
import heroImg from "../resource/Frame2.png";

export function Home() {
  return (
    <main className="w-full min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative w-full px-4 py-12 md:py-20 bg-white flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background image with opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${backgroundView})`,
            opacity: 0.4,
            // filter: "blur(2px)",'MozAnimation': 'bg-color-change 10s infinite',
            // animation: "bg-color-change 10s infinite",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          maxHeight="80%"
        ></div>
        {/* Background Image */}

        <h1 className="relative font-playfair text-green-900 font-bold text-xl md:text-3xl lg:text-4xl uppercase tracking-wide z-10">
          World's First Smart E-Mobility Solution
        </h1>

        {/* <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mt-8 md:mt-16 px-4">
          <div
            className="relative p-6 md:p-10 rounded-3xl w-full md:w-1/2 text-white shadow-lg z-10 flex flex-col justify-center"
      
          >
            <img
              src={group}
              alt="Background Blob"
              className="absolute top-0 left-0 w-full h-full object-contain z-[-1] min-h-[400px]"
            />
            <h1 className="font-playfair text-white font-bold text-sm md:text-3xl lg:text-4xl uppercase tracking-wide">
          World's First Smart E-Mobility Solution
        </h1>
            <p className="text-sm md:text-base text-white/90 leading-relaxed p-2 rounded">
              Karishma Global Ventures LLP, we are revolutionizing the future of
              transportation. Our cutting-edge Smart E-Mobility Solution enables
              you to convert your conventional petrol bike into a hybrid Bike
              that runs seamlessly on both petrol and battery power. This
              innovation combines the best of both worlds—fossil fuel
              reliability with the efficiency and eco-friendliness of electric
              power.
            </p>
          </div>

          <div className="relative w-full md:w-1/2 mt-8 md:mt-0 flex justify-center ">
            <img
              src={YamhaBike}
              alt="Hybrid Bike"
              width={500}
              height={400}
              className="object-contain scale-x-[-1]"
            />
          </div>
        </div> */}

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mt-8 md:mt-16 px-4">
          <div className="relative p-6 md:p-10 rounded-3xl w-full md:w-1/2 text-white shadow-lg z-10 flex flex-col justify-center">
            <img
              src={group}
              alt="Background Blob"
              className="absolute top-0 left-0 w-full h-full object-contain z-[-1] min-h-[400px]"
            />

            {/* Text container aligned left */}
            <div className="text-left pl-24">
              <h1 className="font-playfair font-medium text-xs sm:text-sm md:text-2xl lg:text-3xl uppercase tracking-wide leading-snug">
                <span className="block">World's First</span>
                <span className="block">Smart E-Mobility</span>
                <span className="block">Solution</span>
              </h1>

              <hr className="mt-2 border-white w-80 border-t-2" />

              <p className="text-[8px] md:text-base text-white/90 leading-relaxed p-2 rounded mt-4">
                <span className="block">
                  At Karishma Global Ventures LLP, we are
                </span>
                <span className="block">
                  revolutionizing the future of transportation.
                </span>
                <span className="block">
                  Our cutting-edge Smart E-Mobility Solution
                </span>
                <span className="block">
                  enables you to convert your conventional petrol
                </span>
                <span className="block">
                  bike into a hybrid bike that runs seamlessly
                </span>
                <span className="block">on both petrol and battery power.</span>
                <span className="block">
                  This innovation combines the best of both worlds—
                </span>
                <span className="block">
                  fossil fuel reliability with the efficiency and{" "}
                </span>
                <span className="block">
                  eco-friendliness of electric power.
                </span>
              </p>
            </div>
          </div>

          <div className="relative w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img
              src={YamhaBike}
              alt="Hybrid Bike"
              width={500}
              height={400}
              className="object-contain scale-x-[-1]"
            />
          </div>
        </div>

        {/* Book Now Button */}
        <div className="mt-10 md:mt-16">
          <button
            onClick={() => alert("Button clicked!")}
            className="hidden md:flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 active:scale-95 transition-all duration-200 text-white font-semibold px-4 py-2 rounded-xl min-w-[140px] h-[44px] text-base"
            style={{ flexShrink: 0 }}
          >
            <span className="whitespace-nowrap">Book Now</span>
            <img
              src="/images/vector-icon.png"
              alt="Arrow"
              width={16}
              height={16}
            />
          </button>
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex gap-4">
          <Link href="#">
            <img
              src="/images/instagram.svg"
              alt="Instagram"
              className="h-6 w-6"
            />
          </Link>
          <Link href="#">
            <img src="/images/twitter.svg" alt="Twitter" className="h-6 w-6" />
          </Link>
          <Link href="#">
            <img
              src="/images/linkedin.svg"
              alt="LinkedIn"
              className="h-6 w-6"
            />
          </Link>
          <Link href="#">
            <img src="/images/medium.svg" alt="Medium" className="h-6 w-6" />
          </Link>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="bg-green-700 text-white px-6 py-8 flex flex-col md:flex-row items-center justify-between max-full mx-auto">
        <p className="text-sm md:text-base max-w-3xl">
          Karishma Global Ventures LLP, we are revolutionizing the future of
          transportation. Our cutting-edge Smart E-Mobility Solution enables you
          to convert your conventional petrol bike into a hybrid Bike that runs
          seamlessly on both petrol and battery power. This innovation combines
          the best of both worlds—fossil fuel reliability with the efficiency
          and eco-friendliness of electric power.
        </p>
        <img
          src={kgvmitra}
          alt="KGV Mascot"
          width={140}
          height={140}
          className="mt-6 md:mt-0"
        />
      </section>

      <div className="w-screen h-full flex flex-col items-center justify-center">
        <img
          alt="heroimg"
          src={heroImg}
          className="w-screen h-screen  "
          loading="lazy"
        />
        <img
          alt="bike5"
          src={bike5}
          className="absolute lg:hover:scale-110 lg:transition-all lg:duration-500 "
        />
        <Link to={"/booking"}>
          <button className="relative bottom-40  bg-black font-semibold py-3 px-5 rounded text-white">
            Buy Now
          </button>
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-2xl p-6 text-center max-w-4xl mx-auto my-8">
        <h2 className="text-2xl font-bold text-green-600 mb-6">
          The Components of Our Kit
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="rounded-lg p-4 shadow-md bg-gradient-to-br from-green-100 to-white border border-green-400">
            <h3 className="text-xl font-semibold text-green-700 mb-2 text-center">
              KGV SMART MOTOR
            </h3>
            <p className="text-gray-700 text-sm">
              A KGV SMART MOTOR is an electric motor that is integrated into the
              hub of a vehicle’s wheel which directly drives the vehicle wheels.
              These vehicle hub motors are used in the application of E-mobility
              to drive trains in electric vehicles which can give the solution
              of an easy wheel drive system in the 2-wheeler or 4-wheel drive
              system.
            </p>
          </div>
          <div className="rounded-lg p-4 shadow-md bg-gradient-to-br from-green-100 to-white border border-green-400">
            <h3 className="text-xl font-semibold text-green-700 mb-2 text-center">
              KGV E-POWER HOUSE
            </h3>
            <p className="text-gray-700 text-sm">
              The KGV E-POWER HOUSE is used to control and manage the power
              output through the motor, digital meter, and other accessories in
              hybrid electric vehicles. The KGV E-POWER HOUSE is single-phase
              with a power range of 1-2.5KW, a voltage range of 36-72V with a
              current supply of 20-40A.
            </p>
          </div>
          <div className="rounded-lg p-4 shadow-md bg-gradient-to-br from-green-100 to-white border border-green-400">
            <h3 className="text-xl font-semibold text-green-700 mb-2 text-center">
              DUEL FUEL THROTTLE
            </h3>
            <p className="text-gray-700 text-sm">
              The DUEL FUEL THROTTLE is based on a Hall effect magnetic sensor
              for long operational life for the throttle speed controlled by the
              switches as Low-Medium-High and also for Forwa rd/Reverse
              direction.
            </p>
          </div>
          <div className="rounded-lg p-4 shadow-md bg-gradient-to-br from-green-100 to-white border border-green-400">
            <h3 className="text-xl font-semibold text-green-700 mb-2 text-center">
              DC/DC CONVERTER
            </h3>
            <p className="text-gray-700 text-sm">
              A DC/DC converter is an electromechanical device that converts the
              direct current source from one level to another level that's high
              to low or vice versa. These DC/DC converters are used in high to
              low conversion in this application for 72/60/48V to 12 Volts.
            </p>
          </div>
          <div className="rounded-lg p-4 shadow-md bg-gradient-to-br from-green-100 to-white border border-green-400">
            <h3 className="text-xl font-semibold text-green-700 mb-2 text-center">
              HARNESS
            </h3>
            <p className="text-gray-700 text-sm">
              Wire and accessories contain the wiring, male and female
              connectors, and battery box with other accessories to require the
              battery box fixing.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
        {/* Top Box */}
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold font-inter text-green-700 ">
            Green Drive KGV E-Hybrid Bike{" "}
            <span className="text-orange-600">@14 Paise Per KM</span>
          </h2>
          <p className="text-base text-gray-600 mt-1 mb-4 font-inter mx-12">
            Our CEO and MD are the driving force behind our innovation and
            success, leading with expertise and a commitment to excellence.
          </p>
          {/* <div className="flex flex-col md:flex-row justify-between items-center m-6 ">
            <div className="flex items-start text-green-600 text-sm font-medium  mt-8">
              <p className="text-7xl font-inter font-bold rotate-[-90deg] leading-none mt-6">
                <span className="drop-shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
                  0
                </span>
                <span className="drop-shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
                  %
                </span>
              </p>

              <div className="text-left text-xl font-bold ml-[-4px]">
                <p>Air Pollution</p>
                <p>Noise Pollution</p>
                <p>Range Anxiety</p>
                <p>Dependability on Petrol</p> 
                <p>Carbon Emission</p>
              </div>
            </div>

            <div className="flex items-start text-orange-600 text-sm font-medium  mt-8 ml-[-60px]">
              <p className="text-7xl font-inter font-bold rotate-[-90deg] leading-none mt-6">
                <span className="drop-shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
                  1
                </span>
                <span className="drop-shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
                  0
                </span>
                <span className="drop-shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
                  0
                </span>
                <span className="drop-shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
                  %
                </span>
              </p>
              <div className="text-left text-xl font-bold ml-[-40px]">
                <p>Gearless Automatic Drive</p>
                <p>Powered By Dual Fuel tech</p>
                <p>Portable Charging batteries</p>
                <p>Fulfills 8 goals of SDG</p>
              </div>
            </div>
          </div> */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 m-6">
            {/* Left */}
            <div className="flex items-start text-green-600 text-sm font-medium mt-8">
              <p className="text-5xl sm:text-6xl md:text-7xl font-inter font-bold rotate-[-90deg] leading-none mt-6">
                <span className="drop-shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
                  0
                </span>
                <span className="drop-shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
                  %
                </span>
              </p>

              <div className="text-left text-base sm:text-lg md:text-xl font-bold ml-[-4px] space-y-1">
                <p>Air Pollution</p>
                <p>Noise Pollution</p>
                <p>Range Anxiety</p>
                <p>Dependability on Petrol</p>
                <p>Carbon Emission</p>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-start text-orange-600 text-sm font-medium mt-8">
              {/* Wrapper for 100% */}
              <div className="flex-shrink-0 w-[100px] sm:w-[120px] md:w-[140px] flex justify-center items-center ">
                <p className="text-5xl sm:text-6xl md:text-7xl font-inter font-bold rotate-[-90deg] leading-none mt-6 whitespace-nowrap">
                  <span className="drop-shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
                    1
                  </span>
                  <span className="drop-shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
                    0
                  </span>
                  <span className="drop-shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
                    0
                  </span>
                  <span className="drop-shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
                    %
                  </span>
                </p>
              </div>

              <div className="text-left text-base sm:text-lg md:text-xl font-bold ml-[-4px] space-y-1">
                <p>Gearless Automatic Drive</p>
                <p>Powered By Dual Fuel tech</p>
                <p>Portable Charging batteries</p>
                <p>Fulfills 8 goals of SDG</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Title */}
        <h3 className="text-center text-3xl font-playfair font-bold text-green-800 mt-12 mb-6">
          What makes <span className="text-green-600">KGV Better</span> than the
          rest
          <span className="text-green-600">?</span>
        </h3>
        <hr className="w-2/4 mx-auto border-t-2 border-green-600 mb-6" />

        {/* Connector Line */}
        <div className="relative flex justify-center items-start mx-auto max-w-6xl pt-10">
          {/* Horizontal Line */}
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-black z-0 mx-10"></div>

          {/* Nodes */}
          <div className="flex justify-between w-full px-10">
            {/* Node 1 */}
            <div className="flex flex-col items-center">
              {/* Vertical line from horizontal */}
              <div className="w-0.5 h-5 bg-black"></div>
              <div className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold text-center whitespace-nowrap mt-1">
                Warranty Provided
              </div>
            </div>

            <div className="flex flex-col items-center">
              {/* Vertical line from horizontal */}
              <div className="w-0.5 h-5 bg-black"></div>
              <div className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold text-center mt-2 whitespace-nowrap">
                  No tampering with engine,
                  <br />
                  Gears or Clutch
                </div>
            </div>

            {/* Node 2 */}
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-5 bg-black"></div>
              <div className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold text-center whitespace-nowrap mt-1">
                Dual Fuel Technology
              </div>
            </div>

             <div className="flex flex-col items-center">
              <div className="w-0.5 h-5 bg-black"></div>
              <div className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold text-center mt-2 whitespace-nowrap">
                Reduce Air & Noise pollution
              </div>
            </div>

            {/* Node 3 */}
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-5 bg-black"></div>
              <div className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold text-center whitespace-nowrap mt-1">
                Charging as per convenience -<br />
                Portable Battery
              </div>
            </div>

            {/* Node 4 */}
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-5 bg-black"></div>
              <div className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold text-center whitespace-nowrap mt-1">
                No range anxiety
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-800 via-pink-600 to-yellow-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className=" text-white rounded-xl p-10 max-w-7xl mx-auto ">
          {/* Title and Description */}
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-4">
            SDG Goals
          </h2>
          <p className="text-center text-sm md:text-base max-w-3xl mx-auto mb-10">
            At Karishma Global Ventures, we are committed to achieving several
            Sustainable Development Goals (SDGs) set by the United Nations. Our
            primary focus areas include providing affordable and sustainable
            mobility solutions, reducing carbon emissions, promoting renewable
            energy usage, and contributing to economic growth and social equity.
            Through innovation and collaboration, we aim to make a positive
            impact on the environment and society, creating a better and more
            sustainable future for all.
          </p>

          {/* SDG Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
            {/* Each Card */}
            <div className="bg-green-600 p-4 rounded text-white text-center font-bold text-sm">
              <div className="text-2xl mb-2">3</div>
              GOOD HEALTH <br /> AND WELL-BEING
            </div>
            <div className="bg-yellow-400 p-4 rounded text-white text-center font-bold text-sm">
              <div className="text-2xl mb-2">7</div>
              AFFORDABLE AND <br /> CLEAN ENERGY
            </div>
            <div className="bg-orange-500 p-4 rounded text-white text-center font-bold text-sm">
              <div className="text-2xl mb-2">9</div>
              INDUSTRY, INNOVATION <br /> AND INFRASTRUCTURE
            </div>
            <div className="bg-orange-400 p-4 rounded text-white text-center font-bold text-sm">
              <div className="text-2xl mb-2">11</div>
              SUSTAINABLE CITIES <br /> AND COMMUNITIES
            </div>
            <div className="bg-yellow-600 p-4 rounded text-white text-center font-bold text-sm">
              <div className="text-2xl mb-2">12</div>
              RESPONSIBLE <br /> CONSUMPTION <br /> AND PRODUCTION
            </div>
            <div className="bg-green-700 p-4 rounded text-white text-center font-bold text-sm">
              <div className="text-2xl mb-2">13</div>
              CLIMATE <br /> ACTION
            </div>
            <div className="bg-green-600 p-4 rounded text-white text-center font-bold text-sm">
              <div className="text-2xl mb-2">15</div>
              LIFE <br /> ON LAND
            </div>
            <div className="bg-blue-800 p-4 rounded text-white text-center font-bold text-sm">
              <div className="text-2xl mb-2">17</div>
              PARTNERSHIPS <br /> FOR THE GOALS
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
