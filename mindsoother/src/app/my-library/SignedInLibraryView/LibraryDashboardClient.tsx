"use client";
import { IoFolderOutline } from "@/app/components/icons";
import { useState } from "react";
import ArticleCollectionView from "./ArticleSaves/ArticleCollectionView";
import { UserArticlesType } from "./ArticleSaves/types/UserArticleTypes";
import { userFolderListType } from "./ArticleSaves/types/userFolderListType";
import ManageFolderModal from "./ManageFolderModal";

export default function LibraryDashboardClient({
  userArticles,
  userFolderList,
}: {
  userArticles: UserArticlesType[] | [];
  userFolderList: userFolderListType[] | [];
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [existingFolders, setExistingFolders] =
    useState<userFolderListType[]>(userFolderList);
  const [userArticlesState, setUserArticlesState] =
    useState<UserArticlesType[]>(userArticles);
  const [folderFilter, setFolderFilter] = useState<string | number>("all");

  const existingFoldersOptions = existingFolders.map((folder) => (
    <option key={folder.id} value={folder.id} title={folder.name}>
      {folder.name}
    </option>
  ));

  let savedArticleAmount = userArticlesState.length;

  if (folderFilter !== "all") {
    savedArticleAmount = userArticles.filter(
      (folder) => Number(folder.folder_id) === Number(folderFilter),
    ).length;
  } else {
    userArticlesState.length;
  }

  return (
    <>
      <div className="-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-y-5 md:gap-y-0 justify-between p-5 rounded bg-white shadow-xl">
          <div className="grid grid-cols-1 gap-y-2 md:flex">
            <h2 className="text-xl md:text-2xl font-semibold">
              {savedArticleAmount} Saved Techniques
            </h2>
            <button
              className="md:ml-5 py-2 md:py-0 px-2 flex items-center hover:bg-gray-100 border border-gray-300 font-medium rounded-md cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <IoFolderOutline fontSize={18} className="mr-2" />
              Manage Folders
            </button>
          </div>
          <div className="md:flex md:justify-end">
            <select
              className="w-full md:max-w-48 border border-gray-300 rounded-md py-2 md:py-0 pl-2 pr-10 font-medium truncate"
              onChange={(e) => setFolderFilter(e.target.value)}
            >
              <option key="all-folders" value="all">
                All Folders
              </option>
              {existingFoldersOptions}
            </select>
          </div>
        </div>
      </div>
      <div className="my-10 max-w-7xl mx-auto rounded px-4 sm:px-6 lg:px-8">
        <div className="p-5 flex flex-col items-center">
          <ArticleCollectionView
            userArticlesState={userArticlesState}
            setUserArticlesState={setUserArticlesState}
            existingFolders={existingFolders}
            folderFilter={folderFilter}
          />
        </div>
      </div>
      <ManageFolderModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        existingFolders={existingFolders}
        setExistingFolders={setExistingFolders}
        userArticlesState={userArticlesState}
        setUserArticlesState={setUserArticlesState}
      />
    </>
  );
}
