import React from "react";
import Image from "next/image";
import Link from "next/link";

import {FolderIcon, BookmarkIcon } from "@heroicons/react/24/solid";

interface cardProps {
  src: string;
  title: string;
  desc: string;
}

const loaderProp =({ src  } :any) => {
  return src;
}

const PlayStore = ({ src, title, desc }: cardProps) => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
            
    <div
    className="flex w-full flex-col rounded-md bg-cover px-[30px] py-[30px] md:px-[64px] md:py-[56px] max-w-[95%] xl:max-w-[800px] w-[95%]"
    style={{backgroundImage : 'url("/playy.png")'}}
    >
        <div className="w-full">
            <h4 className="mb-[14px] max-w-full text-xl font-bold  dark:text-white md:w-[64%] md:text-3xl md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
            Get it made and delivered to you using our new mobile app.
            </h4>
            <p className="mb-[40px] max-w-full text-base font-medium dark:text-[#E3DAFF] md:w-[64%] lg:w-[40%] xl:w-[72%] 2xl:w-[60%] 3xl:w-[45%]">
            Made just the way you like it! Delivered right to you, right where you are
            </p>
            <div className="mt-[36px] flex items-center justify-between gap-4 sm:justify-start 2xl:gap-10">
            <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8"/>
                    <div className="text-left ml-3">
                        <p className='text-xs dark:text-gray-200'>Download on </p>
                        <p className="text-sm md:text-base dark:text-white"> Google Play Store </p>
                    </div>
                </div>
                <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8"/>
                    <div className="text-left ml-3">
                        <p className='text-xs dark:text-gray-200'>Download on </p>
                        <p className="text-sm md:text-base dark:text-white"> Apple Store </p>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    </div>    
  );
};

export default PlayStore;


{/* <div className="flex flex-col gap-y-3 snap-center px-2">
      <div className="group rounded-md overflow-hidden relative shadow-lg">
        <Image
          src={src}
          alt={`${title} picture`}
          width={808}
          height={632}
          loader={loaderProp}
          className="group-hover:scale-110 group-hover:brightness-75 brig transition-all duration-300"
        />
        <div className="absolute top-0 opacity-0 group-hover:opacity-100 w-full flex justify-between transition-opacity duration-300 p-4">
          <Link
            href=""
            className="flex items-center gap-x-2 px-3 py-2 bg-gray-700 text-white rounded-3xl bg-opacity-70"
          >
            <FolderIcon />
            <p className="text-xs">Save</p>
          </Link>
          <button className="-translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <BookmarkIcon color="#ad9058" className="h-25" />
          </button>
        </div>
      </div>
      <div className="flex flex-col text-gray-800">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-xs">{desc}</p>
      </div>
    </div> */}