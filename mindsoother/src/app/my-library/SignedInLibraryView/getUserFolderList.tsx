import { createServerClient } from "@/lib/supabase/server";

export default async function getUserFolderList() {
  try {
    const supabase = await createServerClient();

    const { data, error } = await supabase.from("folders").select("*");

    if (error) {
      throw new Error(error.message);
    }

    return data ?? [];
  } catch (err) {
    console.error(`There was an error getting the user's folder list`, err);
  }
}
