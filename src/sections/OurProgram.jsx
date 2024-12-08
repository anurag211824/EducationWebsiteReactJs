import React from "react";
import SectionHeading from "../components/SectionHeading";
import { programImages } from "../constants/index";
const OurProgram = () => {
  return (
    <div>
      <SectionHeading heading={"Our Program"} subHeading={"What we offer"} />
      <div className="flex flex-col items-center gap-10 sm:flex-row sm:gap-7">
        {programImages.map((program) => (
          <div key={program.id}>
            <img src={program.url} alt="" className="h-[300px] w-[300px] rounded-lg sm:w-[500px] sm:h-[450px] md:h-[200px] md-w-[200px] lg:h-[400px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProgram;