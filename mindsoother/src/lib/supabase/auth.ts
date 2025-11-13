"use server";

import { createServerClient } from "./server";

export async function signUpWithEmail(
  email: string,
  password: string,
  fullName: string,
) {
  const supabase = await createServerClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName },
    },
  });
  return { data, error };
}

export async function signInWithEmail(email: string, password: string) {
  const supabase = await createServerClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { data, error };
}

export async function signOut() {
  const supabase = await createServerClient();
  return supabase.auth.signOut();
}
