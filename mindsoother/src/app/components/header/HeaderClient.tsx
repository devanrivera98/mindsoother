"use client";
import React from "react";
import Link from "next/link";
import { LuBrain, LuHouse, LuBookmark, InformationCircle } from "../icons";
import NavLink from "./components/NavLink";
import { useState, useEffect, useRef } from "react";
import MobileMenu from "./components/MobileMenu";
import { usePathname } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/app/utils/supabase/client";

export default function HeaderClient() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState<boolean>(false);
  const [user, setUser] = useState<string | null | undefined>(undefined);
  const headerRef = useRef<HTMLDivElement>(null);
  const accountMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const supabase = createClient();

  useEffect(() => {
    const windowWatcher = () => {
      if (window.innerWidth > 1023) {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (headerRef.current && !headerRef.current.contains(target)) {
        setIsMenuOpen(false);
      }
      if (accountMenuRef.current && !accountMenuRef.current.contains(target)) {
        setIsAccountMenuOpen(false);
      }
    };
    window.addEventListener("resize", windowWatcher);
    window.addEventListener("mousedown", handleClickOutside);

    const { data: subscription } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN") {
          console.log("SIGNED_IN", session);
          console.log(session?.user.user_metadata.full_name);
          setUser(session?.user.email);
          // setUser(undefined)
        }
      },
    );

    return () => {
      window.removeEventListener("resize", windowWatcher);
      window.removeEventListener("mousedown", handleClickOutside);
      subscription?.subscription.unsubscribe();
    };
  }, [supabase]);

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
      <div className="flex justify-between mx-auto max-w-7xl lg:px-8 sm:px-6 px-4 py-4 h-full">
        {/* items center?? */}
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
          {user === undefined ? (
            <div className="bg-brand-purple px-1 py-1 rounded-md border-2 border-transparent">
              <div className="bg-gray-200 text-transparent px-4 py-1 rounded-md animate-pulse">
                Loading
              </div>
            </div>
          ) : user !== null ? (
            <>
              <div className="relative" ref={accountMenuRef}>
                <button
                  className="bg-brand-purple hover:bg-hover-purple cursor-pointer text-white px-4 py-2 rounded-md"
                  aria-label="Open account menu"
                  onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
                >
                  {user?.substring(0, 12) + "..."}
                </button>
                {isAccountMenuOpen && (
                  <ul className="absolute bg-gray-200 mt-[-5px] top-full h-[70px] w-full flex items-center justify-center rounded-b-md">
                    <li className="bg-red-500 text-white w-full mx-2 py-1 text-center rounded-md">
                      <button>Logout</button>
                    </li>
                  </ul>
                )}
              </div>
            </>
          ) : (
            <div className="px-1 py-2.5 rounded-md border-2 border-transparent focus-within:border-brand-purple">
              <Link
                className="bg-brand-purple hover:bg-hover-purple cursor-pointer text-white px-4 py-2 rounded-md"
                href="/sign-in"
              >
                Sign In
              </Link>
            </div>
          )}
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
          <Link
            className="flex justify-center w-full cursor-pointer bg-brand-purple hover:bg-hover-purple text-white py-2 rounded-md"
            href="/sign-in"
            onClick={() => handleNavClick(4)}
          >
            Sign In
          </Link>
          {user !== null && <h1>{user}</h1>}
        </div>
      </div>
    </header>
  );
}
