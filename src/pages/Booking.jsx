


import React, { useState } from "react";
import socialBg from '../resource/socialBg.png';
import kgvHero from '../resource/kgvhero.png';
 export const Booking = () => {

  const [engine, setEngine] = useState('100cc');
  const [batteryType, setBatteryType] = useState('Lithium Ion');
  const [batteryPortability, setBatteryPortability] = useState('Portable');
  const [addon, setAddon] = useState('IoT Integration');
  const totalCost = '1,75,000'; // Replace with dynamic logic if needed

  const isActive = (option, value) =>
    option === value ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700';


  return (
    <div style={{ padding: '24px', fontFamily: 'sans-serif', backgroundColor: '#f5f5f5' }}>
      <h2 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }}>Unleash the Future with the <span style={{ color: '#22c55e' }}>KGV Hybrid Bikes</span></h2>
      <p style={{ textAlign: 'center', maxWidth: '600px', margin: '8px auto 24px' }}>
        Experience seamless electric performance, rugged build quality, and eco-friendly performance—your perfect ride for urban streets and weekend adventures.
      </p>

        <div className="bg-white rounded-lg shadow-2xl p-6 mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input className="border rounded px-3 py-2" placeholder="Full Name*" />
              <input className="border rounded px-3 py-2" placeholder="Father's Name" />
              <input className="border rounded px-3 py-2" placeholder="Date of Birth" />
              <input className="border rounded px-3 py-2" placeholder="Phone" />
              <input className="border rounded px-3 py-2" placeholder="Email" />
              <select className="border rounded px-3 py-2">
                <option>Select Identification Proof</option>
                <option>Aadhaar</option>
                <option>Driving License</option>
                <option>PAN Card</option>
              </select>
              <input className="border rounded px-3 py-2" placeholder="ID Number" />
              <input className="border rounded px-3 py-2" placeholder="Address line 1" />
              <input className="border rounded px-3 py-2" placeholder="Address line 2" />
              <input className="border rounded px-3 py-2" placeholder="City" />
              <input className="border rounded px-3 py-2 col-span-2" placeholder="State" />
            </div>
            <button type="submit" className="bg-green-600 text-white w-full py-2 rounded font-semibold hover:bg-green-700">
              Join the KGV Family
            </button>
          </form>

  <div className="flex justify-center items-center">
    <img src={kgvHero} alt="KGV Hero" className="w-full h-auto max-h-[500px] object-contain rounded-full" />
  </div>
        </div>

          <div className="bg-white p-6 rounded-xl mb-6 shadow-md mt-12 max-w-3xl mx-auto">
        <h2 className="text-xl text-green-500 mb-3 text-center">Easy 3-Step Payment</h2>
        <p className="text-sm mb-3 text-center">Complete your purchase in three simple steps with a flexible payment plan designed for your convenience. </p>
        <ul className="list-none space-y-4">
          <li><span className="bg-green-700 text-white rounded-full px-3 py-1 mr-2">1. Booking Amount:</span> Pay a small booking fee to secure your order.</li>
          <li><span className="bg-green-700 text-white rounded-full px-3 py-1 mr-2">2. 30% Payment:</span> Within 7 days of booking, pay 30% of total cost to confirm configuration.</li>
          <li><span className="bg-green-700 text-white rounded-full px-3 py-1 mr-2">3. Final Payment:</span> Pay the remaining amount at time of delivery.</li>
        </ul>
      </div>


 <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
      <h2 className="text-xl font-semibold text-green-600 text-center mb-4">Build The Kit Perfect for You</h2>

      <div className="mb-4">
        <h3 className="font-semibold text-gray-700 mb-1">Main Configuration</h3>
<div className="flex justify-between items-center mb-2">
  <p className="text-sm mb-1 text-gray-700">Choose the engine capacity:</p>
  <div className="flex gap-2">
    {['100cc', '125cc', '150cc'].map((cc) => (
      <button
        key={cc}
        onClick={() => setEngine(cc)}
        className={`px-3 py-1 rounded ${isActive(engine, cc)}`}
      >
        {cc}
      </button>
    ))}
  </div>
</div>

        

<div className="flex justify-between items-center mb-2">
        <p className="text-sm mb-1">Battery type:</p>
        <div className="flex gap-2 mb-2">
          {['Sodium Icon', 'LPF', 'Lithium Ion'].map((type) => (
            <button
              key={type}
              onClick={() => setBatteryType(type)}
              className={`px-3 py-1 rounded ${isActive(batteryType, type)}`}
            >
              {type}
            </button>
          ))}
        </div>
        </div>

<div className="flex justify-between items-center mb-2">
        <p className="text-sm mb-1">Battery portability:</p>
        <div className="flex gap-2 mb-2">
          {['Portable', 'Fixed'].map((type) => (
            <button
              key={type}
              onClick={() => setBatteryPortability(type)}
              className={`px-3 py-1 rounded ${isActive(batteryPortability, type)}`}
            >
              {type}
            </button>
          ))}
        </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-gray-700 mb-1">Add Ons</h3>
        <p className="text-sm mb-1">Other Add On:</p>
        <div className="flex gap-2">
          {['IoT Integration', 'Charger variation'].map((item) => (
            <button
              key={item}
              onClick={() => setAddon(item)}
              className={`px-3 py-1 rounded ${isActive(addon, item)}`}
            >
              {item}
            </button>
          ))}
        </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <div>
          <p className="text-sm text-gray-600">Total Cost for Your Build:</p>
          <p className="text-2xl font-bold text-green-600">{totalCost}</p>
        </div>
        <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded shadow">
          Book Now ⚡
        </button>
      </div>
    </div>

    </div>
  );
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

// export const Booking = () => {
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
//     Purchase KGV Hybrid Kit
//   </div>
//         <div className="flex min-[320px]:flex-col sm:flex-row min-[320px]:w-full h-full items-center justify-between py-10 rounded-lg bg-black bg-opacity-10 font-inter mx-auto my-10 px-10">
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
//                 <label>
//                   <p className="mb-1 font-semibold text-[0.875rem] leading-[1.375rem] text-richblack-5">
//                     Amount to pay <sup className="text-pink-200">*</sup>
//                   </p>
//                   <select
//                     required
//                     onChange={handleAmountChange}
//                     className="bg-white p-2 rounded-md"
//                   >
//                     <option value={5000}>₹5,000</option>
//                     <option value={10000}>₹10,000</option>
//                   </select>
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