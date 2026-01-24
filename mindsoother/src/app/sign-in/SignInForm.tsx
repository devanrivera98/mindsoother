"use client";
import FormInput from "../components/auth/FormInput";
import PasswordInput from "../components/auth/PasswordInput";
import {
  FcGoogle,
  IoArrowForwardSharp,
  IoLockClosedOutline,
  IoMailOutline,
} from "../components/icons";
import { z } from "zod";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import onSignUpSubmit from "./helpers/onSignInSubmit";

type onFormSubmitInterface = (
  e: FormEvent,
  setIsSubmitted: (boolean: boolean) => void,
  formSchema: any,
  form: any,
) => void;

export default function SignInForm() {
  const router = useRouter();

  const formSchema = z.object({
    email: z.string().email("Invalid email"),
    loginPassword: z.string(),
  });

  type FormData = z.infer<typeof formSchema>;

  const [form, setForm] = useState<FormData>({
    email: "",
    loginPassword: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onInputChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const onFormSubmit: onFormSubmitInterface = (
    e,
    setIsSubmitted,
    formSchema,
    form,
  ) => {
    e.preventDefault();
    const result = formSchema.safeParse(form);
    setIsSubmitted(true);

    if (!result.success) {
      console.error(result.error);
    } else if (result.success) {
      onSignUpSubmit(result, router);

    }
  };

  return (
    <div className="w-full sm:max-w-lg flex flex-col mx-auto">
      <div className="border rounded border-gray-100 shadow-lg mt-10 px-10">
        <form
          className="py-10  flex flex-col gap-y-4"
          onSubmit={(e) => onFormSubmit(e, setIsSubmitted, formSchema, form)}
        >
          <FormInput
            Icon={IoMailOutline}
            name={"Email Address"}
            placeholder={"Enter email here"}
            autoComplete="email"
            field="email"
            isSubmitted={isSubmitted}
            formValue={form.email}
            onInputChange={onInputChange}
          />
          {/* temp is submitted for now  */}
          <PasswordInput
            Icon={IoLockClosedOutline}
            name={"Password"}
            placeholder={"Enter your password"}
            autoComplete="current-password"
            password={form.loginPassword}
            isSubmitted={isSubmitted}
            field="loginPassword"
            onInputChange={onInputChange}
            formValue={form.loginPassword}
          />
          <button
            type="submit"
            className="bg-brand-green hover:bg-hover-dark-green cursor-pointer text-white rounded flex justify-center items-center py-2 transition-all duration-200 ease-in-out gap-x-2 hover:gap-x-4"
          >
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
              <span aria-label="Continue with Google">
                Continue with Google
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
