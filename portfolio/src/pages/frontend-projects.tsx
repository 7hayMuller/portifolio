"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Navbar from "./components/NavBar";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const FrontEndProjects = () => {
  return (
    <>
      <Navbar extern section="section2" />
      <div className="flex flex-col mt-[100px] items-center justify-center">
        <h1 className="text-[#e2e8c0] text-4xl sm:text-5xl lg:text-6xl font-bold text-center">
          Frontend <strong className="text-[#be1d90]">Projects</strong>
        </h1>

        <Image
          className="-mt-20 -z-20"
          src="/assets/frontupperwave.png"
          width={2000}
          height={500}
          alt="Picture of the author"
        />

        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper -mt-[50px]"
        >
          <SwiperSlide className="w-[80%]"></SwiperSlide>
          <SwiperSlide className="w-[20%]"></SwiperSlide>
        </Swiper>
        <Image
          className="absolute -mt-[250px] right-0 z-20"
          src="/assets/frontmiddlewave.png"
          width={1000}
          height={500}
          alt="Picture of the author"
        />
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mt-[20px] "
        >
          <SwiperSlide className="w-[20%]"></SwiperSlide>
          <SwiperSlide className="w-[80%]"></SwiperSlide>
        </Swiper>
        <Image
          className="-mt-[100px] z-20"
          src="/assets/frontbottomwave.png"
          width={2000}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <div className="flex justify-center mt-10">
        <p className="text-[12px] text-[#e2e8c0] font-bold mb-3">
          Made by me with 🩷
        </p>
      </div>
    </>
  );
};

export default FrontEndProjects;
