import React from "react";
import Title from "../Title";
import Image from "next/image";
import Description from "../Description";
import HomeProducts from "./HomeProducts";
import Button from "../Button";

function HomeThirdSection() {
  return (
    <div className="relative h-full px-6 py-12 lg:border-b-2 rounded-lg">
      <Title mobileSize="text-[25px]" desktopSize="lg:text-[40px]">
        stack your kaps with one of our <u>industry-leading</u> pres
      </Title>
      <div className="mb-3" />
      <div className="max-w-[600px]">
        <Description>
          Experience unmatched energy with one of our elite pre-workout
          products. To ensure you&apos;re fully equipped, we&apos;re gifting you
          the kaps as a special bonus to add to the stack.
        </Description>
      </div>
      <div className="h-[600px] lg:h-full" />
      <HomeProducts />
      <div className="lg:hidden mt-10">
        <Button>Claim my free pump kaps now!</Button>
      </div>
      <Image
        className="lg:hidden absolute -z-10"
        src={`${process.env.CLOUDINARY_URL}/v1691948992/Klout/Banner%20Images/Pre-banner-1_dbe7aj.jpg`}
        fill
        objectFit="cover"
        objectPosition="top"
        alt="Pump"
      />
      <Image
        className="lg:absolute lg:block -z-10 hidden"
        src={`${process.env.CLOUDINARY_URL}/v1692075195/Klout/Banner%20Images/DesktopBanner2-v4_ovpzk0.jpg`}
        fill
        objectFit="cover"
        objectPosition="center"
        alt="Pump"
      />
    </div>
  );
}

export default HomeThirdSection;
