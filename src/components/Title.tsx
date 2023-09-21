import React from "react";

type TitleProps = {
  children: React.ReactNode;
  mobileSize: string;
  desktopSize: string;
};

function Title({ children, mobileSize, desktopSize }: TitleProps) {
  return (
    <h1
      className={`shadow-white text-white font-serif ${mobileSize} ${desktopSize} lg:mb-2 uppercase`}
    >
      {children}
    </h1>
  );
}

export default Title;
