"use client";
import React, { useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid grid-cols-3 gap-8">
        <li className="flex justify-center items-center hover:scale-105 transition-transform duration-300">
          <img
            src="/reactts-svgrepo-com.svg"
            alt="React.js"
            className="w-20 h-20"
          />
        </li>
        <li className="flex justify-center items-center hover:scale-105 transition-transform duration-300">
          <img
            src="/bootstrap-svgrepo-com.svg"
            alt="Bootstrap"
            className="w-20 h-20"
          />
        </li>
        <li className="flex justify-center items-center hover:scale-105 transition-transform duration-300">
          <img
            src="/tailwindcss-icon-svgrepo-com.svg"
            alt="Tailwind CSS"
            className="w-20 h-20"
          />
        </li>
        <li className="flex justify-center items-center hover:scale-105 transition-transform duration-300">
          <img
            src="/node-js-svgrepo-com.svg"
            alt="Node.js"
            className="w-20 h-20"
          />
        </li>
        <li className="flex justify-center items-center hover:scale-105 transition-transform duration-300">
          <img
            src="/html-5-svgrepo-com.svg"
            alt="HTML/CSS"
            className="w-20 h-20"
          />
        </li>
        <li className="flex justify-center items-center hover:scale-105 transition-transform duration-300">
          <img
            src="/javascript-svgrepo-com.svg"
            alt="JavaScript"
            className="w-20 h-20"
          />
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="grid grid-cols-2 gap-8">
        <li className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="text-center">
            <p className="text-lg font-semibold">FPT University</p>
            <p className="text-sm text-[#E0E7EB]">(2022 - 2026)</p>
          </div>
        </li>
        <li className="flex justify-center items-center bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="text-center">
            <p className="text-lg font-semibold">GPA</p>
            <p className="text-sm text-[#E0E7EB]">7+</p>
          </div>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="grid grid-cols-3 gap-6">
        <li className="flex justify-center items-center bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="text-center">
            <p className="text-lg font-semibold">TRANS 6</p>
            <p className="text-sm text-[#E0E7EB]">English Certification</p>
          </div>
        </li>
        <li className="flex justify-center items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="text-center">
            <p className="text-lg font-semibold">Coursera</p>
            <p className="text-sm text-[#E0E7EB]">Certification from Course</p>
          </div>
        </li>
        <li className="flex justify-center items-center bg-gradient-to-r from-green-500 to-blue-700 text-white rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="text-center">
            <p className="text-lg font-semibold">Freecodecamp</p>
            <p className="text-sm text-[#E0E7EB]">Responsive Web Design Certification</p>
          </div>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (tabId) => {
    setTab(tabId);
  };

  return (
    <div className="about-section ">
      <div className="flex flex-row justify-start mt-8">
        <TabButton
          selectTab={() => handleTabChange("skills")}
          active={tab === "skills"}
        >
          Skills
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("education")}
          active={tab === "education"}
        >
          Education
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("certifications")}
          active={tab === "certifications"}
        >
          Certifications
        </TabButton>
      </div>
      <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
    </div>
  );
};

export default AboutSection;
