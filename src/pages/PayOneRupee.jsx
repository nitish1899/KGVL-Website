import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { State, City } from "country-state-city";
import kgvHero from "../resource/kgvhero.png";

const PayOneRupee = () => {
  const navigate = useNavigate();
  const [availableCities, setAvailableCities] = useState([]);

  const INDIA_CODE = "IN";

const bikeModelsData = {
  "100-125cc": {
    "Hero Splendor Plus": 100,
    "Hero HF Deluxe": 100,
    "Hero Passion Pro": 113,
    "Hero Splendor iSmart": 113.2,
    "Bajaj Platina 100": 102,
    "Bajaj CT 100": 102,
    "Bajaj Platina 110": 115.45,
    "TVS Sport": 109.7,
    "TVS Radeon": 109.7,
    "TVS Star City Plus": 109.7,
    "Honda CD 110 Dream": 109.5,
    "Honda Livo": 109.5,
    "Honda SP 125": 124,
    "Honda Shine": 123.94,
    "Hero Glamour": 124.7,
    "Hero Super Splendor": 124.7,
    "Bajaj Pulsar 125": 124.4,
    "Bajaj Discover 125": 124.5,
    "TVS Raider 125": 124.8,
  },
  "150-180cc": {
    "Bajaj Pulsar 150": 149.5,
    "Bajaj Pulsar N150": 149.68,
    "TVS Apache RTR 160": 159.7,
    "TVS Apache RTR 160 4V": 159.7,
    "Yamaha FZ Fi": 149,
    "Yamaha FZ-S Fi": 149,
    "Yamaha FZ-X": 149,
    "Suzuki Gixxer 155": 155,
    "Honda Unicorn": 162.7,
    "Honda XBlade": 162.71,
    "Honda CB Hornet 160R": 162.71,
    "Bajaj Pulsar 180F": 178.6,
    "TVS Apache RTR 180": 177.4,
  },
};

const [dealerEmail, setDealerEmail] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    idProof: "",
    idNumber: "",
    vehicleNo: "",
    model: "",
    bikeCC: "", 
    chassisNo: "",
    chargerType: "",
    batteryType: "",
    batteryCapacity: "",
    state: "",
    city: "",
    branch: "",
    country: "India",
  });

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

// const handleLocationChange = async (field, value) => {
//   if (field === "state") {
//     setFormData({ ...formData, state: value, city: "", branch: "" });
//   } else if (field === "city") {
//     setFormData((prev) => ({ ...prev, city: value, branch: value })); // branch = city

//     // Fetch dealer email based on selected city
//     try {
//       const response = await fetch(`http://localhost:5000/dealer/email/${value}`);
//       const data = await response.json();

//       if (data.success && data.dealerEmail) {
//         setDealerEmail(data.dealerEmail);
//       } else {
//         setDealerEmail(""); // clear if not found
//       }
//     } catch (err) {
//       console.error("Error fetching dealer email:", err);
//       setDealerEmail("");
//     }
//   }
// };
const calculateBaseCost = () => {
  const cc = parseInt(formData.bikeCC);
  if (cc >= 100 && cc <= 125) return 39000;
  if (cc > 125 && cc <= 190) return 45000;
  return 0;
};

const calculateTotalAmount = () => {
  return (
    calculateBaseCost() +
    (formData.batteryCost || 0) +
    (formData.chargerCost || 0)
  );
};

console.log("calculateTotalAmount", calculateTotalAmount)
console.log("calculateBaseCost", calculateBaseCost)
  
const handlePayment = async () => {
  try {
    const totalAmount = calculateTotalAmount(); // already includes battery + charger + base cost
    console.log("totalAmount",totalAmount)

    if (totalAmount === 0) {
      return alert("❌ Invalid bike CC or configuration");
    }

    const payableAmount = Math.round(totalAmount * 0.05); // 5% booking amount

    const {
      data: { key },
    } = await axios.get("http://localhost:5000/api/order/getkey");

    const {
      data: { order },
    } = await axios.post("http://localhost:5000/api/order/checkout", {
      amount: payableAmount,
    });

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "KGVL Hybrid Bikes",
      description: `Advance Payment (5% of ₹${totalAmount})`,
      order_id: order.id,
      handler: async function (response) {
        try {
          const verificationRes = await axios.post("http://localhost:5000/api/order/verify", {
            ...formData,
            totalAmount,
            payableAmount,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            dealerEmail: dealerEmail,
          });

          if (verificationRes.data.success) {
            navigate("/paymentSuccess", {
              state: {
                ...formData,
                paymentId: response.razorpay_payment_id,
                orderId: response.razorpay_order_id,
                signature: response.razorpay_signature,
                totalAmount,
                payableAmount,
              },
            });
          } else {
            alert("❌ Payment verification failed");
          }
        } catch (err) {
          console.error("Verification error:", err);
          alert("❌ Payment verification error");
        }
      },
      prefill: {
        name: formData.name,
        contact: formData.phone,
        email: formData.email,
      },
      theme: { color: "#22c55e" },
      modal: { ondismiss: () => alert("Payment popup closed") },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (err) {
    console.error("Payment error:", err);
    alert("❌ Payment could not be initiated");
  }
};



  return (
    <div style={{ padding: "24px", fontFamily: "sans-serif", backgroundColor: "#f5f5f5" }}>
      <h2 className="text-center text-2xl font-bold">
        Unleash the Future with <span className="text-green-500">KGV Hybrid Bikes</span>
      </h2>
      <p className="text-center max-w-xl mx-auto mt-2 mb-6">
        Experience seamless electric performance, rugged build quality, and eco-friendly performance—your perfect ride for urban streets and weekend adventures.
      </p>


      <div className="bg-white p-6 rounded-xl mb-6 shadow-md mt-12 max-w-3xl mx-auto">
        <h2 className="text-xl text-green-500 mb-3 text-center">Easy 3-Step Payment</h2>
        <p className="text-sm mb-3 text-center">Complete your purchase in three simple steps with a flexible payment plan designed for your convenience. </p>
        <ul className="list-none space-y-4">
          <li><span className="bg-green-700 text-white rounded-full px-3 py-1 mr-2">1. Booking Amount:</span> Pay a small booking fee to secure your order.</li>
          <li><span className="bg-green-700 text-white rounded-full px-3 py-1 mr-2">2. 30% Payment:</span> Within 7 days of booking, pay 30% of total cost to confirm configuration.</li>
          <li><span className="bg-green-700 text-white rounded-full px-3 py-1 mr-2">3. Final Payment:</span> Pay the remaining amount at time of delivery.</li>
        </ul>
      </div>


    
<div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
  <h2 className="text-center text-xl font-semibold text-green-600 mb-6">
    Build The Kit Perfect for You
  </h2>

  {/* Bike Model Dropdown */}
  <div className="mb-4">
    <label className="block mb-1 text-sm font-medium text-gray-700">Bike Model</label>
<select
  name="model"
  value={formData.model}
  onChange={(e) => {
    const selectedModel = e.target.value;
    let selectedCC = null;
    let found = false;

    Object.entries(bikeModelsData).forEach(([ccGroup, models]) => {
      if (models[selectedModel] !== undefined) {
        selectedCC = models[selectedModel];
        found = true;
      }
    });

    if (found) {
      setFormData({
        ...formData,
        model: selectedModel,
        bikeCC: selectedCC,
      });
    }
  }}
  required
  className="border w-full rounded px-3 py-2 bg-gray-50"
>
  <option value="">-- Select Bike Model --</option>
  <optgroup label="100cc – 125cc">
    {Object.keys(bikeModelsData["100-125cc"]).map((model) => (
      <option key={model} value={model}>
        {model}
      </option>
    ))}
  </optgroup>
  <optgroup label="150cc – 180cc">
    {Object.keys(bikeModelsData["150-180cc"]).map((model) => (
      <option key={model} value={model}>
        {model}
      </option>
    ))}
  </optgroup>
</select>

  </div>

  {/* Bike CC (Readonly) */}
  <div className="mb-4">
    <label className="block mb-1 text-sm font-medium text-gray-700">Bike CC</label>
    <input
      type="text"
      name="bikeCC"
      value={formData.bikeCC}
      readOnly
      className="border w-full rounded px-3 py-2 bg-gray-100"
    />
  </div>

  {/* Battery Type */}
  <div className="mb-4">
    <p className="font-semibold text-sm text-gray-700 mb-2">Battery type:</p>
    <div className="flex gap-3 flex-wrap">
      {["LFP"].map((type) => (
        <button
          key={type}
          type="button"
          className={`px-4 py-1.5 rounded border ${
            formData.batteryType === type ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-700"
          }`}
          onClick={() => setFormData({ ...formData, batteryType: type })}
        >
          {type}
        </button>
      ))}
    </div>
  </div>

  {/* Battery Capacity */}
  <div className="mb-4">
    <p className="font-semibold text-sm text-gray-700 mb-2">Battery capacity:</p>
    <div className="flex gap-4 flex-wrap">
      <div
        className={`border rounded p-2 text-center cursor-pointer ${
          formData.batteryCapacity === "72v 12A/H"
            ? "bg-orange-500 text-white"
            : "bg-gray-100 text-gray-800"
        }`}
        onClick={() =>
          setFormData({ ...formData, batteryCapacity: "72v 12A/H", batteryCost: 20000 })
        }
      >
        <div>72v 12A/H</div>
        <div className="text-xs mt-1">₹20,000</div>
      </div>
      <div
        className={`border rounded p-2 text-center cursor-pointer ${
          formData.batteryCapacity === "72v 15A/H"
            ? "bg-orange-500 text-white"
            : "bg-gray-100 text-gray-800"
        }`}
        onClick={() =>
          setFormData({ ...formData, batteryCapacity: "72v 15A/H", batteryCost: 28000 })
        }
      >
        <div>72v 15A/H</div>
        <div className="text-xs mt-1">₹28,000</div>
      </div>
    </div>
  </div>

  {/* Charger */}
  <div className="mb-4">
    <p className="font-semibold text-sm text-gray-700 mb-2">Charger Type:</p>
    <div className="flex gap-4 flex-wrap">
      <div
        className={`border rounded p-2 text-center cursor-pointer ${
          formData.chargerType === "5AMP"
            ? "bg-orange-500 text-white"
            : "bg-gray-100 text-gray-800"
        }`}
        onClick={() => setFormData({ ...formData, chargerType: "5AMP", chargerCost: 1200 })}
      >
        <div>5 Amp</div>
        <div className="text-xs mt-1">₹1,200</div>
      </div>
      <div
        className={`border rounded p-2 text-center cursor-pointer ${
          formData.chargerType === "15AMP"
            ? "bg-orange-500 text-white"
            : "bg-gray-100 text-gray-800"
        }`}
        onClick={() => setFormData({ ...formData, chargerType: "15AMP", chargerCost: 2000 })}
      >
        <div>15 Amp.</div>
        <div className="text-xs mt-1">₹2,000</div>
      </div>
    </div>
  </div>

  {/* Total Cost */}
  <div className="border-t pt-4 mt-4">
    <p className="text-sm text-gray-600">Total Cost for Your Build:</p>
    <p className="text-3xl font-bold text-green-600">
      ₹{calculateTotalAmount()}
    </p>
  </div>
</div>

      <div className="bg-white rounded-lg shadow-2xl p-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlePayment();
          }}
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

  {/* Phone */}
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

  {/* Vehicle Number */}
  <div>
    <label className="block mb-1 text-sm font-medium text-gray-700">Vehicle Number</label>
    <input
      type="text"
      name="vehicleNo"
      value={formData.vehicleNo}
      onChange={handleChange}
      required
      className="border w-full rounded px-3 py-2"
    />
  </div>

  {/* Chassis No */}
  <div>
    <label className="block mb-1 text-sm font-medium text-gray-700">Chassis Number</label>
    <input
      type="text"
      name="chassisNo"
      value={formData.chassisNo}
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




          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded shadow w-full"
          >
            Pay ₹{((calculateTotalAmount()) * 0.05).toFixed(0)} (5% Advance)
          </button>
        </form>

        {/* Right Image */}
        <div className="flex justify-center items-center">
          <img
            src={kgvHero}
            alt="KGV Hero"
            className="w-full h-auto max-h-[500px] object-contain rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default PayOneRupee;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { State, City } from "country-state-city";
