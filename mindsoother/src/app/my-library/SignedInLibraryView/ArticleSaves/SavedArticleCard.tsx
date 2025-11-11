import {
  IoCalendarClearOutline,
  IoFolderOutline,
  IoPersonOutline,
  IoTrashOutline,
  LuSave,
  TfiNewWindow,
} from "@/app/components/icons";
import { ChangeEvent, useState } from "react";

export default function SavedArticleCard() {
  const [isManaged, setIsManaged] = useState(false);
  const [hasNotes, setHasNotes] = useState(true);
  const [textCounter, setTextCounter] = useState(0);

  function manageTextChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setTextCounter(e.target.value.length);
  }

  return (
    <div>
      <article className="flex flex-col gap-y-3 shadow-lg hover:shadow-xl border border-gray-100 p-3 rounded-lg bg-white">
        <div className="flex justify-end gap-x-2">
          <button
            aria-label="Move article to folder"
            className="cursor-pointer hover:text-brand-purple"
            onClick={() => setIsManaged(!isManaged)}
          >
            <IoFolderOutline fontSize={18} />
          </button>
          <button
            aria-label="Delete article"
            className="cursor-pointer hover:text-red-500"
          >
            <IoTrashOutline fontSize={18} />
          </button>
        </div>
        <div>
          <h3 className="text-lg font-semibold">
            Placeholder Title to Represent a User's Saved Article
          </h3>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <IoPersonOutline fontSize={18} className="flex flex-shrink-0" />
            <span className="pl-2">
              Magdalena Ietswaart, Marie Johnston, H. Chris Dijkerman, et al.
            </span>
          </div>
          <div className="flex items-center pl-5">
            <IoCalendarClearOutline fontSize={18} />
            <span className="pl-2">2011</span>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <IoFolderOutline />
            <span className="pl-2">Unsorted</span>
          </div>
          <span className="pl-5">Added Nov 5, 2025</span>
        </div>
        {isManaged ? (
          <>
            <div className="flex flex-col">
              <label className="pb-1 font-medium">Folder</label>
              <select className="border border-gray-300 rounded-md py-1 pl-2 font-medium">
                <option value="all folders">All Folders</option>
                <option value="unsorted">Unsorted</option>
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
              ></textarea>
              <div className="flex justify-end">
                <span className="text-gray-500">{textCounter} / 400</span>
              </div>
            </div>
            <div>
              <button className="flex items-center bg-brand-purple hover:bg-hover-purple p-2 rounded-lg text-white font-semibold cursor-pointer">
                <span>Save Changes</span>
                <LuSave className="ml-1" fontSize={18} />
              </button>
            </div>
          </>
        ) : (
          <>
            {hasNotes ? (
              <>
                <label className="font-medium">Notes</label>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor
                </span>
              </>
            ) : (
              <></>
            )}
            <div className="flex items-center">
              <a
                className="flex items-center text-brand-purple hover:underline underline-offset-2 cursor-pointer"
                target="_blank"
              >
                Read full article
                <TfiNewWindow className="ml-1 -translate-y-px" />
              </a>
            </div>
          </>
        )}
      </article>
    </div>
  );
}
