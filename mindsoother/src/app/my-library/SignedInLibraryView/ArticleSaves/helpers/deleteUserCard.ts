"use server";

import { createServerClient } from "@/lib/supabase/server";

export default async function deleteUserCards(id: number) {
  try {
    const supabase = await createServerClient();

    const { error } = await supabase.from("articles").delete().eq("id", id);

    if (error) {
      throw new Error(error.message);
    }
    console.log("success", id);
    return { success: true };
  } catch (err) {
    console.error("There was an error deleting user saved article", err);

    return {
      success: false,
      error: err instanceof Error ? err.message : "Unknown error occurred",
    };
  }
}
