"use client";
import { LuBookmark } from "@/app/components/icons";
import { useState } from "react";
import SaveArticleModal from "./SaveArticleModal/SaveArticleModal";

export default function BookmarkButton({
  folders,
}: {
  folders: { name: string; id: number; user_id: string; created_at: string }[];
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsModalOpen(true)}>
        <LuBookmark
          fontSize={22}
          className={"cursor-pointer hover:text-brand-purple"}
        />
      </button>
      <SaveArticleModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        folders={folders}
      />
    </>
  );
}
