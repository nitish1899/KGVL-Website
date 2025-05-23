

import { useState } from "react"
import React from 'react'
import wave from "../resource/wave_final.png"
import { BusinessBook } from "../components/BusinessBook"
import { ContactCompany } from "../components/ContactCompany"
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import kgvHero from '../resource/kgvhero.png';
import socialBg from '../resource/socialBg.png';

 export const ContactUs=()=> {
  
  // student or instructor

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    query:""
  })



  const { firstName, lastName, email, address, query } = formData

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  // Handle Form Submission
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://kgvbsckend-9-7-24.onrender.com/register", {
        name: firstName,
        lastname: lastName,
        email,
        address,
        query,
      });
  
      if (response.status === 200) {
        console.log(response);
        console.log("Query submitted successfully!");
        tostershow();
      } else {
        console.error("Failed to submit query.");
      }
    } catch (error) {
      console.error("Error submitting query:", error);
    }
  
    
    // Reset
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
    query:""
    })

  }
  const tostershow = () => {
    // Show toast message
    toast.success('Query Raised successfully!', {
      position: "bottom-right",
      autoClose: 3000, // 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // Navigate to dashboard after a delay (adjust as needed)
  }

  return (
    <div className=" overflow-hidden relative  ">
         <img alt="aaa" src={wave} className="absolute -z-10 " loading="lazy"/>

    <div className="flex-col  items-center  mx-auto w-11/12">
<div className="text-center my-8 px-4">
  <h2 className="text-2xl font-bold text-green-600">Contact Us</h2>
  <p className="max-w-xl mx-auto mt-2 text-gray-700">
    We’d love to hear from you! Whether you have questions about our products, need assistance, or want to explore partnership opportunities, we’re here to help.
  </p>
</div>

    
<div className="bg-white rounded-lg shadow-2xl p-6 my-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
  {/* Contact Form */}
  <form onSubmit={handleOnSubmit} className="space-y-6">
    {/* Name Fields */}
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex-1">
        <label className="block mb-1 text-sm font-semibold text-gray-700">
          First Name <sup className="text-red-500">*</sup>
        </label>
        <div className="flex items-center bg-white p-2 rounded-md border border-green-500">
          <input
            required
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleOnChange}
            placeholder="Enter first name"
            className="w-full outline-none"
          />
        </div>
      </div>

      <div className="flex-1">
        <label className="block mb-1 text-sm font-semibold text-gray-700">
          Last Name <sup className="text-red-500">*</sup>
        </label>
        <div className="flex items-center bg-white p-2 rounded-md border border-green-500">

          <input
            required
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleOnChange}
            placeholder="Enter last name"
            className="w-full outline-none"
          />
        </div>
      </div>
    </div>

    {/* Email Field */}
    <div>
      <label className="block mb-1 text-sm font-semibold text-gray-700">
        Email Address <sup className="text-red-500">*</sup>
      </label>
      <div className="flex items-center bg-white p-2 rounded-md border border-green-500">
        <input
          required
          type="email"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="Enter email address"
          className="w-full outline-none"
        />
      </div>
    </div>

    {/* Address Field */}
    <div>
      <label className="block mb-1 text-sm font-semibold text-gray-700">
        Address <sup className="text-red-500">*</sup>
      </label>
      <div className="flex items-center bg-white p-2 rounded-md border border-green-500">
        <input
          required
          type="text"
          name="address"
          value={address}
          onChange={handleOnChange}
          placeholder="Enter address"
          className="w-full outline-none"
        />
      </div>
    </div>

    {/* Query Field */}
    <div>
      <label className="block mb-1 text-sm font-semibold text-gray-700">
        Query <sup className="text-red-500">*</sup>
      </label>
      <textarea
        required
        name="query"
        value={query}
        onChange={handleOnChange}
        placeholder="Enter query"
        className="w-full border rounded-md px-3 py-2 resize-none h-28 outline-none border-green-500"
      />
    </div>

    {/* Submit Button */}
    <div className="flex justify-center">
      <button
        type="submit"
        className="bg-[#57E226] hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-md transition-all duration-300"
      >
        Raise A Query
      </button>
    </div>
  </form>

  {/* Image */}
  <div className="flex justify-center items-center">
    <img src={kgvHero} alt="KGV Hero" className="w-full h-auto max-h-[500px] object-contain rounded-full" />
  </div>
</div>

   </div>


    </div>
      
    
  )
}


// import { useState } from "react"
// import React from 'react'
// import wave from "../resource/wave_final.png"
// import { BusinessBook } from "../components/BusinessBook"
// import { ContactCompany } from "../components/ContactCompany"
// import { MdEmail } from "react-icons/md";
// import { FaLocationDot } from "react-icons/fa6";
// import { FaUser } from "react-icons/fa";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from "axios"

//  export const ContactUs=()=> {
  
//   // student or instructor

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     address: "",
//     query:""
//   })



//   const { firstName, lastName, email, address, query } = formData

//   // Handle input fields, when some value changes
//   const handleOnChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [e.target.name]: e.target.value,
//     }))
//   }

//   // Handle Form Submission
//   const handleOnSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("https://kgvbsckend-9-7-24.onrender.com/register", {
//         name: firstName,
//         lastname: lastName,
//         email,
//         address,
//         query,
//       });
  
