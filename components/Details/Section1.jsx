import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function Section1({ca}) {
  return (
    <main className="self-stretch mt-10 sm:mt-24 px-5 max-md:max-w-full" >
      <section className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <LeftSection ca={ca}/>
        <RightSection ca={ca}/>
      </section>
    </main>
  );
}

export default Section1;
