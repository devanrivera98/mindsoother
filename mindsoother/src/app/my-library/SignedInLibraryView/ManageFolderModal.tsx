import {
  AiOutlineClose,
  FaPlus,
  IoFolderOutline,
  IoTrashOutline,
} from "@/app/components/icons";
import addNewFolder from "@/lib/helper/server/addNewFolder";
import { useEffect, useRef, useState } from "react";
import removeUserFolder from "./helpers/removeUserFolder";

interface ManageModalInterface {
  isModalOpen: boolean;
  setIsModalOpen: (boolean: boolean) => void;
}

export default function ManageFolderModal({
  isModalOpen,
  setIsModalOpen,
  userList,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (boolean: boolean) => void;
  userList: any[];
}) {
  const [newFolderValue, setNewFolderValue] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isModalOpen) {
      dialog.showModal();
      //show Modal traps focus on its own
    } else {
      dialog.close();
    }
  }, [isModalOpen]);

  async function deleteUserFolder(id: number) {
    const result = await removeUserFolder(id);
  }


  async function handleAddNewFolder(folderName: string) {
    const results = await addNewFolder(folderName);

    if (results.success) {
      setNewFolderValue("");
    }
  }

  const userListMapped = userList.map((folder, index) => (
    <div
      key={index}
      className="flex items-center justify-between w-full border border-gray-300 p-2 rounded"
    >
      <div className="flex items-center">
        <IoFolderOutline fontSize={20} className="flex-shrink-0" />
        <div className="px-2">
          <span>{folder.name}</span>
        </div>
      </div>
      {folder.name !== "Unassigned" ? (
        <div className="flex items-center">
          <button type="button" onClick={() => deleteUserFolder(folder.id)}>
            <IoTrashOutline
              fontSize={20}
              className="cursor-pointer hover:text-red-500"
            />
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  ));

  return (
    <>
      <dialog
        ref={dialogRef}
        className="fixed w-full h-full m-auto inset-0 bg-black/50 p-4 z-50 max-w-none max-h-none"
      >
        <div className="flex items-center justify-center h-full px-4">
          <div className="flex flex-col gap-y-5 max-w-lg w-full p-4 sm:p-6 bg-white rounded">
            <div className="flex justify-between">
              <h3 className="text-2xl font-semibold">Manage Folder</h3>
              <button
                className="cursor-pointer"
                onClick={() => setIsModalOpen(false)}
              >
                <AiOutlineClose
                  className="text-black hover:text-gray-500"
                  fontSize={20}
                />
              </button>
            </div>
            <div className="flex flex-col gap-y-2">
              <h4 className="text-lg  font-medium">Create New Folder</h4>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Folder Name"
                  className="w-full py-0.5 pl-2 mr-2 border border-gray-300 rounded"
                  value={newFolderValue}
                  onChange={(e) => setNewFolderValue(e.target.value)}
                />
                {/* // if the input has no value blur out button cant just be an empty space  */}
                <button
                  className="bg-brand-purple hover:bg-hover-purple p-1.5 rounded cursor-pointer"
                  onClick={() => handleAddNewFolder(newFolderValue)}
                >
                  <FaPlus fontSize={18} color="white" />
                </button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium">
                Existing Folders ({userList.length})
              </h4>
              <div className="pt-2 flex flex-col gap-y-2">{userListMapped}</div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
