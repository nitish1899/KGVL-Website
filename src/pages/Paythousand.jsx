


import { useState } from "react";
import React from "react";
import wave from "../resource/wave_final.png";
import { BusinessBook } from "../components/BusinessBook";
import { ContactCompany } from "../components/ContactCompany";
import { CiUser } from "react-icons/ci";
import { MdOutlineConfirmationNumber } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import axios from "axios";
import Card from "./Card.jsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SplendorBike from "../resource/splendor.png";
import bike5 from "../resource/bike_main.png";

export const Paythousand = () => {
  // student or instructor

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    phonenumber: "",
  });
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
      const response = await axios.post(
        "/vistuser",
        {
          firstname,
          lastname,
          email,
          address,
          phonenumber,
        }
      );

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

  return (
    <div className="w-full overflow-hidden  z-40">
      

      <div className="flex min-[320px]:flex-col   items-center  mx-auto max-w-[1204px] w-11/12">
        <div class="flex min-[320px]:flex-col sm:flex-row min-[320px]:w-full h-full   items-center justify-between py-10 rounded-lg bg-black bg-opacity-10    font-inter   mx-auto mt-14  px-10  ">
          {/* Form */}
          <div className="">
            <img src={bike5} className="hover:scale-110 min-[320px]:h-[10rem] min-[320px]:w-[10rem] sm:h-[10rem] sm:w-[10rem] lg:h-[20rem] lg:w-[20rem]" />
          </div>
          <form
            onSubmit={handleOnSubmit}
            className="flex flex-col  gap-y-4 w-2/3  font-inter  min-[320px]:h-2/3 min-[320px]:w-[85vw] sm:w-2/3"
          >
            <div className="flex w-full justify-between gap-9    ">
              <div className="flex flex-col  w-screen ">
                <div className=" md:flex gap-x-4  ">
                  <label className="mb-[1rem]">
                    <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] black">
                      First Name <sup className="text-pink-200">*</sup>
                    </p>
                    <div className="bg-white p-2 flex flex-row items-center mr-2  rounded-md">
                      <FaUser className="text-black mr-2" />
                      <input
                        required
                        type="text"
                        name="firstname" // Change this to "firstname"
                        value={firstname}
                        onChange={handleOnChange}
                        placeholder="Enter first name"
                        style={{
                          boxShadow:
                            "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                        }}
                        className="w-full rounded-[0.5rem] p-1 outline-none "
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
                        name="lastname" // Change this to "lastname"
                        value={lastname}
                        onChange={handleOnChange}
                        placeholder="Enter last name"
                        style={{
                          boxShadow:
                            "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                        }}
                        className="w-full rounded-[0.5rem] p-1 outline-none "
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
                        boxShadow:
                          "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
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
                <label className="relative mb-2">
                  <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] text-richblack-5">
                    Phone no.<sup className="text-pink-200">*</sup>
                  </p>
                  <div className="bg-white p-2 flex flex-row items-center mr-4  rounded-md">
                    <FaLocationDot className="text-black mr-2" />
                    <input
                      required
                      type="text"
                      name="phonenumber"
                      value={phonenumber}
                      onChange={handleOnChange}
                      placeholder="Phone No."
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

            <div className="flex items-center justify-center min-[320px]:flex-col sm:flex-row sm:gap-5">
              <div className="lg:mr-[15%] ">
                {/* Dropdown menu for amount selection */}
                <select
                  className="  mt-2 p-2 border border-gray-300 rounded"
                  value={selectedAmount}
                  onChange={handleAmountChange}
                >
                  <option value={1000}>₹1000</option>
                </select>
              </div>
              <button
                type="submit"
                className="mt-2  rounded-[8px] bg-[#3EC70B] p-1 py-[5px] px-[14px] text-white"
                onClick={handleOnSubmit}
                
              >
                <Card
                  amount={selectedAmount}
                  checkoutHandler={checkoutHandler}
                />
                
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