// import kgvHero from "../resource/kgvhero.png";

// const PayOneRupee = () => {
//   const navigate = useNavigate();
//   const INDIA_CODE = "IN";

// const bikeModelsData = {
//   "100-125cc": {
//     "Hero Splendor Plus": 100,
//     "Hero HF Deluxe": 100,
//     "Hero Passion Pro": 113,
//     "Hero Splendor iSmart": 113.2,
//     "Bajaj Platina 100": 102,
//     "Bajaj CT 100": 102,
//     "Bajaj Platina 110": 115.45,
//     "TVS Sport": 109.7,
//     "TVS Radeon": 109.7,
//     "TVS Star City Plus": 109.7,
//     "Honda CD 110 Dream": 109.5,
//     "Honda Livo": 109.5,
//     "Honda SP 125": 124,
//     "Honda Shine": 123.94,
//     "Hero Glamour": 124.7,
//     "Hero Super Splendor": 124.7,
//     "Bajaj Pulsar 125": 124.4,
//     "Bajaj Discover 125": 124.5,
//     "TVS Raider 125": 124.8,
//   },
//   "150-180cc": {
//     "Bajaj Pulsar 150": 149.5,
//     "Bajaj Pulsar N150": 149.68,
//     "TVS Apache RTR 160": 159.7,
//     "TVS Apache RTR 160 4V": 159.7,
//     "Yamaha FZ Fi": 149,
//     "Yamaha FZ-S Fi": 149,
//     "Yamaha FZ-X": 149,
//     "Suzuki Gixxer 155": 155,
//     "Honda Unicorn": 162.7,
//     "Honda XBlade": 162.71,
//     "Honda CB Hornet 160R": 162.71,
//     "Bajaj Pulsar 180F": 178.6,
//     "TVS Apache RTR 180": 177.4,
//   },
// };

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
//     setFormData({ ...formData, state: value, city: "", branch: "" });
//   } else if (field === "city") {
//     setFormData((prev) => ({ ...prev, city: value, branch: value })); // branch = city

//     // Fetch dealer email based on selected city
//     try {
//       const response = await fetch(`http://localhost:5000/dealer/email/${value}`);
//       const data = await response.json();

//       if (data.success && data.dealerEmail) {
//         setDealerEmail(data.dealerEmail);
//       } else {
//         setDealerEmail(""); // clear if not found
//       }
//     } catch (err) {
//       console.error("Error fetching dealer email:", err);
//       setDealerEmail("");
//     }
//   }
// };
// const calculateBaseCost = () => {
//   const cc = parseInt(formData.bikeCC);
//   if (cc >= 100 && cc <= 125) return 39000;
//   if (cc > 125 && cc <= 150) return 45000;
//   return 0;
// };

// const calculateTotalAmount = () => {
//   return (
//     calculateBaseCost() +
//     (formData.batteryCost || 0) +
//     (formData.chargerCost || 0)
//   );
// };

  
// const handlePayment = async () => {
//   try {
//     const baseBatteryCost = formData.batteryCost || 0;
//     const baseChargerCost = formData.chargerCost || 0;
//     const otherCosts = calculateTotalAmount(); // This should return sum of other optional costs

//     const totalAmount = baseBatteryCost + baseChargerCost + otherCosts;

//     if (totalAmount === 0) return alert("❌ Invalid bike CC or configuration");

//     const payableAmount = Math.round(totalAmount * 0.05); 

//     const {
//       data: { key },
//     } = await axios.get("http://localhost:5000/api/order/getkey");

//     const {
//       data: { order },
//     } = await axios.post("http://localhost:5000/api/order/checkout", {
//       amount: payableAmount,
//     });

//     const options = {
//       key,
//       amount: order.amount,
//       currency: "INR",
//       name: "KGVL Hybrid Bikes",
//       description: `Advance Payment (5% of ₹${totalAmount})`,
//       order_id: order.id,
//       handler: async function (response) {
//         try {
//           const verificationRes = await axios.post("http://localhost:5000/api/order/verify", {
//             ...formData,
//             totalAmount,
//             payableAmount,
//             razorpay_order_id: response.razorpay_order_id,
//             razorpay_payment_id: response.razorpay_payment_id,
//             razorpay_signature: response.razorpay_signature,
//             dealerEmail: dealerEmail,
//           });

//           if (verificationRes.data.success) {
//             navigate("/paymentSuccess", {
//               state: {
//                 ...formData,
//                 paymentId: response.razorpay_payment_id,
//                 orderId: response.razorpay_order_id,
//                 signature: response.razorpay_signature,
//                 totalAmount,
//                 payableAmount,
//               },
//             });
//           } else {
//             alert("❌ Payment verification failed");
//           }
//         } catch {
//           alert("❌ Payment verification error");
//         }
//       },
//       prefill: {
//         name: formData.name,
//         contact: formData.phone,
//         email: formData.email,
//       },
//       theme: { color: "#22c55e" },
//       modal: { ondismiss: () => alert("Payment popup closed") },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   } catch (err) {
//     console.error(err);
//     alert("❌ Payment could not be initiated");
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


    
// <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
//   <h2 className="text-center text-xl font-semibold text-green-600 mb-6">
//     Build The Kit Perfect for You
//   </h2>

//   {/* Bike Model Dropdown */}
//   <div className="mb-4">
//     <label className="block mb-1 text-sm font-medium text-gray-700">Bike Model</label>
// <select
//   name="model"
//   value={formData.model}
//   onChange={(e) => {
//     const selectedModel = e.target.value;
//     let selectedCC = null;
//     let found = false;

//     Object.entries(bikeModelsData).forEach(([ccGroup, models]) => {
//       if (models[selectedModel] !== undefined) {
//         selectedCC = models[selectedModel];
//         found = true;
//       }
//     });

//     if (found) {
//       setFormData({
//         ...formData,
//         model: selectedModel,
//         bikeCC: selectedCC,
//       });
//     }
//   }}
//   required
//   className="border w-full rounded px-3 py-2 bg-gray-50"
// >
//   <option value="">-- Select Bike Model --</option>
//   <optgroup label="100cc – 125cc">
//     {Object.keys(bikeModelsData["100-125cc"]).map((model) => (
//       <option key={model} value={model}>
//         {model}
//       </option>
//     ))}
//   </optgroup>
//   <optgroup label="150cc – 180cc">
//     {Object.keys(bikeModelsData["150-180cc"]).map((model) => (
//       <option key={model} value={model}>
//         {model}
//       </option>
//     ))}
//   </optgroup>
// </select>

//   </div>

//   {/* Bike CC (Readonly) */}
//   <div className="mb-4">
//     <label className="block mb-1 text-sm font-medium text-gray-700">Bike CC</label>
//     <input
//       type="text"
//       name="bikeCC"
//       value={formData.bikeCC}
//       readOnly
//       className="border w-full rounded px-3 py-2 bg-gray-100"
//     />
//   </div>

//   {/* Battery Type */}
//   <div className="mb-4">
//     <p className="font-semibold text-sm text-gray-700 mb-2">Battery type:</p>
//     <div className="flex gap-3 flex-wrap">
//       {["LFP"].map((type) => (
//         <button
//           key={type}
//           type="button"
//           className={`px-4 py-1.5 rounded border ${
//             formData.batteryType === type ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-700"
//           }`}
//           onClick={() => setFormData({ ...formData, batteryType: type })}
//         >
//           {type}
//         </button>
//       ))}
//     </div>
//   </div>

