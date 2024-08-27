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
          UX/UI <strong className="text-[#6AD5CB]">Projects</strong>
        </h1>

        <Image
          className="-mt-40 z-20"
          src="/assets/uxuiupperwave.png"
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
          className="mySwiper -mt-[200px]"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
        <Image
          className="-mt-[150px] z-20"
          src="/assets/uxuimiddlewave.png"
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
          className="mySwiper -mt-[200px]"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
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
