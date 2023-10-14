"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function FindPartners() {
  const router = useRouter();
  const [searchQuery, setsearchQuery] = useState(null);
  const handleChange = (e) => {
    setsearchQuery(e.target.value);
  };

  return (
    <div
      className=""
      style={{
        background:
          "linear-gradient(75deg, #FEDDEE 20%, #FCF6FC 31.77%, #C5EAED 64.58%, #FDDDFE 100%)",
      }}
    >
      <section
        
        className="self-center w-full flex justify-between items-center pt-10 sm:pt-20 max-md:max-w-full"
      >
        <div className="gap-5 flex max-md:flex-col md:p-8 md:px-[8rem] max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-full max-md:w-full">
            <div className="flex flex-col w-full my-auto max-md:max-w-full max-md:mt-12">
              <h1 className="text-black text-6xl font-bold leading-[80px] bg-clip-text self-stretch w-full max-md:text-4xl">
                <span className="text-black">Find </span>Partners{" "}
                <span className="text-black"> (CAs) available online</span>
              </h1>
              <p className="text-zinc-600 text-xl leading-8 self-stretch mr-1.5 mt-8 max-md:max-w-full">
                <span className="font-bold">CONNECT </span>
                <span className="">
                  with us where your services are listed and visible to a myriad
                  of businesses seeking CAs for compliance support
                </span>
              </p>
              <div className="flex items-center justify-between bg-white  rounded-md shadow-md">
                <input
                  type="text"
                  placeholder="Search by name"
                  onChange={handleChange}
                  className="border-none  focus:outline-none px-4 py-4psm:y-6 rounded-md w-64"
                />

                <button
                  type="button"
                  className="bg-blue-500 text-white px-8 py-4 sm:py-6 rounded-md hover:bg-blue-600 focus:outline-none"
                  onClick={() => {
                    searchQuery != null &&
                      router.push(`/SearchResults/${encodeURIComponent(searchQuery)}`);
                  }}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex flex-col items-stretch w-full ml-0 max-md:w-full hidden">
            <div className="grow max-md:max-w-full max-md:mt-12">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[32%] max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/03d76ea0-ff91-485c-9fde-8feb8ca39562?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/03d76ea0-ff91-485c-9fde-8feb8ca39562?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/03d76ea0-ff91-485c-9fde-8feb8ca39562?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/03d76ea0-ff91-485c-9fde-8feb8ca39562?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/03d76ea0-ff91-485c-9fde-8feb8ca39562?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/03d76ea0-ff91-485c-9fde-8feb8ca39562?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/03d76ea0-ff91-485c-9fde-8feb8ca39562?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/03d76ea0-ff91-485c-9fde-8feb8ca39562?apiKey=e74082b80b2042a383841c0a6d125528&"
                    className="aspect-[0.49] object-cover object-center w-[199] shrink-0 mt-20 rounded-3xl max-md:mt-12"
                    alt="Image"
                  />
                </div>
                <div className="flex flex-col items-stretch w-[68%] ml-5 max-md:w-full">
                  <div className="max-md:mt-4">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-6/12 max-md:w-full">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/453bc50b-f28b-404e-9a97-c0ce95fbaf30?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/453bc50b-f28b-404e-9a97-c0ce95fbaf30?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/453bc50b-f28b-404e-9a97-c0ce95fbaf30?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/453bc50b-f28b-404e-9a97-c0ce95fbaf30?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/453bc50b-f28b-404e-9a97-c0ce95fbaf30?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/453bc50b-f28b-404e-9a97-c0ce95fbaf30?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/453bc50b-f28b-404e-9a97-c0ce95fbaf30?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/453bc50b-f28b-404e-9a97-c0ce95fbaf30?apiKey=e74082b80b2042a383841c0a6d125528&"
                          className="aspect-[0.49] object-cover object-center w-[198px] shrink-0 rounded-3xl max-md:mt-4"
                          alt="Image"
                        />
                      </div>
                      <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f5827a98-1b74-413a-a266-d55855ba8dd1?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5827a98-1b74-413a-a266-d55855ba8dd1?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5827a98-1b74-413a-a266-d55855ba8dd1?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5827a98-1b74-413a-a266-d55855ba8dd1?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5827a98-1b74-413a-a266-d55855ba8dd1?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5827a98-1b74-413a-a266-d55855ba8dd1?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5827a98-1b74-413a-a266-d55855ba8dd1?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5827a98-1b74-413a-a266-d55855ba8dd1?apiKey=e74082b80b2042a383841c0a6d125528&"
                          className="aspect-[0.49] object-cover object-center w-[199px] shrink-0 mt-11 rounded-3xl max-md:mt-12"
                          alt="Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FindPartners;
