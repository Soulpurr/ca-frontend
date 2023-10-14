"use client";
import FindPartners from "@/components/Landing/FindPartners";

import Cards from "@/components/Landing/Cards";
import Section3 from "@/components/Landing/Section3";


export default function Home() {
  return (
    <div className="">
      <FindPartners />
      <Cards />
      <Section3 />
    </div>
  );
}
