import { supabaseClient } from "@/lib/supabase/client";

export default async function signUserOut(
  currentUser: string | null | undefined,
) {
  const { error } = await supabaseClient.auth.signOut();

  if (error) {
    console.error("Error signing out", error.message);
    return currentUser;
  }

  return "Sign In";
}
