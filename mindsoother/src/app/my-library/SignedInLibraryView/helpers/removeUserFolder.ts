"use server";
import { createServerClient } from "@/lib/supabase/server";

export default async function removeUserFolder(id: number) {
  try {
    const supabase = await createServerClient();

    const { error } = await supabase.from("folders").delete().eq("id", id);

    if (error) {
      return {
        folderId: id,
        error:
          error.message ??
          "There was an error deleting from supabase trying the folder",
        success: false,
      };
    }

    return {
      folderId: id,
      success: true,
    };
  } catch (err: any) {
    console.error("There was an error in the remove user folder request", err);
    return {
      folderId: id,
      error:
        err.message ??
        "There was an error deleting from supabase trying the folder",
      success: false,
    };
  }
}
