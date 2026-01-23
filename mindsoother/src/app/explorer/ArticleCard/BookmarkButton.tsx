"use client";
import { LuBookmark } from "@/app/components/icons";
import { useState } from "react";
import SaveArticleModal from "./SaveArticleModal/SaveArticleModal";
import { supabaseClient } from "@/lib/supabase/client";
import { UserFolderInterface } from "../interface/explorerInterface";

interface ArticleInfoInterface {
  title: string;
  authors: string;
  publishedDate: string;
  // folder: string;
  // notes?: string;
  //dateAdded: string;
  articleLink: string;
}

export default function BookmarkButton({
  folders,
  setFolders,
  isThereUser,
  articleInfo,
}: {
  folders: UserFolderInterface[];
  setFolders: (folders: UserFolderInterface[]) => void;
  isThereUser: boolean;
  articleInfo: ArticleInfoInterface;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        {...(isThereUser ? { disabled: false } : { disabled: true })}
        onClick={() => setIsModalOpen(true)}
      >
        <LuBookmark
          fontSize={22}
          className={`cursor-pointer ${isThereUser ? "hover:text-brand-green" : "text-gray-400 hover:cursor-not-allowed"}`}
        />
      </button>
      <SaveArticleModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        folders={folders}
        setFolders={setFolders}
        articleInfo={articleInfo}
      />
    </>
  );
}
