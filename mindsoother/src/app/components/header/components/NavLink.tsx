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
      className={`flex items-center cursor-pointer p-2 rounded hover:text-brand-green  ${isActive ? "bg-hover-text-green text-brand-green" : "hover:bg-hover-text-green"}`}
      onClick={onClick}
    >
      <Icon size={fontSize} strokeWidth={strokeWidth} aria-hidden="true" />
      <span
        className={`pl-2 hover:text-brand-green ${isActive ? "text-brand-green" : ""}`}
      >
        {name}
      </span>
    </Link>
  );
}
