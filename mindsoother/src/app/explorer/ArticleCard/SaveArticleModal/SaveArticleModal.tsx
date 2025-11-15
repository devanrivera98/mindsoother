"use client";
import { supabaseClient } from "@/lib/supabase/client";
import { FormEvent, useEffect, useState } from "react";
import { AiOutlineClose, FaPlus } from "../../../components/icons";

export default function SaveArticleModal({
  isModalOpen,
  setIsModalOpen,
  folders,
  setFolders,
}: any) {
  const [showNewFolderForm, setShowNewFolderForm] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");
  const [newFolderError, setNewFolderError] = useState("");

  useEffect(() => {
    console.log(setFolders);
  }, [folders]);

  // this needs to be moved off the page and onto component card when ready

  function onArticleFormSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("yup");
  }

  //function will need to useEffect will be need when this function will eventually need to update the select options
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

      setNewFolderName("");
      setNewFolderError("");

      console.log("Folder created:", data);
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  }

  const folderMap = folders?.map((folder: any, index: any) => (
    <option key={index} value={folder.name}>
      {folder.name}
    </option>
  ));

  // async function getFolders() {
  //   const {data: user, error} = await supabaseClient.from('folders')

  // }

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
            onSubmit={(e) => onArticleFormSubmit(e)}
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
              >
                {folderMap}
                {/* should i render children prop here so that I can have my server side component that returns a client side component . Wait no that wouldnt work right there would have to be a parent component that would need to pass down a child when this component is called and then id place the child prop here and insert my server side component on that child?  */}
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
                        // this click show refresh the folders being shown but only for the options
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
