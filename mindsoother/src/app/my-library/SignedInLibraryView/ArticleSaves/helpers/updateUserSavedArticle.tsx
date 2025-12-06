"use server";

import { createServerClient } from "@/lib/supabase/server";

export default async function updateUserSavedArticle(
  articleId: number,
  updateArticleForm: { folder_id: number; notes: string },
) {
  try {
    const supabase = await createServerClient();

    const { data, error } = await supabase
      .from("articles")
      .update({
        folder_id: updateArticleForm.folder_id,
        notes: updateArticleForm.notes,
      })
      .eq("id", articleId)
      .select()
      .single();

    if (error) {
      throw new Error(error.message ?? "Unknown error from supabase");
    }

    return {
      success: true,
      updatedArticle: data,
    };
  } catch (err) {
    console.error("There was an issue updating user saved article", err);

    return {
      success: false,
      error: err instanceof Error ? err.message : "Unknown error from supabase",
    };
  }
}
