import React from "react";
import cx from "classnames";
import Image from "next/image";
import data from "../data/data.json";
import { Carousel } from "./Carousel";

export const Slide2 = ({ active }: { active: boolean }) => {
  return (
    <div
      className={cx("absolute inset-0 z-20", {
        "opacity-0 duration-500": !active,
        "opacity-100 duration-500": active,
      })}
    >
      {active && (
        <a href="#" className="absolute right-5 top-7  z-30 text-gray-400">
          DISCOVER MORE
        </a>
      )}
      <section className="relative z-10 h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={data.slide2.images[0]}
            fill
            alt="background image"
            style={{ objectFit: "cover" }}
            priority
            className="md:hidden"
          />
          <Image
            src={data.slide2.images[1]}
            fill
            style={{ objectFit: "cover" }}
            alt="background image"
            priority
            className="hidden md:block"
          />
          <Image
            src={data.slide2.images[2]}
            alt="background image"
            fill
            style={{
              objectFit: "cover",
              minWidth: "100%",
              minHeight: "100%",
              display: "block",
            }}
            priority
            className="hidden lg:block"
          />
        </div>
        <div className="flex flex-col items-center z-30 w-full px-5 md:mr-28 min-h-[300px]">
          <Carousel />
        </div>
      </section>
    </div>
  );
};
