"use client";
import React, { useRef } from "react";
import { picardData } from "@/constant/Data";
import {ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Picard from "./Picard";

interface picProps {
  categories: any;
}

const Pic = ({categories}: picProps) => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: -250,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: 250,
        behavior: "smooth",
      });
    }
  };
  return (
    <section
      id="destinations"
      data-testid="destinations"
      className="flex flex-col bg-white h-[45rem] justify-center"
    >
      <div className="min-h-[4.5rem] items-center">
            <h1 className="relative my-4 mx-2 text-9xl font-bold text-[#B10120] uppercase w-full text-left">Our Menu</h1>
      </div>
      <div className="relative">
        <div
          className="p-8 grid grid-flow-col auto-cols-[100%] md:auto-cols-[50%] lg:auto-cols-[25%] overflow-hidden overscroll-y-contain snap-x snap-mandatory scroll-pl-2 scrollbar-hide"
          ref={scrollContainer}
        >
          {categories.results.map((card) => (
            <Picard
              key={card._id}
              src={card.image}
              title={card.name}
              desc={card.desc}
            />
          ))}
        </div>
        <button
          className="p-3 backdrop-blur btn-color rounded-full absolute top-1/2 -translate-y-1/2 left-6"
          onClick={scrollLeft}
        >
          <ChevronLeftIcon className="h-20" />
        </button>
        <button
          className="p-3 backdrop-blur btn-color rounded-full absolute top-1/2 -translate-y-1/2 right-6"
          onClick={scrollRight}
        >
          <ChevronRightIcon className="h-20" />
        </button>
      </div>
      <div className="min-h-[4.5rem] items-center">
            <h1 className="relative my-4 mx-2 text-9xl font-bold text-primary uppercase w-full text-right">Our Menu</h1>
      </div>
    </section>
  );
};

export default Pic;
