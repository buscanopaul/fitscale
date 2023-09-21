import Link from "next/link";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
};

function Button({ children }: ButtonProps) {
  return (
    <div className="drop-shadow-2xl box-shadow-white">
      <Link href={"/"}>
        <h5 className="text-white bg-primary font-sans shadow-white-light font-bold uppercase border-2 border-white text-center p-4 text-sm rounded-sm">
          {children}
        </h5>
      </Link>
    </div>
  );
}

export default Button;
