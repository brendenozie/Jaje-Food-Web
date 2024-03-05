"use client";
import AboutUs from "@/components/layout/AboutUs";
import ContactUs from "@/components/layout/ContactUs";
import Hero from "@/components/layout/Hero";
import Reserve from "@/components/layout/Reserve";
import Pic from "@/components/ui/Pic";
import BestMenu from "@/components/ui/BestMenu";
import LargeCard from "@/components/ui/LargeCard";
import Second from "@/components/ui/Second";
import Team from "@/components/ui/Team";
import PlayStore from "@/components/ui/PlayStore";
import Loading from "@/app/loading";
import Error from "@/app/error";
import { useCategories } from "@/Hooks/useCategories";
import { useMenuItems } from "@/Hooks/useMenuItems";

export default function Home() {

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
      <Hero />
      <Pic categories={categories}/>
      <LargeCard/>
      <BestMenu categories={categories} menuitems={menuItems}/>
      <Second/>
      <Team/>
      <PlayStore/>
      <Reserve/>      
    </>
  );
}
