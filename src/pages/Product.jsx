import React from "react";
import wave from "../resource/wave_final.png";
import goldenwave from "../resource/golden_wave.png";
import { Book } from "../components/Book";
import { Button2 } from "../components/Button2";
import { BenefitCard } from "../components/BenefitCard";
import { comp } from "../Data/Components";
import { Link } from "react-router-dom";
import img_comp from "../resource/compare_list.png";
import { BusinessBook } from "../components/BusinessBook";
import bike5 from '../resource/bike_main.png';
import heroImg from '../resource/prodcuthero.png'
import  { useState } from 'react';
import "../components/Phone.css" 
import hx31 from "../resource/crausal1.jpg";
import hx32 from "../resource/crausal4.jpg";
import hx33 from "../resource/crausal5.jpg";


import bike1 from '../resource/bike1.jpg';
import bike2 from '../resource/bike2.jpg';
import bike4 from '../resource/bike4.jpg';

import crausal7 from "../resource/crausal7.jpg";
import crausal8 from "../resource/crausal8.jpg";


import productc from "../resource/productc.png";
import modelc from "../resource/modelc.png";

export const Product = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage('');
  };
  return (
    <div className=" w-screen overflow-x-hidden    ">
     
      <div className="w-screen h-full flex flex-col items-center justify-center">
        <img
          src={heroImg}
          className="w-screen h-screen  "
          loading="lazy"
        />
        <img src={bike5} className="absolute lg:hover:scale-110 lg:transition-all lg:duration-500 "/>
        <Link to={"/booking"}>
        <button className="relative bottom-40  bg-black font-semibold py-3 px-5 rounded text-white">Buy Now</button>
        </Link>
      </div>


      <div className="md:h-1/2 sm:pt-[4%] sm:pb-[4%] mt-10  classproduct w-full  flex flex-col    justify-center relative items-center   z-10 ">
        <img
          src={wave}
          className="imageclass w-full absolute h-full blur-[1px] top-0 -z-10"
          loading="lazy"
        />
        <div className="  classproductinner flex flex-col  justify-center rounded-lg h-[70%]  p-8   w-[80%] min-w-[300px] items-center  gap-y-5 bg-black bg-opacity-10 mb-5 lg:max-w-[50%]   ">
          <div className="md:text-[200%] sm:text-4xl sm:h-1/2   text-4xl font-bold text-center  ">PRODUCT </div>
          <div className=" text-center max-w-[100%] min-[320px]:text-lg min-[320px]:leading-6">
            We at KGV, are developing a product that is customer oriented and
            manufactured with a vision of solving the problem of high
            transportation cost by converting currently available conventional
            two-wheeler into a plug in hybrid EV. We want to expose our product
            to the international market and the ASEAN summit is the perfect
            platform to showcase our product to the world
          </div>
          <div className="flex  justify-center items-center gap-2">
            <Book />
            <Button2 />
          </div>
        </div>
      </div>


      <div className=" sm:h-[100%] sm:pt-[6%] sm:pb-[6%] w-full   relative z-10 p-5 md:h-100 ">
        <div className=" md:text-[200%] sm:text-5xl font-extrabold text-5xl mb-10 text-black text-center md:text-center md:text-2xl min-[320px]:font-bold min-[320px]:text-5xl">
         Components
        </div>

        <div className=" flex flex-col items-center h-[80%] pb-5 mx-auto max-w-[1204px] w-11/12 md:flex-wrap md:flex-row md:grid md:grid-cols-2 gap-10 ">
          {comp.map((benefits, index) => {
            return <BenefitCard key={index} passed={benefits} />;
          })}
        </div>
      </div>


      <div className="min-h-screen  py-8">
  <div className="container mx-auto p-6">
    <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
      KGV Hybrid Kits
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* HX1 Card */}
      <div className="bg-gradient-to-b from-white to-yellow-100 border-4 border-yellow-200 shadow-lg border-b-4  rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <div className="relative p-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">KGV HX1</h2>
          <p className="text-sm text-gray-600 mb-4">#WASTETOWEALTH</p>
          <div className="flex justify-between mb-4">
            <img
              src={crausal7}
              alt="Image 1"
              className="w-1/3 object-cover rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition duration-300"
              onClick={() => openModal(crausal7)}
            />
            <img
              src={crausal8}
              alt="Image 2"
              className="w-1/3 object-cover rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition duration-300 mx-2"
              onClick={() => openModal(crausal8)}
            />
            <img
              src={crausal7}
              alt="Image 3"
              className="w-1/3 object-cover rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition duration-300"
              onClick={() => openModal(crausal7)}
            />
          </div>
          <p className="text-gray-600 mb-4">
            Discover how our innovative solutions infuse new life into discarded materials.
            Our Waste to Wealth initiative seamlessly combines sustainability with performance,
            providing riders with an eco-friendly ride.
          </p>
          <p className="font-bold text-green-600">KGV Hybrid Kit</p>
        </div>
      </div>

      {/* HX2 Card */}
      <div className="bg-gradient-to-b from-white to-yellow-100 border-4 border-yellow-200 shadow-lg border-b-4  rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <div className="relative p-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">KGV HX2</h2>
          <p className="text-sm text-gray-600 mb-4">#ROZKAHUMSAFAR</p>
          <div className="flex justify-between mb-4">
            <img
              src={bike2}
              alt="Image 1"
              className="w-1/3 object-cover rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition duration-300"
              onClick={() => openModal(bike2)}
            />
            <img
              src={bike1}
              alt="Image 2"
              className="w-1/3 object-cover rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition duration-300 mx-2"
              onClick={() => openModal(bike1)}
            />
            <img
              src={bike4}
              alt="Image 3"
              className="w-1/3 object-cover rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition duration-300"
              onClick={() => openModal(bike4)}
            />
          </div>
          <p className="text-gray-600 mb-4">
            Make your journey blissful, joyful, pocket-friendly, eco-friendly, and stress-free with our HX-2
            Series specially designed for the hustlers and heroes.
          </p>
          <p className="font-bold text-green-600">KGV Hybrid Kit</p>
        </div>
      </div>

      {/* HX3 Card */}
      <div className="bg-gradient-to-b from-white to-yellow-100 border-4 border-yellow-200 shadow-lg border-b-4  rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <div className="relative p-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">KGV HX3</h2>
          <p className="text-sm text-gray-600 mb-4">#SPEEDYRIDES</p>
          <div className="flex justify-between mb-4">
            <img
              src={hx31}
              alt="Image 1"
              className="w-1/3 object-cover rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition duration-300"
              onClick={() => openModal(hx31)}
            />
            <img
              src={hx32}
              alt="Image 2"
              className="w-1/3 object-cover rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition duration-300 mx-2"
              onClick={() => openModal(hx32)}
            />
            <img
              src={hx33}
              alt="Image 3"
              className="w-1/3 object-cover rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition duration-300"
              onClick={() => openModal(hx33)}
            />
          </div>
          <p className="text-gray-600 mb-4">
            Prepare to take your bike adventures to new heights with our electrifying hybrid upgrade!
            Brace yourself for an exciting journey into the future as you ride with sustainable fuel,
            making a positive impact on the climate along the way.
          </p>
          <p className="font-bold text-green-600">KGV Hybrid Kit</p>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white rounded-lg p-4 max-w-3xl mx-auto">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 text-2xl"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
    <div className="w-full mt-8">
      <img
        src={productc}
        alt="Responsive Image"
        className="w-full h-auto object-cover rounded-lg shadow-md"
      />
    </div>
    <div className="w-full mt-8">
      <img
        src={modelc}
        alt="Responsive Image"
        className="w-full h-auto object-cover rounded-lg shadow-md"
      />
    </div>

  </div>
