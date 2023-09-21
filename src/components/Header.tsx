import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="top-5 w-full flex items-center justify-between px-6 max-w-screen-2xl mx-auto py-5">
      <Link href={"/"}>
        <div className="hidden lg:block">
          <Image
            src={`${process.env.CLOUDINARY_URL}/v1692071165/Klout/Logos/KloutAlian-White_oijjex.png`}
            width={170}
            height={64}
            alt="Klout"
          />
        </div>
        <div className="lg:hidden">
          <Image
            src={`${process.env.CLOUDINARY_URL}/v1691872483/Klout/Logos/Alian-Green-min_d4vyct.png`}
            width={37}
            height={41}
            alt="Klout"
          />
        </div>
      </Link>
      <Link
        href={"/"}
        className="text-primary lg:block hidden font-sans font-bold text-xl shadow-green"
      >
        #PWRTOCONTROL
      </Link>
    </div>
  );
}

export default Header;
