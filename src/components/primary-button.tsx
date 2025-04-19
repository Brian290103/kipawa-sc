import React from "react";
import { ArrowRight } from "lucide-react";

const PrimaryButton = () => {
  return (
    <button className={"px-5 py-53 rounded-full bg-black text-white"}>
      <span className="">Contact Us</span>
      <ArrowRight />
    </button>
  );
};

export default PrimaryButton;