</div>









      {/* <div className=" w-[95%] mx-auto  border-2 border-black   flex flex-col justify-center items-center gap-8 pt-7 mt-7 mb-7 pb-7 rounded-lg  ">
        <div className="uppercase font-bold sm:text-3xl text-center min-[320px]:text-lg">
          {" "}
          Comparison of motorcyles{" "}
        </div>
        <div>
          <img src={img_comp} loading="lazy"/>
        </div>
      </div> */}

  
      {/* <div className="sm:h-[40%] sm:p-[4%]  w-full  bg-black relative z-10  pt-3 flex justify-center items-center pb-5">
        <img
          src={goldenwave}
          className="w-full blur-[4px] h-full scale-110   absolute -z-10"
          loading="lazy"
        />
        <div className="sm:h-[60%] w-11/12 flex flex-col items-center  max-w-[1204px] mx-auto pb-8  text-white  bg-white bg-opacity-25  rounded-lg   ">
          <div className="sm:text-[150%] uppercase text-3xl font-bold mt-8 min-[320px]:font-semibold">working</div>
          <div className=" sm:h-[40%] sm:text-[80%] text-xl  w-[80%] pt-6 min-[320px]:text-[80%]">
            After the successful installation of the KGV Plug-in hybrid Electric
            kit. The rider is ready to go. The rider will simply input the key
            into the keyhole designated for the electric mode and can simply
            apply the throttle without engaging any gears.For switching back to
            the petrol mode, the rider just simply needs to remove the key from
            KGV-designed electric keyhole and insert into the keyhole provided
            by the respective OEM ,folloing which the rider can run the
            motorcyle in petrol mode The working mechanism of electric vehicles
            involves a driver’s input through the throttle, which is controlled
            by the controller for determining the need of power used by motors.
            The **Lithium iron phosphate (LFP) battery gives the power in form
            of electrical energy to the wheel hub motor that converts the
            electrical energy into mechanical power, for the driver to control
            the vehicle's speed and direction by the controller. Furthermore,
            the DC/DC converter regulates the voltage level for the distribution
            of electricity to the lighting system. This integrated system will
            allow the electric vehicles to move forward or in reverse direction,
            responding to the driver inputs.Distribution of weight was taken
            care by giving battery on back side and fixing the hub motor in
            front wheel to balance the weight and ensure a smooth drive.
          </div>
        </div>
      </div > */}

      <BusinessBook />
    </div>
  );
};




































// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { CgFormatJustify, CgCloseO } from 'react-icons/cg';
// import logo from '../resource/logokgv.jpg';
// import './Phone.css';

// export const Navbar = () => {
//   // State to toggle mobile menu
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <div className='h-[3.5rem] py-2 sticky top-0 z-50 items-center w-full bg-black'>
//       <div className='Desktop-manu flex justify-between gap-20 max-w-[1240px] mx-auto '>
//         <div>
//           <Link to={"/"}>
//             <img src={logo} className='w-[40px] h-[40px]' loading="lazy" alt="Logo" />
//           </Link>
//         </div>
//         {/* Desktop Navigation */}
//         <div className='flex font-inter gap-14 text-lg text-white items-center hidden md:flex'>
//           <Link to={"/"} >Home</Link>
//           <Link to={"/product"} className="hover:border-b-2 hover:border-[#52d831]">Product</Link>
//           <Link to={"/booking"} className="hover:border-b-2 hover:border-[#52d831]">Booking</Link>
//           <Link to={"/contactUs"} className="hover:border-b-2 hover:border-[#52d831] mr-5">Contact Us</Link>
//         </div>
        
//         <div className='  md:mr-[10px] flex items-center justify-center gap-3'>
//         <button  className='font-semibold w-[40px] h-[30px] lg:text-[100%] md:text-[46%] text-[5px] know-contact-button bg-[#52d831]  rounded-md'> <Link to={"/"} >Know More</Link></button>
//         <button  className=' font-semibold w-[40px] h-[30px]  lg:text-[100%] md:text-[46%] text-[5px]  know-contact-button bg-[white]  rounded-md'><Link to={"/contactUs"}>Contact Us</Link></button>
//        </div>

//        <div className="md:hidden flex items-center">
 
//   {isMobileMenuOpen ?(
//   <CgCloseO
//     className=" close-navbar text-xl mr-2 text-white"
//     onClick={() => setMobileMenuOpen(prevState => !prevState)}
//   />
//   ) :(
//     <CgFormatJustify
//     className="  menu-navbar  text-xl mr-2 text-white"
//     onClick={() => setMobileMenuOpen(prevState => !prevState)}
//   />
//   )
//   }
// </div>

//       </div>
//       {/* Mobile Navigation Links */}
//       {isMobileMenuOpen && (
       
//         <div className=' pt-4 pb-4 bg-black flex flex-col font-inter text-lg text-white items-center mt-2'>
         
//           <Link to={"/"} className="  hover:border-b-2 hover:border-[#52d831] mb-2" onClick={() => setMobileMenuOpen(false)}>Home</Link>
//           <Link to={"/product"} className="hover:border-b-2 hover:border-[#52d831] mb-2" onClick={() => setMobileMenuOpen(false)}>Product</Link>
//           <Link to={"/booking"} className="hover:border-b-2 hover:border-[#52d831] mb-2" onClick={() => setMobileMenuOpen(false)}>Booking</Link>
//           <Link to={"/contactUs"} className="hover:border-b-2 hover:border-[#52d831]" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
//         </div>
//       )}
//     </div>
//   );
// };





