"use client";
import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";
import Loading from "@/app/loading";
import Error from "@/app/error";
import { useCategories } from "@/Hooks/useCategories";
import { useMenuItems } from "@/Hooks/useMenuItems";
export default function Menu() {
  const {
    categories,
    error: catError,
    isLoading: catIsLoading,
  } = useCategories();
  const {
    menuItems,
    error: MenuError,
    isLoading: MenuIsLoading,
  } = useMenuItems();

  if (catIsLoading || MenuIsLoading) return <Loading />;
  
  return (
    <>
    
        {/* < />!-- Title --> */}
        <div className="pt-32  bg-white">
          <h1 className="text-center text-2xl font-bold text-gray-800 font-poppins">Our Menu</h1>
        </div>

        {/* < />!-- Tab Menu --> */}
        <div className="flex flex-wrap items-center  overflow-x-auto overflow-y-hidden py-10 justify-center   bg-white text-gray-800">
        <div className="mt-8 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-5 xl:grid-cols-5 text-center object-center items-center justify-items-center max-w-5xl ">
        {categories?.length > 0 &&  categories.map((c) => (
            <div className="relative group transition hover:z-[1] hover:shadow-2xl w-full" key={c._id}>
                <div className="relative p-2 space-y-2  flex flex-col items-center   border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90 ">
                    <img src={c.image} className="w-10" width="512" height="512" alt="burger illustration"/>
                    
                    <div className="space-y-2">
                        <h5 className="text-md text-gray-800 font-medium transition group-hover:text-primary font-poppins">{c.name}</h5>
                    </div>
                </div>
            </div>
            ))}
        </div>
        </div>

        {/* < />!-- Product List --> */}
        <section className="py-2 bg-gray-100">
          <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {menuItems
                  .map((item) => (
                    <MenuItem key={item._id} {...item} />
                  ))}
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
