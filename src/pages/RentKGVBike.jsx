

export const RentKGVBike=()=> {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold">
          Ride the Future Your Way with <span className="text-green-600">KGV Hybrid Bikes</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Experience the thrill of hybrid riding with flexible rental and purchase plans — perfect for city cruising and adventure getaways.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
<div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:w-1/3 h-48 md:h-auto bg-gray-200 m-4 rounded-md" />
          <div className="p-6 flex flex-col justify-center md:w-2/3">
            <h3 className="text-green-600 font-bold text-xl mb-1">HX-2</h3>
            <p className="text-gray-600 text-sm mb-2">
              Powerful urban explorer with extended range and performance.
            </p>
            <p className="text-sm">Engine Capacity: 100cc - 125cc</p>
            <p className="text-sm">Motor Power: 1.5kw</p>
            <p className="text-sm mb-4">Battery Output: 2.1 kwh</p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-fit">
              Book Now
            </button>
          </div>
        </div>



        <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:w-1/3 h-48 md:h-auto bg-red-200 m-4 rounded-md" />
          <div className="p-6 flex flex-col justify-center md:w-2/3">
            <h3 className="text-green-600 font-bold text-xl mb-1">HX-3</h3>
            <p className="text-gray-600 text-sm mb-2">
              Maxed-out performance for long rides and tough terrains.
            </p>
            <p className="text-sm">Engine Capacity: 125cc - 180cc</p>
            <p className="text-sm">Motor Power: 2kw</p>
            <p className="text-sm mb-4">Battery Output: 2.8 kwh</p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-fit">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
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
// import bike5 from "../resource/bike2.png";
// import avangerbg from "../resource/avangerbg.png";
// import 'react-toastify/dist/ReactToastify.css';
// import axios from "axios"


//  export const RentKGVBike=()=> {

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     address: "",
//     phonenumber:""
//   })



//   const { firstName, lastName, email, address, phonenumber } = formData

//   // Handle input fields, when some value changes
//   const handleOnChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [e.target.name]: e.target.value,
//     }))
//   }
//   // /
//   ///
//  // http://localhost:5000/register
//   // Handle Form Submission
//   const handleOnSubmit = async (e) => {
//     e.preventDefault();
//     // mailer();
//     try {
//       const response = await axios.post("https://kgvbsckend-9-7-24.onrender.com/rent", {
//         name: firstName,
//         lastname: lastName,
//         email,
//         address,
//         phonenumber,
//       });
  
//       if (response.status === 200) {
//         console.log(response);
//         console.log("Rent details submitted successfully!");
//         tostershow();
//       } else {
//         console.error("Failed to submit details.");
//       }
//     } catch (error) {
//       console.error("Error submitting details:", error);
//     }
  
    
//     // Reset
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//       address: "",
//       phonenumber:""
//     })

//   }
//   const tostershow = () => {
//     // Show toast message
//     toast.success('Rent details submitted successfully!', {
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
//       <img alt="aaa" src={wave} className="absolute -z-10 " loading="lazy"/>

//       <div className="flex-col  items-center  mx-auto w-11/12">

//           <div className="font-extrabold text-4xl md:text-5xl text-yellow-300 text-center m-8"
//                 style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
//                 Rent the KGV Hybrid Bike
//           </div>

//           <div className="flex min-[320px]:flex-col sm:flex-row min-[320px]:w-full h-full items-center justify-between py-10 rounded-lg bg-yellow-500 bg-opacity-10 font-inter mx-auto my-10 px-10">

//                 {/* Form */}
//                 <div>
//                     <img
//                       src={bike5}
//                       className="lg:hover:scale-110 lg:transition-all lg:duration-500 min-[320px]:h-[10rem] min-[320px]:w-[10rem] sm:h-[10rem] sm:w-[10rem] lg:h-[20rem] lg:w-[20rem]"
//                       alt="Bike"
//                     />
//                   </div>

//                 <form
//                     onSubmit={handleOnSubmit}
//                     className="flex flex-col h-full  gap-y-4 font-inter"
//                   >
//                     <div className="  sm:flex  justify-center gap-9    ">
//                       <div className="flex flex-col">
//                         <div className="flex min-[320px]:flex-col sm:flex-row gap-x-4">
//                           <label className="mb-[1rem]">
//                             <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] black">
//                               First Name <sup className="text-pink-200">*</sup>
//                             </p>
//                             <div className="bg-white p-2 flex flex-row items-center mr-2  rounded-md">
//                             <FaUser className="text-black mr-2" />
//                             <input
//                               required
//                               type="text"
//                               name="firstName"
//                               value={firstName}
//                               onChange={handleOnChange}
//                               placeholder="Enter first name"
//                               style={{
//                                 boxShadow:
//                                   "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//                               }}
//                               className="w-full rounded-[0.5rem]   p-1 outline-none "
//                             />
//                             </div>
//                           </label>
//                           <label>
//                             <p className="mb-1 font-semibold text-[0.875rem] leading-[1.375rem] text-richblack-5">
//                               Last Name <sup className="text-pink-200">*</sup>
//                             </p>
//                             <div className="bg-white p-2 flex flex-row items-center mr-2  rounded-md">
//                             <FaUser className="text-black mr-2" />
//                             <input
//                               required
//                               type="text"
//                               name="lastName"
//                               value={lastName}
//                               onChange={handleOnChange}
//                               placeholder="Enter last name"
//                               style={{
//                                 boxShadow:
//                                   "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//                               }}
//                               className="w-full rounded-[0.5rem]  p-1 outline-none "
//                             />
//                             </div>
//                           </label>
                          
//                         </div>
//                         <label className="w-full mb-[1rem]">
//                           <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] text-richblack-5">
//                             Email Address <sup className="text-pink-200">*</sup>
//                           </p>
//                           <div className="bg-white p-2 flex flex-row items-center mr-4  rounded-md">
//                           <MdEmail className="text-black mr-2" />
//                           <input
//                             required
//                             type="text"
//                             name="email"
//                             value={email}
//                             onChange={handleOnChange}
//                             placeholder="Enter email address"
//                             style={{
//                               boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//                             }}
//                             className="w-full rounded-[0.5rem]  p-1 outline-none"
//                           />
//                           </div>
//                         </label>
//                         <label className="w-full mb-[1rem]">
//                           <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] text-richblack-5">
//                           Phone Number <sup className="text-pink-200">*</sup>
//                           </p>
//                           <div className="bg-white p-2 flex flex-row items-center mr-4  rounded-md">
//                           <MdEmail className="text-black mr-2" />
//                           <input
//                             required
//                             type="text"
//                             name="phonenumber"
//                             value={phonenumber}
//                             onChange={handleOnChange}
//                             placeholder="Enter phonenumber"
//                             style={{
//                               boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//                             }}
//                             className="w-full rounded-[0.5rem]  p-1 outline-none"
//                           />
//                           </div>
//                         </label>

//                         <label className="relative mb-2">
//                           <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] text-richblack-5">
//                             Address<sup className="text-pink-200">*</sup>
//                           </p>
//                           <div className="bg-white p-2 flex flex-row items-center mr-4  rounded-md">
//                             <FaLocationDot className="text-black mr-2" />
//                             <input
//                               required
//                               type="text"
//                               name="address"
//                               value={address}
//                               onChange={handleOnChange}
//                               placeholder="Enter address"
//                               style={{
//                                 boxShadow:
//                                   "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//                               }}
//                               className="w-full rounded-[0.5rem]   p-1 pr-10 outline-none"
//                             />
//                           </div>
//                         </label>
//                       </div>

//                     </div>
//                     <div className="flex items-center justify-center ">
//                       {" "}
//                       <button
//                         type="submit"
//                         className=" md:text-[60%] sm:text-[60%] py-3 px-5 rounded-md bg-[#57E226] font-inter font-semibold  min-[320px]:text-[70%]  sm:py-3 sm:px-5"
//                         onClick={handleOnSubmit} 
//                       >
//                         submit
//                       </button>
//                     </div>
//                 </form>
                  
//                   <div>
//                     <img
//                       src={avangerbg}
//                       className="lg:hover:scale-110 lg:transition-all lg:duration-500 min-[320px]:h-[12rem] min-[320px]:w-[12rem] sm:h-[14rem] sm:w-[14rem] lg:h-[24rem] lg:w-[24rem]"
//                       alt="Bike"
//                     />
//                   </div>    
//           </div>

//          <ToastContainer />
//       </div>

//       <div className="mt-14 " > 
//         <BusinessBook/>
//       </div>

//       <ContactCompany/>
//     </div> 
//   )
// }