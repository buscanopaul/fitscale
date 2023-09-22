import React from "react";

type TitleProps = {
  children: React.ReactNode;
  mobileSize: string;
  desktopSize: string;
  isHaveShadow?: boolean | true;
};

function Title({
  children,
  mobileSize,
  desktopSize,
  isHaveShadow,
}: TitleProps) {
  return (
    <h1
      className={`${
        isHaveShadow && "shadow-white"
      } text-white font-serif ${mobileSize} ${desktopSize} lg:mb-2 uppercase`}
    >
      {children}
    </h1>
  );
}

export default Title;
