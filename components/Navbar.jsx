"use client";
import { useRouter } from "next/navigation";
import * as React from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <nav
      className="flex flex-col"
      style={
        pathname === "/"
          ? {
              background:
                "linear-gradient(75deg, #FEDDEE 20%, #FCF6FC 31.77%, #C5EAED 64.58%, #FDDDFE 100%)",
            }
          : {}
      }
    >
      <section className="self-center flex w-full max-w-[1281px] items-start justify-between gap-5  mt-5 px-1 max-md:max-w-full md:flex-wrap">
        <section className="self-stretch flex lg:w-[661px] max-w-full items-start justify-between gap-5 mt-px max-md:flex-wrap max-md:justify-center">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d11047ea-c569-4c04-8c55-1040914b680d?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d11047ea-c569-4c04-8c55-1040914b680d?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d11047ea-c569-4c04-8c55-1040914b680d?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d11047ea-c569-4c04-8c55-1040914b680d?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d11047ea-c569-4c04-8c55-1040914b680d?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d11047ea-c569-4c04-8c55-1040914b680d?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d11047ea-c569-4c04-8c55-1040914b680d?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d11047ea-c569-4c04-8c55-1040914b680d?apiKey=e74082b80b2042a383841c0a6d125528&"
            className="cursor-pointer aspect-[3.07] object-cover object-center w-[138px] shrink-0"
            onClick={() => {
              router.push("/");
            }}
          />
          <div className="items-start self-center hidden md:flex  my-auto">
            <h1 className="text-black text-lg font-bold">Solutions</h1>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4d9c8d15-476a-4220-b1c7-a3f657b82ba9?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d9c8d15-476a-4220-b1c7-a3f657b82ba9?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d9c8d15-476a-4220-b1c7-a3f657b82ba9?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d9c8d15-476a-4220-b1c7-a3f657b82ba9?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d9c8d15-476a-4220-b1c7-a3f657b82ba9?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d9c8d15-476a-4220-b1c7-a3f657b82ba9?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d9c8d15-476a-4220-b1c7-a3f657b82ba9?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d9c8d15-476a-4220-b1c7-a3f657b82ba9?apiKey=e74082b80b2042a383841c0a6d125528&"
              className="aspect-square object-cover object-center w-6 shrink-0 mt-px"
            />
          </div>
          <div className="items-start self-center hidden md:flex  my-auto">
            <h1 className="text-black text-lg font-bold">Features</h1>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/498a89e3-b0e3-4c78-94a2-17884f9d36cd?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/498a89e3-b0e3-4c78-94a2-17884f9d36cd?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/498a89e3-b0e3-4c78-94a2-17884f9d36cd?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/498a89e3-b0e3-4c78-94a2-17884f9d36cd?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/498a89e3-b0e3-4c78-94a2-17884f9d36cd?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/498a89e3-b0e3-4c78-94a2-17884f9d36cd?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/498a89e3-b0e3-4c78-94a2-17884f9d36cd?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/498a89e3-b0e3-4c78-94a2-17884f9d36cd?apiKey=e74082b80b2042a383841c0a6d125528&"
              className="aspect-square object-cover object-center w-6 shrink-0 mt-px"
            />
          </div>
          <h1 className="text-black hidden md:block text-lg font-bold leading-[166.67%] self-center my-auto">
            Blogs
          </h1>
          <div className="items-start self-center hidden md:flex  my-auto">
            <h1 className="text-black text-lg font-bold">About</h1>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3d07f09a-b135-4118-bbea-e3d3e2de2b6b?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d07f09a-b135-4118-bbea-e3d3e2de2b6b?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d07f09a-b135-4118-bbea-e3d3e2de2b6b?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d07f09a-b135-4118-bbea-e3d3e2de2b6b?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d07f09a-b135-4118-bbea-e3d3e2de2b6b?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d07f09a-b135-4118-bbea-e3d3e2de2b6b?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d07f09a-b135-4118-bbea-e3d3e2de2b6b?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d07f09a-b135-4118-bbea-e3d3e2de2b6b?apiKey=e74082b80b2042a383841c0a6d125528&"
              className="aspect-square object-cover object-center w-6 shrink-0 mt-px"
            />
          </div>
        </section>
        <section className="self-stretch flex items-start justify-between gap-4">
          <div className="justify-center items-center self-stretch flex w-[100px] max-w-full flex-col px-5 py-2.5 rounded-xl border-[1.5px] border-solid border-sky-600">
            <h2 className="text-sky-600 text-center text-base font-bold leading-[162.5%] self-center">
              Login
            </h2>
          </div>
          <a
            href="#"
            className="text-white text-center text-base font-bold leading-[162.5%] self-stretch justify-center items-center bg-sky-600 w-[100px] max-w-full px-4 py-2.5 rounded-xl"
          >
            Register
          </a>
        </section>
      </section>
    </nav>
  );
}
