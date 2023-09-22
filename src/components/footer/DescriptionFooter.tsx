import React from "react";

type DescriptionFooterProps = {
  children: React.ReactNode;
};

function DescriptionFooter({ children }: DescriptionFooterProps) {
  return <p className="text-white font-sans text-xs">{children}</p>;
}

export default DescriptionFooter;
