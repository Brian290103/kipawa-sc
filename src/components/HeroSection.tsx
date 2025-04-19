import React from "react";
import Link from "next/link";

interface HeroSectionProps {
  imageUrl: string;
  title: string;
  description: string;
  breadcrumbs: { label: string; href: string }[];
}

const HeroSection: React.FC<HeroSectionProps> = ({
  imageUrl,
  title,
  description,
  breadcrumbs,
}) => {
  return (
    <article
      className={`relative bg-fixed min-h-screen flex items-center justify-start bg-cover bg-top`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="w-full h-full bg-black/30 absolute top-0 left-0 right-0 bottom-0"></div>
      <div className="flex w-full max-w-7xl mx-auto  justify-center p-5 z-10 relative flex-col ">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-extrabold">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-3xl">
            {description}
          </p>
        )}
        <div className="pt-5">
          <ul className="flex text-lg text-white items-center gap-3">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                <li className="">
                  <Link
                    href={crumb.href}
                    className="hover:text-gray-300 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                </li>
                {index < breadcrumbs.length - 1 && <li className="">/</li>}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default HeroSection;
