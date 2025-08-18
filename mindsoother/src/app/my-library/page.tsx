import { IoBookOutline } from "../components/icons";
import Link from "next/link";

export default function MyLibrary() {
  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-center text-white  px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Your Saved Techniuqes</h1>
        <p className="mt-4 text-xl text-indigo-100">
          Track your progress and revisit techniques that have helped you
        </p>
      </div>
      <div className="-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-5 rounded bg-white shadow-xl">
          <h2 className="text-xl font-semibold">0 Saved Techniques</h2>
        </div>
      </div>
      <div className="my-20 max-w-7xl mx-auto rounded px-4 sm:px-6 lg:px-8">
        <div className="p-12 flex flex-col items-center bg-white shadow-xl">
          <IoBookOutline fontSize={40} className="text-gray-500" />
          <h2 className="text-xl font-semibold mt-5">
            No saved techniques yet
          </h2>
          <p className="mt-5 max-w-md text-center text-gray-600">
            When you find techniques that might help, save them here to track
            your progress with what works.
          </p>
          <Link
            href="/explorer"
            className="mt-5 p-4 bg-indigo-600 rounded-lg text-white text-md font-semibold"
          >
            Explore Techniques
          </Link>
        </div>
      </div>
    </section>
  );
}
