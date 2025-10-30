import Link from "next/link";
import { LuBrain, LuHouse, LuBookmark, InformationCircle } from "../icons";
import NavLink from "./components/NavLink";
import MobileMenu from "./components/MobileMenu";
import signUserOut from "./helper/signUserOut";

interface HeaderNavProps {
  pathname: string;
  handleNavClick: (index: number) => void;
  user: string | null | undefined;
  setUser: (input: string | null | undefined | "Sign In") => void;
  accountMenuRef: React.RefObject<HTMLDivElement | null>;
  isAccountMenuOpen: boolean;
  setIsAccountMenuOpen: (boolean: boolean) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (boolean: boolean) => void;
}

export default function HeaderNavbar({
  pathname,
  handleNavClick,
  user,
  setUser,
  accountMenuRef,
  isAccountMenuOpen,
  setIsAccountMenuOpen,
  isMenuOpen,
  setIsMenuOpen,
}: HeaderNavProps) {
  async function signOut() {
    const result = await signUserOut(user);
    setUser(result);
  }

  return (
    <nav className="flex justify-between mx-auto max-w-7xl lg:px-8 sm:px-6 px-4 py-4 h-full">
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
        {user === undefined || user === null ? (
          <div className="bg-brand-purple px-1 py-1 rounded-md border-2 border-transparent">
            <div className="bg-gray-200 text-transparent px-4 py-1 rounded-md animate-pulse">
              Loading
            </div>
          </div>
        ) : typeof user === "string" && user !== "Sign In" ? (
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
                  <li className="bg-red-500 hover:bg-red-600 text-white w-full mx-2 py-1 text-center rounded-md">
                    <button
                      className="hover:cursor-pointer"
                      onClick={() => signOut()}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </>
        ) : user === "Sign In" ? (
          <div className="px-1 py-2.5 rounded-md border-2 border-transparent focus-within:border-brand-purple">
            <Link
              className="bg-brand-purple hover:bg-hover-purple cursor-pointer text-white px-4 py-2 rounded-md"
              href="/sign-in"
            >
              Sign In
            </Link>
          </div>
        ) : null}
      </div>
      {/* Mobile Menu Button */}
      <MobileMenu
        // onClick={() => 1}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        aria-label="Toggle menu"
      />
    </nav>
  );
}
