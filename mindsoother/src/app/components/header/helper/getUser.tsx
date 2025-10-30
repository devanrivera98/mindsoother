import { supabaseClient } from "@/app/utils/supabase/client";

export async function getUser() {
  const {
    data: { user },
  } = await supabaseClient.auth.getUser();

  if (user) {
    return user.email;
  }
  return null;
}
