"use client";

import { useEffect, useState } from "react";
import TypeIt from "typeit-react";
import Cube from "./components/Cube/cube";

import "./globals.css";
import Arrow from "./components/Arrow/arrow";

const Page = () => {
  const [typingVisible, setTypingVisible] = useState<boolean>(false);
  const [revealAmount, setRevealAmount] = useState(0);

  const handleReveal = (amount: number) => {
    setRevealAmount(amount);
  };

  const handleMouseUp = () => {
    setRevealAmount((prevAmount) =>
      prevAmount > window.innerWidth / 2 ? window.innerWidth : prevAmount
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setTypingVisible(true);
    }, 2500);
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center align-middle w-[1000px]">
        <Cube />
        {typingVisible && (
          <div className="flex justify-between">
            <div className="text-[35px] text-[#f3ffb9]">
              <TypeIt
                options={{
                  startDelay: 2000,
                  strings: ["Hi, I'm Thayná Müller!"],
                  speed: 100,
                  waitUntilVisible: true,
                  cursor: false,
                }}
              />
            </div>
            <div className="text-[35px] text-[#f3ffb9] font-bold">
              <TypeIt
                options={{ startDelay: 5000 }}
                getBeforeInit={(instance: any) => {
                  instance
                    .type(" A Frontend developer.")
                    .pause(750)
                    .delete(21)
                    .type("A UX/UI Designer.")
                    .pause(750)
                    .delete(19);

                  instance.options({ loop: true, speed: 100 });

                  return instance;
                }}
              />
            </div>
          </div>
        )}
      </div>
      <div
        className="hidden-section fixed top-0 right-0 h-full bg-gray-200"
        style={{
          width:
            revealAmount === window.innerWidth ? "100%" : `${revealAmount}px`,
          transition: "width 0.3s ease-out",
        }}
      >
        <h1 className="text-3xl font-bold p-4">
          Youve revealed the hidden section!
        </h1>
      </div>
      {revealAmount > window.innerWidth / 2 ? (
        <div className="fixed inset-0 z-50" onMouseUp={handleMouseUp}></div>
      ) : (
        <Arrow onReveal={handleReveal} />
      )}
    </>
  );
};

export default Page;
