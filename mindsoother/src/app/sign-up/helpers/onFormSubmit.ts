import { FormEvent } from "react";
import { supabaseClient } from "@/lib/supabase/client";
import { ZodEffects, ZodObject, ZodString } from "zod";

type FormSchemaType = ZodEffects<
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
  };
  setHasUser: (state: boolean) => void;
  setSubmitMessage: (state: string) => void;
  setIsSubmitted: (state: boolean) => void;
  formSchema: FormSchemaType;
  router: any;
}

const onFormSubmit = async (
  e: FormEvent,
  {
    form,
    setHasUser,
    setSubmitMessage,
    setIsSubmitted,
    formSchema,
    router,
  }: FormSubmitParams,
) => {
  e.preventDefault();

  const res = await fetch("/api/signUp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: form.email }),
  });
  const { userExist, message } = await res.json();
  if (userExist !== null) setHasUser(userExist);
  if (message) setSubmitMessage(message);

  if (!userExist) {
    setIsSubmitted(true);

    //Validate with Zod
    const result = formSchema.safeParse(form);
    if (!result.success) {
      console.error(result.error.flatten().fieldErrors);
      return {
        zodErrors: result.error.flatten().fieldErrors,
      };
    }

    //Signup user
    const { data, error } = await supabaseClient.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: { full_name: form.fullName },
      },
    });

    if (error) {
      return console.error("Signup failed:", error.message);
    }

    //Insert into user_profiles
    const { error: profileUserError } = await supabaseClient
      .from("user_profiles")
      .insert({ id: data?.user?.id });

    if (profileUserError) {
      return console.error(profileUserError);
    }

    router.push("/");

    router.refresh();
    //refresh re-fetches server components to perform a "state update" type effect
  }
};

export default onFormSubmit;
