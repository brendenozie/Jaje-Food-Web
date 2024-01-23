"use client";
import React, { useRef } from "react";
import { picardData } from "@/constant/Data";
import {ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Picard from "./Picard";

const BestMenu = () => {
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
      className="flex flex-col bg-white justify-center items-center"
    >
      <div className="min-h-[4.5rem] items-center pt-4">
            <h1 className="relative my-4 mx-2 text-xl font-semibold text-primary uppercase w-full text-center font-poppins">Best Food Menu</h1>            
            <h2 className="relative my-4 mx-2 text-3xl font-bold text-[#B10120] uppercase w-full text-center font-poppins">Our Best Foods Menu</h2>
      </div>

      <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-5 xl:grid-cols-5 text-center object-center items-center justify-items-center max-w-5xl ">
            <div className="relative group transition hover:z-[1] hover:shadow-2xl w-full border-e-[1px] border-dashed dark:border-white/20">
                <div className="relative p-2 space-y-2  flex flex-col items-center transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90 ">
                    <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/burger.png" className="w-10" width="512" height="512" alt="burger illustration"/>
                    
                    <div className="space-y-2">
                        <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-primary">Beef Burger</h5>
                    </div>
                </div>
            </div>
            <div className="relative group transition hover:z-[1] hover:shadow-2xl w-full">
                <div className="relative p-2 space-y-2 flex flex-col items-center   border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90 ">
                    <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/trowel.png" className="w-10" width="512" height="512" alt="burger illustration"/>
                    
                    <div className="space-y-2">
                        <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-primary">Chicken Pizza</h5>
                    </div>
                </div>
            </div>
            <div className="relative group transition hover:z-[1] hover:shadow-2xl w-full">
                <div className="relative p-2 space-y-2  flex flex-col items-center   border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90 ">
                    <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png" className="w-10" width="512" height="512" alt="burger illustration"/>
                    
                    <div className="space-y-2">
                        <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-primary">Fresh Pasta</h5>
                    </div>
                </div>
            </div>
            <div className="relative group transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block w-full">
                <div className="relative p-2 space-y-2  flex flex-col items-center  border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90">
                    <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/metal.png" className="w-10" width="512" height="512" alt="burger illustration"/>
                    
                    <div className="space-y-2">
                        <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-primary">Hot Sushi</h5>
                    </div>
                </div>
            </div>
            <div className="relative group transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block w-full">
                <div className="relative p-2 space-y-2  flex flex-col border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90 items-center">
                    <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/metal.png" className="w-10" width="512" height="512" alt="burger illustration"/>
                    
                    <div className="space-y-2">
                        <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-primary">Drink & Juice</h5>
                    </div>
                </div>
            </div>
        </div>

      <div className=" grid sm:grid-cols-2 gap-x-2 justify-center items-center h-[80vh] max-w-4xl justify-self-center place-items-center">
            <div className="relative flex flex-col items-center rounded-md border-[1px] border-gray-200 md:w-[441px] w-[576px] mx-auto bg-white bg-clip-border border-[#23232333] dark:!bg-navy-800 dark:text-white ">
                <div className="flex h-full w-full items-start justify-between rounded-md border-b-[1px]  dark:border-white/20 bg-white px-3 py-[20px] transition-all duration-150 border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700">
                    <div className="flex items-center gap-3">
                        <div className="flex h-16 w-16 items-center justify-center">
                        <img className="h-full w-full rounded-full"
                            src="/80691.jpg"
                            alt=""
                        />
                        </div>
                        <div className="flex flex-col">
                        <h5 className="text-base font-bold text-navy-700 dark:text-white">
                            Vegetables Burger
                        </h5>
                        <p className="mt-1 text-sm font-normal text-gray-600">
                            American Inspired Sushi roll
                        </p>
                        </div>
                    </div> 
                    <div className="mt-1 flex items-center justify-center text-navy-700 dark:text-red-600 bg-red-300 p-2">
                        <div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                        </div>
                        <div className="ml-1 flex items-center text-sm font-bold text-navy-700 text-red-600 dark:text-red-600">
                        <p>   </p>
                        $<p className="ml-1">27.00</p>
                        </div>
                    </div>
                </div>
                <div className="flex h-full w-full items-start justify-between rounded-md border-b-[1px]  dark:border-white/20 bg-white px-3 py-[20px] transition-all duration-150 border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700">
                    <div className="flex items-center gap-3">
                        <div className="flex h-16 w-16 items-center justify-center">
                        <img
                            className="h-full w-full rounded-full"
                            src="/80691.jpg"
                            alt=""
                        />
                        </div>
                        <div className="flex flex-col">
                        <h5 className="text-base font-bold text-navy-700 dark:text-white">
                            Vegetables Burger
                        </h5>
                        <p className="mt-1 text-sm font-normal text-gray-600">
                            American Inspired Sushi roll
                        </p>
                        </div>
                    </div> 
                    <div className="mt-1 flex items-center justify-center text-navy-700 dark:text-red-600 bg-red-300 p-2">
                        <div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                        </div>
                        <div className="ml-1 flex items-center text-sm font-bold text-navy-700 text-red-600 dark:text-red-600">
                        <p>   </p>
                        $<p className="ml-1">27.00</p>
                        </div>
                    </div>
                </div>
                <div className="flex h-full w-full items-start justify-between rounded-md border-b-[1px]  dark:border-white/20 bg-white px-3 py-[20px] transition-all duration-150 border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700">
                    <div className="flex items-center gap-3">
                        <div className="flex h-16 w-16 items-center justify-center">
                        <img
                            className="h-full w-full rounded-full"
                            src="/80691.jpg"
                            alt=""
                        />
                        </div>
                        <div className="flex flex-col">
                        <h5 className="text-base font-bold text-navy-700 dark:text-white">
                            Vegetables Burger
                        </h5>
                        <p className="mt-1 text-sm font-normal text-gray-600">
                            American Inspired Sushi roll
                        </p>
                        </div>
                    </div> 
                    <div className="mt-1 flex items-center justify-center text-navy-700 dark:text-red-600 bg-red-300 p-2">
                        <div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                        </div>
                        <div className="ml-1 flex items-center text-sm font-bold text-navy-700 text-red-600 dark:text-red-600">
                        <p>   </p>
                        $<p className="ml-1">27.00</p>
                        </div>
                    </div>
                </div>
                <div className="flex h-full w-full items-start justify-between rounded-md border-b-[1px]  dark:border-white/20 bg-white px-3 py-[20px] transition-all duration-150 border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700">
                    <div className="flex items-center gap-3">
                        <div className="flex h-16 w-16 items-center justify-center">
                        <img
                            className="h-full w-full rounded-full"
                            src="/80691.jpg"
                            alt=""
                        />
                        </div>
                        <div className="flex flex-col">
                        <h5 className="text-base font-bold text-navy-700 dark:text-white">
                            Vegetables Burger
                        </h5>
                        <p className="mt-1 text-sm font-normal text-gray-600">
                            American Inspired Sushi roll
                        </p>
                        </div>
                    </div> 
                    <div className="mt-1 flex items-center justify-center text-navy-700 dark:text-red-600 bg-red-300 p-2">
                        <div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                        </div>
                        <div className="ml-1 flex items-center text-sm font-bold text-navy-700 text-red-600 dark:text-red-600">
                        <p>   </p>
                        $<p className="ml-1">27.00</p>
                        </div>
                    </div>
                </div>
            </div>  
            <div className="relative flex flex-col items-center rounded-md border-[1px] border-gray-200 w-[576px] mx-auto bg-white bg-clip-border border-[#23232333] dark:!bg-navy-800 dark:text-white ">
                <div className="flex h-full w-full items-start justify-between rounded-md border-b-[1px]  dark:border-white/20 bg-white px-3 py-[20px] transition-all duration-150 border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700">
                    <div className="flex items-center gap-3">
                        <div className="flex h-16 w-16 items-center justify-center">
                        <img className="h-full w-full rounded-full" src="/80691.jpg" alt=""/>
                        </div>
                        <div className="flex flex-col">
                        <h5 className="text-base font-bold text-navy-700 dark:text-white">
                            Vegetables Burger
                        </h5>
                        <p className="mt-1 text-sm font-normal text-gray-600">
                            American Inspired Sushi roll
                        </p>
                        </div>
                    </div> 
                    <div className="mt-1 flex items-center justify-center text-navy-700 dark:text-red-600 bg-red-300 p-2">
                        <div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                        </div>
                        <div className="ml-1 flex items-center text-sm font-bold text-navy-700 text-red-600 dark:text-red-600">
                        <p>   </p>
                        $<p className="ml-1">27.00</p>
                        </div>
                    </div>
                </div>
                <div className="flex h-full w-full items-start justify-between rounded-md border-b-[1px]  dark:border-white/20 bg-white px-3 py-[20px] transition-all duration-150 border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700">
                    <div className="flex items-center gap-3">
                        <div className="flex h-16 w-16 items-center justify-center">
                        <img
                            className="h-full w-full rounded-full"
                            src="/80691.jpg"
                            alt=""
                        />
                        </div>
                        <div className="flex flex-col">
                        <h5 className="text-base font-bold text-navy-700 dark:text-white">
                            Vegetables Burger
                        </h5>
                        <p className="mt-1 text-sm font-normal text-gray-600">
                            American Inspired Sushi roll
                        </p>
                        </div>
                    </div> 
                    <div className="mt-1 flex items-center justify-center text-navy-700 dark:text-red-600 bg-red-300 p-2">
                        <div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                        </div>
                        <div className="ml-1 flex items-center text-sm font-bold text-navy-700 text-red-600 dark:text-red-600">
                        <p>   </p>
                        $<p className="ml-1">27.00</p>
                        </div>
                    </div>
                </div>
                <div className="flex h-full w-full items-start justify-between rounded-md border-b-[1px]  dark:border-white/20 bg-white px-3 py-[20px] transition-all duration-150 border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700">
                    <div className="flex items-center gap-3">
                        <div className="flex h-16 w-16 items-center justify-center">
                        <img
                            className="h-full w-full rounded-full"
                            src="/80691.jpg"
                            alt=""
                        />
                        </div>
                        <div className="flex flex-col">
                        <h5 className="text-base font-bold text-navy-700 dark:text-white">
                            Vegetables Burger
                        </h5>
                        <p className="mt-1 text-sm font-normal text-gray-600">
                            American Inspired Sushi roll
                        </p>
                        </div>
                    </div> 
                    <div className="mt-1 flex items-center justify-center text-navy-700 dark:text-red-600 bg-red-300 p-2">
                        <div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                        </div>
                        <div className="ml-1 flex items-center text-sm font-bold text-navy-700 text-red-600 dark:text-red-600">
                        <p>   </p>
                        $<p className="ml-1">27.00</p>
                        </div>
                    </div>
                </div>
                <div className="flex h-full w-full items-start justify-between rounded-md border-b-[1px]  dark:border-white/20 bg-white px-3 py-[20px] transition-all duration-150 border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700">
                    <div className="flex items-center gap-3">
                        <div className="flex h-16 w-16 items-center justify-center">
                        <img
                            className="h-full w-full rounded-full"
                            src="/80691.jpg"
                            alt=""
                        />
                        </div>
                        <div className="flex flex-col">
                        <h5 className="text-base font-bold text-navy-700 dark:text-white">
                            Vegetables Burger
                        </h5>
                        <p className="mt-1 text-sm font-normal text-gray-600">
                            American Inspired Sushi roll
                        </p>
                        </div>
                    </div> 
                    <div className="mt-1 flex items-center justify-center text-navy-700 dark:text-red-600 bg-red-300 p-2">
                        <div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                        </div>
                        <div className="ml-1 flex items-center text-sm font-bold text-navy-700 text-red-600 dark:text-red-600">
                        <p>   </p>
                        $<p className="ml-1">27.00</p>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
   
      {/* <div className="relative">
        <div
          className="p-8 grid grid-flow-col auto-cols-[100%] md:auto-cols-[50%] lg:auto-cols-[30%] overflow-hidden overscroll-y-contain snap-x snap-mandatory scroll-pl-2 scrollbar-hide">
            {picardData.map((card) => (
                        // <!-- Start Card List -->
                        <div className="bg-white p-3 rounded-xl shadow-xl flex items-center justify-between mt-4" key="">
                            <div className="flex space-x-6 items-center">
                                <img src="https://i.pinimg.com/originals/25/0c/a0/250ca0295215879bd0d53e3a58fa1289.png" className="w-auto h-24 rounded-lg"/>
                                <div>
                                    <p className="font-semibold text-base">Connect Device</p>
                                    <p className="font-semibold text-sm text-gray-400">Autorize device for transfer</p>
                                </div>              
                            </div>
                               
                            <div className="flex space-x-2 items-center">
                                <div className="bg-gray-300 rounded-md p-2 flex items-center">
                                    <i className="fas fa-chevron-right fa-sm text-black"></i>
                                </div>
                            </div>    
                        </div>
                        // <!-- End Card List -->
            ))}

        </div>
      </div> */}
    </section>
  );
};

export default BestMenu;
