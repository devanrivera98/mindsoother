import { FormEvent } from "react";
import { supabaseClient } from "@/app/utils/supabase/client";
import { ZodEffects, ZodObject, ZodString } from "zod";

type FormSchemaType =
 ZodEffects<
      ZodObject<{
        fullName: ZodString;
        email: ZodString;
        password: ZodString;
        confirmPassword: ZodString;
      }>
    >;

interface FormSubmitParams {
    form: {
        email: string;
        fullName: string;
        password: string;
        confirmPassword: string;
    },
    setHasUser: (state: boolean) => void,
    setSubmitMessage: (state: string) => void,
    setIsSubmitted: (state: boolean) => void,
    formSchema: FormSchemaType,
    router: any
}

const onFormSubmit = async (e: FormEvent, {form, setHasUser, setSubmitMessage, setIsSubmitted, formSchema, router} : FormSubmitParams) => {
    e.preventDefault();

    const res = await fetch("/api/signUp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: form.email }),
    });
    const { userExist, message } = await res.json();
    if (userExist !== null) setHasUser(userExist);
    if (message) setSubmitMessage(message);
    console.log("user", message);

    if (!userExist) {
      setIsSubmitted(true);
      console.log("Form submitted!", form);

      const result = formSchema.safeParse(form);

      if (!result.success) {
        console.log(result.error.flatten().fieldErrors);
        return {
          zodErrors: result.error.flatten().fieldErrors,
        };
      } else {
        const {data, error} = await supabaseClient.auth.signUp({
          email: form.email,
          password: form.password,
          options: {
            data: {full_name: form.fullName}
        }
        })

        if (error) {
          console.error('Signup failed:', error.message);
        } else {
          console.log(data)
          router.push('/')
  
          router.refresh()
          //refresh re-fetches server components to perform a "state update" type effect
        }
      }
      console.log("Form submitted!", result.data);
    }
  };

  export default onFormSubmit