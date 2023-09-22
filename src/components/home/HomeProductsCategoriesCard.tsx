import { CheckBadgeIcon, FlagIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

type HomeProductsCategoriesCardProps = {
  data: ProductCategory;
};

function HomeProductsCategoriesCard({ data }: HomeProductsCategoriesCardProps) {
  return (
    <div className="border flex flex-col items-center gap-3 p-5">
      {data.icon === "flag" && <FlagIcon className="h-7 w-7 text-white" />}
      {data.icon === "check" && (
        <CheckBadgeIcon className="h-7 w-7 text-white" />
      )}
      {data.icon === "beaker" && (
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.5066 23.3775L16.8991 11.0925V4.2075L18.8252 1.8225C19.4143 1.08 18.8931 0 17.9415 0H9.05909C8.1074 0 7.58625 1.08 8.17538 1.8225L10.1014 4.2075V11.07L0.493945 23.355C-0.684329 24.84 0.380649 27 2.26135 27H24.7165C26.6199 27 27.6849 24.84 26.5066 23.3775Z"
            fill="white"
          />
        </svg>
      )}
      {data.icon === "search" && (
        <svg
          width="29"
          height="27"
          viewBox="0 0 29 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.4664 0H6.24375C4.66503 0 3.39922 1.2393 3.39922 2.78494V10.8891C7.02599 7.47757 12.7719 7.51934 16.3418 11.0005C19.9402 14.5374 19.9402 20.2744 16.3418 23.8112C15.8298 24.2986 15.2751 24.7024 14.692 25.0645H26.1555C27.7342 25.0645 29 23.8252 29 22.2795V8.35482L20.4664 0ZM19.0441 9.74729V2.08871L26.8666 9.74729H19.0441ZM9.79941 11.1398C6.24375 11.1398 3.39922 13.9247 3.39922 17.4059C3.39922 18.6313 3.75478 19.787 4.38058 20.7478L0 25.0645L1.97695 27L6.41442 22.7251C7.39578 23.3239 8.56204 23.672 9.79941 23.672C13.3551 23.672 16.1996 20.8871 16.1996 17.4059C16.1996 13.9247 13.3551 11.1398 9.79941 11.1398ZM9.79941 20.8871C7.83668 20.8871 6.24375 19.3275 6.24375 17.4059C6.24375 15.4843 7.83668 13.9247 9.79941 13.9247C11.7621 13.9247 13.3551 15.4843 13.3551 17.4059C13.3551 19.3275 11.7621 20.8871 9.79941 20.8871Z"
            fill="white"
          />
        </svg>
      )}
      <p className="text-white font-sans text-xs uppercase text-center font-semibold">
        {data.title}
      </p>
      <Link href={"/"}>
        <p className="underline text-gray-500 text-xs font-archivo">
          view details
        </p>
      </Link>
    </div>
  );
}

export default HomeProductsCategoriesCard;
