import { IoTrashOutline } from "@/app/components/icons";
import { useEffect, useRef } from "react";
import deleteUserCards from "./helpers/deleteUserCard";
import getUserArticles from "./helpers/getUserArticles";
import { UserArticlesType } from "./types/UserArticleTypes";

export default function DeleteSavedArticleModal({
  id,
  articleTitle,
  isDeleteModalOpen,
  setIsDeleteModalOpen,
  setUserArticlesState,
}: {
  id: number;
  articleTitle: string;
  isDeleteModalOpen: boolean;
  setIsDeleteModalOpen: (boolean: boolean) => void;
  setUserArticlesState: (input: UserArticlesType[]) => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (isDeleteModalOpen) {
      dialog?.showModal();
    } else {
      dialog?.close();
    }
  }, [isDeleteModalOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    function handleEsc(e: Event) {
      e.preventDefault();
      setIsDeleteModalOpen(false);
    }

    dialog?.addEventListener("cancel", handleEsc);

    return () => {
      dialog?.removeEventListener("cancel", handleEsc);
    };
  }, []);

  async function deleteUserArticle(id: number) {
    const results = await deleteUserCards(id);

    if (results.success) {
      const userSavedArticles = await getUserArticles();
      setUserArticlesState(userSavedArticles);
      setIsDeleteModalOpen(false);
    }
  }

  return (
    <dialog
      className="modal m-auto inset-0 rounded-xl bg-black/50 z-50"
      ref={dialogRef}
      aria-labelledby="remove-title"
      aria-describedby="modal-description"
    >
      <div className="max-w-xl w-full sm:p-6 bg-white p-4">
        <div className="flex items-center gap-x-5 ">
          <div className="p-3 rounded-full bg-red-100">
            <IoTrashOutline fontSize={30} className="text-red-500" />
          </div>
          <div>
            <h3 className="text-2xl" id="remove-title">
              Remove Article
            </h3>
            <span>This action cannot be undone.</span>
          </div>
        </div>
        <div className="pt-5">
          <p id="modal-description">
            Are you sure you want to remove "
            <span className="font-semibold">{articleTitle}</span>" from your
            library?
          </p>
        </div>
        <div className="mt-auto pt-5 flex justify-end gap-x-5">
          <button
            className="cursor-pointer bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded"
            onClick={() => setIsDeleteModalOpen(false)}
            aria-label="Cancel deletion"
          >
            Cancel
          </button>
          <button
            className="cursor-pointer bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
            aria-label={`Remove ${articleTitle} from library`}
            onClick={() => deleteUserArticle(id)}
          >
            Remove Article
          </button>
        </div>
      </div>
    </dialog>
  );
}
