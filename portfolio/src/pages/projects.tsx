"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Navbar from "./components/NavBar";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const MyProjects = () => {
  return (
    <>
      <Navbar extern section="section2" />
      <div className="flex flex-col mt-[50px] md:mt-[100px] items-center justify-center">
        <div className="flex flex-col w-[90%] sm:w-[600px] justify-center items-center">
          <div className="flex flex-col justify-between text-[#e2e8c0] text-3xl sm:text-4xl lg:text-5xl font-bold text-center sm:text-left">
            <h1 className="flex justify-center sm:justify-start">
              Front<div className="text-[#be1d90]">en</div>d{" "}
              <div className="ml-2 bg-clip-text text-transparent bg-e-gradient">
                &
              </div>
            </h1>
            <div className="flex justify-center sm:justify-start sm:ml-[50px]">
              <h1 className="mr-2">UX/UI</h1>
              <h1 className="flex">
                proje<div className="text-[#6AD5CB]">ct</div>s
              </h1>
            </div>
          </div>
          <p className="text-[#e2e8c0] text-lg sm:text-xl lg:text-xl text-center mt-6 sm:mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <Image
          className="-mt-[100px] sm:-mt-[150px] md:-mt-[300px] -z-20"
          src="/assets/frontupperwave.png"
          width={2000}
          height={500}
          alt="Picture of the author"
        />

        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          modules={[Pagination]}
          autoplay
          className="mySwiper -mt-[10px] sm:-mt-[30px]"
        >
          <SwiperSlide className="swiper-upper-left w-full h-[100vh] flex flex-col justify-start md:justify-between items-center px-4 py-8">
            <p className="text-3xl sm:text-4xl text-[#e2e8c0] font-[700] text-center">
              waves
            </p>
            <div className="flex flex-wrap justify-evenly w-full mt-0 md:mt-4">
              <Image
                src="/assets/waves.png"
                alt="waves"
                width={243}
                height={150}
                className="w-[100px] sm:w-[150px] md:w-[200px] lg:w-[243px] h-auto sm:h-[150px]"
              />
              <Image
                src="/assets/waves_library.png"
                alt="waves"
                width={243}
                height={150}
                className="w-[100px] sm:w-[150px] md:w-[200px] lg:w-[243px] h-auto sm:h-[150px]"
              />
              <Image
                src="/assets/waves_mobile.png"
                alt="waves"
                width={116}
                height={184}
                className="w-[50px] sm:w-[75px] md:w-[100px] lg:w-[116px] h-auto sm:h-[180px]"
              />
              <Image
                src="/assets/waves_mobile_portrait.png"
                alt="waves"
                width={89}
                height={175}
                className="w-[40px] sm:w-[60px] md:w-[75px] lg:w-[89px] h-auto sm:h-[165px]"
              />
            </div>
            <div className="flex flex-wrap justify-evenly w-full text-[#e2e8c0] font-[300] mt-4 md:mt-0">
              <p className="w-full sm:w-[350px] text-center md:text-left mt-4">
                A sleek music player built with Next.js and SASS, featuring
                seamless integration with the Jamendo API to stream free music
                effortlessly.
              </p>
              <div className="flex flex-col mt-4">
                <p>Technologies utilized:</p>
                <div className="flex mt-2 sm:mt-6">
                  <Image
                    src="/assets/nextjs.svg"
                    width={30}
                    height={30}
                    alt="nextjs"
                    className="mr-4"
                  />
                  <Image
                    src="/assets/sass.svg"
                    width={30}
                    height={30}
                    alt="sass"
                  />
                </div>
              </div>
              <div className="flex flex-col mt-4">
                <p>Prototype link:</p>
                <Image
                  src="/assets/figma.svg"
                  width={20}
                  height={20}
                  alt="figma"
                  className="mt-2 sm:mt-5"
                />
              </div>
              <div className="flex flex-col mt-4">
                <p>Code link:</p>
                <Image
                  src="/assets/github.svg"
                  width={25}
                  height={25}
                  alt="github"
                  className="mt-2 sm:mt-5"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-upper-right w-full h-[100vh]"></SwiperSlide>
        </Swiper>
        {/* <Image
          className="absolute sm:top-[535px] md:top-[550px] top-[610px]  right-0 z-20"
          src="/assets/frontmiddlewave.png"
          width={1000}
          height={500}
          alt="Picture of the author"
        /> */}
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          modules={[Pagination]}
          className="mySwiper mt-[20px]"
        >
          <SwiperSlide className="swiper-bottom-left w-full h-[100vh]"></SwiperSlide>
          <SwiperSlide className="swiper-bottom-right w-full h-[100vh]"></SwiperSlide>
        </Swiper>
        <Image
          className="-mt-[60px] sm:-mt-[80px] md:-mt-[100px] z-20"
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

export default MyProjects;
