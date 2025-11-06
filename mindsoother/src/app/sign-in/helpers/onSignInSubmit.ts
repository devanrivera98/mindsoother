import { supabaseClient } from "@/lib/supabase/client";

export default async function onSignUpSubmit(signInForm: any, router: any) {
  try {

    const { error } = await supabaseClient.auth.signInWithPassword({
      email: signInForm.data.email,
      password: signInForm.data.loginPassword,
    });

    if (error) {
      console.error("Sign in failed:", error.message);
    } else {
      router.push("/");
      router.refresh();
    }
  } catch (err) {
    console.error(err);
  }
}
