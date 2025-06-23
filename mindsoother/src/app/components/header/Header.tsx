"use client";
import React from "react";
import { LuBrain, LuHouse, LuBookmark, InformationCircle } from "../icons";
import NavLink from "./components/NavLink";
import { useState, useEffect, useRef } from "react";
import MobileMenu from "./components/MobileMenu";

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const windowWatcher = () => {
      if (window.innerWidth > 1023) {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", windowWatcher);
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", windowWatcher);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <header ref={headerRef} className="shadow-md/10 w-full fixed z-50 bg-white">
      <div className="flex justify-between mx-auto max-w-7xl lg:px-8 sm:px-6 px-4 py-4">
        <div className="flex items-center cursor-pointer">
          <LuBrain fontSize={35} color={"#4f45e4"} />
          <div className="pl-2 font-bold hover:text-hover-purple text-xl">
            MindSoother
          </div>
        </div>
        <div className={`hidden lg:flex items-center gap-x-7 `}>
          <NavLink
            Icon={LuHouse}
            name="Home"
            fontSize={20}
            strokeWidth={1.5}
            isActive={activeIndex === 0}
            onClick={() => handleNavClick(0)}
          />
          <NavLink
            Icon={LuBrain}
            name="Technique Explorer"
            fontSize={20}
            strokeWidth={1.5}
            isActive={activeIndex === 1}
            onClick={() => handleNavClick(1)}
          />
          <NavLink
            Icon={LuBookmark}
            name="Saved Technique"
            fontSize={20}
            strokeWidth={1.5}
            isActive={activeIndex === 2}
            onClick={() => handleNavClick(2)}
          />
          <NavLink
            Icon={InformationCircle}
            name="About"
            fontSize={20}
            strokeWidth={5}
            isActive={activeIndex === 3}
            onClick={() => handleNavClick(3)}
          />
          <div className="p-0.5 rounded-md border-2 border-transparent focus-within:border-brand-purple">
            <button className="bg-brand-purple hover:bg-hover-purple cursor-pointer text-white px-4 py-2 rounded-md">
              Sign In
            </button>
          </div>
        </div>
        {/* Mobile Menu Button */}
        <MobileMenu
          onClick={() => 1}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>
      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden flex flex-col gap-y-2 px-2 overflow-hidden transition-all duration-300 ease-in ${isMenuOpen ? " max-h-96 opacity-100" : "max-h-0 opacity-0 ease-out"} `}
        aria-hidden={!isMenuOpen}
      >
        <NavLink
          Icon={LuHouse}
          name="Home"
          fontSize={20}
          strokeWidth={1.5}
          isActive={activeIndex === 0}
          onClick={() => handleNavClick(0)}
        />
        <NavLink
          Icon={LuBrain}
          name="Technique Explorer"
          fontSize={20}
          strokeWidth={1.5}
          isActive={activeIndex === 1}
          onClick={() => handleNavClick(1)}
        />
        <NavLink
          Icon={LuBookmark}
          name="Saved Technique"
          fontSize={20}
          strokeWidth={1.5}
          isActive={activeIndex === 2}
          onClick={() => handleNavClick(2)}
        />
        <NavLink
          Icon={InformationCircle}
          name="About"
          fontSize={20}
          strokeWidth={5}
          isActive={activeIndex === 3}
          onClick={() => handleNavClick(3)}
        />
        <div className="mx-2 pb-4">
          <button className="w-full cursor-pointer bg-brand-purple hover:bg-hover-purple text-white py-2 rounded-md">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}
