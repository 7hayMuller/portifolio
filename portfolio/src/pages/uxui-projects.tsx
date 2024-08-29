"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Navbar from "./components/NavBar";

import "swiper/css";
import "swiper/css/pagination";

const FrontEndProjects = () => {
  return (
    <>
      <Navbar extern section="section3" />
      <div className="flex flex-col mt-[100px] items-center justify-center">
        <div className="flex flex-col w-[600px] justify-center items-center">
          <h1 className="text-[#e2e8c0] text-4xl sm:text-5xl lg:text-6xl font-bold text-center">
            UX/UI <strong className="text-[#6AD5CB]">Projects</strong>
          </h1>
          <p className="text-[#e2e8c0] text-xl sm:text-2xl lg:text-xl text-center mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <Image
          className="-mt-[200px] -z-20"
          src="/assets/uxuiupperwave.png"
          width={2000}
          height={500}
          alt="Picture of the author"
        />

        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          className="mySwiper -mt-[50px]"
        >
          <SwiperSlide className="swiper-upper-left"></SwiperSlide>
          <SwiperSlide className="swiper-upper-right"></SwiperSlide>
        </Swiper>
        <Image
          className="absolute -mt-[90px] left-0 z-20"
          src="/assets/uxuimiddlewave.png"
          width={1000}
          height={500}
          alt="Picture of the author"
        />
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          className="mySwiper mt-[40px]"
        >
          <SwiperSlide className="swiper-bottom-left"></SwiperSlide>
          <SwiperSlide className="swiper-bottom-right"></SwiperSlide>
        </Swiper>
        <Image
          className="-mt-[200px] z-20"
          src="/assets/uxuibottomwave.png"
          width={2000}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <div className="flex justify-center mt-10">
        <p className="text-[12px] text-[#e2e8c0] font-bold mb-3">
          Made by me with 💛
        </p>
      </div>
    </>
  );
};

export default FrontEndProjects;