//   {/* Battery Capacity */}
//   <div className="mb-4">
//     <p className="font-semibold text-sm text-gray-700 mb-2">Battery capacity:</p>
//     <div className="flex gap-4 flex-wrap">
//       <div
//         className={`border rounded p-2 text-center cursor-pointer ${
//           formData.batteryCapacity === "72v 12A/H"
//             ? "bg-orange-500 text-white"
//             : "bg-gray-100 text-gray-800"
//         }`}
//         onClick={() =>
//           setFormData({ ...formData, batteryCapacity: "72v 12A/H", batteryCost: 20000 })
//         }
//       >
//         <div>72v 12A/H</div>
//         <div className="text-xs mt-1">₹20,000</div>
//       </div>
//       <div
//         className={`border rounded p-2 text-center cursor-pointer ${
//           formData.batteryCapacity === "72v 15A/H"
//             ? "bg-orange-500 text-white"
//             : "bg-gray-100 text-gray-800"
//         }`}
//         onClick={() =>
//           setFormData({ ...formData, batteryCapacity: "72v 15A/H", batteryCost: 28000 })
//         }
//       >
//         <div>72v 15A/H</div>
//         <div className="text-xs mt-1">₹28,000</div>
//       </div>
//     </div>
//   </div>

//   {/* Charger */}
//   <div className="mb-4">
//     <p className="font-semibold text-sm text-gray-700 mb-2">Charger Type:</p>
//     <div className="flex gap-4 flex-wrap">
//       <div
//         className={`border rounded p-2 text-center cursor-pointer ${
//           formData.chargerType === "5AMP"
//             ? "bg-orange-500 text-white"
//             : "bg-gray-100 text-gray-800"
//         }`}
//         onClick={() => setFormData({ ...formData, chargerType: "5AMP", chargerCost: 1200 })}
//       >
//         <div>5 Amp</div>
//         <div className="text-xs mt-1">₹1,200</div>
//       </div>
//       <div
//         className={`border rounded p-2 text-center cursor-pointer ${
//           formData.chargerType === "15AMP"
//             ? "bg-orange-500 text-white"
//             : "bg-gray-100 text-gray-800"
//         }`}
//         onClick={() => setFormData({ ...formData, chargerType: "15AMP", chargerCost: 2000 })}
//       >
//         <div>15 Amp.</div>
//         <div className="text-xs mt-1">₹2,000</div>
//       </div>
//     </div>
//   </div>

//   {/* Total Cost */}
//   <div className="border-t pt-4 mt-4">
//     <p className="text-sm text-gray-600">Total Cost for Your Build:</p>
//     <p className="text-3xl font-bold text-green-600">
//       ₹{(formData.batteryCost || 0) + (formData.chargerCost || 0) + calculateTotalAmount()}
//     </p>
//   </div>
// </div>

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

//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">City</label>
//             <select
//               name="city"
//               value={formData.city}
//               onChange={(e) => handleLocationChange("city", e.target.value)}
//               required
//               className="border w-full rounded px-3 py-2"
//             >
//               <option value="">-- Select City --</option>
//               {City.getCitiesOfState(INDIA_CODE, formData.state).map((city) => (
//                 <option key={city.name} value={city.name}>
//                   {city.name}
//                 </option>
//               ))}
//             </select>
//           </div>



//           <button
//             type="submit"
//             className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded shadow w-full"
//           >
//             Pay ₹{(((formData.batteryCost || 0) + (formData.chargerCost || 0) + calculateTotalAmount()) * 0.05).toFixed(0)} (5% Advance)
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

// export default PayOneRupee;





// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { State, City } from "country-state-city";
// import kgvHero from "../resource/kgvhero.png";

// const PayOneRupee = () => {
//   const navigate = useNavigate();
//   const INDIA_CODE = "IN";

//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     idProof: "",
//     idNumber: "",
//     vehicleNo: "",
//     model: "",
//     bikeCC: "125", // Default selected
//     chassisNo: "",
//     chargerType: "5AMP", // Default selected
//     batteryType: "72v 12A/H", // Default selected
//     state: "",
//     city: "",
//     branch: "",
//     country: "India",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLocationChange = (field, value) => {
//     if (field === "state") {
//       setFormData({ ...formData, state: value, city: "", branch: "" });
//     } else if (field === "city") {
//       setFormData({ ...formData, city: value, branch: value }); // branch = city
//     }
//   };

//   const getChargerCost = (type) => (type === "5AMP" ? 1200 : type === "15AMP" ? 2000 : 0);
//   const getBatteryCost = (type) =>
//     type === "72v 12A/H" ? 20000 : type === "72v 15A/H" ? 28000 : 0;

//   const calculateTotalAmount = () => {
//     const cc = parseInt(formData.bikeCC);
//     let base = 0;
//     if (cc >= 100 && cc <= 125) base = 39000;
//     else if (cc > 125 && cc <= 150) base = 45000;
//     else return 0;
//     return base + getChargerCost(formData.chargerType) + getBatteryCost(formData.batteryType);
//   };

//   const handlePayment = async () => {
//     try {
//       const totalAmount = calculateTotalAmount();
//       if (totalAmount === 0) return alert("❌ Invalid bike CC or configuration");
//       const payableAmount = Math.round(totalAmount * 0.05);

//       const {
//         data: { key },
//       } = await axios.get("http://localhost:5000/api/order/getkey");

//       const {
//         data: { order },
//       } = await axios.post("http://localhost:5000/api/order/checkout", {
//         amount: payableAmount,
//       });

//       const options = {
//         key,
//         amount: order.amount,
//         currency: "INR",
//         name: "KGVL Hybrid Bikes",
//         description: `Advance Payment (5% of ₹${totalAmount})`,
//         order_id: order.id,
//         handler: async function (response) {
//           try {
//             const verificationRes = await axios.post("http://localhost:5000/api/order/verify", {
//               ...formData,
//               totalAmount,
//               payableAmount,
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_signature: response.razorpay_signature,
//             });

//             if (verificationRes.data.success) {
//               navigate("/payment-success", {
//                 state: {
//                   ...formData,
//                   paymentId: response.razorpay_payment_id,
//                   orderId: response.razorpay_order_id,
//                   totalAmount,
//                   payableAmount,
//                 },
//               });
//             } else {
//               alert("❌ Payment verification failed");
//             }
//           } catch {
//             alert("❌ Payment verification error");
//           }
//         },
//         prefill: {
//           name: formData.name,
//           contact: formData.phone,
//           email: formData.email,
//         },
//         theme: { color: "#22c55e" },
//         modal: { ondismiss: () => alert("Payment popup closed") },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       alert("❌ Payment could not be initiated");
//     }
//   };

//   return (
//     <div style={{ padding: "24px", fontFamily: "sans-serif", backgroundColor: "#f5f5f5" }}>
//       <h2 className="text-center text-2xl font-bold">
//         Unleash the Future with <span className="text-green-500">KGV Hybrid Bikes</span>
//       </h2>
//       <p className="text-center max-w-xl mx-auto mt-2 mb-6">
//         Experience seamless electric performance, rugged build quality, and eco-friendly performance—your perfect ride for urban streets and weekend adventures.
//       </p>

//       <div className="bg-white rounded-lg shadow-2xl p-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Left Form */}
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             handlePayment();
//           }}
//           className="space-y-4"
//         >
//           {[
//             ["name", "Full Name"],
//             ["phone", "Phone Number"],
//             ["email", "Email"],
//             ["idProof", "ID Proof (Aadhar/PAN/etc)"],
//             ["idNumber", "ID Number"],
//             ["vehicleNo", "Vehicle Number"],
//             ["model", "Bike Model"],
//             ["bikeCC", "Bike CC"],
//             ["chassisNo", "Chassis Number"],
//           ].map(([key, label]) => (
//             <div key={key}>
//               <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
//               <input
//                 type="text"
//                 name={key}
//                 value={formData[key]}
//                 onChange={handleChange}
//                 required
//                 className="border w-full rounded px-3 py-2"
//               />
//             </div>
//           ))}

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

//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">City</label>
//             <select
//               name="city"
//               value={formData.city}
//               onChange={(e) => handleLocationChange("city", e.target.value)}
//               required
//               className="border w-full rounded px-3 py-2"
//             >
//               <option value="">-- Select City --</option>
//               {City.getCitiesOfState(INDIA_CODE, formData.state).map((city) => (
//                 <option key={city.name} value={city.name}>
//                   {city.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">Charger Type</label>
//             <select
//               name="chargerType"
//               value={formData.chargerType}
//               onChange={handleChange}
//               className="border w-full rounded px-3 py-2"
//             >
//               <option value="">-- Select Charger --</option>
//               <option value="5AMP">5AMP (+₹1200)</option>
//               <option value="15AMP">15AMP (+₹2000)</option>
//             </select>
//           </div>

//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">Battery Type</label>
//             <select
//               name="batteryType"
//               value={formData.batteryType}
//               onChange={handleChange}
//               className="border w-full rounded px-3 py-2"
//             >
//               <option value="">-- Select Battery --</option>
//               <option value="72v 12A/H">72v 12A/H (+₹20000)</option>
//               <option value="72v 15A/H">72v 15A/H (+₹28000)</option>
//             </select>
//           </div>

//           <div className="text-lg font-semibold text-green-700">
//             Total Build Cost: ₹{calculateTotalAmount()}
//           </div>

//           <button
//             type="submit"
//             className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded shadow w-full"
//           >
//             Pay ₹{(calculateTotalAmount() * 0.05).toFixed(0)} (5% Advance)
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

// export default PayOneRupee;



// // import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { State, City } from "country-state-city";
// import kgvHero from "../resource/kgvhero.png";

// const PayOneRupee = () => {
//   const navigate = useNavigate();
//   const INDIA_CODE = "IN";

//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     idProof: "",
//     idNumber: "",
//     vehicleNo: "",
//     model: "",
//     bikeCC: "125", // Default selected
//     chassisNo: "",
//     chargerType: "5AMP", // Default selected
//     batteryType: "72v 12A/H", // Default selected
//     state: "",
//     city: "",
//     branch: "",
//     country: "India",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLocationChange = (field, value) => {
//     if (field === "state") {
//       setFormData({ ...formData, state: value, city: "", branch: "" });
//     } else if (field === "city") {
//       setFormData({ ...formData, city: value, branch: value }); // branch = city
//     }
//   };

