import { createServerClient } from "@/lib/supabase/server";
import { FormEvent } from "react";
import { searchRequest } from "../searchRequest";
import getFolders from "./getFolders";
import { supabaseClient } from "@/lib/supabase/client";

interface formHandlerInterface {
  setIsLoading: (loading: boolean) => void;
  setData: (data: object | null) => void;
  setTextValue: (text: string) => void;
  setIsThereUser: (boolean: boolean) => void;
  setUserFolders: (
    folders: {
      name: string;
      id: number;
      user_id: string;
      created_at: string;
    }[],
  ) => void;
  textValue: string;
}

export default async function formHandler(
  e: FormEvent,
  {
    setIsLoading,
    setData,
    setTextValue,
    textValue,
    setUserFolders,
    setIsThereUser,
  }: formHandlerInterface,
) {
  e.preventDefault();
  setIsLoading(true);
  setData(null);

  const results = await searchRequest(textValue);

  const {
    data: { user },
  } = await supabaseClient.auth.getUser();

  if (user) {
    setIsThereUser(true);
  }

  const folders = await getFolders();

  if (folders && user) {
    setUserFolders(folders);
  } else {
    setUserFolders([]);
  }

  if (results) {
    setIsLoading(false);
    setData(results);
    setTextValue("");
  }

  return { results, folders };
}
