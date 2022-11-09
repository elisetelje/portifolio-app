import React, { useState } from "react";
import picture from "../assets/IMG_4945.jpg";
import Contact from "./Contact";

const AboutMe = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div id="about" className="w-full h-screen bg-[#22333b] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-gray-700">
              Om meg
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl ">
            <p>Hei! </p>
          </div>
          <div>
            <p>
              Jeg er en positive og sosial jente som er vandt til å jobbe
              målrettet. Jeg er en sosial person som liker å ha mye å drive med
              og lære meg nye ting.
            </p>
          </div>

          <div>
            <img src={picture}></img>
          </div>
          {!nav ? (
            <div onClick={handleClick} className=" z-10">
              <button className=" underline">Kontaktinformasjon </button>
            </div>
          ) : (
            <div>{nav ? <Contact /> : <div />}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
