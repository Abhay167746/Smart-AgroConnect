import React from 'react';
import { FaCloudSun, FaChartLine, FaNewspaper, FaSeedling } from 'react-icons/fa';


const UtilityItem = ({ icon, title, data, bgColor }) => (
  <div
    className={`flex w-full cursor-pointer flex-col items-center justify-center rounded-lg p-6 text-center shadow-lg transition hover:scale-105 hover:shadow-xl sm:w-auto`}
    style={{ backgroundColor: bgColor }}
  >
    <div className="text-3xl text-white">{icon}</div>
    <h3 className="mt-2 text-lg font-bold text-white">{title}</h3>
    <p className="text-white">{data}</p>
  </div>
);

const UtilityBar = () => {
  return (
    <section className="grid grid-cols-2 gap-4 p-4 md:grid-cols-4 md:gap-8 md:p-8">
      <UtilityItem
        icon={<FaCloudSun />}
        title="Weather (2:39 PM)"
        data="31°C, Humid & Sunny"
        bgColor="#4CAF50" // Green
      />
      <UtilityItem
        icon={<FaChartLine />}
        title="Market Rates"
        data="Paddy: ₹2,203/Quintal ▲"
        bgColor="#FF8800" // Orange
      />
      <UtilityItem
        icon={<FaNewspaper />}
        title="Kisan News"
        data="New irrigation subsidy"
        bgColor="#2196F3" // Blue
      />
      <UtilityItem
        icon={<FaSeedling />}
        title="Crop Advisory"
        data="Check for stem borer"
        bgColor="#8BC34A" // Light Green
      />
    </section>
  );
};

export default UtilityBar;
