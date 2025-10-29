import Image from "next/image";
import Link from "next/link";
import { IoArrowForwardSharp } from "../components/icons";

export default function IntroHome() {
  return (
    <>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 min-h-36 w-full">
        <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 py-20 md:py-30 items-stretch">
            <div className="pr-5 flex flex-col flex-grow order-2 md:order-1">
              <h1 className="text-white text-5xl font-bold">
                AI-powered psychology research at your fingertips
              </h1>
              <p className="pt-5 text-white text-xl">
                Search through psychology research articles, get instant AI
                summaries, and organize findings in your personal research
                library.
              </p>
              <div className="pt-5 flex gap-x-5">
                <Link
                  href="/explorer"
                  className="hover:bg-gray-100 bg-white rounded-lg px-6 py-3 flex items-center"
                >
                  <span className="pr-2 cursor-pointer">Try the Explorer</span>
                  <IoArrowForwardSharp fontSize={20} aria-hidden="true" />
                </Link>
                <Link
                  href="/about"
                  className="hover:bg-indigo-600 border border-white text-white rounded-lg px-6 py-3 cursor-pointer text-center"
                  type="button"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="pb-5 md:pb-0 order-1 md:order-2">
              <div className="relative my-auto mx-auto md:mx-0 md:ml-auto w-full md:w-[90%] h-full min-h-[300px] overflow-hidden rounded-lg">
                <Image
                  className="object-cover"
                  src="/images/squid-smile.jpg"
                  alt="Illustration of brain power "
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
