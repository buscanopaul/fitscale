import HomeHero from "@/components/home/HomeHero";
import HomeSecondSection from "@/components/home/HomeSecondSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <HomeHero />
      <HomeSecondSection />
    </div>
  );
}
