import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  text: string;
  colors: {
    bg: string;
    text: string;
    hoverBg: string;
  };
  icon?: React.ReactNode;
  className?: string; // Added for more flexibility
}

/**
 * Reusable button component with customizable colors and icon.
 */
export const KipawaButton: React.FC<ButtonProps> = ({
  text,
  colors,
  icon,
  className,
}) => {
  return (
    <button
      className={cn(
        "px-5 py-3 md:py-5 flex  flex items-center justify-center duration-300 group items-center gap-4  rounded-full",
        `bg-${colors.bg}`,
        `text-${colors.text}`,
        `hover:bg-${colors.hoverBg}`,
        className, // Added className prop to allow for more customization
      )}
    >
      <span className="uppercase tracking-wider font-semibold text-sm sm:text-base">
        {text}
      </span>
      {icon && ( // Render the icon if it exists
        <>{icon}</>
      )}
    </button>
  );
};
