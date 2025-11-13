import { FormEvent } from "react";
import { searchRequest } from "../searchRequest";
import getFolders from "./getFolders";

interface formHandlerInterface {
  setIsLoading: (loading: boolean) => void;
  setData: (data: object | null) => void;
  setTextValue: (text: string) => void;
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
  }: formHandlerInterface,
) {
  e.preventDefault();
  setIsLoading(true);
  setData(null);

  const results = await searchRequest(textValue);

  if (results) {
    setIsLoading(false);
    setData(results);
    setTextValue("");
  }

  const folders = await getFolders();

  if (folders) {
    setUserFolders(folders);
  }

  return { results, folders };
}
