import { createServerClient } from "@/lib/supabase/server";

export default async function getUserFolderList() {
  try {
    const supabase = await createServerClient();

    const { data, error } = await supabase.from("folders").select("*");

    if (error) {
      return {
        data: [],
        error: error.message,
      };
    }

    return {
      data: data ?? [],
      error: null,
    };
  } catch (err: any) {
    console.error(`There was an error getting the user's folder list`, err);
    return {
      data: [],
      error: err.message || "Unknown error",
    };
  }
}
