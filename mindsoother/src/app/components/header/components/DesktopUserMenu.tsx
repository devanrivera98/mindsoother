"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import signUserOut from "../helper/signUserOut";
import { useRouter } from "next/navigation";

export default function DesktopUserMenu({
  user,
  setUser,
  accountMenuRef,
  isAccountMenuOpen,
  setIsAccountMenuOpen,
}: any) {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  async function signOut() {
    const result = await signUserOut(user);
    setUser(result);
    window.location.reload();
    router.refresh();
  }

  if (!isMounted || user === null) {
    return (
      <>
        <div className="bg-brand-green px-1 py-1 rounded-md border-2 border-transparent">
          <div className="bg-gray-200 text-transparent px-4 py-1 rounded-md animate-pulse">
            Loading
          </div>
        </div>
      </>
    );
  }

  if (isMounted && typeof user === "string" && user !== "Sign In") {
    return (
      <div className="relative" ref={accountMenuRef}>
        <button
          className="bg-brand-green hover:bg-hover-dark-green cursor-pointer text-white px-4 py-2 rounded-md"
          aria-label="Open account menu"
          onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
        >
          {user.substring(0, 12) + "..."}
        </button>

        {isAccountMenuOpen && (
          <ul className="absolute bg-gray-200 mt-[-5px] top-full h-[70px] w-full flex items-center justify-center rounded-b-md">
            <li className="bg-red-500 hover:bg-red-600 text-white w-full mx-2 py-1 text-center rounded-md">
              <button
                className="hover:cursor-pointer"
                onClick={async () => {
                  await signOut();
                  setIsAccountMenuOpen(false);
                }}
              >
                Sign Out
              </button>
            </li>
          </ul>
        )}
      </div>
    );
  }

  return (
    <div className="px-1 py-2.5 rounded-md border-2 border-transparent focus-within:border-brand-green">
      <Link
        className="bg-brand-green hover:bg-hover-dark-green cursor-pointer text-white px-4 py-2 rounded-md"
        href="/sign-in"
      >
        Sign In
      </Link>
    </div>
  );
}
