import React from "react";
import { cn } from "@/lib/utils";
import Marquee from "react-fast-marquee";

const Sponsors = () => {
  const sponsors = [
    {
      name: "Sponsor 1",
      logo: "data:image/png;base64,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",
      website: "#",
    }, //  Add actual paths
    {
      name: "Sponsor 2",
      logo: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/organization-logo%2C-community-logo-%288%29-design-template-6fe87cc1ca56011823b16ace7baebed0_screen.jpg?ts=1686643217",
      website: "#",
    },
    {
      name: "Sponsor 3",
      logo: "https://seeklogo.com/images/F/fao-food-and-agriculture-organizations-logo-295B691DDB-seeklogo.com.png",
      website: "#",
    },
    {
      name: "Sponsor 4",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Football_Kenya_Federation_logo.svg/800px-Football_Kenya_Federation_logo.svg.png",
      website: "#",
    },
    {
      name: "Sponsor 5",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Coat_of_arms_of_Kenya_%28Official%29.svg/1200px-Coat_of_arms_of_Kenya_%28Official%29.svg.png",
      website: "#",
    },
    {
      name: "Sponsor 1",
      logo: "data:image/png;base64,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",
      website: "#",
    }, //  Add actual paths
    {
      name: "Sponsor 2",
      logo: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/organization-logo%2C-community-logo-%288%29-design-template-6fe87cc1ca56011823b16ace7baebed0_screen.jpg?ts=1686643217",
      website: "#",
    },
    {
      name: "Sponsor 3",
      logo: "https://seeklogo.com/images/F/fao-food-and-agriculture-organizations-logo-295B691DDB-seeklogo.com.png",
      website: "#",
    },
    {
      name: "Sponsor 4",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Football_Kenya_Federation_logo.svg/800px-Football_Kenya_Federation_logo.svg.png",
      website: "#",
    },
    {
      name: "Sponsor 5",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Coat_of_arms_of_Kenya_%28Official%29.svg/1200px-Coat_of_arms_of_Kenya_%28Official%29.svg.png",
      website: "#",
    },
  ];

  return (
    <section className={cn("w-full py-12 px-4 sm:px-6 lg:px-8 bg-gray-100")}>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
          Our Sponsors
        </h2>
        <p className="mt-2 text-gray-600 max-w-3xl mx-auto">
          We are grateful for the support of our sponsors, who help make our
          programs possible.
        </p>
      </div>
      <div className="overflow-hidden w-full mx-auto max-w-4xl relative">
        <Marquee
          className="py-4"
          speed={40} // Adjust for speed
        >
          {sponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 mx-4" // Add horizontal margin between logos
              title={sponsor.name}
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-32 object-contain" // Adjust height as needed
              />
            </a>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Sponsors;
