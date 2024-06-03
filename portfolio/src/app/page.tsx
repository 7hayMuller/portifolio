"use client";

import TypeIt from "typeit-react";
import Cube from "./cube";

import "./globals.css";

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center align-middle w-[1000px]">
      <Cube />
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
                .type("An UI/UX Designer.")
                .pause(750)
                .delete(19);

              instance.options({ loop: true, speed: 100 });

              return instance;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
