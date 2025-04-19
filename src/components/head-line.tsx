import React from "react";

const HeadLine = ({ title }: { title: string }) => {
  return (
    <div className="rounded-full mx-auto w-fit border p-3 px-6">
      <span className="text-sm uppercase font-medium tracking-wider">
        {title}
      </span>
    </div>
  );
};

export default HeadLine;
