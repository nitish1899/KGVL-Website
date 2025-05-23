import React from "react";
import wave from "../resource/wave_final.png";
import socialBg from "../resource/socialBg.png"; // replace with your social image path
import event1 from "../resource/event1.jpg"; 
import event2 from "../resource/event2.jpg"; 
import event3 from "../resource/event3.jpg"; 
import event4 from "../resource/event4.jpg"; 
import event5 from "../resource/event5.jpg"; 
import event6 from "../resource/event6.jpg"; 

export default function Event() {
  return (
    <div className="relative w-full overflow-hidden">

      {/* Background Wave */}
      <img
        src={wave}
        className="w-full h-full absolute top-0 left-0 opacity-50 object-cover z-0"
        alt="Wave Background"
      />

      {/* Main content container */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 space-y-12">
        
        {/* Mahakumbh Image Grid Section */}
{/* Mahakumbh Image Grid Section */}
<div className="bg-white rounded-lg shadow-md border-2 border-blue-500 p-6 max-w-6xl mx-auto">
  <h2 className="text-center text-xl font-semibold text-green-700 mb-4">
    @ Startup Mahakumbh 2025
  </h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {[event1, event2, event3, event4, event5, event6].map((src, index) => (
      <img
        key={index}
        src={src}
        alt={`Event ${index + 1}`}
        className="rounded w-full h-60 object-cover"
      />
    ))}
  </div>
</div>



{/* Stay Connected Section with dark shadow */}
<div
  className="bg-white rounded-lg p-6 max-w-4xl mx-auto text-center"
  style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' }}
>
  <h3 className="text-green-700 text-xl font-semibold mb-2">Stay Connected</h3>
  <p className="text-sm text-gray-600 mb-4">
    Follow us on social media for the latest updates, insights, and announcements.
  </p>
  <div className="w-full">
    <img
      src={socialBg}
      alt="Social Media"
      className="w-full h-auto object-contain rounded"
    />
  </div>
</div>

      </div>
    </div>
  );
};

