"use server";

import { allArticleInfo } from "./types/saveArticleInterfaces";
import { createServerClient } from "@/lib/supabase/server";
import { FormEvent } from "react";

export default async function handleModalSubmit(
  allArticleInfo: allArticleInfo,
) {
  const { title, authors, publishedDate, articleLink, folderId, notes } =
    allArticleInfo;

  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const year = now.getFullYear();

  const dateSaved = `${month} ${day}, ${year}`;

  try {
    const supabase = await createServerClient();
    const { data, error } = await supabase
      .from("articles")
      .insert({
        title,
        authors,
        link: articleLink,
        published_date: publishedDate,
        folder_id: folderId,
        notes,
        added_date: dateSaved,
      })
      .select();

    if (error) console.error(error);
  } catch (err) {
    console.error(err);
  }
}