//   const getChargerCost = (type) => (type === "5AMP" ? 1200 : type === "15AMP" ? 2000 : 0);
//   const getBatteryCost = (type) =>
//     type === "72v 12A/H" ? 20000 : type === "72v 15A/H" ? 28000 : 0;

//   const calculateTotalAmount = () => {
//     const cc = parseInt(formData.bikeCC);
//     let base = 0;
//     if (cc >= 100 && cc <= 125) base = 39000;
//     else if (cc > 125 && cc <= 150) base = 45000;
//     else return 0;
//     return base + getChargerCost(formData.chargerType) + getBatteryCost(formData.batteryType);
//   };

//   const handlePayment = async () => {
//     try {
//       const totalAmount = calculateTotalAmount();
//       if (totalAmount === 0) return alert("❌ Invalid bike CC or configuration");
//       const payableAmount = Math.round(totalAmount * 0.05);

//       const {
//         data: { key },
//       } = await axios.get("http://localhost:5000/api/order/getkey");

//       const {
//         data: { order },
//       } = await axios.post("http://localhost:5000/api/order/checkout", {
//         amount: payableAmount,
//       });

//       const options = {
//         key,
//         amount: order.amount,
//         currency: "INR",
//         name: "KGVL Hybrid Bikes",
//         description: `Advance Payment (5% of ₹${totalAmount})`,
//         order_id: order.id,
//         handler: async function (response) {
//           try {
//             const verificationRes = await axios.post("http://localhost:5000/api/order/verify", {
//               ...formData,
//               totalAmount,
//               payableAmount,
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_signature: response.razorpay_signature,
//             });

//             if (verificationRes.data.success) {
//               navigate("/payment-success", {
//                 state: {
//                   ...formData,
//                   paymentId: response.razorpay_payment_id,
//                   orderId: response.razorpay_order_id,
//                   totalAmount,
//                   payableAmount,
//                 },
//               });
//             } else {
//               alert("❌ Payment verification failed");
//             }
//           } catch {
//             alert("❌ Payment verification error");
//           }
//         },
//         prefill: {
//           name: formData.name,
//           contact: formData.phone,
//           email: formData.email,
//         },
//         theme: { color: "#22c55e" },
//         modal: { ondismiss: () => alert("Payment popup closed") },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       alert("❌ Payment could not be initiated");
//     }
//   };

//   return (
//     <div style={{ padding: "24px", fontFamily: "sans-serif", backgroundColor: "#f5f5f5" }}>
//       <h2 className="text-center text-2xl font-bold">
//         Unleash the Future with <span className="text-green-500">KGV Hybrid Bikes</span>
//       </h2>
//       <p className="text-center max-w-xl mx-auto mt-2 mb-6">
//         Experience seamless electric performance, rugged build quality, and eco-friendly performance—your perfect ride for urban streets and weekend adventures.
//       </p>

//       <div className="bg-white rounded-lg shadow-2xl p-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Left Form */}
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             handlePayment();
//           }}
//           className="space-y-4"
//         >
//           {[
//             ["name", "Full Name"],
//             ["phone", "Phone Number"],
//             ["email", "Email"],
//             ["idProof", "ID Proof (Aadhar/PAN/etc)"],
//             ["idNumber", "ID Number"],
//             ["vehicleNo", "Vehicle Number"],
//             ["model", "Bike Model"],
//             ["bikeCC", "Bike CC"],
//             ["chassisNo", "Chassis Number"],
//           ].map(([key, label]) => (
//             <div key={key}>
//               <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
//               <input
//                 type="text"
//                 name={key}
//                 value={formData[key]}
//                 onChange={handleChange}
//                 required
//                 className="border w-full rounded px-3 py-2"
//               />
//             </div>
//           ))}

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

//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">City</label>
//             <select
//               name="city"
//               value={formData.city}
//               onChange={(e) => handleLocationChange("city", e.target.value)}
//               required
//               className="border w-full rounded px-3 py-2"
//             >
//               <option value="">-- Select City --</option>
//               {City.getCitiesOfState(INDIA_CODE, formData.state).map((city) => (
//                 <option key={city.name} value={city.name}>
//                   {city.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">Charger Type</label>
//             <select
//               name="chargerType"
//               value={formData.chargerType}
//               onChange={handleChange}
//               className="border w-full rounded px-3 py-2"
//             >
//               <option value="">-- Select Charger --</option>
//               <option value="5AMP">5AMP (+₹1200)</option>
//               <option value="15AMP">15AMP (+₹2000)</option>
//             </select>
//           </div>

//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">Battery Type</label>
//             <select
//               name="batteryType"
//               value={formData.batteryType}
//               onChange={handleChange}
//               className="border w-full rounded px-3 py-2"
//             >
//               <option value="">-- Select Battery --</option>
//               <option value="72v 12A/H">72v 12A/H (+₹20000)</option>
//               <option value="72v 15A/H">72v 15A/H (+₹28000)</option>
//             </select>
//           </div>

//           <div className="text-lg font-semibold text-green-700">
//             Total Build Cost: ₹{calculateTotalAmount()}
//           </div>

//           <button
//             type="submit"
//             className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded shadow w-full"
//           >
//             Pay ₹{(calculateTotalAmount() * 0.05).toFixed(0)} (5% Advance)
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

// export default PayOneRupee;


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { State, City } from "country-state-city";
// import kgvHero from "../resource/kgvhero.png";

// const PayOneRupee = () => {
//   const navigate = useNavigate();
//   const INDIA_CODE = "IN";

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
//     state: "",
//     city: "",
//     branch: "",
//     country: "India",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLocationChange = (field, value) => {
//     if (field === "state") {
//       setFormData({ ...formData, state: value, city: "", branch: "" });
//     } else if (field === "city") {
//       setFormData({ ...formData, city: value, branch: value }); // branch = city
//     }
//   };

//   const getChargerCost = (type) => (type === "5AMP" ? 1200 : type === "15AMP" ? 2000 : 0);
//   const getBatteryCost = (type) =>
//     type === "72v 12A/H" ? 20000 : type === "72v 15A/H" ? 28000 : 0;

//   const calculateTotalAmount = () => {
//     const cc = parseInt(formData.bikeCC);
//     let base = 0;
//     if (cc >= 100 && cc <= 125) base = 39000;
//     else if (cc > 125 && cc <= 150) base = 45000;
//     else return 0;
//     return base + getChargerCost(formData.chargerType) + getBatteryCost(formData.batteryType);
//   };

//   const handlePayment = async () => {
//     try {
//       const totalAmount = calculateTotalAmount();
//       if (totalAmount === 0) return alert("❌ Invalid bike CC or configuration");
//       const payableAmount = Math.round(totalAmount * 0.05);

//       const {
//         data: { key },
//       } = await axios.get("http://localhost:5000/api/order/getkey");
//       const {
//         data: { order },
//       } = await axios.post("http://localhost:5000/api/order/checkout", {
//         amount: payableAmount,
//       });

//       const options = {
//         key,
//         amount: order.amount,
//         currency: "INR",
//         name: "KGVL Hybrid Bikes",
//         description: `Advance Payment (5% of ₹${totalAmount})`,
//         order_id: order.id,
//         handler: async function (response) {
//           try {
//             const verificationRes = await axios.post("http://localhost:5000/api/order/verify", {
//               ...formData,
//               totalAmount,
//               payableAmount,
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_signature: response.razorpay_signature,
//             });

//             if (verificationRes.data.success) {
//               navigate("/payment-success", {
//                 state: {
//                   ...formData,
//                   paymentId: response.razorpay_payment_id,
//                   orderId: response.razorpay_order_id,
//                   totalAmount,
//                   payableAmount,
//                 },
//               });
//             } else {
//               alert("❌ Payment verification failed");
//             }
//           } catch {
//             alert("❌ Payment verification error");
//           }
//         },
//         prefill: {
//           name: formData.name,
//           contact: formData.phone,
//           email: formData.email,
//         },
//         theme: { color: "#3399cc" },
//         modal: { ondismiss: () => alert("Payment popup closed") },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       alert("❌ Payment could not be initiated");
//     }
//   };

//   return (
//     <div style={{ padding: '24px', fontFamily: 'sans-serif', backgroundColor: '#f5f5f5' }}>
//       <h2 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }}>Unleash the Future with the <span style={{ color: '#22c55e' }}>KGV Hybrid Bikes</span></h2>
//       <p style={{ textAlign: 'center', maxWidth: '600px', margin: '8px auto 24px' }}>
//         Experience seamless electric performance, rugged build quality, and eco-friendly performance—your perfect ride for urban streets and weekend adventures.
//       </p>


//         <div className="bg-red-300 rounded-lg shadow-2xl p-6 mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Left: Form */}
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             handlePayment();
//           }}
//           className="space-y-4"
//         >
//           {[
//             ["name", "Full Name"],
//             ["phone", "Phone Number"],
//             ["email", "Email"],
//             ["idProof", "ID Proof (Aadhar/PAN/etc)"],
//             ["idNumber", "ID Number"],
//             ["vehicleNo", "Vehicle Number"],
//             ["model", "Bike Model"],
//             ["bikeCC", "Bike CC"],
//             ["chassisNo", "Chassis Number"],
//           ].map(([key, label]) => (
//             <div key={key} className="grid grid-cols-2 gap-4">
//               <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
//               <input
//                 type="text"
//                 name={key}
//                 value={formData[key]}
//                 onChange={handleChange}
//                 required
//                 className="border rounded px-3 py-2"
//               />
//             </div>
//           ))}

