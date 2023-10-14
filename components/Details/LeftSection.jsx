import React from "react";

function LeftSection({ ca }) {
  return (
    <div className="h-fit flex flex-col items-stretch w-[41%] max-md:w-full">
      <div className="flex flex-col mt-5 max-md:max-w-full max-md:mt-12">
        <h1 className="text-black text-4xl font-bold">{ca.name}</h1>
        <p className="text-black text-xl leading-[160%] w-[515px] max-w-full mt-7">
          {ca.intro}
        </p>
        <div className="flex w-[109px] max-w-full items-start gap-2 mt-10">
          <img
            loading="lazy"
            srcSet={ca.image}
            className="aspect-square object-cover object-center w-6 shrink-0"
            alt="Rating Icon"
          />
          <div className="text-black text-xl self-stretch">
            <span className="font-bold text-[rgba(0,118,206,1)]">4.8 </span>
            <span className=" text-black">(89)</span>
          </div>
        </div>
        <div className="shadow-[2px_4px_15px_0px_rgba(133,133,167,0.25)] bg-white flex w-[515px] max-w-full flex-col mt-9 pt-9 pb-6 px-5 rounded-3xl">
          <div className="flex w-[465px] max-w-full items-start justify-between sm:gap-5 sm:ml-2 ">
            <div className="text-black text-[18px] sm:text-xl leading-[160%] max-w-[323px] grow shrink-0 basis-auto">
              {ca.taskComplexity}
            </div>
            <div className="text-black text-right text-xl sm:text-2xl font-bold w-[201px]">
              {ca.price}
            </div>
          </div>
          <div className="flex w-[319px] max-w-full items-center justify-center  gap-2.5 sm:ml-2 mt-4 sm:mt-10">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/51aada0d-200e-4cdd-b6e4-c06b3e269dcf?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/51aada0d-200e-4cdd-b6e4-c06b3e269dcf?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/51aada0d-200e-4cdd-b6e4-c06b3e269dcf?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/51aada0d-200e-4cdd-b6e4-c06b3e269dcf?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/51aada0d-200e-4cdd-b6e4-c06b3e269dcf?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/51aada0d-200e-4cdd-b6e4-c06b3e269dcf?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/51aada0d-200e-4cdd-b6e4-c06b3e269dcf?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/51aada0d-200e-4cdd-b6e4-c06b3e269dcf?apiKey=e74082b80b2042a383841c0a6d125528&"
              className="aspect-square object-cover object-center w-6 shrink-0"
              alt="Clock Icon"
            />
            <div className="text-black text-xl leading-[160%] grow shrink-0 basis-auto">
              {ca.deliveryTime}
            </div>
          </div>
          <div className="flex w-[465px] max-w-full items-start justify-between gap-5 sm:ml-2 mt-7 max-md:flex-wrap">
            <div className="justify-center items-center bg-sky-600 self-stretch flex w-[220px] max-w-full flex-col sm:px-5 py-2.5 rounded-xl">
              <div className="text-white text-center text-base font-bold leading-[162.5%] self-center">
                Request Proposal
              </div>
            </div>
            <div className="justify-center items-center border-[color:var(--roc-primary,#0076CE)] self-stretch flex w-[220px] max-w-full flex-col sm:px-5 py-2.5 rounded-xl border-[1.5px] border-solid">
              <div className="text-sky-600 text-center text-base font-bold leading-[162.5%] self-center">
                Chat with me
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-[2px_4px_15px_0px_rgba(133,133,167,0.25)] bg-white flex w-[515px] max-w-full grow flex-col mt-8 pt-10 pb-6 px-5 rounded-3xl ">
        <h2 className="text-black text-2xl sm:text-4xl font-bold w-[463px] max-w-full ml-2.5 mt-px">
          What people say?
        </h2>
        <p className="text-black text-lg sm:text-xl leading-[160%] self-stretch w-full ml-2.5 mr-1 mt-4">
          I cannot express enough gratitude for the support Micheal has provided
          in managing my personal finances. Their attention to detail and deep
          understanding of financial markets has ensured that my investments are
          in safe hands. I highly recommend their services to anyone seeking
          financial guidance.
        </p>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/91de9299-d93d-4916-8c6b-9f7e7e041c9c?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/91de9299-d93d-4916-8c6b-9f7e7e041c9c?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91de9299-d93d-4916-8c6b-9f7e7e041c9c?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/91de9299-d93d-4916-8c6b-9f7e7e041c9c?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/91de9299-d93d-4916-8c6b-9f7e7e041c9c?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91de9299-d93d-4916-8c6b-9f7e7e041c9c?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/91de9299-d93d-4916-8c6b-9f7e7e041c9c?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/91de9299-d93d-4916-8c6b-9f7e7e041c9c?apiKey=e74082b80b2042a383841c0a6d125528&"
          className="aspect-[8.6] object-cover object-center w-[86px] self-center shrink-0 mt-16 rounded-none"
          alt="Person"
        />
      </div>
    </div>
  );
}

export default LeftSection;
