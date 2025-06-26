import { LuBrain } from "../icons";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-300 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <LuBrain className="text-indigo-400" fontSize={25} />
            <a className="text-white hover:text-indigo-400 text-xl font-bold cursor-pointer">
              MindSoother
            </a>
          </div>
          <p className="text-sm">
            Connecting you to evidence-based therapeutic techniques personalized
            to your needs.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3 text-md">Navigation</h3>
          <ul className="space-y-2 ">
            <li>
              <a href="#" className="hover:text-indigo-400 text-md">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-indigo-400 text-md">
                Technique Explorer
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-indigo-400 text-md">
                Saved Techniques
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-indigo-400 text-md">
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div className="text-sm text-gray-400 flex flex-col justify-between">
          <p>&copy; 2025 Devan Rivera. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
