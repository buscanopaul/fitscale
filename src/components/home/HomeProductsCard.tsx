import { BoltIcon, EyeIcon, StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import Button from "../Button";
import Link from "next/link";
import Description from "../Description";

type HomeProductsCardProps = {
  data: Product;
};

function HomeProductsCard({ data }: HomeProductsCardProps) {
  return (
    <div className="relative border-2 flex flex-col items-center justify-between py-6 px-5 bg-black">
      <div className="block lg:hidden">
        <Image src={data.image} width={107} height={134} alt={data.title} />
      </div>
      <div className="lg:block hidden">
        <Image src={data.image} width={208} height={260} alt={data.title} />
      </div>
      <h5 className="font-sans font-extrabold text-xs lg:text-2xl uppercase max-w-[100px] lg:max-w-full shadow-white text-center py-2">
        {data.title}
      </h5>
      <div className="flex items-center mb-4">
        {Array.from({ length: data.rating }).map((_, index) => (
          <StarIcon className="h-3 w-3 lg:w-5 lg:h-5 text-white" key={index} />
        ))}
      </div>
      <div className="hidden lg:block">
        <Description>{data.description}</Description>
      </div>
      <div className="hidden lg:flex self-start mt-8 gap-1">
        <h5 className="font-sans text-white underline font-extrabold text-base">
          ${data.price.toFixed(2)}
        </h5>
        <p className="text-gray-400">~</p>
        <h5 className="font-sans text-base font-semibold text-gray-400">
          25 SERV.
        </h5>
      </div>
      <div className="flex flex-col gap-2 lg:hidden">
        {data.advantages.map((advantage) => (
          <div
            key={advantage.id}
            className="flex items-center gap-2 justify-start"
          >
            {(advantage.title == "Insane power" ||
              advantage.title == "Crazy Energy" ||
              advantage.title == "Low-Caffeine") && (
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.175 11.7L9.334 5.3755H7.15V1.3L3.9 7.6245H6.175V11.7ZM6.5 0C8.2875 0 9.815 0.65 11.0825 1.9175C12.35 3.185 13 4.7125 13 6.5C13 8.2875 12.35 9.815 11.0825 11.0825C9.815 12.35 8.2875 13 6.5 13C4.7125 13 3.185 12.35 1.9175 11.0825C0.65 9.815 0 8.2875 0 6.5C0 4.7125 0.65 3.185 1.9175 1.9175C3.185 0.65 4.7125 0 6.5 0Z"
                  fill="white"
                />
              </svg>
            )}
            {(advantage.title == "Elevated Focus" ||
              advantage.title == "Detailed Focus" ||
              advantage.title == "Crash-Free") && (
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.92308 3C6.42232 3 5.94207 3.21071 5.58798 3.58579C5.23389 3.96086 5.03497 4.46957 5.03497 5C5.03497 5.53043 5.23389 6.03914 5.58798 6.41421C5.94207 6.78929 6.42232 7 6.92308 7C7.42384 7 7.90409 6.78929 8.25818 6.41421C8.61227 6.03914 8.81119 5.53043 8.81119 5C8.81119 4.46957 8.61227 3.96086 8.25818 3.58579C7.90409 3.21071 7.42384 3 6.92308 3ZM6.92308 8.33333C6.08848 8.33333 5.28807 7.98214 4.69792 7.35702C4.10777 6.7319 3.77622 5.88406 3.77622 5C3.77622 4.11594 4.10777 3.2681 4.69792 2.64298C5.28807 2.01786 6.08848 1.66667 6.92308 1.66667C7.75768 1.66667 8.55809 2.01786 9.14824 2.64298C9.73839 3.2681 10.0699 4.11594 10.0699 5C10.0699 5.88406 9.73839 6.7319 9.14824 7.35702C8.55809 7.98214 7.75768 8.33333 6.92308 8.33333ZM6.92308 0C3.77622 0 1.08881 2.07333 0 5C1.08881 7.92667 3.77622 10 6.92308 10C10.0699 10 12.7573 7.92667 13.8462 5C12.7573 2.07333 10.0699 0 6.92308 0Z"
                  fill="white"
                />
              </svg>
            )}
            {(advantage.title == "Intense Pumps" ||
              advantage.title == "Unrivaled Drive" ||
              advantage.title == "Unreal Pumps") && (
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 11.078C0 11.078 0.722068 2.95365 2.88827 0L6.49861 0.722163L5.77655 2.95365H4.33241V8.12434H5.05448C6.49861 5.9073 9.48798 5.09847 11.2931 5.9073C13.676 7.0122 13.4594 10.3414 11.2931 11.8146C9.56018 12.9989 4.33241 14.0316 0 11.078Z"
                  fill="white"
                />
              </svg>
            )}
            {advantage.title == "Max Endurance" && (
              <svg
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.82371 5.46682C8.66356 5.26682 8.46859 5.09348 8.28755 4.92014C7.82103 4.52013 7.29184 4.23345 6.84621 3.81344C5.80872 2.84008 5.57894 1.23337 6.24043 0C5.57894 0.153338 5.00101 0.500014 4.50664 0.880025C2.70322 2.26673 1.99299 4.71347 2.84248 6.81353C2.87033 6.8802 2.89818 6.94686 2.89818 7.03353C2.89818 7.1802 2.79374 7.31354 2.65448 7.36688C2.49433 7.43355 2.32722 7.39354 2.19492 7.28687C2.15314 7.25354 2.12529 7.22021 2.09744 7.17354C1.31062 6.22018 1.18528 4.85347 1.71447 3.76011C0.551649 4.6668 -0.0819848 6.20018 0.00853438 7.64688C0.0503124 7.98023 0.0920905 8.31357 0.210462 8.64691C0.307944 9.04692 0.495945 9.44694 0.704835 9.80028C1.45684 10.9536 2.75892 11.7803 4.15849 11.947C5.64857 12.127 7.2431 11.867 8.38504 10.8803C9.65927 9.77361 10.1049 8.00023 9.45038 6.48018L9.35986 6.30685C9.21364 6.00017 8.82371 5.46682 8.82371 5.46682ZM6.62339 9.66694C6.42843 9.82695 6.10813 10.0003 5.85746 10.067C5.07761 10.3336 4.29775 9.96028 3.83819 9.52027C4.66679 9.3336 5.16116 8.74691 5.30739 8.15357C5.42576 7.62022 5.20294 7.1802 5.11242 6.66686C5.02887 6.17351 5.04279 5.7535 5.23079 5.29348C5.36309 5.54682 5.50235 5.80017 5.66946 6.00017C6.20561 6.66686 7.04814 6.9602 7.22918 7.86689C7.25703 7.96023 7.27096 8.05356 7.27096 8.15357C7.29184 8.70025 7.04118 9.30026 6.62339 9.66694Z"
                  fill="white"
                />
              </svg>
            )}
            {advantage.title == "Hyper Hydration" && (
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.88208 7.5C8.50594 9.9108 6.5731 12 4.00109 12C1.42908 12 -0.511209 9.9404 0.120099 7.5C0.507991 6 2.44869 3.75 4.00109 0C5.55349 3.7496 7.49419 6 7.88208 7.5Z"
                  fill="white"
                />
              </svg>
            )}
            <p className="font-sans uppercase text-[10px] font-semibold underline">
              {advantage.title}
            </p>
          </div>
        ))}
      </div>
      <Link href={"/"} className="w-full mt-6 text-center">
        <p className="bg-primary border font-sans uppercase font-bold shadow-white text-xs py-2 lg:hidden">
          More Info
        </p>
        <p className="bg-primary border font-sans uppercase font-bold shadow-white text-base py-3 rounded-sm lg:block hidden">
          View Product Details
        </p>
      </Link>
    </div>
  );
}

export default HomeProductsCard;