//           {/* State */}
//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">State</label>
//             <select
//               name="state"
//               value={formData.state}
//               onChange={(e) => handleLocationChange("state", e.target.value)}
//               required
//               className="border rounded px-3 py-2"
//             >
//               <option value="">-- Select State --</option>
//               {State.getStatesOfCountry(INDIA_CODE).map((state) => (
//                 <option key={state.isoCode} value={state.isoCode}>
//                   {state.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* City */}
//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">City</label>
//             <select
//               name="city"
//               value={formData.city}
//               onChange={(e) => handleLocationChange("city", e.target.value)}
//               required
//               className="border rounded px-3 py-2"
//             >
//               <option value="">-- Select City --</option>
//               {City.getCitiesOfState(INDIA_CODE, formData.state).map((city) => (
//                 <option key={city.name} value={city.name}>
//                   {city.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Charger */}
//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">Charger Type</label>
//             <select
//               name="chargerType"
//               value={formData.chargerType}
//               onChange={handleChange}
//               className="border rounded px-3 py-2"
//             >
//               <option value="">-- Select Charger --</option>
//               <option value="5AMP">5AMP (+₹1200)</option>
//               <option value="15AMP">15AMP (+₹2000)</option>
//             </select>
//           </div>

//           {/* Battery */}
//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">Battery Type</label>
//             <select
//               name="batteryType"
//               value={formData.batteryType}
//               onChange={handleChange}
//               className="border rounded px-3 py-2"
//             >
//               <option value="">-- Select Battery --</option>
//               <option value="72v 12A/H">72v 12A/H (+₹20000)</option>
//               <option value="72v 15A/H">72v 15A/H (+₹28000)</option>
//             </select>
//           </div>

//           <button
//             type="submit"
//             className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded shadow w-full"
//           >
//             Pay ₹{(calculateTotalAmount() * 0.05).toFixed(2)} (5% Advance)
//           </button>
//         </form>

//   <div className="flex justify-center items-center">
//     <img src={kgvHero} alt="KGV Hero" className="w-full h-auto max-h-[500px] object-contain rounded-full" />
//   </div>
//       </div>
//     </div>
//   );
// };

// export default PayOneRupee;



// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { State, City } from "country-state-city";
// import kgvHero from '../resource/kgvhero.png';

// const PayOneRupee = () => {
//   const navigate = useNavigate();
//   const INDIA_CODE = "IN"; 

// const [formData, setFormData] = useState({
//   name: "",
//   phone: "",
//   email: "",
//   idProof: "",
//   idNumber: "",
//   vehicleNo: "",
//   model: "",
//   bikeCC: "",
//   chassisNo: "",
//   chargerType: "",
//   batteryType: "",
//   state: "",
//   city: "",
//   branch: "",
//   country: "India", 
// });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLocationChange = (field, value) => {
//     if (field === "state") {
//       setFormData({ ...formData, state: value, city: "", branch: "" });
//     } else if (field === "city") {
//       setFormData({ ...formData, city: value, branch: value }); // branch = city
//     }
//   };

//   const getChargerCost = (type) => (type === "5AMP" ? 1200 : type === "15AMP" ? 2000 : 0);
//   const getBatteryCost = (type) => (type === "72v 12A/H" ? 20000 : type === "72v 15A/H" ? 28000 : 0);

//   const calculateTotalAmount = () => {
//     const cc = parseInt(formData.bikeCC);
//     let base = 0;
//     if (cc >= 100 && cc <= 125) base = 39000;
//     else if (cc > 125 && cc <= 150) base = 45000;
//     else return 0;
//     return base + getChargerCost(formData.chargerType) + getBatteryCost(formData.batteryType);
//   };

//   const handlePayment = async () => {
//     try {
//       const totalAmount = calculateTotalAmount();
//       if (totalAmount === 0) return alert("❌ Invalid bike CC or configuration");
//       const payableAmount = Math.round(totalAmount * 0.05);

//       const { data: { key } } = await axios.get("http://localhost:5000/api/order/getkey");
//       const { data: { order } } = await axios.post("http://localhost:5000/api/order/checkout", { amount: payableAmount });

//       const options = {
//         key,
//         amount: order.amount,
//         currency: "INR",
//         name: "KGVL Hybrid Bikes",
//         description: `Advance Payment (5% of ₹${totalAmount})`,
//         order_id: order.id,
//         handler: async function (response) {
//           try {
//             const verificationRes = await axios.post("http://localhost:5000/api/order/verify", {
//               ...formData,
//               totalAmount,
//               payableAmount,
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_signature: response.razorpay_signature,
//             });

//             if (verificationRes.data.success) {
//               navigate("/payment-success", {
//                 state: {
//                   ...formData,
//                   paymentId: response.razorpay_payment_id,
//                   orderId: response.razorpay_order_id,
//                   totalAmount,
//                   payableAmount,
//                 },
//               });
//             } else {
//               alert("❌ Payment verification failed");
//             }
//           } catch {
//             alert("❌ Payment verification error");
//           }
//         },
//         prefill: {
//           name: formData.name,
//           contact: formData.phone,
//           email: formData.email,
//         },
//         theme: { color: "#3399cc" },
//         modal: { ondismiss: () => alert("Payment popup closed") },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       alert("❌ Payment could not be initiated");
//     }
//   };

// return (
//   <div className="p-6 font-sans bg-gray-100 min-h-screen">
//     <h2 className="text-center text-2xl font-bold">
//       Unleash the Future with the <span className="text-green-500">KGV Hybrid Bikes</span>
//     </h2>
//     <p className="text-center max-w-xl mx-auto my-2">
//       Experience seamless electric performance, rugged build quality, and eco-friendly performance—
//       your perfect ride for urban streets and weekend adventures.
//     </p>

//     <div className="bg-white rounded-lg shadow-2xl p-6 mt-12 max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
//       {/* LEFT SIDE: FORM */}
//       <form
//         onSubmit={(e) => { e.preventDefault(); handlePayment(); }}
//         className="w-full md:w-1/2 space-y-4"
//       >
//         {[
//           ["name", "Full Name"],
//           ["phone", "Phone Number"],
//           ["email", "Email"],
//           ["idProof", "ID Proof (Aadhar/PAN/etc)"],
//           ["idNumber", "ID Number"],
//           ["vehicleNo", "Vehicle Number"],
//           ["model", "Bike Model"],
//           ["bikeCC", "Bike CC"],
//           ["chassisNo", "Chassis Number"],
//         ].map(([key, label]) => (
//           <div key={key}>
//             <label className="block font-medium">{label}</label>
//             <input
//               type="text"
//               name={key}
//               value={formData[key]}
//               onChange={handleChange}
//               required
//               className="w-full border rounded px-3 py-2 mt-1"
//             />
//           </div>
//         ))}

//         {/* State Selection */}
//         <div>
//           <label className="block font-medium">State (India)</label>
//           <select
//             name="state"
//             value={formData.state}
//             onChange={(e) => handleLocationChange("state", e.target.value)}
//             required
//             className="w-full border rounded px-3 py-2 mt-1"
//           >
//             <option value="">-- Select State --</option>
//             {State.getStatesOfCountry(INDIA_CODE).map((state) => (
//               <option key={state.isoCode} value={state.isoCode}>
//                 {state.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* City Selection */}
//         <div>
//           <label className="block font-medium">City</label>
//           <select
//             name="city"
//             value={formData.city}
//             onChange={(e) => handleLocationChange("city", e.target.value)}
//             required
//             className="w-full border rounded px-3 py-2 mt-1"
//           >
//             <option value="">-- Select City --</option>
//             {City.getCitiesOfState(INDIA_CODE, formData.state).map((city) => (
//               <option key={city.name} value={city.name}>
//                 {city.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Charger Type */}
//         <div>
//           <label className="block font-medium">Charger Type</label>
//           <select
//             name="chargerType"
//             value={formData.chargerType}
//             onChange={handleChange}
//             className="w-full border rounded px-3 py-2 mt-1"
//           >
//             <option value="">-- Select Charger --</option>
//             <option value="5AMP">5AMP (+₹1200)</option>
//             <option value="15AMP">15AMP (+₹2000)</option>
//           </select>
//         </div>

//         {/* Battery Type */}
//         <div>
//           <label className="block font-medium">Battery Type</label>
//           <select
//             name="batteryType"
//             value={formData.batteryType}
//             onChange={handleChange}
//             className="w-full border rounded px-3 py-2 mt-1"
//           >
//             <option value="">-- Select Battery --</option>
//             <option value="72v 12A/H">72v 12A/H (+₹20000)</option>
//             <option value="72v 15A/H">72v 15A/H (+₹28000)</option>
//           </select>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded mt-4"
//         >
//           Pay ₹{(calculateTotalAmount() * 0.05).toFixed(2)} (5% Advance)
//         </button>
//       </form>

//       {/* RIGHT SIDE: IMAGE */}
//       <div className="w-full md:w-1/2 flex justify-center items-center">
//         <img
//           src={kgvHero}
//           alt="KGV Hero"
//           className="w-full h-auto max-h-[500px] object-contain rounded-lg"
//         />
//       </div>
//     </div>
//   </div>
// );

// };

// export default PayOneRupee;


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { Country, State, City } from "country-state-city";

// const PayOneRupee = () => {
//   const navigate = useNavigate();

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
//     country: "",
//     state: "",
//     city: "",
//     branch: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLocationChange = (field, value) => {
//     if (field === "country") {
//       setFormData({ ...formData, country: value, state: "", city: "", branch: "" });
//     } else if (field === "state") {
//       setFormData({ ...formData, state: value, city: "", branch: "" });
//     } else if (field === "city") {
//       setFormData({ ...formData, city: value, branch: value }); // auto-set branch = city
//     }
//   };

//   const getChargerCost = (type) => {
//     if (type === "5AMP") return 1200;
//     if (type === "15AMP") return 2000;
//     return 0;
//   };

//   const getBatteryCost = (type) => {
//     if (type === "72v 12A/H") return 10000 * 2;
//     if (type === "72v 15A/H") return 14000 * 2;
//     return 0;
//   };

//   const calculateTotalAmount = () => {
//     const cc = parseInt(formData.bikeCC);
//     let baseAmount = 0;
//     if (cc >= 100 && cc <= 125) baseAmount = 39000;
//     else if (cc > 125 && cc <= 150) baseAmount = 45000;
//     else return 0;

