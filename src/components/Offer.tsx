import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import React from "react";

type OfferProps = {
  children: React.ReactNode;
};

function Offer({ children }: OfferProps) {
  return (
    <div className="flex items-center gap-1">
      <ExclamationTriangleIcon className="h-3 w-3 text-primary lg:w-5 lg:h-5" />
      <h4 className="text-primary font-sans uppercase font-bold shadow-green text-xs lg:text-lg">
        {children}
      </h4>
    </div>
  );
}

export default Offer;
