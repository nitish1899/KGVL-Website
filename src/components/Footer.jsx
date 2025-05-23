import React from "react";
import logo from "../resource/logokgv.jpg";
import kgvmitr from "../resource/kgvmitr.png";
import footerbgpic from "../resource/footerbgpic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faWhatsapp,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
<footer
  className="relative text-gray-800 px-6 py-10 w-full overflow-hidden w-screen"
>
  <div
    className="absolute inset-0 bg-black opacity-30"
    style={{ backgroundImage: `url(${footerbgpic})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  ></div>
      {/* Right-side mascot image */}
      <img
        src={kgvmitr}
        alt="Mascot"
        className="hidden lg:block absolute bottom-0 right-0 w-52 h-auto z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto grid gap-8 md:grid-cols-5 text-sm">
        {/* Column 1: Logo + Address */}
        <div className="text-center md:text-left">
          <img
            src={logo}
            alt="KGV Logo"
            className="w-16 h-16 rounded-full mx-auto md:mx-0 mb-2"
          />
          <h3 className="font-semibold mb-2">Karishma Global Ventures</h3>
          <p className="text-xs">
            <strong>Corporate Office:</strong> 609, Tower II, Pearls Omaxe,
            Netaji Subash Place, Pitampura, New Delhi - 110034, Delhi, INDIA.
          </p>
        </div>

        {/* Column 2: Home */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-2">Home</h4>
          <a href="#" className="block text-xs hover:underline">Book Now</a>
        </div>

        {/* Column 3: Products */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-2">Products</h4>
          <a href="#" className="block text-xs hover:underline">Featured Products</a>
          <a href="#" className="block text-xs hover:underline">New Stories</a>
        </div>

        {/* Column 4: Company */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-2">Company</h4>
          <a href="#" className="block text-xs hover:underline">About Us</a>
          <a href="#" className="block text-xs hover:underline">Contact Us</a>
        </div>

        {/* Column 5: Contact */}
        <div className="text-center md:text-left color:'#00433D'">
          <h4 className="font-semibold mb-2">Get In Touch</h4>
          <p className="text-xs">📧 teamtsil.net.in</p>
          <p className="text-xs">📧 siddharthtsil.net.in</p>
          <p className="text-xs">📞 +91-9661829944</p>

<div className="flex justify-center md:justify-start gap-4 mt-2 text-lg">
  <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
  <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
  <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
  <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
</div>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-gray-600 relative z-10">
        Copyright © 2025 KARISHMA GLOBAL VENTURES
      </p>
    </footer>
  );
};





// import React from 'react';
// import { Book } from './Book';
// import { Button2 } from './Button2';
// import logo from "../resource/logokgv.jpg";
// import { Link } from 'react-router-dom';

// export const Footer = () => {
//   // Get the current year dynamically
//   const year = new Date().getFullYear();

//   return (
//     <div className='w-screen bg-black pl-20 pr-8 pt-16 pb-16'>
//       <div className='w-11/12 max-w-[1240px] flex min-[320px]:flex-col sm:flex-row items-center justify-between gap-5'>
//         {/* Logo Section */}
//         <div className='min-[320px]:w-full sm:w-1/3 flex items-center justify-center mb-5'>
//           <Link to={"/"}>
//             <img src={logo} className='w-[60px] h-[60px]' alt="Company Logo" />
//           </Link>
//         </div>

//         {/* Footer Links */}
//         <div className='w-2/3 flex justify-center sm:items-center min-[320px]:flex-col sm:flex-row gap-5 min-[320px]:mb-5 sm:mb-2'>
//           <div className='flex justify-center sm:items-center gap-10 h-28 mr-5'>
//             {/* Column 1 */}
//             <div className='text-white'>
//               <div className='font-semibold'>Home</div>
//               <Link to="/booking"><div>Book Now</div></Link>
//               <Link to="/contactUs">Get In Touch</Link>
//             </div>

//             {/* Column 2 */}
//             <div className='text-white'>
//               <div className='font-semibold'>Product</div>
//               <Link to={"/product"}><div>Featured Product</div></Link>
//               <Link to={"https://hindi.news18.com/news/auto/petrol-bike-will-also-become-electric-2-brothers-have-invented-a-kit-7880156.html?1701845158"}>News Stories</Link>
//             </div>

//             {/* Column 3 */}
//             <div className='text-white'>
//               <div className='font-semibold'>Company</div>
//               <Link to={"/"}>About Us</Link>
//               <div>Careers</div>
//             </div>

//             {/* Column 4: Terms and Conditions */}
//             <div className='text-white'>
//               <div className='font-semibold'>Legal</div>
//               <Link to="/Termsandconditions"><div>Terms and Conditions</div></Link>
//               <Link to="/Privacypolicy"><div>Privacy Policy</div></Link>
//             </div>
//           </div>

//           {/* Button Section */}
//           <div className='flex min-[320px]:flex-row sm:flex-col items-center justify-center gap-10'>
//             <Button2 />
//           </div>
//         </div>
//       </div>

//       {/* Footer Divider */}
//       <div className='w-full rounded-md bg-[#57E226] h-[1px] mb-5'></div>

//       {/* Copyright Section */}
//       <div className='text-white text-center'>
//         <h3>Copyright © {year} KARISHMA GLOBAL VENTURES</h3>
//       </div>
//     </div>
//   );
// };

