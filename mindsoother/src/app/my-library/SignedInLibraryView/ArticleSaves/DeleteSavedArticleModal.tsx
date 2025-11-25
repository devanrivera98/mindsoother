import { IoTrashOutline } from "@/app/components/icons";
import { useEffect, useRef } from "react";

export default function DeleteSavedArticleModal({
  articleTitle,
}: {
  articleTitle: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    dialog?.showModal();
  }, []);

  return (
    <dialog className="m-auto inset-0 rounded-xl" ref={dialogRef}>
      <div className="max-w-xl w-full sm:p-6 bg-white p-4">
        <div className="flex items-center gap-x-5 ">
          <div className="p-3 rounded-full bg-red-100">
            <IoTrashOutline fontSize={30} className="text-red-500" />
          </div>
          <div>
            <h3 className="text-2xl">Remove Article</h3>
            <span>This action cannot be undone.</span>
          </div>
        </div>
        <div className="pt-5">
          <p>
            Are you sure you want to remove "
            <span className="font-semibold">{articleTitle}</span>" from your
            library?
          </p>
        </div>
        <div className="mt-auto pt-5 flex justify-end gap-x-5">
          <button className="cursor-pointer bg-gray-200 hover:bg-gray-300 py-2 px-4">
            Cancel
          </button>
          <button className="cursor-pointer bg-red-500 hover:bg-red-600 text-white py-2 px-4">
            Remove Article
          </button>
        </div>
      </div>
    </dialog>
  );
}
