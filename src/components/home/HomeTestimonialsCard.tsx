import { CheckBadgeIcon, StarIcon } from "@heroicons/react/24/solid";
import React from "react";
import Description from "../Description";

type HomeTestimonialsCardProps = {
  data: Testimonial;
};

function HomeTestimonialsCard({ data }: HomeTestimonialsCardProps) {
  return (
    <div className="bg-black border-2 px-6 flex flex-col justify-between pb-5">
      <div className="w-[300px] lg:w-auto">
        <div className="flex justify-end mb-4">
          <svg
            width="31"
            height="22"
            viewBox="0 0 31 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.7857 21.6813H26.2143L30.5 13.0088V0H17.6429V13.0088H24.0714M2.64286 21.6813H9.07143L13.3571 13.0088V0H0.5V13.0088H6.92857L2.64286 21.6813Z"
              fill="#5AB417"
            />
          </svg>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center mb-3">
            {Array.from({ length: data.ratings }).map((_, index) => (
              <StarIcon className="h-7 w-7 text-primary" key={index} />
            ))}
          </div>
          <h5 className="text-white shadow-white-light font-sans uppercase font-extrabold mb-3">
            {data.title}
          </h5>
          <Description>{data.description}</Description>
        </div>
      </div>
      <div className="items-center gap-1 hidden md:flex">
        <CheckBadgeIcon className="h-4 w-4 text-white" />
        <p className="text-white font-sans text-xs">{data.author} | USA</p>
      </div>
    </div>
  );
}

export default HomeTestimonialsCard;
