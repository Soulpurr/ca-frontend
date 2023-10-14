import Section1 from "@/components/Details/Section1";
import Reccomend from "@/components/Details/Reccomend";
import React from "react";

export default async function page({ params }) {
  const data = await getData(params.slug);
  const ca = data.find((data) => data.id == params.slug);

  return (
    <div className="bg-gray-50 flex flex-col">
      <Section1 ca={ca} />
      <Reccomend ca={ca} />
    </div>
  );
}

async function getData(searchQuery) {
  const res = await fetch(`https://json-puvy.onrender.com/details`);
  return res.json();
}
