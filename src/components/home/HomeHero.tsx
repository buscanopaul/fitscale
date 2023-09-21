import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  ExclamationTriangleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";

function HomeHero() {
  return (
    <div className="max-w-screen-2xl mx-auto px-6">
      <div className="lg:hidden">
        <Image
          src={`${process.env.CLOUDINARY_URL}/v1691874657/Klout/Banner%20Images/KloutHero-BG1_ywuykx.jpg`}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          alt="background_klout"
        />
      </div>
      <div className="md:block hidden">
        <Image
          src={`${process.env.CLOUDINARY_URL}/v1692070790/Klout/Banner%20Images/FinalDesktop_gzxmer.jpg`}
          layout="fill"
          objectFit="cover"
          alt="background_klout"
        />
      </div>
      <div className="flex items-center justify-center gap-1 mb-4 absolute -top-10 lg:-top-16 left-1/2 transform -translate-x-1/2 z-10">
        <ExclamationTriangleIcon className="h-3 w-3 text-primary lg:w-5 lg:h-5" />
        <h4 className="text-primary font-sans uppercase font-bold shadow-green text-xs lg:text-lg">
          Limited Time Offer!
        </h4>
      </div>
      <div className="relative flex flex-col items-center mb-12">
        <h1 className="shadow-white text-white font-serif text-3xl lg:text-5xl lg:mb-2 uppercase">
          Get <u>Free</u> Pump Kaps
        </h1>
        <div className="flex gap-1">
          <h3 className="shadow-white text-white font-serif text-sm lg:text-xl uppercase">
            When you buy
          </h3>
          <Link href={"/"} className="flex items-start lg:gap-3 gap-1">
            <h3 className="shadow-white text-white font-serif text-sm lg:text-xl uppercase">
              <u>any pre-workout</u>
            </h3>
            <ArrowRightCircleIcon className="h-4 w-4 text-white lg:w-4 lg:h-4 lg:mt-[2px] mt-[1px]" />
          </Link>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto">
        <div className="relative">
          <h3 className="text-white font-serif text-base lg:text-2xl uppercase max-w-[190px] lg:max-w-[300px] pt-3">
            Pump Kaps Retail Price: <s className="text-gray-400">$35.99</s>{" "}
            <u>free!</u>
          </h3>
        </div>
        <div className="relative float-right">
          <h3 className="text-white font-serif text-base lg:text-2xl uppercase max-w-[150px] lg:max-w-[300px] pt-3 text-right">
            Plus, Experience one of our <u>Killer pre-workouts!</u>
          </h3>
        </div>
      </div>
      <div className="block md:hidden">
        <Image
          src={`${process.env.CLOUDINARY_URL}/v1691874658/Klout/Banner%20Images/KloutBannerProducts_lyu7zq.png`}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          alt="background_klout"
        />
      </div>
    </div>
  );
}

export default HomeHero;
