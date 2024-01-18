"use client";
import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";
import Loading from "@/app/loading";
import Error from "@/app/error";
import { useCategories } from "@/Hooks/useCategories";
import { useMenuItems } from "@/Hooks/useMenuItems";
export default function Menu() {
  // const {
  //   categories,
  //   error: catError,
  //   isLoading: catIsLoading,
  // } = useCategories();
  // const {
  //   menuItems,
  //   error: MenuError,
  //   isLoading: MenuIsLoading,
  // } = useMenuItems();

  // if (catIsLoading || MenuIsLoading) return <Loading />;
  
  return (
    <>
    
        {/* < />!-- Title --> */}
        <div className="pt-32  bg-white">
          <h1 className="text-center text-2xl font-bold text-gray-800 font-poppins">Our Menu</h1>
        </div>

        {/* < />!-- Tab Menu --> */}
        <div className="flex flex-wrap items-center  overflow-x-auto overflow-y-hidden py-10 justify-center   bg-white text-gray-800">
        <div className="mt-8 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-5 xl:grid-cols-5 text-center object-center items-center justify-items-center max-w-5xl ">
            <div className="relative group transition hover:z-[1] hover:shadow-2xl w-full">
                <div className="relative p-2 space-y-2  flex flex-col items-center   border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90 ">
                    <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/burger.png" className="w-10" width="512" height="512" alt="burger illustration"/>
                    
                    <div className="space-y-2">
                        <h5 className="text-md text-gray-800 font-medium transition group-hover:text-primary font-poppins">Beef Burger</h5>
                    </div>
                </div>
            </div>
            <div className="relative group transition hover:z-[1] hover:shadow-2xl w-full">
                <div className="relative p-2 space-y-2 flex flex-col items-center   border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90 ">
                    <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/trowel.png" className="w-10" width="512" height="512" alt="burger illustration"/>
                    
                    <div className="space-y-2">
                        <h5 className="text-md text-gray-800 font-medium transition group-hover:text-primary font-poppins">Chicken Pizza</h5>
                    </div>
                </div>
            </div>
            <div className="relative group transition hover:z-[1] hover:shadow-2xl w-full">
                <div className="relative p-2 space-y-2  flex flex-col items-center   border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90 ">
                    <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png" className="w-10" width="512" height="512" alt="burger illustration"/>
                    
                    <div className="space-y-2">
                        <h5 className="text-md text-gray-800 font-medium transition group-hover:text-primary font-poppins">Fresh Pasta</h5>
                    </div>
                </div>
            </div>
            <div className="relative group transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block w-full">
                <div className="relative p-2 space-y-2  flex flex-col items-center  border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90">
                    <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/metal.png" className="w-10" width="512" height="512" alt="burger illustration"/>
                    
                    <div className="space-y-2">
                        <h5 className="text-md text-gray-800 font-medium transition group-hover:text-primary font-poppins">Hot Sushi</h5>
                    </div>
                </div>
            </div>
            <div className="relative group transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block w-full">
                <div className="relative p-2 space-y-2  flex flex-col border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90 items-center">
                    <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/metal.png" className="w-10" width="512" height="512" alt="burger illustration"/>
                    
                    <div className="space-y-2">
                        <h5 className="text-md text-gray-800 font-medium transition group-hover:text-primary font-poppins">Drink & Juice</h5>
                    </div>
                </div>
            </div>
        </div>
        </div>

        {/* < />!-- Product List --> */}
        <section className="py-2 bg-gray-100">
          <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
              <a href="#">
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <img src="/italian.jpg" alt="Hotel Photo" />
                  <div className="flex items-center space-x-1.5 rounded-lg bg-primary px-4 py-1.5 text-white duration-100 hover:bg-red-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <button className="text-sm">Add to cart</button>
                  </div>
                </div>

                <div className="mt-1 p-2">
                  <h2 className="text-slate-700 font-poppins font-bold ">Vegetables Burger</h2>
                  <p className="mt-1 text-sm text-slate-400">American Inspired Sushi roll</p>

                  <div className="mt-3 flex items-end justify-between">
                    <p className="text-lg font-bold text-primary">$27.00</p>

                    <div className="flex items-center space-x-1.5 rounded-lg bg-primary px-4 py-1.5 text-white duration-100 hover:bg-red-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                      </svg>

                      <button className="text-sm">Add to cart</button>
                    </div>
                  </div>
                </div>
              </a>
            </article>
            <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
              <a href="#">
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <img src="/italian.jpg" alt="Hotel Photo" />
                  <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-sm text-slate-400">4.9</span>
                  </div>
                </div>

                <div className="mt-1 p-2">
                  <h2 className="text-slate-700 font-poppins font-bold">Vegetables Burger</h2>
                  <p className="mt-1 text-sm text-slate-400">American Inspired Sushi roll</p>

                  <div className="mt-3 flex items-end justify-between">
                    <p className="text-lg font-bold text-primary">$27.00</p>


                    <div className="flex items-center space-x-1.5 rounded-lg bg-primary px-4 py-1.5 text-white duration-100 hover:bg-red-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                      </svg>

                      <button className="text-sm">Add to cart</button>
                    </div>
                  </div>
                </div>
              </a>
            </article>

            <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
              <a href="#">
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <img src="/italian.jpg" alt="Hotel Photo" />
                  <div className="flex items-center space-x-1.5 rounded-lg bg-primary px-4 py-1.5 text-white duration-100 hover:bg-red-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <button className="text-sm">Add to cart</button>
                  </div>
                </div>

                <div className="mt-1 p-2">
                  <h2 className="text-slate-700 font-poppins font-bold">Vegetables Burger</h2>
                  <p className="mt-1 text-sm text-slate-400">American Inspired Sushi roll</p>

                  <div className="mt-3 flex items-end justify-between">
                    <p className="text-lg font-bold text-primary">$27.00</p>
                    <div className="flex items-center space-x-1.5 rounded-lg bg-primary px-4 py-1.5 text-white duration-100 hover:bg-red-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                      </svg>

                      <button className="text-sm">Add to cart</button>
                    </div>
                  </div>
                </div>
              </a>
            </article>

            <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
              <a href="#">
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <img src="/italian.jpg" alt="Hotel Photo" />
                  <div className="flex items-center space-x-1.5 rounded-lg bg-primary px-4 py-1.5 text-white duration-100 hover:bg-red-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <button className="text-sm">Add to cart</button>
                  </div>
                </div>

                <div className="mt-1 p-2">
                  <h2 className="text-slate-700 font-poppins font-bold">Vegetables Burger</h2>
                  <p className="mt-1 text-sm text-slate-400">American Inspired Sushi roll</p>

                  <div className="mt-3 flex items-end justify-between">
                    <p className="text-lg font-bold text-primary">$27.00</p>
                    <div className="flex items-center space-x-1.5 rounded-lg bg-primary px-4 py-1.5 text-white duration-100 hover:bg-red-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                      </svg>

                      <button className="text-sm">Add to cart</button>
                    </div>
                  </div>
                </div>
              </a>
            </article>
            <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
              <a href="#">
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <img src="/italian.jpg" alt="Hotel Photo" />
                  <div className="flex items-center space-x-1.5 rounded-lg bg-primary px-4 py-1.5 text-white duration-100 hover:bg-red-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <button className="text-sm">Add to cart</button>
                  </div>
                </div>

                <div className="mt-1 p-2">
                  <h2 className="text-slate-700 font-poppins font-bold">Vegetables Burger</h2>
                  <p className="mt-1 text-sm text-slate-400">American Inspired Sushi roll</p>

                  <div className="mt-3 flex items-end justify-between">
                    <p className="text-lg font-bold text-primary">$27.00</p>
                    <div className="flex items-center space-x-1.5 rounded-lg bg-primary px-4 py-1.5 text-white duration-100 hover:bg-red-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                      </svg>

                      <button className="text-sm">Add to cart</button>
                    </div>
                  </div>
                </div>
              </a>
            </article>
            <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
              <a href="#">
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <img src="/italian.jpg" alt="Hotel Photo" />
                  <div className="flex items-center space-x-1.5 rounded-lg bg-primary px-4 py-1.5 text-white duration-100 hover:bg-red-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <button className="text-sm">Add to cart</button>
                  </div>
                </div>

                <div className="mt-1 p-2">
                  <h2 className="text-slate-700 font-poppins font-bold">Vegetables Burger</h2>
                  <p className="mt-1 text-sm text-slate-400">American Inspired Sushi roll</p>

                  <div className="mt-3 flex items-end justify-between">
                    <p className="text-lg font-bold text-primary">$27.00</p>

                    <div className="flex items-center space-x-1.5 rounded-lg bg-primary px-4 py-1.5 text-white duration-100 hover:bg-red-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                      </svg>

                      <button className="text-sm">Add to cart</button>
                    </div>
                  </div>
                </div>
              </a>
            </article>
            <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
              <a href="#">
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <img src="/italian.jpg" alt="Hotel Photo" />
                  <div className="flex items-center space-x-1.5 rounded-lg bg-primary px-4 py-1.5 text-white duration-100 hover:bg-red-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <button className="text-sm">Add to cart</button>
                  </div>
                </div>

                <div className="mt-1 p-2">
                  <h2 className="text-slate-700 font-poppins font-bold">Vegetables Burger</h2>
                  <p className="mt-1 text-sm text-slate-400">American Inspired Sushi roll</p>

                  <div className="mt-3 flex items-end justify-between">
                    <p className="text-lg font-bold text-primary">$27.00</p>

                    <div className="flex items-center space-x-1.5 rounded-lg bg-primary px-4 py-1.5 text-white duration-100 hover:bg-red-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                      </svg>

                      <button className="text-sm">Add to cart</button>
                    </div>
                  </div>
                </div>
              </a>
            </article>
            <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
              <a href="#">
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <img src="/italian.jpg" alt="Hotel Photo" />
                  <div className="flex items-center space-x-1.5 rounded-lg bg-primary px-4 py-1.5 text-white duration-100 hover:bg-red-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <button className="text-sm">Add to cart</button>
                  </div>
                </div>

                <div className="mt-1 p-2">
                  <h2 className="text-slate-700 font-poppins font-bold">Vegetables Burger</h2>
                  <p className="mt-1 text-sm text-slate-400">American Inspired Sushi roll</p>

                  <div className="mt-3 flex items-end justify-between">
                    <p className="text-lg font-bold text-primary">$27.00</p>

                    <div className="flex items-center space-x-1.5 rounded-lg bg-primary px-4 py-1.5 text-white duration-100 hover:bg-red-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                      </svg>

                      <button className="text-sm">Add to cart</button>
                    </div>
                  </div>
                </div>
              </a>
            </article>
          </div>
          </section>
      {/* <section className="mt-8">
        {categories?.length > 0 &&
          categories.map((c) => (
            <div key={c._id}>
              <div className="text-center">
                <SectionHeaders mainHeader={c.name} />
              </div>
              <div className="grid sm:grid-cols-3 gap-4 mt-6 mb-12">
                {menuItems
                  .filter((item) => item?.category?._id === c._id)
                  .map((item) => (
                    <MenuItem key={item._id} {...item} />
                  ))}
              </div>
            </div>
          ))}
      </section> */}
      </>
  );
}
