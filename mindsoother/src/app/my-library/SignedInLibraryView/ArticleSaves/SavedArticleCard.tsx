import {
  IoCalendarClearOutline,
  IoFolderOutline,
  IoPersonOutline,
  IoTrashOutline,
  LuSave,
  TfiNewWindow,
} from "@/app/components/icons";
import { ChangeEvent, useEffect, useState } from "react";
import DeleteSavedArticleModal from "./DeleteSavedArticleModal";
import updateUserSavedArticle from "./helpers/updateUserSavedArticle";
import { UserArticlesType } from "./types/UserArticleTypes";
import { userFolderListType } from "./types/userFolderListType";

export default function SavedArticleCard({
  article,
  userArticles,
  setUserArticlesState,
  existingFolders,
}: {
  article: UserArticlesType;
  userArticles: UserArticlesType[] | [];
  setUserArticlesState: (input: UserArticlesType[]) => void;
  existingFolders: userFolderListType[] | [];
}) {
  const {
    id,
    added_date,
    authors,
    created_at,
    folder_id,
    folder_name,
    link,
    notes,
    published_date,
    title,
    user_id,
  } = article;

  const [isManaged, setIsManaged] = useState(false);
  const [hasNotes, setHasNotes] = useState(false);
  const [updateArticleForm, setUpdateArticleForm] = useState({
    folder_id: folder_id,
    folder_name: folder_name,
    notes: notes,
  });
  const [textCounter, setTextCounter] = useState(
    updateArticleForm.notes?.length ?? 0,
  );
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    if (notes) {
      setHasNotes(true);
    }
  }, []);

  async function handleArticleFormUpdate() {
    if (
      updateArticleForm.folder_id !== folder_id ||
      updateArticleForm.notes !== notes
    ) {
      const updatedResult = await updateUserSavedArticle(id, updateArticleForm);

      if (updatedResult.success && updatedResult.updatedArticle) {
        setUserArticlesState(
          userArticles.map((article) =>
            article.id === id ? updatedResult.updatedArticle : article,
          ),
        );
        setIsManaged(false);
      }
    }
  }

  function handleManageArticleClick() {
    setIsManaged(!isManaged);

    if (!isManaged) {
      setUpdateArticleForm({
        folder_id: folder_id,
        folder_name: folder_name,
        notes: notes,
      });
      setTextCounter(notes?.length || 0);
    }
  }

  function manageTextChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setTextCounter(e.target.value.length);
    setUpdateArticleForm({ ...updateArticleForm, notes: e.target.value });
  }

  const folderOptionMapped = existingFolders.map((folder) => (
    <option key={folder.id} value={folder.id} title={folder.name}>
      {folder.name}
    </option>
  ));

  return (
    <article className="w-full h-full flex flex-col gap-y-3 shadow-lg hover:shadow-xl border border-gray-100 p-3 rounded-lg bg-white">
      <div className="flex justify-end gap-x-2">
        <button
          aria-label="Move article to folder"
          className="cursor-pointer hover:text-brand-purple"
          onClick={() => handleManageArticleClick()}
        >
          <IoFolderOutline fontSize={18} />
        </button>
        <button
          aria-label="Delete article"
          className="cursor-pointer hover:text-red-500"
          onClick={() => setIsDeleteModalOpen(true)}
        >
          <IoTrashOutline fontSize={18} />
        </button>
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <IoPersonOutline fontSize={18} className="flex flex-shrink-0" />
          <span className="pl-2">{authors}</span>
        </div>
        <div className="flex items-center pl-5">
          <IoCalendarClearOutline fontSize={18} />
          <span className="pl-2">{published_date}</span>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <IoFolderOutline className="flex-shrink-0" />
          <span className="pl-2">{folder_name}</span>
        </div>
        <span className="pl-5 text-end">Added {added_date}</span>
      </div>
      {isManaged ? (
        <>
          <div className="flex flex-col">
            <label className="pb-1 font-medium">Folder</label>
            <select
              className="border border-gray-300 rounded-md py-1 pl-2 font-medium"
              value={updateArticleForm.folder_id}
              onChange={(e) => {
                const selectedOption = e.target.selectedOptions[0];
                setUpdateArticleForm({
                  ...updateArticleForm,
                  folder_id: Number(e.target.value),
                  folder_name: selectedOption.title,
                });
              }}
            >
              {folderOptionMapped}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="pb-1 font-medium">Notes</label>
            <textarea
              className="border border-gray-300 rounded-md pt-1 pl-2"
              rows={4}
              placeholder="Add your notes about this article..."
              maxLength={400}
              onChange={(e) => manageTextChange(e)}
              value={updateArticleForm.notes ?? ""}
            ></textarea>
            <div className="flex justify-end">
              <span className="text-gray-500">{textCounter} / 400</span>
            </div>
          </div>
          <div>
            <button
              className="flex items-center bg-brand-purple hover:bg-hover-purple p-2 rounded-lg text-white font-semibold cursor-pointer"
              onClick={() => handleArticleFormUpdate()}
            >
              <span>Save Changes</span>
              <LuSave className="ml-1" fontSize={18} />
            </button>
          </div>
        </>
      ) : (
        <>
          {hasNotes || notes ? (
            <>
              <label className="font-medium">Notes</label>
              <span>{notes}</span>
            </>
          ) : (
            <></>
          )}
          <div className="flex items-center mt-auto">
            <a
              className="flex items-center text-brand-purple hover:underline underline-offset-2 cursor-pointer"
              target="_blank"
              href={link}
            >
              Read full article
              <TfiNewWindow className="ml-1 -translate-y-px" />
            </a>
          </div>
        </>
      )}
      <DeleteSavedArticleModal
        id={id}
        articleTitle={title}
        isDeleteModalOpen={isDeleteModalOpen}
        setIsDeleteModalOpen={setIsDeleteModalOpen}
        setUserArticlesState={setUserArticlesState}
      />
    </article>
  );
}
