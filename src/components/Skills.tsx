import React from "react";
import Design from "../assets/design-icon.png";
import Developing from "../assets/developing-icon.png";
import Event from "../assets/event-icon.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full sm:h-screen bg-[#426a5a]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-2 border-grey-500 text-white">
            Erfaringer
          </p>
          <p className="py-4">Dette er mine erfaringer</p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-5 text-center py-8">
          <div className="bg-[#edede9] p-4 shadow-md shadow-gray-500 hover:scale-110 duration-500 pt-4">
            <img
              className="w-10 mx-auto"
              src={Developing}
              alt="Developing icon"
            />
            <p className="my-4 font-semibold">Utvikling</p>
            <p className="my-4">
              Git, Python, Java, HTML, CSS, JavaScript, TypeScript, React,
              Tailwind, C#, Angular, Django, MongoDB, SQL, Sanity, Cypress
            </p>
          </div>

          <div className="bg-[#edede9] p-4 shadow-md shadow-gray-500 hover:scale-110 duration-500 pt-4">
            <img className="w-10 mx-auto" src={Design} alt="Design icon" />
            <p className="my-4 font-semibold">Design</p>
            <p className="my-4">Brukertesting, Figma, </p>
          </div>

          <div className="bg-[#edede9] p-4 shadow-md shadow-gray-500 hover:scale-110 duration-500 pt-4">
            <img className="w-10 mx-auto" src={Event} alt="Event icon" />
            <p className="my-4 font-semibold">Annet</p>
            <p className="my-4">
              Prosess: Smidig prosess (Scrum), Design Thinking
            </p>
            <p className="my-4">Sertifiseringer: Azure Fundamentals</p>
          </div>
        </div>
        <div className="bg-[#edede9] p-4 shadow-md shadow-gray-500 hover:scale-110 duration-500 pt-4">
          <p className=" font-semibold my-4 ">Arbeidserfaringer</p>
          <p className="font-bold">Summer Intern, Bekk </p>
          <p className="mb-4">
            Jobbet som utvikler på prosjekt hos OBOS med fokus på kart og
            forbedring av brukeropplevelse. Brukte React og Sanity.
          </p>
          <p className=" font-bold">Summer Intern, Schlumberger</p>
          <p className="mb-4">
            Jobbet som utvikler på et prosjekt om Co2-lagring. Brukte C# og
            Angular.
          </p>
          <p className="font-bold">Opplæring, Setpoint AS </p>
          <p className="mb-4">
            Fikk innsyn i hvordan en start-up innenfor AI jobber, og hjalp til
            med mindre kodeoppgaver.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;

//Programmeringsspråk
//Andre skills (Presentation) (kan klikke seg inn på bilder av foredrag og arbeid jeg har gjort)
//Design

//Arrangering
