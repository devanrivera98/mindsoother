"use client";
import React from "react";
import Link from "next/link";
import { LuBrain, LuHouse, LuBookmark, InformationCircle } from "../icons";
import NavLink from "./components/NavLink";
import { useState, useEffect, useRef } from "react";
import MobileMenu from "./components/MobileMenu";
import { usePathname } from "next/navigation";
import type { User } from "@supabase/supabase-js";

interface HeaderClientProps {
    user: User | null;
  }

export default function HeaderClient({user}: HeaderClientProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

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
    if (window.innerWidth < 1023) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      ref={headerRef}
      className="shadow-md/10 w-full fixed z-50 bg-white h-[80px]"
    >
      <div className="flex justify-between mx-auto max-w-7xl lg:px-8 sm:px-6 px-4 py-4">
        <div className="flex items-center cursor-pointer">
          <Link href="/" className="flex items-center">
            <LuBrain fontSize={35} color={"#4f45e4"} />
            <div className="pl-2 font-bold hover:text-hover-purple text-xl">
              PsychSearch
            </div>
          </Link>
        </div>
        <div className={`hidden lg:flex items-center gap-x-7 `}>
          <NavLink
            Icon={LuHouse}
            name="Home"
            href="/"
            fontSize={20}
            strokeWidth={1.5}
            isActive={pathname === "/"}
            onClick={() => handleNavClick(0)}
          />
          <NavLink
            Icon={LuBrain}
            name="Technique Explorer"
            href="/explorer"
            fontSize={20}
            strokeWidth={1.5}
            isActive={pathname === "/explorer"}
            onClick={() => handleNavClick(1)}
          />
          <NavLink
            Icon={LuBookmark}
            name="My Library"
            href="/my-library"
            fontSize={20}
            strokeWidth={1.5}
            isActive={pathname === "/my-library"}
            onClick={() => handleNavClick(2)}
          />
          <NavLink
            Icon={InformationCircle}
            name="About"
            href="/about"
            fontSize={20}
            strokeWidth={5}
            isActive={pathname === "/about"}
            onClick={() => handleNavClick(3)}
          />
          <div className="px-1 py-2.5 rounded-md border-2 border-transparent focus-within:border-brand-purple">
            <Link className="bg-brand-purple hover:bg-hover-purple cursor-pointer text-white px-4 py-2 rounded-md" href="/sign-in">
              Sign In
            </Link>
          </div>
        </div>
        {/* Mobile Menu Button */}
        <MobileMenu
          // onClick={() => 1}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          aria-label="Toggle menu"
        />
      </div>
      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden flex flex-col gap-y-2 px-2 overflow-hidden transition-all duration-300 ease-in bg-white ${isMenuOpen ? " max-h-96 opacity-100" : "max-h-0 opacity-0 ease-out"} `}
        aria-hidden={!isMenuOpen}
      >
        <NavLink
          Icon={LuHouse}
          name="Home"
          href="/"
          fontSize={20}
          strokeWidth={1.5}
          isActive={pathname === "/"}
          onClick={() => handleNavClick(0)}
        />
        <NavLink
          Icon={LuBrain}
          name="Technique Explorer"
          href="/explorer"
          fontSize={20}
          strokeWidth={1.5}
          isActive={pathname === "/explorer"}
          onClick={() => handleNavClick(1)}
        />
        <NavLink
          Icon={LuBookmark}
          name="My Library"
          href="/my-library"
          fontSize={20}
          strokeWidth={1.5}
          isActive={pathname === "/my-library"}
          onClick={() => handleNavClick(2)}
        />
        <NavLink
          Icon={InformationCircle}
          name="About"
          href="/about"
          fontSize={20}
          strokeWidth={5}
          isActive={pathname === "/about"}
          onClick={() => handleNavClick(3)}
        />
        <div className="mx-2 pt-2 pb-4 flex items-center">
          <Link className="flex justify-center w-full cursor-pointer bg-brand-purple hover:bg-hover-purple text-white py-2 rounded-md" href="/sign-in" onClick={() => handleNavClick(4)}>
            Sign In
          </Link>
          { user !== null && 
          <h1>{user?.user_metadata.full_name}</h1>
          }
        </div>
      </div>
    </header>
  );
}