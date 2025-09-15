'use client'
import { FormEvent, useState } from "react"
import { z } from "zod";
import FormInput from "../components/auth/FormInput"
import PasswordInput from "../components/auth/PasswordInput"
import { IoMailOutline, IoPersonOutline, IoLockClosedOutline, IoArrowForwardSharp, FcGoogle } from "../components/icons"

// interface formInterface {
//     fullName: string;
//     email: string;
//     password: string;
//     confirmPassword: string
// }

export default function SignUpPage() {

    const formSchema = z.object({
        fullName: z.string().min(1, "Full name is required"),
        email: z.string().email("Invalid email"),
        password: z.string().min(8, "Password must be at least 8 characters")
        .regex(/[A-Z]/, "Must contain an uppercase letter")
        .regex(/[!@#$%^&*]/, "Must contain a special character")
        .regex(/[0-9]/, "Must contain a number"),
        confirmPassword: z.string()
    }).refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"]
    });

    type FormData = z.infer<typeof formSchema>;

    const [isSubmitted, SetIsSubmitted] = useState(false);
    const [form, setForm] = useState<FormData>({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const onInputChange = (name: string, value: string) => {
        setForm({
            ...form,
            [name]: value
        })
    } 

    const onFormSubmit = (e: FormEvent) => {
        e.preventDefault()
        SetIsSubmitted(true);
        console.log("Form submitted!", form);

        const result = formSchema.safeParse(form);

        if (!result.success) {
          console.log(result.error.flatten().fieldErrors)
          return {
            zodErrors: result.error.flatten().fieldErrors
          }
        }

        console.log("Form submitted!", result.data);
    }

    return (
    <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center flex flex-col gap-y-2">
        <h1 className="text-4xl font-bold">Create an Account</h1>
        <p>
          Already have an account? {" "}
          <a href="/sign-in" className="text-brand-purple hover:text-hover-purple hover:cursor-pointer">Sign In</a>
        </p>
      </div>
      <div className="w-full sm:max-w-lg flex flex-col mx-auto">
        <div className="border rounded border-gray-100 shadow-lg mt-10 px-10">
            <form className="py-10  flex flex-col gap-y-4" onSubmit={onFormSubmit}>
                <FormInput Icon={IoPersonOutline} name={"Full Name"} placeholder={"Enter your full name"} autoComplete="name" field="fullName" onInputChange={onInputChange} />
                <FormInput Icon={IoMailOutline} name={"Email Address"} placeholder={"Enter email here"} autoComplete="email" field="email" onInputChange={onInputChange} />

                <PasswordInput Icon={IoLockClosedOutline} name={"Password"} field="password" placeholder={"Create your password"} password={form.password} onInputChange={onInputChange} isSubmitted={isSubmitted} confirmPassword={form.confirmPassword} />
                <PasswordInput Icon={IoLockClosedOutline} name={"Confirm Password"} field={"confirmPassword"} password={form.password} placeholder={"Confirm your password"} onInputChange={onInputChange} isSubmitted={isSubmitted} confirmPassword={form.confirmPassword} />
                <button type="submit" className="bg-brand-purple hover:bg-hover-purple text-white rounded flex justify-center items-center py-2 transition-all duration-200 ease-in-out gap-x-2 hover:gap-x-4">
                    <span>Create account</span>
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
    )
}