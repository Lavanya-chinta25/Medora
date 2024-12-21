import React from "react";
import image1 from "../assets/about.jpg";
import image3 from "../assets/about5.png";

const About = () => {
  return (
    <div className="mt-24">
      {/* First Row */}
      <div className="grid grid-cols-2 h-[250px]"> {/* Reduced height */}
        {/* Left Column */}
        <div className="flex flex-col justify-center bg-[#153d55] text-white px-12">
          <h1 className="text-3xl font-bold mb-4">Welcome to Medora!</h1>
          <p className="text-lg leading-relaxed">
            Connecting patients with specialists and providing tools to manage health effectively.
          </p>
        </div>
        {/* Right Column */}
        <div
          className="bg-cover bg-center h-full"
          style={{ backgroundImage: `url(${image1})` }}
        ></div>
      </div>

      {/* Second Row */}
      <div className="flex h-[350px]">
        {/* Left Column (rotated) */}
        <div className="flex items-center justify-center bg-[#bbdef1] text-[#153d55] w-1/4 h-full">
          <p className="rotate-[-90deg] text-5xl font-bold">About Us</p>
        </div>
        {/* Middle Column */}
        <div className="flex flex-col justify-center px-16 bg-white opacity-80 w-1/2 h-full"> 
          <p className="leading-relaxed text-justify text-gray-900 mx-8">
            Medora is dedicated to providing accessible healthcare by connecting patients with the right specialists in their area. Our platform helps users find healthcare professionals based on symptoms, medical history, and location, making healthcare more accessible and transparent. We also provide support for managing medications and timely reminders, ensuring that patients stay on track with their health regimens.
          </p>
        </div>
        {/* Right Column */}
        <div className="bg-[#185a79] text-[#cbe8f8] bg-opacity-80 flex items-center justify-center px-8 w-1/4 h-full">
          <p className="rotate-[90deg] text-5xl font-bold">Medora.</p>
        </div>
      </div>

      {/* Third Row */}
      <div className="grid grid-cols-2 h-[200px] bg-[#185a79]">
        {/* Left Column */}
        <div
          className="bg-cover bg-center h-full"
          style={{ backgroundImage: `url(${image3})` }}
        ></div>
        {/* Right Column */}
        <div className="flex flex-col justify-center bg-[#97dbff] text-gray-30 px-8 h-full">
          <p className="leading-relaxed text-justify">
            Our vision is to empower individuals with easy access to healthcare information, making it simpler for everyone to navigate their health journey. We strive to provide the tools and support needed for a healthier, more informed community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
