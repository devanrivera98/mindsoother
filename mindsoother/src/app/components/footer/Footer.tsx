import { LuBrain, InformationCircle } from "../icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-300 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <Link href="/" className="flex items-center gap-2">
              <LuBrain className="text-indigo-400" fontSize={25} />
              <span className="text-white hover:text-indigo-400 text-xl font-bold cursor-pointer">
                MindSoother
              </span>
            </Link>
          </div>
          <p className="text-sm">
            Connecting you to evidence-based therapeutic techniques personalized
            to your needs.
          </p>
        </div>
        <div>
          <h2 className="text-white font-semibold mb-3 text-md">Navigation</h2>
          <ul className="space-y-2 ">
            <li>
              <Link href="/" className="hover:text-indigo-400 text-md">
                Home
              </Link>
            </li>
            <li>
              <Link href="/explorer" className="hover:text-indigo-400 text-md">
                Technique Explorer
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-indigo-400 text-md">
                Saved Techniques
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-indigo-400 text-md">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-sm text-gray-400 flex flex-col gap-y-4">
          <p>&copy; 2025 Devan Rivera. All rights reserved.</p>
          <div>
            <Link
              href="/about#disclaimer"
              className="flex items-center hover:text-indigo-400"
            >
              <InformationCircle className="mr-1" />
              <span>Disclaimer</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
