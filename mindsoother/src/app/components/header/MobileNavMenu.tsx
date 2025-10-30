import Link from "next/link";
import { InformationCircle, LuBookmark, LuBrain, LuHouse } from "../icons";
import NavLink from "./components/NavLink";
import signUserOut from "./helper/signUserOut";

interface MobileNavMenuInterface {
  isMenuOpen: boolean;
  setIsMenuOpen: (boolean: boolean) => void;
  pathname: string;
  user: string | null | undefined | "Sign In";
  setUser: (input: string | null | undefined | "Sign In") => void;
}

export default function MobileNavMenu({
  isMenuOpen,
  setIsMenuOpen,
  pathname,
  user,
  setUser,
}: MobileNavMenuInterface) {

  async function handleMobileSignOut() {
    const result = await signUserOut(user);
    setUser(result);
    handleMobileNavClick()
  }

  function handleMobileNavClick() {
    setIsMenuOpen(false);
    (document.activeElement as HTMLElement | null)?.blur();
  }

  return (
    <nav
      className={`lg:hidden flex flex-col gap-y-2 px-2 overflow-hidden transition-all duration-300 ease-in bg-gray-100 ${isMenuOpen ? " max-h-96 opacity-100" : "max-h-0 opacity-0 ease-out"} `}
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
        onClick={handleMobileNavClick}
      />
      <NavLink
        Icon={LuBrain}
        name="Technique Explorer"
        href="/explorer"
        fontSize={20}
        strokeWidth={1.5}
        isActive={pathname === "/explorer"}
        onClick={handleMobileNavClick}
      />
      <NavLink
        Icon={LuBookmark}
        name="My Library"
        href="/my-library"
        fontSize={20}
        strokeWidth={1.5}
        isActive={pathname === "/my-library"}
        onClick={handleMobileNavClick}
      />
      <NavLink
        Icon={InformationCircle}
        name="About"
        href="/about"
        fontSize={20}
        strokeWidth={5}
        isActive={pathname === "/about"}
        onClick={handleMobileNavClick}
      />
      <div className="mx-2 pt-2 pb-4 flex items-center grid grid-cols-1 gap-y-4">
        {user !== "Sign In" ? (
          <>
            <div className="flex justify-center w-full cursor-pointer bg-brand-purple hover:bg-hover-purple text-white py-2 rounded-md">
              <span>{user}</span>
            </div>
            <button
              className="flex justify-center w-full cursor-pointer bg-red-500 hover:bg-hover-purple text-white py-2 rounded-md"
              onClick={() => handleMobileSignOut()}
            >
              Sign Out
            </button>
          </>
        ) : (
          <Link
            className="flex justify-center w-full cursor-pointer bg-brand-purple hover:bg-hover-purple text-white py-2 rounded-md"
            href="/sign-in"
            onClick={handleMobileNavClick}
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}
