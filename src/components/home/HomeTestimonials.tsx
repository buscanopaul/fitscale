import React from "react";
import Title from "../Title";
import Description from "../Description";
import HomeTestimonialsList from "./HomeTestimonialsList";
import Button from "../Button";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import HomeProductsCategories from "./HomeProductsCategories";

function HomeTestimonials() {
  return (
    <div className="relative h-full px-6 mt-10 flex flex-col lg:items-center">
      <div className="hidden lg:block text-center max-w-xl">
        <Title
          mobileSize="text-[25px]"
          desktopSize="lg:text-[40px]"
          isHaveShadow
        >
          thousands have spoken, <u>klout pwr is unmatched</u>
        </Title>
      </div>
      <div className="lg:hidden">
        <Title mobileSize="text-[25px]" desktopSize="lg:text-[40px]">
          thousands have spoken, <u>klout pwr is unmatched</u>
        </Title>
      </div>
      <div className="h-3" />
      <div className="lg:text-center">
        <Description>
          Klout PWR stands unparalleled in it&apos;s league. The raving reviews
          of thousands can&apos;t be wrong – experience the unmatched power for
          yourself.
        </Description>
      </div>
      <div className="mb-10" />
      <div className="items-center gap-2 border px-16 py-3 rounded-md box-shadow-white mb-12 lg:flex hidden bg-black">
        <CheckBadgeIcon className="h-4 w-4 text-white" />
        <p className="text-white font-sans text-sm font-semibold">
          1000+ Verified Reviews
        </p>
      </div>
      <HomeTestimonialsList />
      <HomeProductsCategories />
      <div className="mt-10 w-full">
        <Button>Claim my free pump kaps now!</Button>
      </div>
      <Image
        className="lg:absolute lg:block -z-10 hidden"
        src={`${process.env.CLOUDINARY_URL}/v1692119674/Klout/Banner%20Images/DesktopBanner3-min_s3m6fx.png`}
        fill
        objectFit="cover"
        objectPosition="center"
        alt="Pump"
      />
    </div>
  );
}

export default HomeTestimonials;
