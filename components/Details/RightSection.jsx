import React from "react";

function RightSection({ ca }) {
  return (
    <div className="flex flex-col items-stretch w-[59%] ml-2 sm:ml-5 max-md:w-full">
      <div className="flex grow flex-col max-md:max-w-full max-md:mt-8">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ffee836d-7893-468c-8241-c89014bc68aa?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffee836d-7893-468c-8241-c89014bc68aa?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffee836d-7893-468c-8241-c89014bc68aa?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffee836d-7893-468c-8241-c89014bc68aa?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffee836d-7893-468c-8241-c89014bc68aa?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffee836d-7893-468c-8241-c89014bc68aa?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffee836d-7893-468c-8241-c89014bc68aa?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffee836d-7893-468c-8241-c89014bc68aa?apiKey=e74082b80b2042a383841c0a6d125528&"
          className="hidden w-[94%] sm:block aspect-[1.78] object-cover object-center rounded-none max-md:max-w-full"
          alt="Image"
        />
        <h1 className="text-black text-2xl sm:text-4xl font-bold w-[733px] max-w-full mt-11">
          About {ca.name}
        </h1>
        <div className="flex w-[638px] flex-wrap xl:flex-nowrap  max-w-full items-start justify-between sm:gap-5 mt-6 sm:mt-12 max-md:flex-wrap ">
          <div className="self-stretch flex flex-col">
            <h2 className="text-neutral-400 text-base font-bold leading-[212.5%] w-[186px] max-w-full">
              FROM
            </h2>
            <p className="text-black text-xl leading-[170%] w-[186px] max-w-full mt-4">
              {ca.about.from}
            </p>
          </div>
          <div className="self-stretch flex flex-col">
            <h2 className="text-neutral-400 text-base font-bold leading-[212.5%] w-[187px] max-w-full">
              PARTNER SINCE
            </h2>
            <p className="text-black text-xl leading-[170%] w-[187px] max-w-full mt-3.5">
              {ca.about.partnerSince}
            </p>
          </div>
          <div className="self-stretch flex flex-col">
            <h2 className="text-neutral-400 text-base font-bold leading-[212.5%] w-[296px] max-w-full">
              AVERAGE RESPONSE TIME
            </h2>
            <p className="text-black text-xl leading-[170%] w-[296px] max-w-full mt-3.5">
              {ca.about.averageResponseTime}
            </p>
          </div>
        </div>
        <h2 className="text-neutral-400 text-base font-bold leading-[212.5%] w-[733px] max-w-full mt-9">
          ABOUT
        </h2>
        <p className="text-black text-xl leading-[170%] md:max-w-[24rem] w-[733px] xl:max-w-full max-w-full mt-3.5">
          {ca.about.description}
        </p>
        <div className="w-[683px] max-w-full sm:mt-12">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[58%] max-md:w-full">
              <div className="flex grow flex-col mt-px max-md:mt-12">
                <h2 className="text-neutral-400 text-base font-bold leading-[212.5%] w-[733px] max-w-full">
                  SERVICES I OFFER
                </h2>
                <ul className="text-black text-xl leading-[180%] w-[405px] max-w-full mt-3.5">
                  {ca.about["services"].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[42%] sm:ml-5 max-md:w-full">
              <div className="flex flex-col max-md:mt-12">
                <h2 className="text-neutral-400 text-base font-bold leading-[212.5%] w-[296px] max-w-full">
                  WHY ME?
                </h2>
                <ul className="text-black text-xl leading-[170%] w-[296px] max-w-full mt-3.5">
                  {ca.about["benefits"].map((item,index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
