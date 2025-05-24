
import React from 'react';
import wave from '../resource/wave_final.png';
import socialBg from '../resource/socialBg.png';
import kgvHero from '../resource/kgvhero.png';
import indiaMap from '../resource/india.png';

const Distrubuter = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* Background Wave */}
      <img src={wave} className="absolute w-full h-full top-0 object-cover opacity-60 z-0" alt="wave background" />

      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        {/* Join Today Section */}
        <div className="bg-white rounded-lg shadow-2xl p-8 text-center max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            <span className="text-green-600">Join hands with KGV Today</span>
          </h2>
          <h2 className="text-md font-bold text-gray-800 mb-4">
            <span className="text-green-600">#KgvLaoClimateBachao #ChaiSeSastiRide</span>
          </h2>
                    <button className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 my-4">
            LET'S TEAM UP
          </button>
          <p className="text-gray-700 mb-6">
            Are you passionate about cycling and interested in bringing the joy of riding KGV hybrid bikes to your community?
            Join us as a distributor and be a part of our journey to redefine urban commuting!
          </p>


<div className="mt-6 space-y-4 text-center">
  {/* Button and Earnings stacked vertically */}
  <div className="flex flex-col items-center gap-2">
    <button className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700">
      Embrace sustainability with a chance of earning up to
    </button>
    <span className="text-2xl font-bold text-green-800">7-10 Lakhs/month*</span>
  </div>

  {/* Second Button */}
  <button className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700">
    One Distributor One District
  </button>
</div>

</div>



        {/* Form Section */}
        <div className="bg-white rounded-lg shadow-2xl p-6 mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
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

        {/* Ride Care-free Section */}
        <div className="bg-white rounded-lg shadow-2xl p-8 mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img src={indiaMap} alt="India Map" className="w-full h-auto rounded-lg" />
          </div>
<div className="flex flex-col justify-center p-8 space-y-4">
  <div className="bg-orange-100 text-orange-600 text-center font-bold text-xl rounded-full px-4 py-4 min-h-[100px] flex items-center break-words overflow-hidden whitespace-normal">
    RIDE CARE-FREE WITH KGV SMART MOBILITY
  </div>
  <div className="bg-gray-100 text-gray-700 text-center rounded-full px-4 py-4 min-h-[100px] flex items-center break-words overflow-hidden whitespace-normal">
    Ride carefree with KGV Smart Mobility! Cut your travel expenses by 90%. Enjoy a hassle-free stress-free journey!
  </div>
  <div className="bg-green-100 text-green-700 text-center font-semibold rounded-full px-4 py-4 min-h-[100px] flex items-center break-words overflow-hidden whitespace-normal">
    For the first time ever India has its own patented technology driven by 'Make in India' and 'Atmanirbhar Bharat' initiatives.
    KGV introduces a unique innovation: converting regular bikes like never before.
  </div>
</div>



        </div>
      </div>
    </div>
  );
};

export default Distrubuter;


// import React from "react";
// import wave from "../resource/wave_final.png";
// import socialBg from "../resource/socialBg.png"; // replace with your social image path

// const Distrubuter = () => {
//   return (
//     <div className="relative w-full overflow-hidden">

//       {/* Background Wave */}
//       <img
//         src={wave}
//         className="w-full h-full absolute top-0 left-0 opacity-50 object-cover z-0"
//         alt="Wave Background"
//       />

//       {/* Main content container */}
//       <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 space-y-12">
        
//         {/* Mahakumbh Image Grid Section */}
//         <div className="bg-white rounded-lg shadow-md border-2 border-blue-500 p-6 max-w-6xl mx-auto">
//           <h2 className="text-center text-xl font-semibold text-green-700 mb-4">
//            @ Startup Mahakumbh 2025
//           </h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//             {/* Replace src with your actual image paths */}
//             <img src="/path/img1.jpg" alt="Event" className="rounded" />
//             <img src="/path/img2.jpg" alt="Event" className="rounded" />
//             <img src="/path/img3.jpg" alt="Event" className="rounded" />
//             <img src="/path/img4.jpg" alt="Event" className="rounded" />
//             <img src="/path/img5.jpg" alt="Event" className="rounded" />
//             <img src="/path/img6.jpg" alt="Event" className="rounded" />
//             <img src="/path/img7.jpg" alt="Event" className="rounded" />
//           </div>
//         </div>


