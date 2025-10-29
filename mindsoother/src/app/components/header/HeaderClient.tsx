"use client";
import React from "react";
import Link from "next/link";
import { LuBrain, LuHouse, LuBookmark, InformationCircle } from "../icons";
import NavLink from "./components/NavLink";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { supabaseClient } from "@/app/utils/supabase/client";
import { getUser } from "./helper/getUser";
import MobileMenu from "./components/MobileMenu";
import HeaderNavbar from "./HeaderNavbar";

export default function HeaderClient() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState<boolean>(false);
  const [user, setUser] = useState<string | null | undefined>(undefined);
  const headerRef = useRef<HTMLDivElement>(null);
  const accountMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

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

    const { data: subscription } = supabaseClient.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN") {
          console.log("SIGNED_IN", session);
          console.log(session?.user.user_metadata.full_name);
          setUser(session?.user.email);
          // setUser(undefined)
        } else {
          setUser(null);
        }
      },
    );

      const fetchUser = async () => {
        const userEmail = await getUser();
        if (userEmail) {
          setUser(userEmail)
        }
      }

      fetchUser()

    return () => {
      window.removeEventListener("resize", windowWatcher);
      window.removeEventListener("mousedown", handleClickOutside);
      subscription?.subscription.unsubscribe();
    };
  }, [supabaseClient]);

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
      <HeaderNavbar
        pathname={pathname}
        handleNavClick={handleNavClick}
        user={user}
        accountMenuRef={accountMenuRef}
        isAccountMenuOpen={isAccountMenuOpen}
        setIsAccountMenuOpen={setIsAccountMenuOpen}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* Mobile Dropdown */}
      <nav
        className={`lg:hidden flex flex-col gap-y-2 px-2 overflow-hidden transition-all duration-300 ease-in bg-white ${isMenuOpen ? " max-h-96 opacity-100" : "max-h-0 opacity-0 ease-out"} `}
        aria-hidden={!isMenuOpen}
        aria-label="Mobile navigation"
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
          {user !== null && <span>{user}</span>}
        </div>
      </nav>
    </header>
  );
}
