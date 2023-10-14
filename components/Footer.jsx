import React from "react";

function Footer() {
  return (
    <div>
      <main className="flex flex-col bg-gradient-to-r from-blue-600 to-purple-500 w-full">
        <header className=" self-stretch flex w-full flex-col mt-24 pt-8 pb-10 px-5 max-md:max-w-full">
          <nav className="xl:self-center flex w-full max-w-xl flex-col mb-px max-md:max-w-full">
            <ul className="self-center flex w-full max-w-[1240px] flex-col max-md:max-w-full">
              <li className="self-stretch max-md:max-w-full">
                <ul className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <li className="flex flex-col items-stretch w-[24%] max-md:w-full">
                    <div className="flex flex-col max-md:mt-12">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cc4ac76e-bc15-40af-9a40-0678f2b52bfb?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc4ac76e-bc15-40af-9a40-0678f2b52bfb?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc4ac76e-bc15-40af-9a40-0678f2b52bfb?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc4ac76e-bc15-40af-9a40-0678f2b52bfb?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc4ac76e-bc15-40af-9a40-0678f2b52bfb?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc4ac76e-bc15-40af-9a40-0678f2b52bfb?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc4ac76e-bc15-40af-9a40-0678f2b52bfb?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc4ac76e-bc15-40af-9a40-0678f2b52bfb?apiKey=e74082b80b2042a383841c0a6d125528&"
                        className="aspect-[3.07] object-cover object-center w-[138px] bg-blend-luminosity shrink-0"
                        alt="Partner Search Logo"
                      />
                      <p className="text-white text-sm leading-[157.14%] w-[272px] max-w-full mt-3.5">
                        India's first platform dedicated to simplifying partner
                        search
                      </p>
                    </div>
                  </li>
                  <li className="flex flex-col items-stretch w-[76%] ml-5 max-md:w-full">
                    <ul className="flex w-[865px] max-w-full grow items-start justify-between gap-5 mt-3.5 max-md:flex-wrap max-md:justify-center max-md:mt-12">
                      <li className="flex flex-col">
                        <p className="text-white text-sm font-bold w-[102px] max-w-full">
                          COMPANY
                        </p>
                        <p className="text-white text-base leading-[137.5%] w-[130px] max-w-full mt-5">
                          About
                        </p>
                        <p className="text-white text-base leading-[137.5%] w-[130px] max-w-full mt-5">
                          Pricing
                        </p>
                        <p className="text-white text-base leading-[137.5%] w-[130px] max-w-full mt-4">
                          Careers
                        </p>
                      </li>
                      <li className="flex flex-col">
                        <p className="text-white text-sm font-bold w-[102px] max-w-full">
                          SOLUTIONS
                        </p>
                        <p className="text-white text-base leading-[137.5%] w-[130px] max-w-full mt-5">
                          Search
                        </p>
                        <p className="text-white text-base leading-[137.5%] w-[130px] max-w-full mt-5">
                          Connect
                        </p>
                        <p className="text-white text-base leading-[137.5%] mt-5">
                          Research
                        </p>
                      </li>
                      <li className="flex flex-col">
                        <p className="text-white text-sm font-bold w-[130px] max-w-full">
                          RESOURCES
                        </p>
                        <p className="text-white text-base leading-[137.5%] w-[130px] max-w-full mt-5">
                          Blogs
                        </p>
                        <p className="text-white text-base leading-[137.5%] w-[130px] max-w-full mt-4">
                          Forms
                        </p>
                      </li>
                      <li className="flex flex-col">
                        <p className="text-white text-sm font-bold w-[127px] max-w-full">
                          SUPPORT
                        </p>
                        <p className="text-white text-base leading-[137.5%] w-[130px] max-w-full mt-5">
                          Help
                        </p>
                        <p className="text-white text-base leading-[137.5%] w-[130px] max-w-full mt-4">
                          Contact Us
                        </p>
                      </li>
                      <li className="flex flex-col">
                        <p className="text-white text-sm font-bold w-16 max-w-full">
                          LEGAL
                        </p>
                        <p className="text-white text-base leading-[137.5%] w-[130px] max-w-full mt-5">
                          Privacy
                        </p>
                        <p className="text-white text-base leading-[137.5%] w-[130px] max-w-full mt-4">
                          Terms
                        </p>
                        <p className="text-white text-base leading-[137.5%] w-[130px] max-w-full mt-5">
                          Accessibility
                        </p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <p className="text-white text-base leading-[137.5%] self-center ml-0 mt-4">
            Academy
          </p>
        </header>
        <section className="self-center flex w-full max-w-screen-xl grow flex-col mt-8 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/923fb497-3d8e-4f55-a3ab-271b43eed2cd?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/923fb497-3d8e-4f55-a3ab-271b43eed2cd?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/923fb497-3d8e-4f55-a3ab-271b43eed2cd?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/923fb497-3d8e-4f55-a3ab-271b43eed2cd?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/923fb497-3d8e-4f55-a3ab-271b43eed2cd?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/923fb497-3d8e-4f55-a3ab-271b43eed2cd?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/923fb497-3d8e-4f55-a3ab-271b43eed2cd?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/923fb497-3d8e-4f55-a3ab-271b43eed2cd?apiKey=e74082b80b2042a383841c0a6d125528&"
            className="aspect-[1280] object-cover object-center w-full border self-center border-solid border-white max-md:max-w-full"
            alt="Partner Search Image"
          />
          <div className="self-center flex w-full items-start justify-between gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
            <p className="text-white text-sm leading-[157.14%] self-center max-w-[732px] grow shrink-0 basis-auto my-auto max-md:max-w-full">
              Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
              Maharashtra
            </p>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/842bd919-f4a2-48d2-8e45-e81a7538fd85?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/842bd919-f4a2-48d2-8e45-e81a7538fd85?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/842bd919-f4a2-48d2-8e45-e81a7538fd85?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/842bd919-f4a2-48d2-8e45-e81a7538fd85?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/842bd919-f4a2-48d2-8e45-e81a7538fd85?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/842bd919-f4a2-48d2-8e45-e81a7538fd85?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/842bd919-f4a2-48d2-8e45-e81a7538fd85?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/842bd919-f4a2-48d2-8e45-e81a7538fd85?apiKey=e74082b80b2042a383841c0a6d125528&"
              className="aspect-[7] object-cover object-center w-[168px] shrink-0"
              alt="Partner Search Logo"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Footer;
