import React from "react";
import Link from "next/link";

interface IconInterface {
  Icon: React.ElementType;
  name: string;
  fontSize?: number;
  strokeWidth?: number;
  isActive: boolean;
  href: string;
  onClick: () => void;
}

export default function NavLink({
  isActive,
  onClick,
  Icon,
  name,
  fontSize,
  strokeWidth,
  href,
}: IconInterface) {
  return (
    <Link
      href={href}
      className={`flex items-center cursor-pointer p-2 rounded hover:text-brand-purple  ${isActive ? "bg-indigo-50 text-brand-purple" : "hover:bg-gray-50"}`}
      onClick={onClick}
    >
      <Icon size={fontSize} strokeWidth={strokeWidth} />
      <span
        className={`pl-2 hover:text-indigo-600 ${isActive ? "text-indigo-600" : ""}`}
      >
        {name}
      </span>
    </Link>
  );
}
