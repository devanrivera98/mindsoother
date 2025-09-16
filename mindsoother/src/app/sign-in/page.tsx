import { IoMailOutline, IoLockClosedOutline, IoArrowForwardSharp, FcGoogle } from "../components/icons"
import FormInput from "../components/auth/FormInput";
import PasswordInput from "../components/auth/PasswordInput";

export default function SignInPage() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center flex flex-col gap-y-2">
        <h1 className="text-4xl font-bold">Welcome back</h1>
        <p>
          Don't have an account?{" "}
          <a href="/sign-up" className="text-brand-purple hover:text-hover-purple hover:cursor-pointer">Sign up</a>
        </p>
      </div>
      <div className="w-full sm:max-w-lg flex flex-col mx-auto">
        <div className="border rounded border-gray-100 shadow-lg mt-10 px-10">
            <form className="py-10  flex flex-col gap-y-4">
                <FormInput Icon={IoMailOutline} name={"Email Address"} placeholder={"Enter email here"} autoComplete="email" field="email" />
                <PasswordInput Icon={IoLockClosedOutline} name={"Password"} placeholder={"Enter your password"} autoComplete="current-password" field="currentPassword" />
                <button type="submit" className="bg-brand-purple hover:bg-hover-purple text-white rounded flex justify-center items-center py-2 transition-all duration-200 ease-in-out gap-x-2 hover:gap-x-4">
                    <span>Sign In</span>
                    <IoArrowForwardSharp />
                </button>
            </form>
            <div>
                <div className="flex items-center text-center">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-3 text-gray-500">Or continue with</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>
                <div className="flex justify-center py-4">
                    <button className="w-full flex justify-center items-center gap-x-2 py-2 cursor-pointer border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-50">
                        <FcGoogle fontSize={20} aria-hidden="true" focusable="false" />
                        <span aria-label="Continue with Google">Continue with Google</span>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
