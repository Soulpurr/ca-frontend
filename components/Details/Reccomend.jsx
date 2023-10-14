import React from "react";

function Reccomend() {
  return (
    <section className="self-center flex w-full max-w-[1279px] flex-col mt-10 sm:mt-40 px-5 max-md:max-w-full">
      <h1 className="text-black text-2xl sm:text-4xl font-bold w-[733px] max-w-full">
        Recommended for you
      </h1>
      <div className="self-center w-full -ml-5 mt-4 sm:mt-9 max-md:max-w-full">
        <div className="gap-5 flex flex-col sm:flex-wrap md:flex-nowrap md:flex-row  max-md:items-stretch max-md:gap-0 j">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full">
            <div className="shadow-[2px_4px_15px_0px_rgba(133,133,167,0.25)] bg-white flex w-[405px] max-w-full  flex-col sm:mx-auto pb-5 rounded-3xl max-md:mt-8">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b43d6836-871d-4c57-8a5f-6f5bb79fda1a?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b43d6836-871d-4c57-8a5f-6f5bb79fda1a?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b43d6836-871d-4c57-8a5f-6f5bb79fda1a?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b43d6836-871d-4c57-8a5f-6f5bb79fda1a?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b43d6836-871d-4c57-8a5f-6f5bb79fda1a?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b43d6836-871d-4c57-8a5f-6f5bb79fda1a?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b43d6836-871d-4c57-8a5f-6f5bb79fda1a?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b43d6836-871d-4c57-8a5f-6f5bb79fda1a?apiKey=e74082b80b2042a383841c0a6d125528&"
                className="aspect-[1.66] object-cover object-center w-full self-stretch rounded-3xl"
                alt="Image"
              />
              <div className="self-center flex w-[365px] max-w-full items-start justify-between gap-5 mt-6">
                <h2 className="text-black text-xl font-bold max-w-[323px] grow shrink-0 basis-auto">
                  Michael Jackson
                </h2>
                <div className="text-black text-right text-xl font-bold mt-px">
                  ₹4,370
                </div>
              </div>
              <p className="text-black text-base self-center w-[365px] max-w-full mt-4">
                I will do business evaluation and corporate services
              </p>
              <div className="flex w-[90px] max-w-full items-start gap-1.5 ml-5 mt-5 max-md:ml-2.5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9a68d3ad-0b46-41e0-98b7-084693a7b1d1?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a68d3ad-0b46-41e0-98b7-084693a7b1d1?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a68d3ad-0b46-41e0-98b7-084693a7b1d1?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a68d3ad-0b46-41e0-98b7-084693a7b1d1?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a68d3ad-0b46-41e0-98b7-084693a7b1d1?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a68d3ad-0b46-41e0-98b7-084693a7b1d1?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a68d3ad-0b46-41e0-98b7-084693a7b1d1?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a68d3ad-0b46-41e0-98b7-084693a7b1d1?apiKey=e74082b80b2042a383841c0a6d125528&"
                  className="aspect-square object-cover object-center w-6 shrink-0"
                  alt="Rating Icon"
                />
                <div className="text-black text-base self-center my-auto">
                  <span className="font-bold text-[rgba(0,118,206,1)]">
                    4.8{" "}
                  </span>
                  <span className=" text-black">(89)</span>
                </div>
              </div>
              <div className="justify-center items-center bg-sky-600 self-center flex w-[365px] max-w-full flex-col mt-8 px-5 py-2.5 rounded-xl">
                <div className="text-white text-center text-base font-bold leading-[162.5%] self-center">
                  View services
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full">
            <div className="shadow-[2px_4px_15px_0px_rgba(133,133,167,0.25)] bg-white flex w-[405px] max-w-full  flex-col sm:mx-auto pb-5 rounded-3xl max-md:mt-8">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b43d6836-871d-4c57-8a5f-6f5bb79fda1a?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b43d6836-871d-4c57-8a5f-6f5bb79fda1a?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b43d6836-871d-4c57-8a5f-6f5bb79fda1a?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b43d6836-871d-4c57-8a5f-6f5bb79fda1a?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b43d6836-871d-4c57-8a5f-6f5bb79fda1a?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b43d6836-871d-4c57-8a5f-6f5bb79fda1a?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b43d6836-871d-4c57-8a5f-6f5bb79fda1a?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b43d6836-871d-4c57-8a5f-6f5bb79fda1a?apiKey=e74082b80b2042a383841c0a6d125528&"
                className="aspect-[1.66] object-cover object-center w-full self-stretch rounded-3xl"
                alt="Image"
              />
              <div className="self-center flex w-[365px] max-w-full items-start justify-between gap-5 mt-6">
                <h2 className="text-black text-xl font-bold max-w-[323px] grow shrink-0 basis-auto">
                  Michael Jackson
                </h2>
                <div className="text-black text-right text-xl font-bold mt-px">
                  ₹4,370
                </div>
              </div>
              <p className="text-black text-base self-center w-[365px] max-w-full mt-4">
                I will do business evaluation and corporate services
              </p>
              <div className="flex w-[90px] max-w-full items-start gap-1.5 ml-5 mt-5 max-md:ml-2.5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9a68d3ad-0b46-41e0-98b7-084693a7b1d1?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a68d3ad-0b46-41e0-98b7-084693a7b1d1?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a68d3ad-0b46-41e0-98b7-084693a7b1d1?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a68d3ad-0b46-41e0-98b7-084693a7b1d1?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a68d3ad-0b46-41e0-98b7-084693a7b1d1?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a68d3ad-0b46-41e0-98b7-084693a7b1d1?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a68d3ad-0b46-41e0-98b7-084693a7b1d1?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a68d3ad-0b46-41e0-98b7-084693a7b1d1?apiKey=e74082b80b2042a383841c0a6d125528&"
                  className="aspect-square object-cover object-center w-6 shrink-0"
                  alt="Rating Icon"
                />
                <div className="text-black text-base self-center my-auto">
                  <span className="font-bold text-[rgba(0,118,206,1)]">
                    4.8{" "}
                  </span>
                  <span className=" text-black">(89)</span>
                </div>
              </div>
              <div className="justify-center items-center bg-sky-600 self-center flex w-[365px] max-w-full flex-col mt-8 px-5 py-2.5 rounded-xl">
                <div className="text-white text-center text-base font-bold leading-[162.5%] self-center">
                  View services
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full">
            <div className="shadow-[2px_4px_15px_0px_rgba(133,133,167,0.25)] bg-white flex w-[405px] max-w-full  flex-col sm:mx-auto pb-5 rounded-3xl max-md:mt-8">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b43d6836-871d-4c57-8a5f-6f5bb79fda1a?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b43d6836-871d-4c57-8a5f-6f5bb79fda1a?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b43d6836-871d-4c57-8a5f-6f5bb79fda1a?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b43d6836-871d-4c57-8a5f-6f5bb79fda1a?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b43d6836-871d-4c57-8a5f-6f5bb79fda1a?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b43d6836-871d-4c57-8a5f-6f5bb79fda1a?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b43d6836-871d-4c57-8a5f-6f5bb79fda1a?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b43d6836-871d-4c57-8a5f-6f5bb79fda1a?apiKey=e74082b80b2042a383841c0a6d125528&"
                className="aspect-[1.66] object-cover object-center w-full self-stretch rounded-3xl"
                alt="Image"
              />
              <div className="self-center flex w-[365px] max-w-full items-start justify-between gap-5 mt-6">
                <h2 className="text-black text-xl font-bold max-w-[323px] grow shrink-0 basis-auto">
                  Michael Jackson
                </h2>
                <div className="text-black text-right text-xl font-bold mt-px">
                  ₹4,370
                </div>
              </div>
              <p className="text-black text-base self-center w-[365px] max-w-full mt-4">
                I will do business evaluation and corporate services
              </p>
              <div className="flex w-[90px] max-w-full items-start gap-1.5 ml-5 mt-5 max-md:ml-2.5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9a68d3ad-0b46-41e0-98b7-084693a7b1d1?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a68d3ad-0b46-41e0-98b7-084693a7b1d1?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a68d3ad-0b46-41e0-98b7-084693a7b1d1?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a68d3ad-0b46-41e0-98b7-084693a7b1d1?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a68d3ad-0b46-41e0-98b7-084693a7b1d1?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a68d3ad-0b46-41e0-98b7-084693a7b1d1?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a68d3ad-0b46-41e0-98b7-084693a7b1d1?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a68d3ad-0b46-41e0-98b7-084693a7b1d1?apiKey=e74082b80b2042a383841c0a6d125528&"
                  className="aspect-square object-cover object-center w-6 shrink-0"
                  alt="Rating Icon"
                />
                <div className="text-black text-base self-center my-auto">
                  <span className="font-bold text-[rgba(0,118,206,1)]">
                    4.8{" "}
                  </span>
                  <span className=" text-black">(89)</span>
                </div>
              </div>
              <div className="justify-center items-center bg-sky-600 self-center flex w-[365px] max-w-full flex-col mt-8 px-5 py-2.5 rounded-xl">
                <div className="text-white text-center text-base font-bold leading-[162.5%] self-center">
                  View services
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reccomend;
