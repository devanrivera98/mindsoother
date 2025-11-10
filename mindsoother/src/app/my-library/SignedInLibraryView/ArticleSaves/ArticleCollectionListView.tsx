import {
  IoCalendarClearOutline,
  IoFolderOutline,
  IoPersonOutline,
  IoTrashOutline,
  TfiNewWindow,
} from "@/app/components/icons";

export default function ArticleCollectionListView() {
  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-x-5">
        <article className="flex flex-col gap-y-3 shadow-lg hover:shadow-xl border border-gray-100 p-3 rounded-lg">
          <div className="flex justify-end gap-x-2">
            <button
              aria-label="Move article to folder"
              className="cursor-pointer hover:text-brand-purple"
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
            <h3 className="text-lg font-medium">
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
          <div className="flex items-center">
            <a
              className="flex items-center text-brand-purple hover:underline underline-offset-2 cursor-pointer"
              target="_blank"
            >
              Read full article
              <TfiNewWindow className="ml-1 -translate-y-px" />
            </a>
          </div>
        </article>
      </div>
    </>
  );
}
