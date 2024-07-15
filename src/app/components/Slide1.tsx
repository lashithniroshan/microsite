import React from "react";
import { VideoBackground } from "./VideoBackground";
import cx from "classnames";
import { ChevronDown } from "./icons/ChevronDown";
import data from "../data/data.json";

export const Slide1 = ({
  active,
  setActive,
}: {
  active: boolean;
  setActive: any;
}) => {
  return (
    <div>
      <div
        className={cx("absolute inset-0 z-20", {
          "opacity-0 duration-500": !active,
          "opacity-100 duration-500": active,
        })}
      >
        <VideoBackground />
        <section className="relative h-screen flex items-center justify-center z-30">
          <div className="flex flex-col items-center gap-3 px-5">
            <h1 className="text-anime text-2xl sm:text-4xl md:text-6xl font-bold text-center animate-in">
              {data.slide1Title}
            </h1>
            <div className="under-line rounded-lg bg-black h-1" />
            <p className="text-anime__two text-center md:text-xl max-w-[40ch] md:max-w-[50ch]">
              {data.slide1Description}
            </p>
          </div>
        </section>
      </div>
      <div
        className={cx({
          hidden: !active,
        })}
      >
        <button
          aria-label="Go to slide 2"
          className="z-40 fixed bottom-min-3 bottom-0 left-1/2 right-1/2 -translate-x-1/2"
          onClick={() => setActive(2)}
        >
          <ChevronDown />
        </button>
      </div>
    </div>
  );
};
