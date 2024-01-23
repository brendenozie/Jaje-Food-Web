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

export default function Home() {
  return (
    <>
      <Hero />
      <Pic/>
      <LargeCard/>
      <BestMenu/>
      <Second/>
      <Team/>
      <PlayStore/>
      <Reserve/>
      
    </>
  );
}
