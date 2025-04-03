import { useState } from "react"
import React from 'react'
import wave from "../resource/wave_final.png"
import { BusinessBook } from "../components/BusinessBook"
import { ContactCompany } from "../components/ContactCompany"
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import bike5 from "../resource/bike2.png";
import avangerbg from "../resource/avangerbg.png";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"


 export const RentKGVBike=()=> {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phonenumber:""
  })



  const { firstName, lastName, email, address, phonenumber } = formData

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }
  // /
  ///
 // http://localhost:5000/register
  // Handle Form Submission
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // mailer();
    try {
      const response = await axios.post("http://localhost:5000/rent", {
        name: firstName,
        lastname: lastName,
        email,
        address,
        phonenumber,
      });
  
      if (response.status === 200) {
        console.log(response);
        console.log("rent details submitted successfully!");
        tostershow();
      } else {
        console.error("Failed to submit details.");
      }
    } catch (error) {
      console.error("Error submitting details:", error);
    }
  
    
    // Reset
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
      phonenumber:""
    })

  }
  const tostershow = () => {
    // Show toast message
    toast.success('rent details submit successfully!', {
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

    <div className="font-extrabold text-4xl md:text-5xl text-yellow-300 text-center m-8"
  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
   Rent the KGV Hybrid Bike
  </div>

    
  <div className="flex min-[320px]:flex-col sm:flex-row min-[320px]:w-full h-full items-center justify-between py-10 rounded-lg bg-yellow-500 bg-opacity-10 font-inter mx-auto my-10 px-10">

         {/* Form */}
         <div>
            <img
              src={bike5}
              className="lg:hover:scale-110 lg:transition-all lg:duration-500 min-[320px]:h-[10rem] min-[320px]:w-[10rem] sm:h-[10rem] sm:w-[10rem] lg:h-[20rem] lg:w-[20rem]"
              alt="Bike"
            />
          </div>

         <form
            onSubmit={handleOnSubmit}
            className="flex flex-col h-full  gap-y-4 font-inter"
          >
            <div className="  sm:flex  justify-center gap-9    ">
              <div className="flex flex-col">
                <div className="flex min-[320px]:flex-col sm:flex-row gap-x-4">
                  <label className="mb-[1rem]">
                    <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] black">
                      First Name <sup className="text-pink-200">*</sup>
                    </p>
                    <div className="bg-white p-2 flex flex-row items-center mr-2  rounded-md">
                    <FaUser className="text-black mr-2" />
                    <input
                      required
                      type="text"
                      name="firstName"
                      value={firstName}
                      onChange={handleOnChange}
                      placeholder="Enter first name"
                      style={{
                        boxShadow:
                          "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                      }}
                      className="w-full rounded-[0.5rem]   p-1 outline-none "
                    />
                    </div>
                  </label>
                  <label>
                    <p className="mb-1 font-semibold text-[0.875rem] leading-[1.375rem] text-richblack-5">
                      Last Name <sup className="text-pink-200">*</sup>
                    </p>
                    <div className="bg-white p-2 flex flex-row items-center mr-2  rounded-md">
                    <FaUser className="text-black mr-2" />
                    <input
                      required
                      type="text"
                      name="lastName"
                      value={lastName}
                      onChange={handleOnChange}
                      placeholder="Enter last name"
                      style={{
                        boxShadow:
                          "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                      }}
                      className="w-full rounded-[0.5rem]  p-1 outline-none "
                    />
                    </div>
                  </label>
                  
                </div>
                <label className="w-full mb-[1rem]">
                  <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] text-richblack-5">
                    Email Address <sup className="text-pink-200">*</sup>
                  </p>
                  <div className="bg-white p-2 flex flex-row items-center mr-4  rounded-md">
                  <MdEmail className="text-black mr-2" />
                  <input
                    required
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleOnChange}
                    placeholder="Enter email address"
                    style={{
                      boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                    className="w-full rounded-[0.5rem]  p-1 outline-none"
                  />
                  </div>
                </label>
                <label className="w-full mb-[1rem]">
                  <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] text-richblack-5">
                  Phone Number <sup className="text-pink-200">*</sup>
                  </p>
                  <div className="bg-white p-2 flex flex-row items-center mr-4  rounded-md">
                  <MdEmail className="text-black mr-2" />
                  <input
                    required
                    type="text"
                    name="phonenumber"
                    value={phonenumber}
                    onChange={handleOnChange}
                    placeholder="Enter phonenumber"
                    style={{
                      boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                    className="w-full rounded-[0.5rem]  p-1 outline-none"
                  />
                  </div>
                </label>

                <label className="relative mb-2">
                  <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] text-richblack-5">
                    Address<sup className="text-pink-200">*</sup>
                  </p>
                  <div className="bg-white p-2 flex flex-row items-center mr-4  rounded-md">
                    <FaLocationDot className="text-black mr-2" />
                    <input
                      required
                      type="text"
                      name="address"
                      value={address}
                      onChange={handleOnChange}
                      placeholder="Enter address"
                      style={{
                        boxShadow:
                          "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                      }}
                      className="w-full rounded-[0.5rem]   p-1 pr-10 outline-none"
                    />
                  </div>
                </label>
              </div>

            </div>
            <div className="flex items-center justify-center ">
              {" "}
              <button
                type="submit"
                className=" md:text-[60%] sm:text-[60%] py-3 px-5 rounded-md bg-[#57E226] font-inter font-semibold  min-[320px]:text-[70%]  sm:py-3 sm:px-5"
                onClick={handleOnSubmit} 
              >
                submit
              </button>
            </div>
          </form>
          <div>
  <img
    src={avangerbg}
    className="lg:hover:scale-110 lg:transition-all lg:duration-500 min-[320px]:h-[12rem] min-[320px]:w-[12rem] sm:h-[14rem] sm:w-[14rem] lg:h-[24rem] lg:w-[24rem]"
    alt="Bike"
  />
</div>


          
        
    </div>
    <ToastContainer />
   </div>
<div className="mt-14 " > 

<BusinessBook/>
</div>

  <ContactCompany/>
   

    </div>
      
    
  )
}




// import { useState } from "react";
// import React from "react";
// import wave from "../resource/wave_final.png";
// import { BusinessBook } from "../components/BusinessBook";
// import { ContactCompany } from "../components/ContactCompany";
// import { CiUser } from "react-icons/ci";
// import { MdOutlineConfirmationNumber } from "react-icons/md";
// import { MdOutlineEmail } from "react-icons/md";
// import { MdEmail } from "react-icons/md";
// import { FaLocationDot } from "react-icons/fa6";
// import { FaUser } from "react-icons/fa";
// import axios from "axios";
// import Card from "./Card.jsx";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import SplendorBike from "../resource/splendor.png";
// import bike5 from "../resource/bike2.png";
// import { Link } from "react-router-dom";

// export const RentKGVBike = () => {
//   const [formData, setFormData] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     address: "",
//     phonenumber: "",
//   });
//   const [selectedAmount, setSelectedAmount] = useState(5000);
//   const [termsAccepted, setTermsAccepted] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   const { firstname, lastname, email, address, phonenumber } = formData;

//   const handleAmountChange = (event) => {
//     setSelectedAmount(parseInt(event.target.value, 10));
//   };

//   // Handle Form Submission
//   const handleOnSubmit = async (e) => {
//     e.preventDefault();
//     if (!firstname || !lastname || !email || !address || !phonenumber) {
//       return;
//     }
//     setShowModal(true); // Show modal for terms acceptance
//   };

//   const checkoutHandler = async () => {
//     if (!termsAccepted) {
//       toast.error("Please accept the terms and conditions.");
//       return;
//     }

//     const {
//       data: { key },
//     } = await axios.get("https://kgvbsckend-9-7-24.onrender.com/api/getkey");
//     const {
//       data: { order },
//     } = await axios.post("https://kgvbsckend-9-7-24.onrender.com/api/checkout", {
//       amount: selectedAmount,
//     });

//     const options = {
//       key,
//       amount: order.amount,
//       currency: "INR",
//       name: "TWI",
//       description: "Test Transaction",
//       image: "",
//       order_id: order.id,
//       callback_url: "https://deluxe-chimera-9f85f8.netlify.app/api/paymentverification",
//       prefill: {
//         email: email,
//         firstname: firstname,
//         lastname: lastname,
//         address: address,
//         phonenumber: phonenumber,
//       },
//       notes: {
//         email: email,
//         firstname: firstname,
//         lastname: lastname,
//         address: address,
//         phonenumber: phonenumber,
//       },
//       theme: {
//         color: "#3399cc",
//       },
//     };

//     const razor = new window.Razorpay(options);

//     razor.on("payment.failed", function (response) {
//       toast.error(`Error Code: ${response.error.code}`);
//       toast.error(`Error Description: ${response.error.description}`);
//       toast.error(`Error Source: ${response.error.source}`);
//       toast.error(`Error Step: ${response.error.step}`);
//       toast.error(`Error Reason: ${response.error.reason}`);
//       toast.error(`Error Metadata Order_10: ${response.error.metadata.order_10}`);
//       toast.error(`Error Metadata Payment_ID: ${response.error.metadata.payment_id}`);
//     });

//     razor.open();
    
//     // Reset the form and hide the modal
//     setFormData({
//       firstname: "",
//       lastname: "",
//       email: "",
//       address: "",
//       phonenumber: "",
//     });
//     setTermsAccepted(false);
//     setShowModal(false);
//   };

//   const handleOnChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleTermsChange = () => {
//     setTermsAccepted(!termsAccepted);
//   };

//   return (
//     <div className="w-full overflow-hidden relative">
//       <img src={wave} className="absolute -z-10" loading="lazy" />

//       <div className="flex min-[320px]:flex-col items-center mx-auto max-w-[1204px] w-11/12">
//       <div className="font-extrabold text-4xl md:text-5xl text-yellow-300 text-center m-8"
//   style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
//    Rent the KGV Hybrid Bike
//   </div>
//         <div className="flex min-[320px]:flex-col sm:flex-row min-[320px]:w-full h-full items-center justify-between py-10 rounded-lg bg-yellow-500 bg-opacity-10 font-inter mx-auto my-10 px-10">
//           {/* Form */}
//           <div>
//             <img
//               src={bike5}
//               className="lg:hover:scale-110 lg:transition-all lg:duration-500 min-[320px]:h-[10rem] min-[320px]:w-[10rem] sm:h-[10rem] sm:w-[10rem] lg:h-[20rem] lg:w-[20rem]"
//               alt="Bike"
//             />
//           </div>
//           <form
//             onSubmit={handleOnSubmit}
//             className="flex flex-col gap-y-4 w-2/3 font-inter min-[320px]:h-2/3 min-[320px]:w-[85vw] sm:w-2/3"
//           >
//             <div className="flex w-full justify-between gap-9">
//               <div className="flex flex-col w-screen">
//                 <div className="md:flex gap-x-4">
//                   <label className="mb-[1rem]">
//                     <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] black">
//                       First Name <sup className="text-pink-200">*</sup>
//                     </p>
//                     <div className="bg-white p-2 flex flex-row items-center mr-2 rounded-md">
//                       <FaUser className="text-black mr-2" />
//                       <input
//                         required
//                         type="text"
//                         name="firstname"
//                         value={firstname}
//                         onChange={handleOnChange}
//                         placeholder="Enter first name"
//                         className="w-full rounded-[0.5rem] p-1 outline-none"
//                       />
//                     </div>
//                   </label>
//                   <label>
//                     <p className="mb-1 font-semibold text-[0.875rem] leading-[1.375rem] text-richblack-5">
//                       Last Name <sup className="text-pink-200">*</sup>
//                     </p>
//                     <div className="bg-white p-2 flex flex-row items-center mr-2 rounded-md">
//                       <FaUser className="text-black mr-2" />
//                       <input
//                         required
//                         type="text"
//                         name="lastname"
//                         value={lastname}
//                         onChange={handleOnChange}
//                         placeholder="Enter last name"
//                         className="w-full rounded-[0.5rem] p-1 outline-none"
//                       />
//                     </div>
//                   </label>
//                 </div>
//                 <label className="w-full mb-[1rem]">
//                   <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] text-richblack-5">
//                     Email Address <sup className="text-pink-200">*</sup>
//                   </p>
//                   <div className="bg-white p-2 flex flex-row items-center mr-4 rounded-md">
//                     <MdEmail className="text-black mr-2" />
//                     <input
//                       required
//                       type="text"
//                       name="email"
//                       value={email}
//                       onChange={handleOnChange}
//                       placeholder="Enter email address"
//                       className="w-[80%] rounded-[0.5rem] p-1 outline-none"
//                     />
//                   </div>
//                 </label>

//                 <label className="relative mb-2">
//                   <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] text-richblack-5">
//                     Address<sup className="text-pink-200">*</sup>
//                   </p>
//                   <div className="bg-white p-2 flex flex-row items-center mr-4 rounded-md">
//                     <FaLocationDot className="text-black mr-2" />
//                     <input
//                       required
//                       type="text"
//                       name="address"
//                       value={address}
//                       onChange={handleOnChange}
//                       placeholder="Enter address"
//                       className="w-full rounded-[0.5rem] p-1 pr-10 outline-none"
//                     />
//                   </div>
//                 </label>
//                 <label className="relative mb-2">
//                   <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] text-richblack-5">
//                     Phone no.<sup className="text-pink-200">*</sup>
//                   </p>
//                   <div className="bg-white p-2 flex flex-row items-center mr-4 rounded-md">
//                     <FaLocationDot className="text-black mr-2" />
//                     <input
//                       required
//                       type="text"
//                       name="phonenumber"
//                       value={phonenumber}
//                       onChange={handleOnChange}
//                       placeholder="Phone No."
//                       className="w-full rounded-[0.5rem] p-1 pr-10 outline-none"
//                     />
//                   </div>
//                 </label>

//                 <button
//                   type="submit"
//                   className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4"
//                 >
//                   Confirm
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>

//       {/* Modal for Terms and Conditions */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-5 rounded-md w-11/12 sm:w-1/3">
//             <h2 className="text-lg font-semibold">Terms and Conditions</h2>
//             <div className="mt-2 text-sm">
//               <p>1. Warranty:The company warrants the kit from the delivery date.</p>
//               <p>2. Maintenance:The customer is responsible for ensuring regular maintenance of the kit in accordance with the company's guidelines. </p>
//               <p>3. Safety:Always wear a helmet and follow traffic rules <Link to="/Termsandconditions" >
//           see...
//           </Link></p>
//             </div>
//             <div className="flex items-center mt-4">
//               <input
//                 type="checkbox"
//                 checked={termsAccepted}
//                 onChange={handleTermsChange}
//                 className="mr-2"
//               />
//               <label>I accept the terms and conditions</label>
//             </div>
//             <div className="mt-4 flex justify-end">
//               <button
//                 onClick={checkoutHandler}
//                 className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
//               >
//                 Proceed to Payment
//               </button>
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="ml-2 text-red-500"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };