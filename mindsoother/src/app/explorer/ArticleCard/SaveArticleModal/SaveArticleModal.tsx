"use client";
import { supabaseClient } from "@/lib/supabase/client";
import { FormEvent, useState } from "react";
import { AiOutlineClose, FaPlus } from "../../../components/icons";
import handleModalSubmit from "./handleModalSubmit";
import { allArticleInfo } from "./types/saveArticleInterfaces";

export default function SaveArticleModal({
  isModalOpen,
  setIsModalOpen,
  folders,
  setFolders,
  articleInfo,
}: any) {
  const [showNewFolderForm, setShowNewFolderForm] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");
  const [newFolderError, setNewFolderError] = useState("");

  const { title, authors, publishedDate, articleLink } = articleInfo;

  const [modalForm, setModalForm] = useState<allArticleInfo>({
    title,
    authors,
    publishedDate,
    articleLink,
    folderId: null,
    dateAdded: "",
    notes: null,
  });

  console.log(modalForm);

  function onArticleFormSubmit(e: FormEvent) {
    e.preventDefault();
    const {
      title,
      author,
      publishedDate,
      folder,
      dataAdded,
      notes,
      articleLink,
    } = articleInfo;

    // functionality for form to be submitted to database needs to be entered
  }

  async function handleCreateFolder() {
    try {
      const {
        data: { user },
      } = await supabaseClient.auth.getUser();

      if (!user) {
        console.error("User not found");
        return;
      }

      const { data, error } = await supabaseClient
        .from("folders")
        .insert({
          name: newFolderName,
          user_id: user.id,
        })
        .select();

      if (error?.code === "23505") {
        return setNewFolderError("Folder name already created.");
      } else if (error) {
        return console.error("Error creating folder:", error);
      }

      setFolders((prev: any) => [...prev, data[0]]);

      setNewFolderName("");
      setNewFolderError("");

      console.log("Folder created:", data);
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  }

  const folderMap = folders?.map((folder: any, index: any) => (
    <option key={index + 1} value={folder.id}>
      {folder.name}
    </option>
  ));

  return (
    <>
      <dialog
        open={isModalOpen}
        className="z-50 px-4 w-full h-full fixed bg-black/50 inset-0 m-auto"
        aria-labelledby="save-article-file"
        aria-modal="true"
      >
        <div className="flex items-center justify-center m-auto h-full">
          <form
            className="max-w-lg flex flex-col gap-y-5 w-full bg-white p-4 md:p-6 rounded"
            onSubmit={(e) => {
              e.preventDefault();
              handleModalSubmit(modalForm);
            }}
          >
            <div className="flex items-center justify-between">
              <h3 id="save-article-file" className="font-semibold text-xl">
                Save Article
              </h3>
              <button
                type="button"
                aria-label="Close dialog"
                onClick={() => setIsModalOpen(false)}
              >
                <AiOutlineClose
                  fontSize={20}
                  className="text-black hover:text-gray-500 hover:cursor-pointer"
                />
              </button>
            </div>
            <div>
              <h4 className="text-lg font-medium">Article:</h4>
              <p className="pt-2">
                Cognitive Behavioral Therapy for Anxiety Disorders: A
                Meta-Analysis
              </p>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="font-medium" htmlFor="folderSelect">
                Choose Folder (Optional)
              </label>
              <select
                id="folderSelect"
                className="w-full py-2 px-2 border border-gray-300 rounded font-semibold"
                onChange={(e) =>
                  setModalForm((prev) => ({
                    ...prev,
                    folderId: Number(e.target.value),
                  }))
                }
              >
                {/* first option will need to be provided folder id value  */}
                <option key={0} value={0}>
                  Unsorted
                </option>
                {folderMap}
              </select>
              <button
                className="flex items-center text-brand-purple hover:text-hover-purple cursor-pointer"
                type="button"
                onClick={() => {
                  setShowNewFolderForm(!showNewFolderForm);
                  setNewFolderError("");
                }}
              >
                <FaPlus />
                <span className="pl-1">Create New Folder</span>
              </button>
              {showNewFolderForm ? (
                <>
                  <div className="flex flex-col w-full gap-y-2">
                    <div className="flex">
                      <input
                        placeholder="Folder name"
                        name="newFolderName"
                        className="w-full py-0.5 pl-2 mr-2 border border-gray-300 rounded"
                        value={newFolderName}
                        onChange={(e) => setNewFolderName(e.target.value)}
                      ></input>
                      <button
                        type="button"
                        className="bg-brand-purple hover:bg-hover-purple text-white p-2 rounded cursor-pointer"
                        onClick={() => handleCreateFolder()}
                      >
                        Create
                      </button>
                    </div>
                    <span className="text-red-500 pl-1">{newFolderError}</span>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="flex flex-col">
              <label className="pb-2 font-medium" htmlFor="articleNotes">
                Notes (Optional)
              </label>
              <textarea
                id="articleNotes"
                name="notes"
                className="border border-gray-300 rounded-md pt-1 pl-2"
                rows={4}
                placeholder="Add your notes about this article..."
                maxLength={400}
                onChange={(e) =>
                  setModalForm((prev) => ({ ...prev, notes: e.target.value }))
                }
              ></textarea>
            </div>
            <div className="flex justify-end gap-x-5 font-semibold">
              <button
                className="py-2 px-4 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded"
                type="button"
              >
                Cancel
              </button>
              <button
                className="py-2 px-4 bg-brand-purple hover:bg-hover-purple text-white rounded"
                type="submit"
              >
                Save Article
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
