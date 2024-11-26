"use client";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from "./components/NavBar";

import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import { FaGithub, FaReact, FaSass } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";

const MyProjects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState<any>(null);

  
    
    
  

  const closeModal = () => {
    setModalInfo(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar  />
      {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center">
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold hover:bg-gray-200 transition"
              >
                ✕
              </button>
              <Image
                src={modalInfo.image ?? ''}
                alt="Modal"
                width={600}
                height={400}
                className="rounded-md"
              />
              <div className="flex flex-wrap justify-between w-full text-[#e2e8c0] font-[300] mt-4 md:mt-0">
              <p className="w-full sm:w-[350px] text-center md:text-left mt-4">
               {modalInfo.description}
              </p>              
              <div className="flex flex-col mt-4 ml-[50px] mr-4">
                <p>Technologies utilized:</p>
                <div className="flex mt-2 sm:mt-6">
                {modalInfo.tecnologies?.map((tech:string) => {
                  if (tech === 'next') {
                    return <SiNextdotjs key={tech} className='mr-5' size={25} />;
                  } else if (tech === 'sass') {
                    return <FaSass key={tech} className='mr-5' size={25} />;
                  } else if (tech === 'react') {
                    return <FaReact  key={tech} className='mr-5' size={25} />;
                  } 
                  else if (tech === 'tailwind') {
                    return <SiTailwindcss key={tech} className='mr-5' size={25} />;
                  } 
                  else if (tech === 'figma') {
                    return <IoLogoFigma key={tech} className='mr-5' size={25} />;
                  } 
                  return null; 
                })}
              </div>
              </div>       
                <div className="flex flex-col mt-4 mr-4">
                  <p>Prototype link:</p>
                  <a 
                    href={modalInfo?.links[0].figma ?? ''}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                  <IoLogoFigma className='mt-2 sm:mt-6 hover:text-[#be1d90] cursor-pointer' size={25}/></a>
                </div>
                 <div className="flex flex-col mt-4 mr-4">
                 <p>Prototype link:</p>
                 <a 
                    href={modalInfo?.links[0].github ?? ''}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                 <FaGithub className='mt-2 sm:mt-6 hover:text-[#be1d90] cursor-pointer' size={25} /></a>
               </div>              
            </div>
            </div>
          </div>
        )}
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
          alt="Upper Wave"
        />        
        <Swiper
          loop
          slidesPerView={1.33}
          spaceBetween={30}
          modules={[Pagination, Autoplay]}         
          autoplay={{ delay: 8000, disableOnInteraction: false, reverseDirection: true, }}
          className="mySwiper -mt-[10px] sm:-mt-[30px]"
         
        >         
          <SwiperSlide className="swiper-upper-left w-full h-[100vh] flex flex-col justify-start md:justify-between items-center px-4 py-8">
            <p className="text-3xl sm:text-4xl text-[#e2e8c0] font-[700] text-center">
              waves
            </p>           
            <div className="flex flex-wrap justify-evenly w-full mt-0 md:mt-[50px]">
              {[   
                { src: "/assets/waves.png", width: 243, height: 150 },      
                { src: "/assets/waves_library.png", width: 243, height: 150 },                             
                { src: "/assets/waves_mobile_portrait.png", width: 89, height: 175 },
              ].map((image, index) => (
                <Image
                key={index}
                src={image.src}
                alt="waves"
                width={image.width}
                height={image.height}
                className="w-auto h-auto sm:h-[150px] transition-transform duration-300 ease-in-out hover:scale-110"
                onClick={() => {setModalInfo({image:image.src, description:`A sleek music player built with Next.js and SASS, featuring
                  seamless integration with the Jamendo API to stream free music
                  effortlessly.`, tecnologies:['next', 'sass'], links:[{github:'https://github.com/7hayMuller/portifolio/tree/main/portfolio', figma:''}]});setIsModalOpen(true)}}
                
              />
              ))}
            </div>              
          </SwiperSlide>          
          <SwiperSlide className="swiper-upper-left w-full h-[100vh] flex flex-col justify-start md:justify-between items-center px-4 py-8">
            <p className="text-3xl sm:text-4xl text-[#e2e8c0] font-[700] text-center">
              Landing page and E-mail marketing - SumUP/Pix
            </p>           
          <div className="flex flex-wrap justify-evenly w-full mt-0 md:mt-[50px]">
              {[   
                { src: "/assets/sumup_mobile.png", width: 243, height: 150 },      
                { src: "/assets/sumup_desktop.png", width: 243, height: 150 },                
              ].map((image, index) => (
                <Image
                key={index}
                src={image.src}
                alt="waves"
                width={image.width}
                height={image.height}
                className="w-auto h-[200px] sm:h-[150px] transition-transform duration-300 ease-in-out hover:scale-110"
                onClick={() => {setModalInfo({image:image.src, description:`Landing page`, tecnologies:['Figma'],links:[{github:'https://github.com/7hayMuller/portifolio/tree/main/portfolio', figma:''}]});setIsModalOpen(true)}}
                
              />
              ))}
            </div>    
          </SwiperSlide>
        </Swiper>        
         <Swiper
          loop
          slidesPerView={1.33}
          spaceBetween={30}
          modules={[Pagination, Autoplay]}          
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          className="mySwiper mt-[20px]"
        >      
          <SwiperSlide className="swiper-bottom-left w-full h-[100vh] flex flex-col justify-start md:justify-between items-center px-4 py-8">
             <p className="text-3xl sm:text-4xl text-[#e2e8c0] font-[700] text-center">
              This Portifolio
            </p>           
          <div className="flex flex-wrap justify-evenly w-full mt-0 md:mt-[50px]">
              {[  
                { src: "/assets/splash-front.png", width: 243, height: 150 },    
                { src: "/assets/mock-portrait.png", width: 243, height: 150 },      
                            
              ].map((image, index) => (
                <Image
                key={index}
                src={image.src}
                alt="waves"
                width={image.width}
                height={image.height}
                className="w-auto h-[200px] sm:h-[150px] transition-transform duration-300 ease-in-out hover:scale-110"
                onClick={() => {setModalInfo({image:image.src, description:`Portifolio`, tecnologies:['next', 'tailwind']});setIsModalOpen(true)}}
                
              />
              ))}
            </div></SwiperSlide>
            <SwiperSlide className="swiper-bottom-left w-full h-[100vh] flex flex-col justify-start md:justify-between items-center px-4 py-8"></SwiperSlide>
        </Swiper>        
        <Image
          className="-mt-[60px] sm:-mt-[80px] md:-mt-[100px] z-20"
          src="/assets/frontbottomwave.png"
          width={2000}
          height={500}
          alt="Bottom Wave"
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
