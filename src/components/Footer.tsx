import React from "react";
import Description from "./Description";
import DescriptionFooter from "./footer/DescriptionFooter";
import Link from "next/link";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

function Footer() {
  return (
    <div className="border-t-2 rounded-lg mt-12">
      <div className="px-6 pt-12 lg:grid grid-cols-4 gap-10">
        <div className="flex flex-col justify-start">
          <Description>Disclaimer</Description>
          <div className="h-4" />
          <DescriptionFooter>
            † These statements have not been evaluated by the Food and Drug
            Administration. These products are not intended to diagnose, treat,
            cure or prevent any disease.
          </DescriptionFooter>
          <div className="h-8" />
        </div>
        <div className="flex flex-col justify-start">
          <Description>About KLOUT</Description>
          <div className="h-4" />
          <DescriptionFooter>
            KLOUT is the power to control one&apos;s circumstances. KLOUT is a
            force of nature. It chooses you. It pulls you to a higher place than
            that which you previously were.
          </DescriptionFooter>
        </div>
        <div />
        <div className="items-start justify-end hidden lg:flex">
          <Image
            className=""
            src={`${process.env.CLOUDINARY_URL}/v1692071165/Klout/Logos/KloutAlian-White_oijjex.png`}
            width={170}
            height={64}
            alt="Klout"
          />
        </div>
      </div>
      <p className="font-archivo text-white text-base text-center py-10 uppercase">
        &copy; 2023, Klout PWR
      </p>
      <Link
        href={"/"}
        className="flex items-center justify-center gap-1 bg-footer w-full py-7 border-t-2 lg:hidden"
      >
        <p className="text-white font-sans uppercase text-sm font-semibold">
          Back to Top
        </p>
        <ChevronUpIcon className="h-5 w-5 text-white" />
      </Link>
    </div>
  );
}

export default Footer;