//       if (response.status === 200) {
//         console.log(response);
//         console.log("Query submitted successfully!");
//         tostershow();
//       } else {
//         console.error("Failed to submit query.");
//       }
//     } catch (error) {
//       console.error("Error submitting query:", error);
//     }
  
    
//     // Reset
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//       address: "",
//     query:""
//     })

//   }
//   const tostershow = () => {
//     // Show toast message
//     toast.success('Query Raised successfully!', {
//       position: "bottom-right",
//       autoClose: 3000, // 3 seconds
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });

//     // Navigate to dashboard after a delay (adjust as needed)
//   }

//   return (
//     <div className=" overflow-hidden relative  ">
//          <img alt="aaa" src={wave} className="absolute -z-10 " loading="lazy"/>

//     <div className="flex-col  items-center  mx-auto w-11/12">
    
//     <div class="flex  items-center justify-center py-10 rounded-lg bg-black bg-opacity-10    font-inter w-full   mx-auto mt-14 px-10 ">
//          {/* Form */}
//          <form
//             onSubmit={handleOnSubmit}
//             className="flex flex-col h-full  gap-y-4 font-inter"
//           >
//             <div className="  sm:flex  justify-center gap-9    ">
//               <div className="flex flex-col">
//                 <div className="flex min-[320px]:flex-col sm:flex-row gap-x-4">
//                   <label className="mb-[1rem]">
//                     <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] black">
//                       First Name <sup className="text-pink-200">*</sup>
//                     </p>
//                     <div className="bg-white p-2 flex flex-row items-center mr-2  rounded-md">
//                     <FaUser className="text-black mr-2" />
//                     <input
//                       required
//                       type="text"
//                       name="firstName"
//                       value={firstName}
//                       onChange={handleOnChange}
//                       placeholder="Enter first name"
//                       style={{
//                         boxShadow:
//                           "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//                       }}
//                       className="w-full rounded-[0.5rem]   p-1 outline-none "
//                     />
//                     </div>
//                   </label>
//                   <label>
//                     <p className="mb-1 font-semibold text-[0.875rem] leading-[1.375rem] text-richblack-5">
//                       Last Name <sup className="text-pink-200">*</sup>
//                     </p>
//                     <div className="bg-white p-2 flex flex-row items-center mr-2  rounded-md">
//                     <FaUser className="text-black mr-2" />
//                     <input
//                       required
//                       type="text"
//                       name="lastName"
//                       value={lastName}
//                       onChange={handleOnChange}
//                       placeholder="Enter last name"
//                       style={{
//                         boxShadow:
//                           "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//                       }}
//                       className="w-full rounded-[0.5rem]  p-1 outline-none "
//                     />
//                     </div>
//                   </label>
                  
//                 </div>
//                 <label className="w-full mb-[1rem]">
//                   <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] text-richblack-5">
//                     Email Address <sup className="text-pink-200">*</sup>
//                   </p>
//                   <div className="bg-white p-2 flex flex-row items-center mr-4  rounded-md">
//                   <MdEmail className="text-black mr-2" />
//                   <input
//                     required
//                     type="text"
//                     name="email"
//                     value={email}
//                     onChange={handleOnChange}
//                     placeholder="Enter email address"
//                     style={{
//                       boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//                     }}
//                     className="w-full rounded-[0.5rem]  p-1 outline-none"
//                   />
//                   </div>
//                 </label>

//                 <label className="relative mb-2">
//                   <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] text-richblack-5">
//                     Address<sup className="text-pink-200">*</sup>
//                   </p>
//                   <div className="bg-white p-2 flex flex-row items-center mr-4  rounded-md">
//                     <FaLocationDot className="text-black mr-2" />
//                     <input
//                       required
//                       type="text"
//                       name="address"
//                       value={address}
//                       onChange={handleOnChange}
//                       placeholder="Enter address"
//                       style={{
//                         boxShadow:
//                           "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//                       }}
//                       className="w-full rounded-[0.5rem]   p-1 pr-10 outline-none"
//                     />
//                   </div>
//                 </label>
//               </div>

//               <div className=" h-full ">
//                 <label className=" h-full">
//                   <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] text-richblack-5">
//                     Query <sup className="text-pink-200">*</sup>
//                   </p>
//                   <textarea
//                     required
//                     type="text"
//                     name="query"
//                     value={query}
//                     onChange={handleOnChange}
//                     placeholder="Enter query"
//                     style={{
//                       boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//                     }}
//                     className="w-[95%] sm:h-[33vh]   rounded-[0.5rem]  p-[12px]  text-black outline-none"
//                   />
//                 </label>
//               </div>
//             </div>
//             <div className="flex items-center justify-center ">
//               {" "}
//               <button
//                 type="submit"
//                 className=" md:text-[60%] sm:text-[60%] py-3 px-5 rounded-md bg-[#57E226] font-inter font-semibold  min-[320px]:text-[70%]  sm:py-3 sm:px-5"
//                 onClick={handleOnSubmit} 
//               >
//                 Raise A Query
//               </button>
//             </div>
//           </form>
        
//     </div>
//     <ToastContainer />
//    </div>
// <div className="mt-14 " > 

// <BusinessBook/>
// </div>

//   <ContactCompany/>
   

//     </div>
      
    
//   )
// }