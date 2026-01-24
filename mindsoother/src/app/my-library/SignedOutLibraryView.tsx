import Link from "next/link";
import {
  IoArrowForwardSharp,
  IoLockClosedOutline,
  IoPersonAddOutline,
} from "../components/icons";

export default function SignedOutLibraryView() {
  return (
    <>
      <div>
        <div className="py-20 bg-linear-to-r from-teal-600 to-emerald-600 text-center">
          <h1 className="text-3xl font-bold text-white">Research Library</h1>
          <p className="mt-4 text-xl text-hover-text-green">
            Organize and revisit your saved psychology research
          </p>
        </div>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="rounded bg-white -mt-8 shadow-xl p-5 max-w-7xl mx-auto text-center">
            <div className="inline-flex bg-green-50 p-5 rounded-full justify-center text-center mb-2">
              <IoLockClosedOutline
                fontSize={30}
                className="text-brand-green"
              />
            </div>
            <h2 className="text-2xl font-bold">
              Sign in to access your library
            </h2>
            <div className="flex flex-col pt-5 gap-y-5">
              <p className="text-xl max-w-2xl mx-auto">
                Create an account to save articles, organize research, and build
                your personal psychology library.
              </p>
              <div>
                <Link
                  href="/sign-up"
                  className="bg-brand-green hover:bg-hover-green rounded p-4 text-white font-semibold inline-flex items-center gap-x-2"
                >
                  <IoPersonAddOutline fontSize={20} />
                  Create Account
                  <IoArrowForwardSharp fontSize={20} />
                </Link>
              </div>
              <div>
                <p>
                  Already have an account?{" "}
                  <Link
                    href="/sign-in"
                    className="text-brand-green font-semibold hover:underline underline-offset-4 hover:text-hover-green"
                  >
                    Sign in here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
