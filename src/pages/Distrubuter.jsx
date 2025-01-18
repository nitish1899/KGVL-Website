import { useState } from "react";
import React from "react";
import wave from "../resource/wave_final.png";
import { BusinessBook } from "../components/BusinessBook";
import { ContactCompany } from "../components/ContactCompany";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Booking } from "./Booking";
import { Paythousand } from "./Paythousand";
import DistributerFlex from "../resource/DistributerFlex.png"
import { Link } from "react-router-dom";

const Distrubuter = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    phonenumber: "",
  });
  const [show, setshow] = useState(false);

  const [selectedAmount, setSelectedAmount] = useState(1000);

  const { firstname, lastname, email, address, phonenumber } = formData;

  const handleAmountChange = (event) => {
    setSelectedAmount(parseInt(event.target.value, 10));
  };

  // Handle input fields, when some value changes

  // Handle Form Submission
  const handleOnSubmit = async (e) => {
    if (!firstname || !lastname || !email || !address || !phonenumber) {
      return;
    }
    e.preventDefault();

    try {
      const response = await axios.post("/vistuser", {
        firstname,
        lastname,
        email,
        address,
        phonenumber,
      });

      if (response.status === 200) {
        console.log("booking detail submitted successfully!");
      } else {
        console.error("Failed to submit booking detail.");
      }
    } catch (error) {
      console.error("Error submitting booking detail:", error);
    }
  };

  const checkoutHandler = async (amount) => {
    if (!firstname || !lastname || !email || !address || !phonenumber) {
      return;
    }

    const {
      data: { key },
    } = await axios.get("/api/getkey");
    const {
      data: { order },
    } = await axios.post("/api/checkout", {
      amount,
    });

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "TWI",
      description: "Test Transaction",
      image: "",
      order_id: order.id,
      callback_url: "/api/paymentverification",
      prefill: {
        email: email,
        firstname: firstname,
        lastname: lastname,
        email: email,
        address: address,
        phonenumber: phonenumber,
      },
      notes: {
        email: email,
        firstname: firstname,
        lastname: lastname,
        email: email,
        address: address,
        phonenumber: phonenumber,
      },

      theme: {
        color: "#3399cc",
      },
    };

    const razor = new window.Razorpay(options);

    razor.on("payment.failed", function (response) {
      toast.error(`Error Code: ${response.error.code}`);
      toast.error(`Error Description: ${response.error.description}`);
      toast.error(`Error Source: ${response.error.source}`);
      toast.error(`Error Step: ${response.error.step}`);
      toast.error(`Error Reason: ${response.error.reason}`);
      toast.error(
        `Error Metadata Order_10: ${response.error.eetadata.order_10}`
      );
      toast.error(
        `Error Metadata Payment_ID: ${response.error.metadata.payment_id}`
      );
    });

    // document.getElementById('rzp-button1").onclick = function(e){
    razor.open();
    // e.preventDefault();
    // }
    //  Reset
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      address: "",
      phonenumber: "",
    });
  };

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const paythousand = () => {
    setshow(true);
  };

  // Handle input fields, when some value changes
  //   const handleOnChange = (e) => {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [e.target.name]: e.target.value,
  //     }))
  //   }
  // /
  ///
  // http://localhost:5000/register
  // Handle Form Submission

  //   const handleOnSubmit = async (e) => {
  //     e.preventDefault();
  //     // mailer();
  //     try {
  //       const response = await axios.post("/register", {
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

  const tostershow = () => {
    // Show toast message
    toast.success("Query Raised successfully!", {
      position: "bottom-right",
      autoClose: 3000, // 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // Navigate to dashboard after a delay (adjust as needed)
  };

  return (
    <div className=" overflow-hidden relative flex flex-col justify-center  ">
      {/* <img src={wave} className="absolute -z-20 " loading="lazy"/> */}

      {/* <div className="flex-col  items-center  mx-auto w-11/12">
     
        <div class="flex  items-center justify-center py-10 rounded-lg bg-black bg-opacity-10    font-inter w-full   mx-auto mt-14 px-10 ">
            
             <h1>contain 1</h1>  
        </div>
        <div class="flex  items-center justify-center py-10 rounded-lg bg-black bg-opacity-10    font-inter w-full   mx-auto mt-14 px-10 ">
            
             <h1>contain 2</h1>  
        </div>
        <div class="flex  items-center justify-center py-10 rounded-lg bg-black bg-opacity-10    font-inter w-full   mx-auto mt-14 px-10 ">
            
             <h1>contain 3</h1>  
        </div>
     
     {show ?
     
     (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="flex lg:flex-col items-center justify-center  rounded-lg bg-white font-inter w-[60%] mx-auto mt-14 px-10 ">    
            < Paythousand />
             <button className=" lg:mt-[1%] lg:mb-[1%] lg:px-6 lg:py-2 lg:bg-yellow-500 rounded-md lg:font-semibold lg:flex lg:justify-center lg:items-center"   onClick={() => setshow(false)}>close</button>
        </div>
        </div>
    //     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    //     <div className="bg-white p-8 rounded-lg">
    //         <h1>Contain 4</h1>
    //         <button onClick={() => setshow(false)}>Close</button>
    //     </div>
    // </div>
     ):(
        <button onClick={paythousand}  className=" lg:mt-[1%]  lg:w-[100%] lg:px-6 lg:py-2 lg:bg-yellow-500 rounded-md lg:font-semibold lg:flex lg:justify-center lg:items-center">
       xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Pay 1000
    </button>
    

     )
     }
 

       </div> */}
      <div className="lg:w-10/12 min-[320px]:w-full h-10/12 flex lg:flex-row min-[320px]:flex-col items-center justify-between bg-black m-5 p-8 bg-opacity-10 mx-auto rounded-lg z-10 min-[320px]:gap-8 lg:gap-1">
        <img src={DistributerFlex} className="lg:w-1/2 min-[320px]:w-full h-[650px] rounded-md border-black border-5" />
        <div className="lg:w-[40%] min-[320px]:w-full  flex flex-col justify-center items-center gap-5 border-l-4 border-[#57E226] p-4">
          <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-bold text-center">Become a KGV Distributor</h3>
              <p>Are you passionate about cycling and interested in bringing the joy of riding KGV hybrid bikes to your community? Join us as a distributor and be a part of our journey to redefine urban commuting!</p>
              <p className="font-semibold text-md">Ready to embark on this exciting journey? Click the button below to express your interest and join the KGV family today!</p>
          </div>
          <Link to="https://docs.google.com/forms/d/e/1FAIpQLScS_YI7IFAzHgrzPfLOMQrAzA4-SculRqhotcYi-GroqDU6PQ/viewform?usp=send_form">
          <button className="p-4 bg-[#57E226] rounded-lg text-white font-bold">Join the KGV Family</button>
          </Link>
        </div>
        
      </div>
      <div className="mt-14 ">
        <BusinessBook />
      </div>

      <ContactCompany />
    </div>
  );
};

export default Distrubuter;
