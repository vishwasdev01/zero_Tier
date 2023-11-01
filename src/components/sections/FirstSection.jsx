import React from "react";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function FirstSection() {
  return (
    <div className="max-w-7xl mx-auto mt-6 px-5">
      <h1 className="text-5xl font-bold md:w-3/6 my-5">
        Securely connect any device, anywhere.
      </h1>
      <p className="md:w-96 text-lg">
        ZeroTier lets you build modern, secure multi-point virtualized networks
        of almost any type. From robust peer-to-peer networking to multi-cloud
        mesh infrastructure, we enable global connectivity with the simplicity
        of a local network.
      </p>
      <div className="flex gap-5 my-8">
        <button
          type="button"
          className="text-black bg-[#ffb441] hover:text-[#ffb441] border border-[#ffb441] hover:bg-inherit focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
          Get Zero Tier
        </button>

        <button className="flex items-center hover:bg-[#262626] hover:text-[#ffb441] font-bold py-2 px-4 rounded-full">
          Learn More    <MdOutlineKeyboardArrowRight/>
        </button>
     
      </div>
      <p className="text-center text-base py-6">
        🔔 NEW! ZeroTier Summer 2023 Release: Download 1.12.2 - Read More
      </p>
    </div>
  );
}

export default FirstSection;
