"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function PortfolioSwiper({ slides }: { slides: any[] }) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <button
        ref={prevRef}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full p-3 bg-white/10 backdrop-blur hover:bg-white/20 transition shadow flex "
      >
        <BiChevronLeft size={25} color="#fff" />
      </button>

      <button
        ref={nextRef}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full p-3 bg-white/10 backdrop-blur hover:bg-white/20 transition shadow flex"
      >
        <BiChevronRight size={25} color="#fff" />
      </button>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={false}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          400: { slidesPerView: 1.1, centeredSlides: true },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: "auto" },
        }}
        navigation={{
          prevEl: prevRef.current!,
          nextEl: nextRef.current!,
        }}
        onInit={(swiper) => {
          swiper.params.navigation = {
            ...(swiper.params.navigation as any),
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          };

          swiper.navigation.update();
        }}
        className="w-full overflow-visible"
      >
        {slides.map((item: any, index: any) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-stretch px-1 py-6 w-full md:!w-auto"
          >
            <div className="w-full max-w-[360px] md:w-[320px] lg:w-[340px]">
              {item}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
