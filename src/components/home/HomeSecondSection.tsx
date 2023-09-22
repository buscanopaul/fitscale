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
    <div className="relative h-full w-full lg:border-b-4 rounded-lg flex flex-col lg:items-end">
      <div className="px-6 -top-72 absolute lg:-top-24 w-full flex flex-col lg:items-end">
        <div className="lg:hidden">
          <Button>Claim my free pump kaps now!</Button>
          <div className="flex flex-col items-center mt-5 mb-10">
            <Offer>This offer ends soon!</Offer>
          </div>
        </div>
        <Title
          mobileSize="text-[23px]"
          desktopSize="lg:text-[40px]"
          isHaveShadow
        >
          Try the king of kaps <u>For Free</u>
        </Title>
        <Description isTextRight>
          Our industry-leading Pump Kaps are your new secret weapon for
          unlocking skin-splitting pumps that not only feel incredible but make
          you look absolutely diced.
        </Description>
        <Link
          href={"/"}
          className="flex lg:hidden underline decoration-primary gap-2 mt-10"
        >
          <h4 className="text-primary font-sans uppercase font-bold shadow-green text-xs">
            View Product Breakdown
          </h4>
          <ArrowRightCircleIcon className="h-4 w-4 text-primary" />
        </Link>
      </div>
      <div className="lg:h-auto h-[650px]" />
      <div className="lg:hidden block mb-10 px-6">
        <Button>Claim my free pump kaps now!</Button>
      </div>
      <HomeBenefits />
      <Image
        className="lg:hidden absolute -z-10"
        src={`${process.env.CLOUDINARY_URL}/v1691874657/Klout/Banner%20Images/KloutHero-BG2_pp3nvj.jpg`}
        fill
        objectFit="contain"
        objectPosition="top"
        alt="Pump"
      />
      <Image
        className="lg:absolute lg:block -z-10 hidden"
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
