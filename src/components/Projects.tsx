import React from "react";
import web from "../assets/plant.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full h-screen bg-[#7fb685] text-white">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-gray-700">
              Prosjekter
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-1 gap-5 text-center text-black py-8">
          <div className="bg-[#edede9] p-4 shadow-md shadow-gray-500 hover:scale-110 duration-500 pt-4">
            <div className="flex flex-row ">
              <div>
                <p className="my-4 font-semibold">Webutvikling</p>
                <p className="my-4 px-10">
                  Utviklet et prosjekt med en gruppe på 4 stykker. Lagde en
                  database med planter i MongoDB, og utviklet en frontend for å
                  vise all dataen. Lærte ting som pagination, local og session
                  storage, Redux, Web-Accessibility, React Native.
                </p>
                <a
                  href="https://github.com/elisetelje/IT2810-prosjekt2"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  GitHub
                </a>
              </div>
              <div>
                <img src={web}></img>
              </div>
            </div>
          </div>

          <div className="bg-[#edede9] p-4 shadow-md shadow-gray-500 hover:scale-110 duration-500 pt-4">
            <p className="my-4 font-semibold">Programvareutvikling</p>
          </div>

          <div className="bg-[#edede9] p-4 shadow-md shadow-gray-500 hover:scale-110 duration-500 pt-4">
            <p className="my-4 font-semibold">Databaser</p>
          </div>
          <div className="bg-[#edede9] p-4 shadow-md shadow-gray-500 hover:scale-110 duration-500 pt-4">
            <p className="my-4 font-semibold"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
