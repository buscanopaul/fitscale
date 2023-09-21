import React from "react";

type DescriptionProps = {
  children: React.ReactNode;
  isLarge?: boolean;
  isTextRight?: boolean;
};

function Description({ children, isLarge, isTextRight }: DescriptionProps) {
  return (
    <p
      className={`font-sans text-white text-sm ${
        isLarge && "lg:text-lg"
      } lg:max-w-2xl ${isTextRight ? "lg:text-right" : null}`}
    >
      {children}
    </p>
  );
}

export default Description;
