import React from 'react';

// Capitalize the container component name
const MissionVisionContainer = ({ title, content }) => {
  return (
    <div className="flex flex-col justify-center rounded-lg h-auto p-8 w-[90%] min-w-[300px] bg-white border-4 border-yellow-200 shadow-xl items-center gap-y-6 "
    style={{ boxShadow: '0 10px 20px rgba(0, 0, 0, 0.9)' }}>
      <div className="text-2xl font-extrabold uppercase mt-3 tracking-wider text-yellow-300"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
        {title}
      </div>
      {content.map((text, index) => (
        <div key={index} className="font-bold max-w-[80%]">
          {text}
        </div>
      ))}
    </div>
  );
};

// Export the MissionVision component
export const MissionVision = () => {
  const visionContent = [
    "We started from the bike and we’ll make its delivery shortly to all the commuters worldwide.",
    "Our team of engineering excellence is also working on bringing up the system to each and every mode of transportation including 3-wheelers, cars, LMVs, LCVs, and even HCVs."
  ];

  const missionContent = [
    "To empower every common man in the world to save his/her hard-earned money spent on fossil fuels.",
    "To save mother Earth from air and noise pollution as well as a green and cleaner environment for saving life and humanity.",
    "To ensure a trouble-free and tension-free drive for each and every rider, reducing the anxiety of being stuck anywhere in the middle of their journey.",
    "To reduce the traveling cost of companies, corporate, and enterprises by more than 90%, adding to their profits.",
    "Our plug-in hybrid was designed to fit the battery and can be charged inside the home."
  ];

  return (
    <div className="max-w-[1204px] mx-auto flex flex-col pt-10 pb-16 gap-8 text-center items-center ">
      <MissionVisionContainer title="Vision" content={visionContent} />
      <MissionVisionContainer title="Mission" content={missionContent} />
    </div>
  );
};
