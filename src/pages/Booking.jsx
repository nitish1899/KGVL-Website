


import React, { useState } from "react";
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