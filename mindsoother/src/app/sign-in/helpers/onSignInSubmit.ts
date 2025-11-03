import { supabaseClient } from "@/lib/supabase/client";

export default async function onSignUpSubmit(signInForm: any, router: any) {
  try {
    const response = await fetch("/api/signIn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signInForm),
    });

    if (!response.ok) {
      throw new Error(`response status ${response.status}`);
    }

    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: signInForm.data.email,
      password: signInForm.data.loginPassword,
    });

    if (error) {
      console.error("Sign in failed:", error.message);
    } else {
      console.log(data);
      router.push("/");
      router.refresh();
    }
  } catch (err) {
    console.error(err);
  }
}
