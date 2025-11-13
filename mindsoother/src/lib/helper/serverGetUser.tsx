import { createServerClient } from "../supabase/server";

export default async function serverGetUser() {
  const supabase = await createServerClient();
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    return null;
  }

  return data.user;
}
