"use client";
import { LuBookmark } from "@/app/components/icons";
import { useState } from "react";
import SaveArticleModal from "./SaveArticleModal/SaveArticleModal";
import { supabaseClient } from "@/lib/supabase/client";
import { UserFolderInterface } from "../interface/explorerInterface";

export default function BookmarkButton({
  folders,
  setFolders,
  isThereUser,
}: {
  folders: UserFolderInterface[];
  setFolders: (folders: UserFolderInterface[]) => void;
  isThereUser: boolean;
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
          className={`cursor-pointer ${isThereUser ? "hover:text-brand-purple" : "text-gray-400 hover:cursor-not-allowed"}`}
        />
      </button>
      <SaveArticleModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        folders={folders}
        setFolders={setFolders}
      />
    </>
  );
}
