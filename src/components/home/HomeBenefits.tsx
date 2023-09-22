import React from "react";
import Title from "../Title";
import Description from "../Description";
import Image from "next/image";
import Benefits from "../../mocks/benefits.json";
import HomeBenefitsCard from "./HomeBenefitsCard";
import Button from "../Button";

function HomeBenefits() {
  return (
    <div className="relative border-y-4 lg:border-none rounded-lg py-10 lg:w-[65%] px-6 mt-5">
      <div>
        <div className="lg:hidden mb-10">
          <Title mobileSize="text-[27px]" desktopSize="lg:text-[40px]">
            Out of this would pumps...
          </Title>
          <Description>
            Meet KLOUT&apos;s Pump Kaps; formulated with cutting-edge
            ingredients, they promise skin-splitting pumps that make every
            muscle and vein stand out. With Pump Kaps, elevate both your
            performance and appearance to champion levels.
          </Description>
        </div>
        <div className="flex flex-col gap-5 lg:flex-row">
          {Benefits.map((benefit) => (
            <HomeBenefitsCard data={benefit} key={benefit.id} />
          ))}
        </div>
        <div className="mt-10">
          <Button>Claim my free pump kaps now!</Button>
        </div>
      </div>
    </div>
  );
}

export default HomeBenefits;
