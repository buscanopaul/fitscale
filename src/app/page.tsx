import HomeHero from "@/components/home/HomeHero";
import HomeSecondSection from "@/components/home/HomeSecondSection";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeThirdSection from "@/components/home/HomeThirdSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <HomeHero />
      <HomeSecondSection />
      <HomeThirdSection />
      <HomeTestimonials />
    </div>
  );
}
