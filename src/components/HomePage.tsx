import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

export const HomePage = () => {
  return (
    <div id="home" className="w-full h-screen bg-[#edede9]">
      <div className="max-w-[1000 px] mx-auto px-20 flex flex-col justify-center h-full">
        <p className="text-black">Hei! Jeg heter</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-700">
          Elise Adriane Telje
        </h1>
        <h2 className="text-xl sm:text-3xl font-bold text-[#848794]">
          Jeg studerer Master Of Science in Informatics
        </h2>
        <p className="text-[#848794] py-4 max-w-[700px]">
          Takk for at du besøker siden min! Sjekk gjerne ut porteføljen min :)
        </p>
        <div>
          <Link to="skills" smooth={true} duration={1000}>
            <button className="text-gray-700 group border-2 px-6 py-3 my-2 flex  bg-[#ef6f6c] items-center hover:bg-[#989cab] hover:border-[#989cab] hover:text-white">
              Mine erfaringer
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
