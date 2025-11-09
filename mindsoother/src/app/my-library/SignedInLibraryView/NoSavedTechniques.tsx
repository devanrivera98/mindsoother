import { IoBookOutline } from "@/app/components/icons";
import Link from "next/link";

export default function NoSavedTechniques() {
  return (
    <>
      <IoBookOutline fontSize={40} className="text-gray-500" />
      <h2 className="text-xl font-semibold mt-5">No saved techniques yet</h2>
      <p className="mt-5 max-w-md text-center text-gray-600">
        Start building your research library by saving articles from your
        searches.
      </p>
      <Link
        href="/explorer"
        className="mt-5 p-4 bg-indigo-600 rounded-lg text-white text-md font-semibold"
      >
        Explore Techniques
      </Link>
    </>
  );
}
