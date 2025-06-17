"use client";
import { useState } from "react";
import { GiHamburgerMenu, AiOutlineClose } from "../../icons";

export default function MobileMenu({
  onClick,
  isMenuOpen,
  setIsMenuOpen,
}: {
  onClick: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (arg: boolean) => void;
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <button
      className={`lg:hidden cursor-pointer p-2 rounded-md border hover:bg-gray-50 ${isFocused ? "border-brand-purple" : "border-transparent"}`}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <div className="flex">
        {isMenuOpen ? (
          <AiOutlineClose fontSize={20} strokeWidth={50} />
        ) : (
          <GiHamburgerMenu fontSize={20} />
        )}
      </div>
    </button>
  );
}