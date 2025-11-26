import {
  AiOutlineClose,
  FaPlus,
  IoFolderOutline,
  IoTrashOutline,
} from "@/app/components/icons";
import { useEffect, useRef } from "react";

interface ManageModalInterface {
  isModalOpen: boolean;
  setIsModalOpen: (boolean: boolean) => void;
}

export default function ManageFolderModal({
  isModalOpen,
  setIsModalOpen,
}: ManageModalInterface) {
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
                />
                {/* // if the input has no value blur out button cant just be an empty space  */}
                <button className="bg-brand-purple hover:bg-hover-purple p-1.5 rounded cursor-pointer">
                  <FaPlus fontSize={18} color="white" />
                </button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium">Existing Folders (0)</h4>
              <div className="pt-2 flex flex-col gap-y-2">
                <div className="flex items-center justify-between w-full border border-gray-300 p-2 rounded">
                  <div className="flex items-center">
                    <IoFolderOutline fontSize={20} />
                    <div className="px-2">
                      <span>Placeholder Folder</span>
                      <span className="text-sm text-gray-500">
                        {" "}
                        (0) Articles{" "}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button>
                      <IoTrashOutline
                        fontSize={20}
                        className="cursor-pointer hover:text-red-500"
                      />
                    </button>
                  </div>
                </div>
                {/* second placeholder */}

                <div className="flex items-center justify-between w-full border border-gray-300 p-2 rounded">
                  <div className="flex items-center">
                    <IoFolderOutline fontSize={20} className="flex-shrink-0" />
                    <div className="px-2">
                      <span>
                        Here is just a very long placeholder to see what happens
                      </span>
                      <span className="text-sm text-gray-500">
                        {" "}
                        (0) Articles{" "}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button>
                      <IoTrashOutline
                        fontSize={20}
                        className="cursor-pointer hover:text-red-500"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