// {/* Stay Connected Section with dark shadow */}
// <div
//   className="bg-white rounded-lg p-6 max-w-4xl mx-auto text-center"
//   style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' }}
// >
//   <h3 className="text-green-700 text-xl font-semibold mb-2">Stay Connected</h3>
//   <p className="text-sm text-gray-600 mb-4">
//     Follow us on social media for the latest updates, insights, and announcements.
//   </p>
//   <div className="w-full">
//     <img
//       src={socialBg}
//       alt="Social Media"
//       className="w-full h-auto object-contain rounded"
//     />
//   </div>
// </div>

//       </div>
//     </div>
//   );
// };

// export default Distrubuter;





// import { useState } from "react";
// import React from "react";

// import { BusinessBook } from "../components/BusinessBook";
// import { ContactCompany } from "../components/ContactCompany";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// import DistributerFlex from "../resource/DistributerFlex.png"
// import { Link } from "react-router-dom";

// const Distrubuter = () => {
//   const [formData, setFormData] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     address: "",
//     phonenumber: "",
//   });
//   const [show, setshow] = useState(false);

//   const [selectedAmount, setSelectedAmount] = useState(1000);

//   const { firstname, lastname, email, address, phonenumber } = formData;

//   const handleAmountChange = (event) => {
//     setSelectedAmount(parseInt(event.target.value, 10));
//   };

//   // Handle input fields, when some value changes

//   // Handle Form Submission
//   const handleOnSubmit = async (e) => {
//     if (!firstname || !lastname || !email || !address || !phonenumber) {
//       return;
//     }
//     e.preventDefault();

//     try {
//       const response = await axios.post("/vistuser", {
//         firstname,
//         lastname,
//         email,
//         address,
//         phonenumber,
//       });

//       if (response.status === 200) {
//         console.log("booking detail submitted successfully!");
//       } else {
//         console.error("Failed to submit booking detail.");
//       }
//     } catch (error) {
//       console.error("Error submitting booking detail:", error);
//     }
//   };

//   const checkoutHandler = async (amount) => {
//     if (!firstname || !lastname || !email || !address || !phonenumber) {
//       return;
//     }

//     const {
//       data: { key },
//     } = await axios.get("/api/getkey");
//     const {
//       data: { order },
//     } = await axios.post("/api/checkout", {
//       amount,
//     });

//     const options = {
//       key,
//       amount: order.amount,
//       currency: "INR",
//       name: "TWI",
//       description: "Test Transaction",
//       image: "",
//       order_id: order.id,
//       callback_url: "/api/paymentverification",
//       prefill: {
//         email: email,
//         firstname: firstname,
//         lastname: lastname,
//         email: email,
//         address: address,
//         phonenumber: phonenumber,
//       },
//       notes: {
//         email: email,
//         firstname: firstname,
//         lastname: lastname,
//         email: email,
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
//       toast.error(
//         `Error Metadata Order_10: ${response.error.eetadata.order_10}`
//       );
//       toast.error(
//         `Error Metadata Payment_ID: ${response.error.metadata.payment_id}`
//       );
//     });

//     // document.getElementById('rzp-button1").onclick = function(e){
//     razor.open();
//     // e.preventDefault();
//     // }
//     //  Reset
//     setFormData({
//       firstname: "",
//       lastname: "",
//       email: "",
//       address: "",
//       phonenumber: "",
//     });
//   };

//   const handleOnChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const paythousand = () => {
//     setshow(true);
//   };

//   // Handle input fields, when some value changes
//   //   const handleOnChange = (e) => {
//   //     setFormData((prevData) => ({
//   //       ...prevData,
//   //       [e.target.name]: e.target.value,
//   //     }))
//   //   }
//   // /
//   ///
//   // http://localhost:5000/register
//   // Handle Form Submission

//   //   const handleOnSubmit = async (e) => {
//   //     e.preventDefault();
//   //     // mailer();
//   //     try {
//   //       const response = await axios.post("/register", {
//   //         name: firstName,
//   //         lastname: lastName,
//   //         email,
//   //         address,
//   //         query,
//   //       });

