"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { supabaseClient } from "@/app/utils/supabase/client";
import { getUser } from "./helper/getUser";
import HeaderNavbar from "./Navbar";
import MobileNavMenu from "./MobileNavMenu";

export default function HeaderClient() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState<boolean>(false);
  const [user, setUser] = useState<string | null | undefined | "Sign In">(
    undefined,
  );
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
          setUser("Sign In");
        }
      },
    );

    const fetchUser = async () => {
      const userEmail = await getUser();
      if (userEmail) {
        setUser(userEmail);
      } else {
        setUser("Sign In");
      }
    };

    fetchUser();

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
        setUser={setUser}
        accountMenuRef={accountMenuRef}
        isAccountMenuOpen={isAccountMenuOpen}
        setIsAccountMenuOpen={setIsAccountMenuOpen}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* Mobile Dropdown */}
      <MobileNavMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        pathname={pathname}
        user={user}
        setUser={setUser}
      />
    </header>
  );
}
