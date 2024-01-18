"use client";
import Image from "next/image";
import Right from "../icons/Right";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <section className="hero mt-4 font-poppins">
      <div className="bg-transparent relative dark:bg-gray-900">
        <div className="relative pt-2 pb-12 lg:pt-12 xl:container m-auto px-4 md:px-10 lg:px-4 lg:flex">
            <div className="sm:w-2/12 md:w-1/3 lg:ml-0 sm:mx-auto text-center lg:text-center lg:mr-auto lg:w-2/12">
              <div className="space-y-8	h-96 justify-between border-e border-gray-500">
                <p className="text-sm text-center font-bold  text-primary dark:text-gray-300 hover:text-primary uppercase font-poppins">Menu</p>
                <p className="text-sm text-center font-bold text-gray-300  dark:text-gray-300  hover:text-primary uppercase font-poppins">Catering Menu</p>
                <p className="text-sm text-center font-bold text-gray-300  dark:text-gray-300  hover:text-primary uppercase font-poppins">Order Catering</p>
                <p className="text-sm text-center font-bold text-gray-300  dark:text-gray-300  hover:text-primary uppercase font-poppins">Order Online</p>
                <p className="text-sm text-center font-bold text-gray-300  dark:text-gray-300  hover:text-primary uppercase font-poppins">Locations</p>
              </div>
            </div>
            <div className="relative justify-between sm:w-8/12 md:w-2/3 lg:ml-0 sm:mx-2 text-center lg:text-center lg:mr-auto lg:w-5/12">
              <div className="relative mt-4 md:mt-14 mb-4 md:mb-14 space-y-8 lg:ml-0 sm:mx-auto text-center lg:text-center lg:mr-auto font-poppins">
                <h1 className="sm:mx-auto sm:w-9/12 md:w-2/3 font-black text-white text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-center xl:text-7xl dark:text-white uppercase">
                <span className="relative text-primary bg-clip-text dark:text-primary">More</span> than
                <br className="lg:block hidden"/>just Pizza</h1>
                <p className="text-base tracking-wide font-bold text-gray-300 text-center sm:mx-auto sm:w-9/12 md:w-2/3 dark:text-gray-300 uppercase font-poppins">
                    Our menu has something for everyone. Stop by for a quick bite or get your favorites delivered right to your door.
                </p>
              </div>
                
                <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-center">
                    <a aria-label="add to slack" href="#" className="p-4 border w-40 bg-primary border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30">
                        <div className="flex justify-center space-x-4  ">
                            <span className="font-medium text-white uppercase">Order Now</span>
                        </div>
                    </a>    
                    <a aria-label="add to chat" href="#" className="p-4 dark:bg-gray-800  dark:border-gray-700 duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 dark:hover:border-green-300/30">
                        <div className="flex justify-center space-x-4">
                            <span className="font-medium md:block text-white uppercase">See the menu</span>
                            {/* <Right/> */}
                            <img className="w-6 h-6 text-white" src="/rightarrow.png" alt="chat logo" loading="lazy" width="128" height="128"/>
                        </div>
                    </a>     
                </div>
            </div>
            <div className="mt-12 md:mt-0 lg:relative -right-2 lg:w-5/12 flex w-full h-[35rem] overflow-clip">
                    {/* <div aria-hidden="true" className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl"></div> */}
                    <img src={"/pizza.png"} className="object-contain h-auto w-full" alt="wath illustration" loading="lazy" width="320" height="280"/>
                    {/* <Image className="relative w-full"
                            src={"/halfpizza.png"}
                            layout={"fill"}
                            objectFit={"contain"}
                            alt={"salad"}
                          /> */}
            </div>
        </div>
    </div>
    </section>
  );
}