//   //       if (response.status === 200) {
//   //         console.log(response);
//   //         console.log("Query submitted successfully!");
//   //         tostershow();
//   //       } else {
//   //         console.error("Failed to submit query.");
//   //       }
//   //     } catch (error) {
//   //       console.error("Error submitting query:", error);
//   //     }

//   //     // Reset
//   //     setFormData({
//   //       firstName: "",
//   //       lastName: "",
//   //       email: "",
//   //       password: "",
//   //       confirmPassword: "",
//   //       address: "",
//   //     query:""
//   //     })

//   //   }

//   const tostershow = () => {
//     // Show toast message
//     toast.success("Query Raised successfully!", {
//       position: "bottom-right",
//       autoClose: 3000, // 3 seconds
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });

//     // Navigate to dashboard after a delay (adjust as needed)
//   };

//   return (
//     <div className=" overflow-hidden relative flex flex-col justify-center  ">
//       {/* <img src={wave} className="absolute -z-20 " loading="lazy"/> */}

//       {/* <div className="flex-col  items-center  mx-auto w-11/12">
     
//         <div class="flex  items-center justify-center py-10 rounded-lg bg-black bg-opacity-10    font-inter w-full   mx-auto mt-14 px-10 ">
            
//              <h1>contain 1</h1>  
//         </div>
//         <div class="flex  items-center justify-center py-10 rounded-lg bg-black bg-opacity-10    font-inter w-full   mx-auto mt-14 px-10 ">
            
//              <h1>contain 2</h1>  
//         </div>
//         <div class="flex  items-center justify-center py-10 rounded-lg bg-black bg-opacity-10    font-inter w-full   mx-auto mt-14 px-10 ">
            
//              <h1>contain 3</h1>  
//         </div>
     
//      {show ?
     
//      (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//         <div class="flex lg:flex-col items-center justify-center  rounded-lg bg-white font-inter w-[60%] mx-auto mt-14 px-10 ">    
//             < Paythousand />
//              <button className=" lg:mt-[1%] lg:mb-[1%] lg:px-6 lg:py-2 lg:bg-yellow-500 rounded-md lg:font-semibold lg:flex lg:justify-center lg:items-center"   onClick={() => setshow(false)}>close</button>
//         </div>
//         </div>
//     //     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//     //     <div className="bg-white p-8 rounded-lg">
//     //         <h1>Contain 4</h1>
//     //         <button onClick={() => setshow(false)}>Close</button>
//     //     </div>
//     // </div>
//      ):(
//         <button onClick={paythousand}  className=" lg:mt-[1%]  lg:w-[100%] lg:px-6 lg:py-2 lg:bg-yellow-500 rounded-md lg:font-semibold lg:flex lg:justify-center lg:items-center">
//        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Pay 1000
//     </button>
    

//      )
//      }
 

//        </div> */}
//       <div className="lg:w-10/12 min-[320px]:w-full h-10/12 flex lg:flex-row min-[320px]:flex-col items-center justify-between bg-black m-5 p-8 bg-opacity-10 mx-auto rounded-lg z-10 min-[320px]:gap-8 lg:gap-1">
//         <img src={DistributerFlex} className="lg:w-1/2 min-[320px]:w-full h-[650px] rounded-md border-black border-5" />
//         <div className="lg:w-[40%] min-[320px]:w-full  flex flex-col justify-center items-center gap-5 border-l-4 border-[#57E226] p-4">
//           <div className="flex flex-col gap-3">
//               <h3 className="text-2xl font-bold text-center">Become a KGV Distributor</h3>
//               <p>Are you passionate about cycling and interested in bringing the joy of riding KGV hybrid bikes to your community? Join us as a distributor and be a part of our journey to redefine urban commuting!</p>
//               <p className="font-semibold text-md">Ready to embark on this exciting journey? Click the button below to express your interest and join the KGV family today!</p>
//           </div>
//           <Link to="https://forms.gle/MoAyKut9eX1PrEru6">
//           <button className="p-4 bg-[#57E226] rounded-lg text-white font-bold">Join the KGV Family</button>
//           </Link>
//         </div>
        
//       </div>
//       <div className="mt-14 ">
//         <BusinessBook />
//       </div>

//       <ContactCompany />
//     </div>
//   );
// };

// export default Distrubuter;
