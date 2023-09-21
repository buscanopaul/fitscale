import Image from "next/image";
import React from "react";
import Button from "../Button";
import Offer from "../Offer";
import Title from "../Title";
import Link from "next/link";
import {
  ArrowRightCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";
import HomeBenefits from "./HomeBenefits";
import Description from "../Description";

function HomeSecondSection() {
  return (
    <div className="relative h-screen w-full lg:border-b-4 rounded-lg">
      {/* <div className="absolute -top-60 lg:-top-24 lg:right-10 h-screen">
        <div className="lg:hidden px-6">
          <Button>Claim my free pump kaps now!</Button>
          <div className="mt-5 flex justify-center">
            <Offer>This Offer Ends Soon!</Offer>
          </div>
        </div>
        <div className="mt-10">
          <div className="px-6 flex flex-col lg:items-end justify-end">
            <Title mobileSize="text-[23px]" desktopSize="lg:text-[40px]">
              Try the king of kaps <u>For Free</u>
            </Title>
            <Description isTextRight>
              Our industry-leading Pump Kaps are your new secret weapon for
              unlocking skin-splitting pumps that not only feel incredible but
              make you look absolutely diced.
            </Description>
            <Link
              href={"/"}
              className="flex lg:hidden underline decoration-primary gap-2 mt-10"
            >
              <h4 className="text-primary font-sans uppercase font-bold shadow-green text-xs h-[650px]">
                View Product Breakdown
              </h4>
              <ArrowRightCircleIcon className="h-4 w-4 text-primary" />
            </Link>
            <div className="lg:hidden mb-12 mt-72">
              <Button>Claim my free pump kaps now!</Button>
            </div>
          </div>
          <div className="flex justify-end">
            <HomeBenefits />
          </div>
        </div>
      </div> */}
      <div className="relative h-screen w-full -z-10 lg:absolute">
        <Image
          className="lg:hidden -z-10"
          src={`${process.env.CLOUDINARY_URL}/v1691874657/Klout/Banner%20Images/KloutHero-BG2_pp3nvj.jpg`}
          fill
          objectFit="cover"
          objectPosition="top"
          alt="Pump"
        />
      </div>
      <Image
        className="hidden md:block -z-10 h-screen"
        src={`${process.env.CLOUDINARY_URL}/v1692077772/Klout/Banner%20Images/Realfinaldesktop_dckdaz.jpg`}
        fill
        objectFit="cover"
        objectPosition="top"
        alt="Pump"
      />
    </div>
  );
}

export default HomeSecondSection;
