import { IoMailOutline } from "../components/icons"

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
                <div className="flex flex-col gap-y-2">
                    <label>Email address</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <IoMailOutline stroke="gray" fontSize={20} />
                        </div>
                    <input className="py-1 w-full pl-10 border border-gray-300 rounded" placeholder="Enter email here" />
                    </div>
                </div>
            </form>
        </div>
      </div>
    </section>
  );
}
