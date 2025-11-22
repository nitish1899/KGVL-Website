
import React, { useState } from "react";
import axios from "axios";
import rv400Image from "../resource/avangerbg.png";
import { FaStar, FaRedo, FaPlay } from "react-icons/fa";
import { State, City } from "country-state-city";
import kgvHero from "../resource/kgvhero.png";



const KgvbikeOrder = () => {

  const [availableCities, setAvailableCities] = useState([]);
  const INDIA_CODE = "IN";
  const [dealerEmail, setDealerEmail] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    idProof: "Aadhar",
    idNumber: "",
    country: "India",
    state: "",
    city: "",
    color: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const colorOptions = ["RED", "BLUE", "BLACK"];
  const colorMap = {
    RED: "bg-red-600",
    BLUE: "bg-blue-600",
    BLACK: "bg-black",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleLocationChange = async (field, value) => {
    if (field === "state") {
      setFormData(prev => ({
        ...prev,
        state: value,
        city: "",
        branch: ""
      }));
      setAvailableCities([]); // clear cities first
  
      try {
        const allCities = City.getCitiesOfState(INDIA_CODE, value);
        const filteredCities = [];
  
        for (const city of allCities) {
          try {
            const encodedCityName = encodeURIComponent(city.name);
            const res = await fetch(`http://localhost:5000/dealer/email/${encodedCityName}`);
            
            if (res.ok) {
              const data = await res.json();
              if (data.success && data.dealerEmail) {
                filteredCities.push(city);
              }
            }
            // skip 404s silently
          } catch (err) {
            console.warn(`Failed to check dealer for ${city.name}:`, err);
          }
        }
  
        setAvailableCities(filteredCities);
      } catch (err) {
        console.error("Failed to fetch cities or dealers:", err);
      }
  
    } else if (field === "city") {
      setFormData(prev => ({
        ...prev,
        city: value,
        branch: value
      }));
  
      try {
        const encodedCity = encodeURIComponent(value);
        const response = await fetch(`http://localhost:5000/dealer/email/${encodedCity}`);
  
        if (response.ok) {
          const data = await response.json();
          if (data.success && data.dealerEmail) {
            setDealerEmail(data.dealerEmail);
          } else {
            setDealerEmail("");
          }
        } else {
          setDealerEmail("");
        }
      } catch (err) {
        console.error("Error fetching dealer email:", err);
        setDealerEmail("");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post("http://localhost:5000/api/kgvbikeorder", formData);
      setMessage("✅ Order placed successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        idProof: "Aadhar",
        idNumber: "",
        country: "India",
        state: "",
        city: "",
        color: "",
      });
    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>

    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10 items-start bg-white rounded-2xl shadow-lg">
      {/* Left Section */}
      <div className="flex flex-col items-center gap-4">
        <img
          src={rv400Image}
          alt="KGV Hybrid Bike"
          className="w-full max-w-md rounded-xl shadow-md"
        />

        <div className="flex flex-wrap justify-center gap-3 mt-4">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded shadow-sm text-sm">
            📷 Images (8)
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded shadow-sm text-sm flex items-center gap-1">
            <FaRedo /> 360° View
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded shadow-sm text-sm flex items-center gap-1">
            <FaPlay /> Videos
          </button>
        </div>

        {/* Color Selection */}
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {colorOptions.map((color) => {
            const isSelected = formData.color === color;
            return (
              <button
                key={color}
                onClick={() => setFormData({ ...formData, color })}
                aria-pressed={isSelected}
                className={`px-4 py-2 rounded text-sm font-semibold shadow-sm transition 
                  border focus:outline-none
                  ${
                    isSelected
                      ? `${colorMap[color]} text-white border-transparent ring-2 ring-offset-2 ring-${color.toLowerCase()}-300`
                      : "bg-gray-100 text-gray-800 border border-gray-300 hover:bg-gray-200"
                  }`}
              >
                {color}
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Section */}
      <div className="space-y-5">
        <h1 className="text-4xl font-bold text-gray-900">KGV E-Hybrid Bike</h1>

        <div className="flex items-center gap-2 text-yellow-500 font-semibold">
          <FaStar className="text-lg" />
          4.1/5 <span className="text-sm text-blue-600">(607 reviews)</span>
        </div>

        <p className="text-gray-700 leading-relaxed">
          The KGV E-Hybrid Bike is a smart blend of petrol and electric power, offering a range of
          up to 150 km on electric mode and backed by a 125cc engine. It’s available in 3 stunning
          colors, with a top electric speed of 80 kmph, disc brakes front and rear, and a solid
          130kg kerb weight — perfect for both daily commutes and adventurous rides.
        </p>

        <div className="text-2xl font-bold text-gray-800">
          ₹1.24 - 1.40 Lakh{" "}
          <span className="text-blue-600 text-base ml-3 underline cursor-pointer">
            Check On-Road Price »
          </span>
        </div>

        <div className="text-sm text-gray-600">
          Ex-showroom Price in Delhi •{" "}
          <span className="text-blue-500 underline cursor-pointer">Change City</span>
        </div>

        <div className="text-sm text-gray-600">
          EMI starts @ ₹3,565 •{" "}
          <span className="text-blue-500 underline cursor-pointer">Get EMI Offer</span> •{" "}
          <span className="text-blue-500 underline cursor-pointer">EMI Calculator</span>
        </div>

        <div className="flex gap-4 mt-6">
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
            View July Offers
          </button>
          <button className="border border-red-600 text-red-600 px-6 py-2 rounded-lg hover:bg-red-50 transition">
            Download Brochure
          </button>
        </div>
      </div>
    </div>

          <div className="bg-white rounded-lg shadow-2xl p-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div>
    <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
      className="border w-full rounded px-3 py-2"
    />
  </div>

    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">Phone Number</label>
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
        className="border w-full rounded px-3 py-2"
      />
    </div>
  
    {/* Email */}
    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="border w-full rounded px-3 py-2"
      />
    </div>
  
    {/* ID Proof Dropdown */}
    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">ID Proof</label>
      <select
        name="idProof"
        value={formData.idProof}
        onChange={handleChange}
        required
        className="border w-full rounded px-3 py-2"
      >
        <option value="">-- Select ID Proof --</option>
        <option value="Aadhar">Aadhar</option>
        <option value="PAN">PAN</option>
        <option value="Driving License">Driving License</option>
      </select>
    </div>
  
    {/* ID Number */}
    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">ID Number</label>
      <input
        type="text"
        name="idNumber"
        value={formData.idNumber}
        onChange={handleChange}
        required
        className="border w-full rounded px-3 py-2"
      />
    </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">State</label>
              <select
                name="state"
                value={formData.state}
                onChange={(e) => handleLocationChange("state", e.target.value)}
                required
                className="border w-full rounded px-3 py-2"
              >
                <option value="">-- Select State --</option>
                {State.getStatesOfCountry(INDIA_CODE).map((state) => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
  <div>
    <label className="block mb-1 text-sm font-medium text-gray-700">City</label>
    <select
      name="city"
      value={formData.city}
      onChange={(e) => handleLocationChange("city", e.target.value)}
      required
      className="border w-full rounded px-3 py-2"
    >
      <option value="">-- Select City --</option>
      {availableCities.map((city) => (
        <option key={city.name} value={city.name}>
          {city.name}
        </option>
      ))}
    </select>
  </div>

    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" disabled={loading}>
          {loading ? "Submitting..." : "Submit Order"}
        </button>
  

        </form>
              <div className="flex justify-center items-center">
                <img
                  src={kgvHero}
                  alt="KGV Hero"
                  className="w-full h-auto max-h-[500px] object-contain rounded-full"
                />
              </div>
        </div>
  

      </>
  );
};

export default KgvbikeOrder;




// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { State, City } from "country-state-city";
// import kgvHero from "../resource/kgvhero.png";
// import rv400Image from "../resource/avangerbg.png";

// const KgvbikeOrder = () => {
//   const navigate = useNavigate();
//   const [availableCities, setAvailableCities] = useState([]);

//   const INDIA_CODE = "IN";

// const [dealerEmail, setDealerEmail] = useState("");
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     idProof: "",
//     idNumber: "",
//     vehicleNo: "",
//     model: "",
//     bikeCC: "", 
//     chassisNo: "",
//     chargerType: "",
//     batteryType: "",
//     batteryCapacity: "",
//     state: "",
//     city: "",
//     branch: "",
//     country: "India",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

// const handleLocationChange = async (field, value) => {
//   if (field === "state") {
//     setFormData(prev => ({
//       ...prev,
//       state: value,
//       city: "",
//       branch: ""
//     }));
//     setAvailableCities([]); // clear cities first

//     try {
//       const allCities = City.getCitiesOfState(INDIA_CODE, value);
//       const filteredCities = [];

//       for (const city of allCities) {
//         try {
//           const encodedCityName = encodeURIComponent(city.name);
//           const res = await fetch(`http://localhost:5000/dealer/email/${encodedCityName}`);
          
//           if (res.ok) {
//             const data = await res.json();
//             if (data.success && data.dealerEmail) {
//               filteredCities.push(city);
//             }
//           }
//           // skip 404s silently
//         } catch (err) {
//           console.warn(`Failed to check dealer for ${city.name}:`, err);
//         }
//       }

//       setAvailableCities(filteredCities);
//     } catch (err) {
//       console.error("Failed to fetch cities or dealers:", err);
//     }

//   } else if (field === "city") {
//     setFormData(prev => ({
//       ...prev,
//       city: value,
//       branch: value
//     }));

//     try {
//       const encodedCity = encodeURIComponent(value);
//       const response = await fetch(`http://localhost:5000/dealer/email/${encodedCity}`);

//       if (response.ok) {
//         const data = await response.json();
//         if (data.success && data.dealerEmail) {
//           setDealerEmail(data.dealerEmail);
//         } else {
//           setDealerEmail("");
//         }
//       } else {
//         setDealerEmail("");
//       }
//     } catch (err) {
//       console.error("Error fetching dealer email:", err);
//       setDealerEmail("");
//     }
//   }
// };




  



//   return (
//     <div style={{ padding: "24px", fontFamily: "sans-serif", backgroundColor: "#f5f5f5" }}>
//       <h2 className="text-center text-2xl font-bold">
//         Unleash the Future with <span className="text-green-500">KGV Hybrid Bikes</span>
//       </h2>
//       <p className="text-center max-w-xl mx-auto mt-2 mb-6">
//         Experience seamless electric performance, rugged build quality, and eco-friendly performance—your perfect ride for urban streets and weekend adventures.
//       </p>


//       <div className="bg-white p-6 rounded-xl mb-6 shadow-md mt-12 max-w-3xl mx-auto">
//         <h2 className="text-xl text-green-500 mb-3 text-center">Easy 3-Step Payment</h2>
//         <p className="text-sm mb-3 text-center">Complete your purchase in three simple steps with a flexible payment plan designed for your convenience. </p>
//         <ul className="list-none space-y-4">
//           <li><span className="bg-green-700 text-white rounded-full px-3 py-1 mr-2">1. Booking Amount:</span> Pay a small booking fee to secure your order.</li>
//           <li><span className="bg-green-700 text-white rounded-full px-3 py-1 mr-2">2. 30% Payment:</span> Within 7 days of booking, pay 30% of total cost to confirm configuration.</li>
//           <li><span className="bg-green-700 text-white rounded-full px-3 py-1 mr-2">3. Final Payment:</span> Pay the remaining amount at time of delivery.</li>
//         </ul>
//       </div>


//  <div className="max-w-6xl mx-auto p-4 grid md:grid-cols-2 gap-8 items-start">
//       {/* Left: Image */}
//       <div className="flex flex-col items-center">
//         <img src={rv400Image} alt="Revolt RV400" className="w-full max-w-md" />
//        <div className="flex gap-4 mt-4 flex-wrap">
//   <button className="bg-gray-200 px-4 py-1 rounded">Images(8)</button>
//   <button className="bg-gray-200 px-4 py-1 rounded">🔄 360° View</button>
//   <button className="bg-gray-200 px-4 py-1 rounded">▶ Videos</button>

//   {/* Dynamic Color Buttons */}
//   {["RED", "BLUE", "BLACK"].map((type) => {
//     const colorMap = {
//       RED: "bg-red-600",
//       BLUE: "bg-blue-600",
//       BLACK: "bg-black",
//     };

//     const isSelected = formData.color === type;

//     return (
//       <button
//         key={type}
//         type="button"
//         className={`px-4 py-1 rounded border text-white transition-all duration-200 
//           ${isSelected ? `${colorMap[type]} border-transparent` : "bg-gray-100 text-gray-700 border-gray-300"}
//         `}
//         onClick={() => setFormData({ ...formData, color: type })}
//       >
//         {type}
//       </button>
//     );
//   })}
// </div>

//       </div>

//       {/* Right: Details */}
//       <div className="space-y-4">
//         <h1 className="text-3xl font-bold text-gray-800">Revolt RV400</h1>
//         <div className="text-yellow-500 font-semibold">
//           ⭐ 4.1/5 <span className="text-sm text-blue-600">(607 reviews)</span>
//         </div>

//         <p className="text-gray-700">
//           Revolt RV400 is an electric sports bike with price starting from <strong>Rs. 1.24 lakh</strong>.
//           RV400 has a range of 150 km. It is available in 6 colours and 3 variants. It can achieve a
//           maximum speed of 85 kmph. The bike gets disc brakes in the front and rear, apart from this it
//           weighs 115 kg. RV400 is a tough competitor to Oben Rorr EZ and Ola Roadster.
//         </p>

//         <div className="text-lg font-semibold text-gray-800">
//           Rs. 1.24 - 1.40 Lakh{" "}
//           <span className="text-blue-600 text-sm ml-2 cursor-pointer underline">
//             Check On Road Price »
//           </span>
//         </div>

//         <div className="text-sm text-gray-600">
//           Ex-showroom Price in Delhi •{" "}
//           <span className="text-blue-500 cursor-pointer underline">change city</span>
//         </div>

//         <div className="text-sm text-gray-600">
//           EMI starts @ Rs. 3,565 •{" "}
//           <span className="text-blue-500 cursor-pointer underline">Get EMI Offer</span> •{" "}
//           <span className="text-blue-500 cursor-pointer underline">EMI Calculator</span>
//         </div>

//         <div className="flex gap-4 mt-6">
//           <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">
//             View July Offers
//           </button>
//           <button className="bg-white border border-red-600 text-red-600 px-6 py-2 rounded hover:bg-red-50">
//             Download Brochure
//           </button>
//         </div>
//       </div>
//     </div>
    
//       <div className="bg-white rounded-lg shadow-2xl p-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Left Form */}
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             handlePayment();
//           }}
//           className="space-y-4"
//         >

//           <div>
//     <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
//     <input
//       type="text"
//       name="name"
//       value={formData.name}
//       onChange={handleChange}
//       required
//       className="border w-full rounded px-3 py-2"
//     />
//   </div>

//   {/* Phone */}
//   <div>
//     <label className="block mb-1 text-sm font-medium text-gray-700">Phone Number</label>
//     <input
//       type="text"
//       name="phone"
//       value={formData.phone}
//       onChange={handleChange}
//       required
//       className="border w-full rounded px-3 py-2"
//     />
//   </div>

//   {/* Email */}
//   <div>
//     <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
//     <input
//       type="email"
//       name="email"
//       value={formData.email}
//       onChange={handleChange}
//       required
//       className="border w-full rounded px-3 py-2"
//     />
//   </div>

//   {/* ID Proof Dropdown */}
//   <div>
//     <label className="block mb-1 text-sm font-medium text-gray-700">ID Proof</label>
//     <select
//       name="idProof"
//       value={formData.idProof}
//       onChange={handleChange}
//       required
//       className="border w-full rounded px-3 py-2"
//     >
//       <option value="">-- Select ID Proof --</option>
//       <option value="Aadhar">Aadhar</option>
//       <option value="PAN">PAN</option>
//       <option value="Driving License">Driving License</option>
//     </select>
//   </div>

//   {/* ID Number */}
//   <div>
//     <label className="block mb-1 text-sm font-medium text-gray-700">ID Number</label>
//     <input
//       type="text"
//       name="idNumber"
//       value={formData.idNumber}
//       onChange={handleChange}
//       required
//       className="border w-full rounded px-3 py-2"
//     />
//   </div>

//   {/* Vehicle Number */}
//   <div>
//     <label className="block mb-1 text-sm font-medium text-gray-700">Vehicle Number</label>
//     <input
//       type="text"
//       name="vehicleNo"
//       value={formData.vehicleNo}
//       onChange={handleChange}
//       required
//       className="border w-full rounded px-3 py-2"
//     />
//   </div>

//   {/* Chassis No */}
//   <div>
//     <label className="block mb-1 text-sm font-medium text-gray-700">Chassis Number</label>
//     <input
//       type="text"
//       name="chassisNo"
//       value={formData.chassisNo}
//       onChange={handleChange}
//       required
//       className="border w-full rounded px-3 py-2"
//     />
//   </div>

//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">State</label>
//             <select
//               name="state"
//               value={formData.state}
//               onChange={(e) => handleLocationChange("state", e.target.value)}
//               required
//               className="border w-full rounded px-3 py-2"
//             >
//               <option value="">-- Select State --</option>
//               {State.getStatesOfCountry(INDIA_CODE).map((state) => (
//                 <option key={state.isoCode} value={state.isoCode}>
//                   {state.name}
//                 </option>
//               ))}
//             </select>
//           </div>
// <div>
//   <label className="block mb-1 text-sm font-medium text-gray-700">City</label>
//   <select
//     name="city"
//     value={formData.city}
//     onChange={(e) => handleLocationChange("city", e.target.value)}
//     required
//     className="border w-full rounded px-3 py-2"
//   >
//     <option value="">-- Select City --</option>
//     {availableCities.map((city) => (
//       <option key={city.name} value={city.name}>
//         {city.name}
//       </option>
//     ))}
//   </select>
// </div>




//           <button
//             type="submit"
//             className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded shadow w-full"
//           >
//             Pay ₹{((calculateTotalAmount()) * 0.05).toFixed(0)} (5% Advance)
//           </button>
//         </form>

//         {/* Right Image */}
//         <div className="flex justify-center items-center">
//           <img
//             src={kgvHero}
//             alt="KGV Hero"
//             className="w-full h-auto max-h-[500px] object-contain rounded-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default KgvbikeOrder;