//     return baseAmount + getChargerCost(formData.chargerType) + getBatteryCost(formData.batteryType);
//   };

//   const handlePayment = async () => {
//     try {
//       const totalAmount = calculateTotalAmount();
//       if (totalAmount === 0) {
//         alert("❌ Invalid bike CC or configuration");
//         return;
//       }

//       const payableAmount = Math.round(totalAmount * 0.05);

//       const { data: { key } } = await axios.get("http://localhost:5000/api/order/getkey");

//       const { data: { order } } = await axios.post("http://localhost:5000/api/order/checkout", {
//         amount: payableAmount,
//       });

//       const options = {
//         key,
//         amount: order.amount,
//         currency: "INR",
//         name: "KGVL Hybrid Bikes",
//         description: `Advance Payment (5% of ₹${totalAmount})`,
//         order_id: order.id,
//         handler: async function (response) {
//           try {
//             const verificationRes = await axios.post("http://localhost:5000/api/order/verify", {
//               ...formData,
//               totalAmount,
//               payableAmount,
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_signature: response.razorpay_signature,
//             });

//             if (verificationRes.data.success) {
//               navigate("/payment-success", {
//                 state: {
//                   ...formData,
//                   paymentId: response.razorpay_payment_id,
//                   orderId: response.razorpay_order_id,
//                   totalAmount,
//                   payableAmount,
//                 },
//               });
//             } else {
//               alert("❌ Payment verification failed");
//             }
//           } catch (err) {
//             console.error("Verification error:", err);
//             alert("❌ Payment verification error");
//           }
//         },
//         prefill: {
//           name: formData.name,
//           contact: formData.phone,
//           email: formData.email,
//         },
//         theme: { color: "#3399cc" },
//         modal: {
//           ondismiss: () => alert("Payment popup closed"),
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       console.error("❌ Payment initiation error:", err);
//       alert("❌ Payment could not be initiated");
//     }
//   };

//   return (
//     <div style={{ maxWidth: 500, margin: "auto", padding: 20 }}>
//       <h2>Advance Payment Form</h2>
//       <form onSubmit={(e) => { e.preventDefault(); handlePayment(); }}>
//         {[
//           ["name", "Full Name"],
//           ["phone", "Phone Number"],
//           ["email", "Email"],
//           ["idProof", "ID Proof (Aadhar/PAN/etc)"],
//           ["idNumber", "ID Number"],
//           ["vehicleNo", "Vehicle Number"],
//           ["model", "Bike Model"],
//           ["bikeCC", "Bike CC"],
//           ["chassisNo", "Chassis Number"],
//         ].map(([key, label]) => (
//           <div key={key} style={{ marginBottom: 10 }}>
//             <label>{label}</label><br />
//             <input
//               type="text"
//               name={key}
//               value={formData[key]}
//               onChange={handleChange}
//               required
//               style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
//             />
//           </div>
//         ))}

//         {/* Location Selection */}
//         <div style={{ marginBottom: 10 }}>
//           <label>Country</label><br />
//           <select
//             name="country"
//             value={formData.country}
//             onChange={(e) => handleLocationChange("country", e.target.value)}
//             required
//             style={{ width: "100%", padding: "8px" }}
//           >
//             <option value="">-- Select Country --</option>
//             {Country.getAllCountries().map((country) => (
//               <option key={country.isoCode} value={country.isoCode}>
//                 {country.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div style={{ marginBottom: 10 }}>
//           <label>State</label><br />
//           <select
//             name="state"
//             value={formData.state}
//             onChange={(e) => handleLocationChange("state", e.target.value)}
//             required
//             style={{ width: "100%", padding: "8px" }}
//           >
//             <option value="">-- Select State --</option>
//             {State.getStatesOfCountry(formData.country).map((state) => (
//               <option key={state.isoCode} value={state.isoCode}>
//                 {state.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div style={{ marginBottom: 10 }}>
//           <label>City</label><br />
//           <select
//             name="city"
//             value={formData.city}
//             onChange={(e) => handleLocationChange("city", e.target.value)}
//             required
//             style={{ width: "100%", padding: "8px" }}
//           >
//             <option value="">-- Select City --</option>
//             {City.getCitiesOfState(formData.country, formData.state).map((city) => (
//               <option key={city.name} value={city.name}>
//                 {city.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Charger */}
//         <div style={{ marginBottom: 10 }}>
//           <label>Charger Type</label><br />
//           <select
//             name="chargerType"
//             value={formData.chargerType}
//             onChange={handleChange}
//             style={{ width: "100%", padding: "8px" }}
//           >
//             <option value="">-- Select Charger --</option>
//             <option value="5AMP">5AMP (+₹1200)</option>
//             <option value="15AMP">15AMP (+₹2000)</option>
//           </select>
//         </div>

//         {/* Battery */}
//         <div style={{ marginBottom: 10 }}>
//           <label>Battery Type</label><br />
//           <select
//             name="batteryType"
//             value={formData.batteryType}
//             onChange={handleChange}
//             style={{ width: "100%", padding: "8px" }}
//           >
//             <option value="">-- Select Battery --</option>
//             <option value="72v 12A/H">72v 12A/H (+₹20000)</option>
//             <option value="72v 15A/H">72v 15A/H (+₹28000)</option>
//           </select>
//         </div>

//         <button
//           type="submit"
//           style={{
//             padding: "10px 20px",
//             background: "#3399cc",
//             color: "#fff",
//             border: "none",
//             borderRadius: "5px",
//             marginTop: 10
//           }}
//         >
//           Pay ₹{(calculateTotalAmount() * 0.05).toFixed(2)} (5% Advance)
//         </button>
//       </form>
//     </div>
//   );
// };

// export default PayOneRupee;



// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const PayOneRupee = () => {
//   const navigate = useNavigate();
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
//     chargerType: "",   // ✅ renamed to match backend
//     batteryType: "",   // ✅ renamed to match backend
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const getChargerCost = (type) => {
//     if (type === "5AMP") return 1200;
//     if (type === "15AMP") return 2000;
//     return 0;
//   };

//   const getBatteryCost = (type) => {
//     if (type === "72v 12A/H") return 10000 * 2;
//     if (type === "72v 15A/H") return 14000 * 2;
//     return 0;
//   };

//   const calculateTotalAmount = () => {
//     const cc = parseInt(formData.bikeCC);
//     let baseAmount = 0;

//     if (cc >= 100 && cc <= 125) baseAmount = 39000;
//     else if (cc > 125 && cc <= 150) baseAmount = 45000;
//     else return 0;

//     const chargerCost = getChargerCost(formData.chargerType);
//     const batteryCost = getBatteryCost(formData.batteryType);

//     return baseAmount + chargerCost + batteryCost;
//   };

//   const handlePayment = async () => {
//     try {
//       const totalAmount = calculateTotalAmount();
//       if (totalAmount === 0) {
//         alert("❌ Invalid bike CC or configuration");
//         return;
//       }

//       const payableAmount = Math.round(totalAmount * 0.05);

//       // Step 1: Get Razorpay key
//       const { data: { key } } = await axios.get("http://localhost:5000/api/order/getkey");

//       // Step 2: Create order
//       const { data: { order } } = await axios.post("http://localhost:5000/api/order/checkout", {
//         amount: payableAmount,
//       });

//       // Step 3: Configure Razorpay
//       const options = {
//         key,
//         amount: order.amount,
//         currency: "INR",
//         name: "KGVL Hybrid Bikes",
//         description: `Advance Payment (5% of ₹${totalAmount})`,
//         order_id: order.id,
//         handler: async function (response) {
//           try {
//             const verificationRes = await axios.post("http://localhost:5000/api/order/verify", {
//               ...formData,
//               totalAmount,
//               payableAmount,
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_signature: response.razorpay_signature,
//             });

//             if (verificationRes.data.success) {
//               navigate("/payment-success", {
//                 state: {
//                   ...formData,
//                   paymentId: response.razorpay_payment_id,
//                   orderId: response.razorpay_order_id,
//                   totalAmount,
//                   payableAmount,
//                 },
//               });
//             } else {
//               alert("❌ Payment verification failed");
//             }
//           } catch (err) {
//             console.error("Verification error:", err);
//             alert("❌ Payment verification error");
//           }
//         },
//         prefill: {
//           name: formData.name,
//           contact: formData.phone,
//           email: formData.email,
//         },
//         theme: { color: "#3399cc" },
//         modal: {
//           ondismiss: function () {
//             alert("Payment popup closed");
//           },
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       console.error("❌ Payment initiation error:", err.response?.data || err.message);
//       alert("❌ Payment could not be initiated");
//     }
//   };

//   return (
//     <div style={{ maxWidth: 500, margin: "auto", padding: 20 }}>
//       <h2>Advance Payment Form</h2>
//       <form onSubmit={(e) => { e.preventDefault(); handlePayment(); }}>
//         {[
//           ["name", "Full Name"],
//           ["phone", "Phone Number"],
//           ["email", "Email"],
//           ["idProof", "ID Proof (Aadhar/PAN/etc)"],
//           ["idNumber", "ID Number"],
//           ["vehicleNo", "Vehicle Number"],
//           ["model", "Bike Model"],
//           ["bikeCC", "Bike CC"],
//           ["chassisNo", "Chassis Number"],
//         ].map(([key, label]) => (
//           <div key={key} style={{ marginBottom: 10 }}>
//             <label>{label}</label><br />
//             <input
//               type="text"
//               name={key}
//               value={formData[key]}
//               onChange={handleChange}
//               required
//               style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
//             />
//           </div>
//         ))}

//         {/* Charger Selection */}
//         <div style={{ marginBottom: 10 }}>
//           <label>Charger Type</label><br />
//           <select
//             name="chargerType"
//             value={formData.chargerType}
//             onChange={handleChange}
//             style={{ width: "100%", padding: "8px" }}
//           >
//             <option value="">-- Select Charger --</option>
//             <option value="5AMP">5AMP (+₹1200)</option>
//             <option value="15AMP">15AMP (+₹2000)</option>
//           </select>
//         </div>

//         {/* Battery Selection */}
//         <div style={{ marginBottom: 10 }}>
//           <label>Battery Type</label><br />
//           <select
//             name="batteryType"
//             value={formData.batteryType}
//             onChange={handleChange}
//             style={{ width: "100%", padding: "8px" }}
//           >
//             <option value="">-- Select Battery --</option>
//             <option value="72v 12A/H">72v 12A/H (+₹20000)</option>
//             <option value="72v 15A/H">72v 15A/H (+₹28000)</option>
//           </select>
//         </div>

//         <button
//           type="submit"
//           style={{
//             padding: "10px 20px",
//             background: "#3399cc",
//             color: "#fff",
//             border: "none",
//             borderRadius: "5px",
//             marginTop: 10
//           }}
//         >
//           Pay ₹{(calculateTotalAmount() * 0.05).toFixed(2)} (5% Advance)
//         </button>
//       </form>
//     </div>
//   );
// };

// export default PayOneRupee;


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const PayOneRupee = () => {
//   const navigate = useNavigate();
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
//     charger: "",     // new field
//     battery: "",     // new field
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const getChargerCost = (type) => {
//     if (type === "5AMP") return 1200;
//     if (type === "15AMP") return 2000;
//     return 0;
//   };

//   const getBatteryCost = (type) => {
//     if (type === "72v 12A/H") return 10000 * 2;
//     if (type === "72v 15A/H") return 14000 * 2;
//     return 0;
//   };

//   const calculateTotalAmount = () => {
//     const cc = parseInt(formData.bikeCC);
//     let baseAmount = 0;

//     if (cc >= 100 && cc <= 125) baseAmount = 39000;
//     else if (cc > 125 && cc <= 150) baseAmount = 45000;
//     else return 0;

//     const chargerCost = getChargerCost(formData.charger);
//     const batteryCost = getBatteryCost(formData.battery);

//     return baseAmount + chargerCost + batteryCost;
//   };

//   const handlePayment = async () => {
//     try {
//       const totalAmount = calculateTotalAmount();
//       if (totalAmount === 0) {
//         alert("❌ Invalid bike CC or configuration");
//         return;
//       }

//       const payableAmount = Math.round(totalAmount * 0.05);

//       const { data: { key } } = await axios.get("http://localhost:5000/api/getkey");
//       const { data: { order } } = await axios.post("http://localhost:5000/api/checkout", {
//         amount: payableAmount,
//       });

//       const options = {
//         key,
//         amount: order.amount,
//         currency: "INR",
//         name: "KGVL Hybrid Bikes",
//         description: `Advance Payment (5% of ₹${totalAmount})`,
//         order_id: order.id,
//         handler: async function (response) {
//           try {
//             const verificationRes = await axios.post("http://localhost:5000/api/verify", {
//               ...formData,
//               totalAmount,
//               payableAmount,
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_signature: response.razorpay_signature,
//             });

//             if (verificationRes.data.success) {
//               navigate("/payment-success", {
//                 state: {
//                   ...formData,
//                   paymentId: response.razorpay_payment_id,
//                   orderId: response.razorpay_order_id,
//                   totalAmount,
//                   payableAmount,
//                 },
//               });
//             } else {
//               alert("❌ Payment verification failed");
//             }
//           } catch (err) {
//             console.error("Verification error:", err);
//             alert("❌ Payment verification error");
//           }
//         },
//         prefill: {
//           name: formData.name,
//           contact: formData.phone,
//           email: formData.email,
//         },
//         theme: { color: "#3399cc" },
//         modal: {
//           ondismiss: function () {
//             alert("Payment popup closed");
//           },
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       console.error("❌ Payment initiation error:", err.response?.data || err.message);
//       alert("❌ Payment could not be initiated");
//     }
//   };

//   return (
//     <div style={{ maxWidth: 500, margin: "auto", padding: 20 }}>
//       <h2>Advance Payment Form</h2>
//       <form onSubmit={(e) => { e.preventDefault(); handlePayment(); }}>
//         {[
//           ["name", "Full Name"],
//           ["phone", "Phone Number"],
//           ["email", "Email"],
//           ["idProof", "ID Proof (Aadhar/PAN/etc)"],
//           ["idNumber", "ID Number"],
//           ["vehicleNo", "Vehicle Number"],
//           ["model", "Bike Model"],
//           ["bikeCC", "Bike CC"],
//           ["chassisNo", "Chassis Number"],
//         ].map(([key, label]) => (
//           <div key={key} style={{ marginBottom: 10 }}>
//             <label>{label}</label><br />
//             <input
//               type="text"
//               name={key}
//               value={formData[key]}
//               onChange={handleChange}
//               required
//               style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
//             />
//           </div>
//         ))}

//         {/* Charger Selection */}
//         <div style={{ marginBottom: 10 }}>
//           <label>Charger Type</label><br />
//           <select
//             name="charger"
//             value={formData.charger}
//             onChange={handleChange}
//             style={{ width: "100%", padding: "8px" }}
//           >
//             <option value="">-- Select Charger --</option>
//             <option value="5AMP">5AMP (+₹1200)</option>
//             <option value="15AMP">15AMP (+₹2000)</option>
//           </select>
//         </div>

//         {/* Battery Selection */}
//         <div style={{ marginBottom: 10 }}>
//           <label>Battery Type</label><br />
//           <select
//             name="battery"
//             value={formData.battery}
//             onChange={handleChange}
//             style={{ width: "100%", padding: "8px" }}
//           >
//             <option value="">-- Select Battery --</option>
//             <option value="72v 12A/H">72v 12A/H (+₹20000)</option>
//             <option value="72v 15A/H">72v 15A/H (+₹28000)</option>
//           </select>
//         </div>

//         <button
//           type="submit"
//           style={{
//             padding: "10px 20px",
//             background: "#3399cc",
//             color: "#fff",
//             border: "none",
//             borderRadius: "5px",
//             marginTop: 10
//           }}
//         >
//           Pay ₹{(calculateTotalAmount() * 0.05).toFixed(2)} (5% Advance)
//         </button>
//       </form>
//     </div>
//   );
// };

// export default PayOneRupee;



// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const PayOneRupee = () => {
//   const navigate = useNavigate();
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
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const calculateTotalAmount = () => {
//     const cc = parseInt(formData.bikeCC);
//     if (cc >= 100 && cc <= 125) return 39000;
//     if (cc > 125 && cc <= 150) return 45000;
//     return 0; // fallback for unsupported CC
//   };

//   const handlePayment = async () => {
//     try {
//       const totalAmount = calculateTotalAmount();
//       if (totalAmount === 0) {
//         alert("❌ Invalid bike CC. Must be between 100-150.");
//         return;
//       }

//       const payableAmount = totalAmount * 0.05;

//       // Step 1: Get Razorpay key
//       const { data: { key } } = await axios.get("http://localhost:5000/api/getkey");

//       // Step 2: Create order
//       const { data: { order } } = await axios.post("http://localhost:5000/api/checkout", {
//         amount: payableAmount,
//       });

//       // Step 3: Razorpay options
//       const options = {
//         key,
//         amount: order.amount,
//         currency: "INR",
//         name: "KGVL Hybrid Bikes",
//         description: `Advance Payment (5% of ₹${totalAmount})`,
//         order_id: order.id,
//         handler: async function (response) {
//           try {
//             const verificationRes = await axios.post("http://localhost:5000/api/verify", {
//               ...formData,
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_signature: response.razorpay_signature,
//             });

//             if (verificationRes.data.success) {
//               navigate("/payment-success", {
//                 state: {
//                   ...formData,
//                   paymentId: response.razorpay_payment_id,
//                   orderId: response.razorpay_order_id,
//                   totalAmount,
//                   payableAmount,
//                 },
//               });
//             } else {
//               alert("❌ Payment verification failed");
//             }
//           } catch (err) {
//             console.error("Verification error:", err);
//             alert("❌ Payment verification error");
//           }
//         },
//         prefill: {
//           name: formData.name,
//           contact: formData.phone,
//           email: formData.email,
//         },
//         theme: { color: "#3399cc" },
//         modal: {
//           ondismiss: function () {
//             alert("Payment popup closed");
//           },
//         },
//       };

//       // Step 4: Open Razorpay checkout
//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       console.error("❌ Payment could not be initiated:", err.response?.data || err.message);
//       alert("❌ Payment could not be initiated");
//     }
//   };

//   return (
//     <div style={{ maxWidth: 500, margin: "auto", padding: 20 }}>
//       <h2>Advance Payment Form</h2>
//       <form onSubmit={(e) => { e.preventDefault(); handlePayment(); }}>
//         {[
//           ["name", "Full Name"],
//           ["phone", "Phone Number"],
//           ["email", "Email"],
//           ["idProof", "Aadhar"],
//           ["idNumber", "ID Number"],
//           ["vehicleNo", "Vehicle Number"],
//           ["model", "Bike Model"],
//           ["bikeCC", "Bike CC"],
//           ["chassisNo", "Chassis Number"]
//         ].map(([key, label]) => (
//           <div key={key} style={{ marginBottom: 10 }}>
//             <label>{label}</label><br />
//             <input
//               type="text"
//               name={key}
//               value={formData[key]}
//               onChange={handleChange}
//               required
//               style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
//             />
//           </div>
//         ))}
//         <button type="submit" style={{ padding: "10px 20px", background: "#3399cc", color: "#fff", border: "none", borderRadius: "5px" }}>
//           Pay ₹{(calculateTotalAmount() * 0.05).toFixed(2)} (5% Advance)
//         </button>
//       </form>
//     </div>
//   );
// };

// export default PayOneRupee;


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const PayOneRupee = () => {
//   const navigate = useNavigate();
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
//     totalAmount: 1000,
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handlePayment = async () => {
//     try {
//       const payableAmount = formData.totalAmount * 0.05;

//       // Step 1: Get Razorpay key
//       const { data: { key } } = await axios.get("http://localhost:5000/api/getkey");

//       // Step 2: Create order
//       const { data: { order } } = await axios.post("http://localhost:5000/api/checkout", {
//         amount: payableAmount,
//       });

//       // Step 3: Razorpay options
//       const options = {
//         key,
//         amount: order.amount,
//         currency: "INR",
//         name: "KGVL Hybrid Bikes",
//         description: `Advance Payment (5% of ₹${formData.totalAmount})`,
//         order_id: order.id,
//         handler: async function (response) {
//           try {
//             const verificationRes = await axios.post("http://localhost:5000/api/verify", {
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_signature: response.razorpay_signature,
//               ...formData,
//             });

//             if (verificationRes.data.success) {
//               navigate("/payment-success", {
//                 state: {
//                   paymentId: response.razorpay_payment_id,
//                   orderId: response.razorpay_order_id,
//                   ...formData,
//                   payableAmount,
//                 },
//               });
//             } else {
//               alert("❌ Payment verification failed");
//             }
//           } catch (err) {
//             console.error("Verification error:", err);
//             alert("❌ Payment verification error");
//           }
//         },
//         prefill: {
//           name: formData.name,
//           contact: formData.phone,
//           email: formData.email,
//         },
//         theme: {
//           color: "#3399cc",
//         },
//         modal: {
//           ondismiss: function () {
//             alert("Payment popup closed");
//           },
//         },
//       };

//       // Step 4: Open Razorpay checkout
//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       console.error("❌ Payment could not be initiated:", err.response?.data || err.message);
//       alert("❌ Payment could not be initiated");
//     }
//   };

//   return (
//     <div style={{ maxWidth: 500, margin: "auto", padding: 20 }}>
//       <h2>Advance Payment Form</h2>
//       <form onSubmit={(e) => { e.preventDefault(); handlePayment(); }}>
//         {[
//           ["name", "Full Name"],
//           ["phone", "Phone Number"],
//           ["email", "Email"],
//           ["idProof", "ID Proof (e.g. Aadhar)"],
//           ["idNumber", "ID Number"],
//           ["vehicleNo", "Vehicle Number"],
//           ["model", "Bike Model"],
//           ["bikeCC", "Bike CC"],
//           ["chassisNo", "Chassis Number"]
//         ].map(([key, label]) => (
//           <div key={key} style={{ marginBottom: 10 }}>
//             <label>{label}</label><br />
//             <input
//               type="text"
//               name={key}
//               value={formData[key]}
//               onChange={handleChange}
//               required
//               style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
//             />
//           </div>
//         ))}
//         <button type="submit" style={{ padding: "10px 20px", background: "#3399cc", color: "#fff", border: "none", borderRadius: "5px" }}>
//           Pay ₹{(formData.totalAmount * 0.05).toFixed(2)} (5% Advance)
//         </button>
//       </form>
//     </div>
//   );
// };

// export default PayOneRupee;


// import React from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const PayOneRupee = () => {
//   const navigate = useNavigate();

//   const handlePayment = async () => {
//     try {
//       // Dummy data (can be replaced with actual user input)
//       const name = "Jagdish";
//       const phone = "9876543210";
//       const email = "jagdish@example.com";
//       const idProof = "Aadhar";
//       const idNumber = "1234-5678-9012";
//       const vehicleNo = "MH12AB1234";
//       const model = "Hero Splendor";
//       const bikeCC = "100";
//       const chassisNo = "CHASSIS123456";
//       const totalAmount = 1000;
//       const payableAmount = totalAmount * 0.05;

//       // Step 1: Get Razorpay key
//       const {
//         data: { key },
//       } = await axios.get("http://localhost:5000/api/getkey");

//       // Step 2: Create order on backend
//       const {
//         data: { order },
//       } = await axios.post("http://localhost:5000/api/checkout", {
//         amount: payableAmount,
//       });

//       // Step 3: Configure Razorpay options
//       const options = {
//         key,
//         amount: order.amount,
//         currency: "INR",
//         name: "KGVL Hybrid Bikes",
//         description: `Advance Payment (5% of ₹${totalAmount})`,
//         order_id: order.id,
//         handler: async function (response) {
//           try {
//             // Step 4: Verify payment on backend
//             const verificationRes = await axios.post("http://localhost:5000/api/verify", {
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_signature: response.razorpay_signature,
//               name,
//               phone,
//               email,
//               idProof,
//               idNumber,
//               vehicleNo,
//               model,
//               bikeCC,
//               chassisNo,
//               totalAmount,
//             });

//             if (verificationRes.data.success) {
//               // Step 5: Navigate to success page
//               navigate("/payment-success", {
//                 state: {
//                   paymentId: response.razorpay_payment_id,
//                   orderId: response.razorpay_order_id,
//                   name,
//                   phone,
//                   email,
//                   totalAmount,
//                   payableAmount,
//                 },
//               });
//             } else {
//               alert("❌ Payment verification failed");
//             }
//           } catch (err) {
//             console.error("Verification error:", err);
//             alert("❌ Payment verification error");
//           }
//         },
//         prefill: {
//           name,
//           contact: phone,
//           email,
//         },
//         theme: {
//           color: "#3399cc",
//         },
//         modal: {
//           ondismiss: function () {
//             alert("Payment popup closed");
//           },
//         },
//       };

//       // Step 6: Open Razorpay checkout
//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       console.error("❌ Payment could not be initiated:", err.response?.data || err.message);
//       alert("❌ Payment could not be initiated");
//     }
//   };

//   return (
//     <button onClick={handlePayment}>
//       Pay ₹{(1000 * 0.05).toFixed(2)} (5% Advance)
//     </button>
//   );
// };

// export default PayOneRupee;


// import React from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const PayOneRupee = () => {
//   const navigate = useNavigate();

//   const handlePayment = async () => {
//     try {
//       const name = "Jagdish";
//       const phone = "9876543210";
//       const amount = 1;

//       // Step 1: Get Razorpay key
//       const {
//         data: { key },
//       } = await axios.get("http://localhost:5000/api/getkey");

//       // Step 2: Create order on backend
//       const {
//         data: { order },
//       } = await axios.post("http://localhost:5000/api/checkout", { amount });

//       // Check if Razorpay script is loaded
//       if (!window.Razorpay) {
//         alert("Razorpay SDK not loaded. Please check your internet connection.");
//         return;
//       }

//       // Step 3: Configure Razorpay options
//       const options = {
//         key,
//         amount: order.amount,
//         currency: "INR",
//         name: "KGVL Hybrid Bikes",
//         description: "Test ₹1 Payment",
//         order_id: order.id,
//         handler: async function (response) {
//           try {
//             // Step 4: Verify payment on backend
//             const verificationRes = await axios.post("http://localhost:5000/api/verify", {
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_signature: response.razorpay_signature,
//               name,
//               phone,
//               amount,
//             });

//             if (verificationRes.data.success) {
//               // Step 5: Navigate to payment success page
//               navigate("/payment-success", {
//                 state: {
//                   paymentId: response.razorpay_payment_id,
//                   orderId: response.razorpay_order_id,
//                   signature: response.razorpay_signature,
//                   name,
//                   phone,
//                   amount,
//                 },
//               });
//             } else {
//               alert("❌ Payment verification failed");
//             }
//           } catch (err) {
//             console.error("Verification error:", err);
//             alert("❌ Payment verification error");
//           }
//         },
//         prefill: {
//           name,
//           contact: phone,
//         },
//         theme: {
//           color: "#3399cc",
//         },
//         modal: {
//           ondismiss: function () {
//             alert("Payment popup closed");
//           },
//         },
//       };

//       // Step 6: Open Razorpay checkout
//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       console.error("❌ Payment could not be initiated:", err.response?.data || err.message || err);
//       alert("❌ Payment could not be initiated");
//     }
//   };

//   return (
//     <button onClick={handlePayment}>
//       Pay ₹1
//     </button>
//   );
// };

// export default PayOneRupee;

// import React from "react";
// import axios from "axios";

// const PayOneRupee = () => {
//   const handlePayment = async () => {
//     try {
//       const name = "Jagdish";
//       const phone = "9876543210";
//       const amount = 1;

//       console.log("Getting Razorpay key...");
//       const { data: { key } } = await axios.get("http://localhost:5000/api/getkey");
//       console.log("Key received:", key);

//       console.log("Creating order...");
//       const { data: { order } } = await axios.post("http://localhost:5000/api/checkout", { amount });
//       console.log("Order created:", order);

//       if (!window.Razorpay) {
//         console.error("Razorpay SDK not loaded");
//         alert("Razorpay payment gateway is not available.");
//         return;
//       }

//       const options = {
//         key,
//         amount: order.amount,
//         currency: "INR",
//         name: "KGVL Hybrid Bikes",
//         description: "Test ₹1 Payment",
//         order_id: order.id, // important: razorpay expects this exact key name
//         handler: async function (response) {
//           try {
//             console.log("Verifying payment...");
//             const verificationRes = await axios.post("http://localhost:5000/api/verify", {
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_signature: response.razorpay_signature,
//               name,
//               phone,
//               amount,
//             });

//             if (verificationRes.data.success) {
//               alert("✅ Payment successful and verified");
//             } else {
//               alert("❌ Payment verification failed");
//             }
//           } catch (err) {
//             console.error("Verification error:", err);
//             alert("❌ Payment verification error");
//           }
//         },
//         prefill: {
//           name,
//           contact: phone,
//         },
//         theme: {
//           color: "#3399cc",
//         },
//         modal: {
//           ondismiss: function () {
//             alert("Payment popup closed");
//           },
//         },
//       };

//       console.log("Opening Razorpay with options:", options);
//       const rzp = new window.Razorpay(options);
//       rzp.open();

//     } catch (err) {
//       console.error("❌ Payment could not be initiated:", err.response?.data || err.message || err);
//       alert("❌ Payment could not be initiated");
//     }
//   };

//   return (
//     <button onClick={handlePayment}>
//       Pay ₹1
//     </button>
//   );
// };

// export default PayOneRupee;

