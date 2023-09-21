import Image from "next/image";
import React from "react";
import Description from "../Description";

type HomeBenefitsCardProps = {
  data: Benefit;
};

function HomeBenefitsCard({ data }: HomeBenefitsCardProps) {
  return (
    <div className="p-6 border flex flex-col items-center">
      <h5 className="text-white font-sans uppercase font-bold text-lg mb-2">
        {data.title}
      </h5>
      {data.rating === 7 && (
        <Image
          className="mb-6"
          src={`${process.env.CLOUDINARY_URL}/v1691885020/Klout/Misc%20Assets/710-min_bqwmqo.png`}
          width={200}
          height={200}
          alt="rating"
        />
      )}
      {data.rating === 8 && (
        <Image
          className="mb-6"
          src={`${process.env.CLOUDINARY_URL}/v1691885020/Klout/Misc%20Assets/810-min_ocdggb.png`}
          width={200}
          height={200}
          alt="rating"
        />
      )}
      <Description isLarge={false}>{data.description}</Description>
    </div>
  );
}

export default HomeBenefitsCard;
