import SignInForm from "./SignInForm";

export default function SignInPage() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center flex flex-col gap-y-2">
        <h1 className="text-4xl font-bold">Welcome back</h1>
        <p>
          Don't have an account?{" "}
          <a
            href="/sign-up"
            className="text-brand-green hover:text-hover-green hover:cursor-pointer"
          >
            Sign up
          </a>
        </p>
      </div>
      <SignInForm />
    </div>
  );
}
