"use server";

import { createServerClient } from "@/lib/supabase/server";

export default async function addNewFolder(folderName: string) {
  try {
    const supabase = await createServerClient();

    const { data: userData, error: UserError } = await supabase.auth.getUser();
    const user = userData?.user;

    if (UserError) {
      throw new Error(UserError?.message);
    }

    const { data: insertData, error: insertError } = await supabase
      .from("folders")
      .insert({ name: folderName, user_id: user?.id })
      .select();

    const [insertFolder] = insertData ?? [];
    if (insertError) {
      throw new Error(insertError.message);
    }

    return {
      success: true,
      error: null,
      folderName,
      data: insertFolder,
    };
  } catch (err) {
    console.error(
      err instanceof Error
        ? err
        : "There was an unknown error trying to add a new folder to the account.",
    );

    return {
      success: false,
      error: err,
      folderName,
    };
  }
}
