import React from 'react';
import { Book } from './Book';
import { Button2 } from './Button2';
import logo from "../resource/logokgv.jpg";
import { Link } from 'react-router-dom';

export const Footer = () => {
  // Get the current year dynamically
  const year = new Date().getFullYear();

  return (
    <div className='w-screen bg-black pl-20 pr-8 pt-16 pb-16'>
      <div className='w-11/12 max-w-[1240px] flex min-[320px]:flex-col sm:flex-row items-center justify-between gap-5'>
        {/* Logo Section */}
        <div className='min-[320px]:w-full sm:w-1/3 flex items-center justify-center mb-5'>
          <Link to={"/"}>
            <img src={logo} className='w-[60px] h-[60px]' alt="Company Logo" />
          </Link>
        </div>

        {/* Footer Links */}
        <div className='w-2/3 flex justify-center sm:items-center min-[320px]:flex-col sm:flex-row gap-5 min-[320px]:mb-5 sm:mb-2'>
          <div className='flex justify-center sm:items-center gap-10 h-28 mr-5'>
            {/* Column 1 */}
            <div className='text-white'>
              <div className='font-semibold'>Home</div>
              <Link to="/booking"><div>Book Now</div></Link>
              <Link to="/contactUs">Get In Touch</Link>
            </div>

            {/* Column 2 */}
            <div className='text-white'>
              <div className='font-semibold'>Product</div>
              <Link to={"/product"}><div>Featured Product</div></Link>
              <Link to={"https://hindi.news18.com/news/auto/petrol-bike-will-also-become-electric-2-brothers-have-invented-a-kit-7880156.html?1701845158"}>News Stories</Link>
            </div>

            {/* Column 3 */}
            <div className='text-white'>
              <div className='font-semibold'>Company</div>
              <Link to={"/"}>About Us</Link>
              <div>Careers</div>
            </div>

            {/* Column 4: Terms and Conditions */}
            <div className='text-white'>
              <div className='font-semibold'>Legal</div>
              <Link to="/Termsandconditions"><div>Terms and Conditions</div></Link>
              <Link to="/Privacypolicy"><div>Privacy Policy</div></Link>
            </div>
          </div>

          {/* Button Section */}
          <div className='flex min-[320px]:flex-row sm:flex-col items-center justify-center gap-10'>
            <Button2 />
          </div>
        </div>
      </div>

      {/* Footer Divider */}
      <div className='w-full rounded-md bg-[#57E226] h-[1px] mb-5'></div>

      {/* Copyright Section */}
      <div className='text-white text-center'>
        <h3>Copyright © {year} KARISHMA GLOBAL VENTURES</h3>
      </div>
    </div>
  );
};


// import React from 'react';
// import { Book } from './Book';
// import { Button2 } from './Button2';
// import logo from "../resource/logokgv.jpg";
// import { Link } from 'react-router-dom';

// export const Footer = () => {
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
//       <div className='w-full rounded-md bg-[#57E226] h-[1px]'></div>
//     </div>
//   );
// };



// import React from 'react'
// import { Book } from './Book'
// import { Button2 } from './Button2'
// import logo from "../resource/logokgv.jpg"
// import { Link } from 'react-router-dom'

// export const Footer = () => {
//   return (
//     <div className='w-screen bg-black pl-20 pr-8 pt-16 pb-16'>
//     <div className='w-11/12 max-w-[1240px] flex  min-[320px]:flex-col sm:flex-row  items-center  justify-between gap-5 '>
//     <div className='min-[320px]:w-full sm:w-1/3  flex items-center justify-center mb-5'><Link to={"/"}><img src={logo} className='w-[60px] h-[60px]'/></Link></div>
//           <div className='w-2/3 flex justify-center sm:items-center  min-[320px]:flex-col sm:flex-row gap-5 min-[320px]:mb-5 sm:mb-2' >
//             <div className='flex  justify-center sm:items-center  gap-10 h-28 mr-5'>
//              {/* col1 */}
//               <div className='text-white '>
//                 <div className='font-semibold  '>Home</div>
//                 <Link to="/booking" ><div>Book Now</div></Link>
//                 <Link to="/contactUs">Get In Touch</Link>
//               </div>

//               {/* col2 */}
//               <div className='text-white '>
//               <div className='font-semibold   '>Product</div>
//                 <Link to={"/product"}><div>Featured Product</div></Link>
//                 <Link to={"https://hindi.news18.com/news/auto/petrol-bike-will-also-become-electric-2-brothers-have-invented-a-kit-7880156.html?1701845158"}>News Stories</Link>
//               </div>

//               {/* col 3 */}
//               <div className='text-white '>
//                 <div className='font-semibold  '>Company</div>
//                 <Link to={"/"}>About us</Link>
//                 <div>Careers</div>
//               </div>
//               </div>
//               {/* col4 -> buttons*/}
//               <div className='flex min-[320px]:flex-row sm:flex-col items-center justify-center  gap-10 '>
//                 <Button2/>
//               </div>
//           </div>
//     </div>
//     <div className='w-full rounded-md bg-[#57E226] h-[1px] '></div>

//     </div>
//   )
// }
