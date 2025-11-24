"use server";
import { createServerClient } from "@/lib/supabase/server";

export default async function getUserArticles() {
  try {
    const supabase = await createServerClient();

    const { data, error } = await supabase.from("articles").select("*");

    if (error) {
      throw new Error(error.message);
    }
    console.log(data);
    return data ?? [];
  } catch (err) {
    console.error("There was an error getting User Articles", err);
    throw err;
  }
}
