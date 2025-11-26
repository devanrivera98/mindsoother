"use server";

import { createServerClient } from "@/lib/supabase/server";

export default async function getFolders() {
  const supabase = await createServerClient();

  const { data, error } = await supabase.from("folders").select();

  if (error) {
    console.error(error);
  } else {
    console.log("server side folder data", data);
  }

  return data;
}
