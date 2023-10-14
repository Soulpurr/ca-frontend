import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";
export default async function page({ params }) {
  let found = true;
  const res = await getData();
  let data = res.filter(
    (item) => item.name === decodeURIComponent(params.Slug)
  );
  if (data.length == 0) {
    found = false;

    data = res;
  }

  return (
    <div className="">
      {found == true && (
        <div className="text-center text-green-500 text-bold text-xl sm:text-4xl">
          Results for your query
        </div>
      )}
      {found == false && (
        <div className="text-center text-red-500 text-bold text-xl sm:text-4xl">
          No results for your query,Showing all data
        </div>
      )}
      <div className="justify-center flex flex-wrap gap-6">
        {data.map((item, index) => (
          <Link
            key={index}
            className="max-w-md w-full bg-gray-100 p-8 rounded-md shadow-md cursor-pointer"
            href={`/CA/${item.id}`}
          >
            {/* Image */}
            <img
              src={item.image}
              alt="Card Image"
              className="w-full h-48 object-cover mb-4 rounded-md"
            />

            {/* Headings */}
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {item?.name}
            </h2>
            <p className="text-md text-gray-600 mb-4">{item?.intro}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

async function getData() {
  try {
    const res = await fetch(`https://json-puvy.onrender.com/details`);
    return res.json();
  } catch (error) {
    return error;
  }
}
