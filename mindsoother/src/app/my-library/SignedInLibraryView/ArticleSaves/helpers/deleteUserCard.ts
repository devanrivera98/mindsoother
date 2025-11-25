"use server";

import { createServerClient } from "@/lib/supabase/server";

export default async function deleteUserCards() {
  const supabase = await createServerClient();

  const { data, error } = await supabase.from("articles").delete();
}
