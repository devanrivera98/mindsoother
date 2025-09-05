import { IoMailOutline } from "../components/icons"
import FormInput from "../components/auth/FormInput";

export default function SignInPage() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center flex flex-col gap-y-2">
        <h1 className="text-4xl font-bold">Welcome back</h1>
        <p>
          Don't have an account?{" "}
          <a className="text-brand-purple hover:text-hover-purple hover:cursor-pointer">Sign up</a>
        </p>
      </div>
      <div className="w-full sm:max-w-lg flex flex-col mx-auto">
        <div className="border rounded border-gray-100 shadow-lg mt-10">
            <form className="py-10 mx-10">
                <FormInput Icon={IoMailOutline} name={"Email Address"} placeholder={"Enter email here"} />
            </form>
        </div>
      </div>
    </section>
  );
}
